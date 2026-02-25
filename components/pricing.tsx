'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import React from 'react'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
    {
        id: 'free',
        name: 'Free Starter',
        price: '₦0',
        amount: 0,
        description: 'Perfect for quick practice sessions',
        features: [
            '20 Free daily questions',
            'JAMB & WAEC Past Questions',
            'Basic Performance Report',
            'Weekly Study Tips',
        ],
        cta: 'Get Started',
        variant: 'outline' as const,
    },
    {
        id: 'pro',
        name: 'Premium Pro',
        price: '₦2,500',
        amount: 250000,
        description: 'Complete exam mastery toolkit',
        popular: true,
        features: [
            'Unlimited Past Questions',
            '2026 JAMB & WAEC Updated',
            'Timed CBT Mock Tests',
            'Weak Topic Detection',
            'Smart AI Recommendations',
            'Detailed Explanations',
            'Priority Support',
        ],
        cta: 'Unlock Everything',
        variant: 'default' as const,
    },
]

export function Pricing() {
    const router = useRouter()
    const supabase = createClient()
    const [user, setUser] = React.useState<any>(null)
    const [isPremium, setIsPremium] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)
    const [isInitializing, setIsInitializing] = React.useState<string | null>(null)

    React.useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setUser(user)
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('is_premium')
                    .eq('id', user.id)
                    .single()
                setIsPremium(profile?.is_premium || false)
            }
            setIsLoading(false)
        }
        checkUser()
    }, [])

    const handleAction = async (plan: typeof plans[number]) => {
        if (!user) {
            router.push('/sign-up')
            return
        }

        if (plan.id === 'free') {
            return // Non-clickable if authenticated
        }

        if (isPremium) {
            toast.info('You are already a Premium user!')
            return
        }

        // Initialize Paystack
        setIsInitializing(plan.id)
        try {
            const response = await fetch('/api/paystack/initialize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: plan.amount,
                    email: user.email,
                    origin: window.location.pathname
                }),
            })

            const data = await response.json()

            if (data.authorization_url) {
                window.location.href = data.authorization_url
            } else {
                toast.error(data.error || 'Failed to initialize payment.')
            }
        } catch (error) {
            console.error('Payment Error:', error)
            toast.error('An error occurred. Please try again.')
        } finally {
            setIsInitializing(null)
        }
    }

    return (
        <section id="pricing" className="w-full py-16 md:py-24 bg-slate-50">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Simple, Transparent Pricing
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Choose the plan that fits your study needs. Start for free and upgrade when you&apos;re ready to ace your exams.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => {
                        const isCurrentPlan = (user && plan.id === 'free' && !isPremium) || (plan.id === 'pro' && isPremium)
                        const buttonLabel = isInitializing === plan.id
                            ? 'Processing...'
                            : (isCurrentPlan ? 'Current Plan' : plan.cta)
                        const isDisabled = isInitializing !== null || (user && isCurrentPlan) || (isPremium && plan.id === 'free')

                        return (
                            <motion.div
                                key={index}
                                className={`relative p-8 rounded-3xl border ${plan.popular
                                    ? 'bg-white shadow-2xl border-primary ring-4 ring-primary/10'
                                    : 'bg-white border-slate-200'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-1">
                                        <Zap className="w-3 h-3 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                        {plan.price !== '₦0' && <span className="text-slate-500 font-medium">/term</span>}
                                    </div>
                                    <p className="mt-2 text-slate-600 font-medium">{plan.description}</p>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-sm font-semibold">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <Button
                                        variant={plan.variant}
                                        size="lg"
                                        disabled={isDisabled}
                                        onClick={() => handleAction(plan)}
                                        className={`w-full py-6 text-lg font-bold rounded-xl transition-all duration-300 ${plan.popular && !isDisabled ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20' : ''
                                            } ${isCurrentPlan ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed' : ''}`}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 text-sm font-medium italic">
                        * All payments are secure and processed via Paystack. No hidden charges.
                    </p>
                </div>
            </div>
        </section>
    )
}
