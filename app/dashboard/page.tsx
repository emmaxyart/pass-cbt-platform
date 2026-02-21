'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Bot,
    Layout,
    GraduationCap,
    Trophy,
    TrendingUp,
    Medal,
    User,
    Bell,
    ChevronRight,
    Award,
    Crown,
    Star
} from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { Header } from '@/components/header'
import dynamic from 'next/dynamic'
import { LoadingSpinner } from '@/components/loading-spinner'

const PremiumButton = dynamic(() => import('@/components/premium-button').then(mod => mod.PremiumButton), {
    ssr: false,
    loading: () => <div className="h-10 w-32 bg-slate-800 animate-pulse rounded-md" />
})

const dashboardCards = [
    {
        title: 'Practice Jamb Exam',
        description: 'Practice with past JAMB questions from specific subjects and years.',
        icon: Layout,
        buttonText: 'Start Practice',
        buttonColor: 'bg-[#3498db] hover:bg-[#2980b9]',
        iconBg: 'bg-[#3498db]/10',
        iconColor: 'text-[#3498db]',
        borderColor: 'border-slate-200',
        buttonIcon: ChevronRight
    },
    {
        title: 'WAEC Exams',
        description: 'Practice with past WAEC questions to prepare for your exams. Get ready for success!',
        icon: GraduationCap,
        buttonText: 'Start WAEC Practice',
        buttonColor: 'bg-[#8e44ad] hover:bg-[#7d3c98]',
        iconBg: 'bg-[#8e44ad]/10',
        iconColor: 'text-[#8e44ad]',
        borderColor: 'border-slate-200',
        buttonIcon: ChevronRight
    },
    {
        title: 'My Profile',
        description: 'View and update your personal information and account settings.',
        icon: User,
        buttonText: 'View Profile',
        buttonColor: 'bg-[#16a085] hover:bg-[#138d75]',
        iconBg: 'bg-[#16a085]/10',
        iconColor: 'text-[#16a085]',
        borderColor: 'border-t-4 border-t-[#16a085]',
        buttonIcon: ChevronRight
    }
]

export default function Dashboard() {
    const [user, setUser] = React.useState<any>(null)
    const [profile, setProfile] = React.useState<any>(null)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const supabase = createClient()
        const fetchData = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                setIsLoading(false)
                return
            }
            setUser(user)

            // Fetch from profiles table
            const { data: profileData } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single()

            if (profileData) {
                setProfile(profileData)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <LoadingSpinner />
            </div>
        )
    }

    const userName = profile?.first_name || user?.user_metadata?.first_name || 'Student'
    const isPremium = profile?.is_premium || user?.user_metadata?.is_premium || false
    const email = user?.email || ''
    const userId = user?.id || ''

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* Dashboard Sub-Header (Stats Overview) */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dashboard Overview</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
                {/* Premium Banner */}
                {!isPremium && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center border border-amber-400/30">
                                <Crown className="w-7 h-7 text-amber-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">Unlock Full Access</h2>
                                <p className="text-slate-300 text-sm">Get all WAEC & JAMB questions, syllabus, and full mock exams.</p>
                            </div>
                        </div>
                        <PremiumButton email={email} userId={userId} />
                    </motion.div>
                )}

                {/* Welcome Section */}
                <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-slate-900">
                                Welcome, {userName}!
                            </h1>
                            {isPremium && (
                                <div className="flex items-center gap-1 px-2.5 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold border border-amber-200">
                                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                    PREMIUM
                                </div>
                            )}
                        </div>
                        <p className="text-slate-700 text-lg">
                            Practice for your JAMB and WAEC exams and track your progress.
                        </p>
                    </div>
                </div>

                {/* Dashboard Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dashboardCards.map((card, index) => {
                        const Icon = card.icon
                        const BtnIcon = card.buttonIcon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className={`h-full bg-white hover:shadow-xl transition-all duration-300 relative group`}>
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${card.iconBg} rounded-bl-[100px] border-l border-b ${card.borderColor} opacity-30 group-hover:scale-110 transition-transform duration-500`} />
                                    <CardContent className="p-8 flex flex-col h-full relative z-10">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6`}>
                                            <Icon className={`w-7 h-7 ${card.iconColor}`} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                                {card.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed mb-8">
                                                {card.description}
                                            </p>
                                        </div>

                                        {/* Button */}
                                        <Link href={
                                            card.title === 'Practice Jamb Exam' ? '/practice' :
                                                card.title === 'My Profile' ? '/profile' :
                                                    '#'
                                        }>
                                            <Button
                                                className={`w-full ${card.buttonColor} text-white font-bold h-12 gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm`}
                                            >
                                                {card.buttonText}
                                                {BtnIcon === Bot ? (
                                                    <Bot className="w-4 h-4 ml-1" />
                                                ) : (
                                                    <ChevronRight className="w-4 h-4" />
                                                )}
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
