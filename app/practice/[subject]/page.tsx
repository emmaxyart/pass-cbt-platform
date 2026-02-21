'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QuestionEngine } from '@/components/question-engine'
import { mockQuestions } from '@/lib/data/questions'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { LoadingSpinner } from '@/components/loading-spinner'

export default function SubjectPracticePage() {
    const params = useParams()
    const router = useRouter()
    const subjectName = params.subject as string
    const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null)

    // Filter questions for this subject
    const subjectQuestions = mockQuestions.filter(
        q => q.subject.toLowerCase() === subjectName.toLowerCase()
    )

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

            if (!isPremium && !freeSubjects.includes(subjectName.toLowerCase())) {
                toast.error('This subject is for Premium members only.')
                router.push('/practice')
                setIsAuthorized(false)
            } else {
                setIsAuthorized(true)
                // Increment total_started
                await supabase
                    .from('profiles')
                    .update({
                        total_started: (profile?.total_started || 0) + 1,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', user.id)
            }
        }
        checkAccess()
    }, [subjectName, router])

    if (isAuthorized === null) {
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
            <div className="flex-1 pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
                <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <Button
                        variant="ghost"
                        onClick={() => router.push('/practice')}
                        className="gap-2 -ml-2 text-slate-600 hover:text-primary transition-colors order-1"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Subjects
                    </Button>
                    <div className="text-left sm:text-right w-full sm:w-auto order-2">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 capitalize leading-tight mb-1">{subjectName} Practice</h1>
                        <p className="text-sm text-slate-500 font-medium">JAMB Past Questions • {subjectQuestions.length} Questions</p>
                    </div>
                </div>

                {subjectQuestions.length > 0 ? (
                    <QuestionEngine
                        questions={subjectQuestions}
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
                                            total_score: currentScoreSum + (score / (subjectQuestions.length || 1) * 100),
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
                            <h2 className="text-xl font-bold text-slate-900 mb-2">No questions found</h2>
                            <p className="text-slate-600 mb-6">We are currently adding more questions for this subject.</p>
                            <Button onClick={() => router.push('/practice')}>Try another subject</Button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    )
}
