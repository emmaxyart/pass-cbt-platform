'use client'

import React from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QuestionEngine } from '@/components/question-engine'
import { mockQuestions } from '@/lib/data/questions'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { LoadingSpinner } from '@/components/loading-spinner'

export default function SubjectPracticePage() {
    const params = useParams()
    const router = useRouter()
    const searchParams = useSearchParams()
    const subjectName = params.subject as string
    const selectedYear = searchParams.get('year')
    const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null)

    const [questions, setQuestions] = React.useState<any[]>([])
    const [isLoadingQuestions, setIsLoadingQuestions] = React.useState(true)

    React.useEffect(() => {
        const supabase = createClient()
        const checkAccess = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                router.push('/sign-in')
                return
            }

            // Check profiles table primarily
            const { data: profile } = await supabase
                .from('profiles')
                .select('is_premium, total_started')
                .eq('id', user.id)
                .single()

            const isPremium = profile?.is_premium || user.user_metadata?.is_premium || false
            const freeSubjects = ['english', 'mathematics']
            const isFreeSubject = freeSubjects.includes(subjectName.toLowerCase())

            if (!isPremium && !isFreeSubject) {
                toast.error('This subject is for Premium members only.')
                router.push('/practice')
                setIsAuthorized(false)
                return
            }

            setIsAuthorized(true)

            // IF NON-PREMIUM: Use only mocked questions (limited to 20)
            if (!isPremium && isFreeSubject) {
                setIsLoadingQuestions(true)
                try {
                    const fallback = mockQuestions
                        .filter(q => q.subject.toLowerCase() === subjectName.toLowerCase())
                        .slice(0, 20)

                    setQuestions(fallback)
                } catch (err) {
                    console.error('Error loading mock questions:', err)
                } finally {
                    setIsLoadingQuestions(false)
                }
            } else {
                // IF PREMIUM: Fetch questions from ALOC API via our secure proxy
                try {
                    setIsLoadingQuestions(true)
                    const url = new URL('/api/questions', window.location.origin)
                    url.searchParams.append('subject', subjectName)
                    url.searchParams.append('count', '40') // max per ALOC call
                    if (selectedYear) {
                        url.searchParams.append('year', selectedYear)
                    }

                    const response = await fetch(url.toString())

                    // Handle auth errors from the server-side guard
                    if (response.status === 401) {
                        router.push('/sign-in')
                        return
                    }
                    if (response.status === 403) {
                        toast.error('Premium subscription required to access these questions.')
                        router.push('/dashboard?upgrade=true')
                        return
                    }
                    if (!response.ok) {
                        throw new Error(`API error: ${response.status}`)
                    }

                    const data = await response.json()

                    if (!data || data.length === 0) {
                        // No questions returned — fall back to local mock data (no auth issue)
                        const fallback = mockQuestions.filter(q => {
                            const matchesSubject = q.subject.toLowerCase() === subjectName.toLowerCase()
                            const matchesYear = selectedYear ? q.year === parseInt(selectedYear) : true
                            return matchesSubject && matchesYear
                        })
                        setQuestions(fallback)
                    } else {
                        setQuestions(data)
                    }
                } catch (error) {
                    console.error('Error fetching questions:', error)
                    // Network / unknown error — fall back to mock data
                    const fallback = mockQuestions.filter(q => {
                        const matchesSubject = q.subject.toLowerCase() === subjectName.toLowerCase()
                        const matchesYear = selectedYear ? q.year === parseInt(selectedYear) : true
                        return matchesSubject && matchesYear
                    })
                    setQuestions(fallback)
                } finally {
                    setIsLoadingQuestions(false)
                }
            }

            // Increment total_started
            await supabase
                .from('profiles')
                .update({
                    total_started: (profile?.total_started || 0) + 1,
                    updated_at: new Date().toISOString()
                })
                .eq('id', user.id)
        }
        checkAccess()
    }, [subjectName, router, selectedYear])

    if (isAuthorized === null || isLoadingQuestions) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <LoadingSpinner />
            </div>
        )
    }

    if (isAuthorized === false) return null

    return (
        <main className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <div className="flex-1 pt-3 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
                <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <Button
                        variant="ghost"
                        onClick={() => router.push('/practice')}
                        className="gap-2 -ml-2 text-slate-600 hover:text-primary transition-colors order-1"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Subjects
                    </Button>
                    <div className="text-left sm:text-right w-full sm:w-auto order-2">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 capitalize leading-tight mb-1">
                            {subjectName} Practice
                        </h1>
                        <div className="flex items-center gap-2 sm:justify-end">
                            {selectedYear && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                    <CalendarDays className="w-3 h-3" />
                                    {selectedYear}
                                </span>
                            )}
                            <p className="text-sm text-slate-500 font-medium">
                                JAMB Past Questions • <span className="font-bold text-primary">{questions.length}</span> Questions
                            </p>
                        </div>
                    </div>
                </div>

                {questions.length > 0 ? (
                    <QuestionEngine
                        questions={questions}
                        subject={subjectName}
                        onComplete={async (score) => {
                            const supabase = createClient()
                            const { data: { user } } = await supabase.auth.getUser()
                            if (user) {
                                try {
                                    // Fetch current profile to calculate new average
                                    const { data: profile, error: fetchError } = await supabase
                                        .from('profiles')
                                        .select('total_completed, total_score, points')
                                        .eq('id', user.id)
                                        .maybeSingle()

                                    if (fetchError) throw fetchError

                                    const currentTotal = profile?.total_completed || 0
                                    const currentScoreSum = profile?.total_score || 0
                                    const currentPoints = profile?.points || 0

                                    // Scoring logic: 10 points per correct answer + 50 points bonus for completion
                                    const earnedPoints = (score * 10) + 50

                                    const { error: updateError } = await supabase
                                        .from('profiles')
                                        .update({
                                            total_completed: currentTotal + 1,
                                            total_score: currentScoreSum + (score / (questions.length || 1) * 100),
                                            points: currentPoints + earnedPoints,
                                            updated_at: new Date().toISOString()
                                        })
                                        .eq('id', user.id)

                                    if (updateError) throw updateError

                                    toast.success(`Progress saved! You earned ${earnedPoints} points.`)
                                } catch (error: any) {
                                    console.error('Error updating stats:', {
                                        message: error.message,
                                        details: error.details,
                                        hint: error.hint,
                                        error
                                    })
                                    toast.error('Could not save your progress. Please check your connection or database schema.')
                                }
                            }
                        }}
                    />
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-bl-[100px] border-l border-b border-slate-200/50 group-hover:scale-110 transition-transform duration-500" />
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold text-slate-900 mb-2">
                                {selectedYear
                                    ? `No questions found for ${selectedYear}`
                                    : 'No questions found'
                                }
                            </h2>
                            <p className="text-slate-600 mb-6">
                                {selectedYear
                                    ? `We don't have ${subjectName} questions for ${selectedYear} yet. Try another year.`
                                    : 'We are currently adding more questions for this subject.'
                                }
                            </p>
                            <Button onClick={() => router.push('/practice')}>Try another subject</Button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    )
}

