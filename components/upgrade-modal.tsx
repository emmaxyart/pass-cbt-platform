'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
    Zap,
    CheckCircle2,
    Trophy,
    Star,
    Crown,
    ArrowRight,
    Sparkles
} from 'lucide-react'

import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'

interface UpgradeModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

interface Feature {
    title: string
    description: string
    icon: React.ReactElement<{ className?: string }>
}

const features: Feature[] = [
    {
        title: "20,000+ Real Past Questions",
        description: "Full access to JAMB, WAEC & NECO questions from 2000 to date.",
        icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
        title: "Subject-specific Practice",
        description: "Study individual subjects depth-wise with detailed explanations.",
        icon: <Star className="w-5 h-5 text-blue-500" />
    },
    {
        title: "Advanced Performance Analytics",
        description: "Track your progress, identify weak areas, and improve your score.",
        icon: <Trophy className="w-5 h-5 text-emerald-500" />
    },
    {
        title: "Unlimited Mock Exams",
        description: "Simulate real exam conditions with timed practice sessions.",
        icon: <Sparkles className="w-5 h-5 text-purple-500" />
    }
]

export function UpgradeModal({ open, onOpenChange }: UpgradeModalProps) {
    const router = useRouter()
    const supabase = createClient()
    const [user, setUser] = React.useState<{ id: string; email: string } | null>(null)

    React.useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setUser({ id: user.id, email: user.email || '' })
            }
        }
        fetchUser()
    }, [])

    const [isInitializing, setIsInitializing] = React.useState(false)

    const handleUpgradeClick = async () => {
        if (!user) {
            toast.error('Please sign in to upgrade.')
            router.push('/sign-in')
            return
        }

        setIsInitializing(true)
        try {
            const response = await fetch('/api/paystack/initialize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 200000,
                    email: user.email,
                    origin: window.location.pathname
                }),
            })

            const data = await response.json()

            if (data.authorization_url) {
                onOpenChange(false)
                window.location.href = data.authorization_url
            } else {
                toast.error(data.error || 'Failed to initialize payment.')
            }
        } catch (error) {
            console.error('Payment Error:', error)
            toast.error('An error occurred. Please try again.')
        } finally {
            setIsInitializing(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] max-w-[500px] p-0 overflow-hidden border-none bg-white rounded-3xl shadow-2xl">
                {/* Visual Header */}
                <div className="relative h-32 sm:h-40 bg-gradient-to-br from-primary via-primary/90 to-indigo-600 flex items-center justify-center p-4 sm:p-6">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]"
                        />
                    </div>

                    <div className="relative z-10 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3"
                        >
                            <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                            Premium Access
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">Level Up Your Study</h2>
                    </div>
                </div>

                <div className="p-6 sm:p-8">
                    <DialogHeader className="p-0 text-left mb-6 sm:mb-8">
                        <DialogTitle className="sr-only">Upgrade to Premium</DialogTitle>
                        <DialogDescription className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Join thousands of successful students and unlock full access to Nigeria's largest database of past examination questions.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Features List */}
                    <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + idx * 0.1 }}
                                className="flex items-start gap-3 sm:gap-4 group"
                            >
                                <div className="mt-0.5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(feature.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-current" })}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[13px] sm:text-sm font-bold text-slate-900 mb-0.5 leading-snug">{feature.title}</h4>
                                    <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2.5 sm:gap-3">
                        <Button
                            onClick={handleUpgradeClick}
                            disabled={isInitializing}
                            className="w-full h-12 sm:h-14 bg-primary hover:bg-primary/90 text-white rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all group"
                        >
                            {isInitializing ? 'Processing...' : 'Unlock Everything (₦2,000)'}
                            {!isInitializing && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => onOpenChange(false)}
                            disabled={isInitializing}
                            className="w-full h-10 hover:bg-slate-50 text-slate-500 font-medium rounded-xl disabled:opacity-50"
                        >
                            Maybe later, I'll keep exploring
                        </Button>
                    </div>

                    <p className="mt-5 sm:mt-6 text-[9px] sm:text-[10px] text-center text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500" />
                        Trusted by 50,000+ Students Nationwide
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
