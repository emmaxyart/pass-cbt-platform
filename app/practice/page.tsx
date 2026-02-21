'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Lock, CheckCircle, ArrowRight } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { LoadingSpinner } from '@/components/loading-spinner'

const subjects = [
    { name: 'English', icon: '📝', color: 'bg-blue-100 text-blue-600', isPremium: false },
    { name: 'Mathematics', icon: '🔢', color: 'bg-green-100 text-green-600', isPremium: false },
    { name: 'Physics', icon: '⚛️', color: 'bg-purple-100 text-purple-600', isPremium: true },
    { name: 'Chemistry', icon: '🧪', color: 'bg-orange-100 text-orange-600', isPremium: true },
    { name: 'Biology', icon: '🧬', color: 'bg-red-100 text-red-600', isPremium: true },
    { name: 'Economics', icon: '📊', color: 'bg-indigo-100 text-indigo-600', isPremium: true },
    { name: 'Government', icon: '🏛️', color: 'bg-yellow-100 text-yellow-600', isPremium: true },
    { name: 'CRK', icon: '📖', color: 'bg-pink-100 text-pink-600', isPremium: true },
]

export default function PracticePage() {
    const [isPremium, setIsPremium] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const supabase = createClient()
        const checkPremium = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                // Check profiles table primarily
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('is_premium')
                    .eq('id', user.id)
                    .single()

                setIsPremium(profile?.is_premium || user.user_metadata?.is_premium || false)
            }
            setIsLoading(false)
        }
        checkPremium()
    }, [])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <main className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose a Subject</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Select a subject to start practicing past JAMB questions. Free accounts have access to English and Mathematics.
                    </p>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {subjects.map((subject, index) => {
                        const locked = subject.isPremium && !isPremium
                        return (
                            <motion.div
                                key={subject.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Card className={`group hover:shadow-xl transition-all duration-300 relative ${locked ? 'opacity-75' : 'cursor-pointer'}`}>
                                    <div className={`absolute top-0 right-0 w-20 h-20 ${subject.color.split(' ')[0]} rounded-bl-[100px] border-l border-b border-slate-100 opacity-20 group-hover:scale-110 transition-transform duration-500`} />
                                    <CardContent className="p-6 relative z-10">
                                        <div className={`w-12 h-12 rounded-xl ${subject.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                            {subject.icon}
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                                                {subject.name}
                                            </h3>
                                            {locked && <Lock className="w-4 h-4 text-slate-400" />}
                                            {!locked && subject.isPremium && <CheckCircle className="w-4 h-4 text-green-500" />}
                                        </div>
                                        <p className="text-sm text-slate-500 mb-6">
                                            Practice past JAMB questions for {subject.name}.
                                        </p>

                                        {locked ? (
                                            <Link href="/dashboard?upgrade=true">
                                                <Button variant="outline" className="w-full group/btn">
                                                    Unlock Subject
                                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Link href={`/practice/${subject.name.toLowerCase()}`}>
                                                <Button className="w-full bg-primary hover:bg-primary/90">
                                                    Start Practice
                                                </Button>
                                            </Link>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </main>
    )
}
