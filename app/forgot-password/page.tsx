'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        const supabase = createClient()
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
        })

        if (error) {
            toast.error(error.message)
            setIsLoading(false)
        } else {
            setIsLoading(false)
            setIsSubmitted(true)
        }
    }

    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md">
                    <div className="space-y-6">

                        {!isSubmitted ? (
                            <>
                                {/* Header */}
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-bold text-foreground">Reset your Password?</h1>
                                    <p className="text-muted-foreground">
                                        We just resent a link to your email</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                                            Email address
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder=""
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-11"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                                    </Button>
                                </form>
                            </>
                        ) : (
                            /* Success State */
                            <div className="space-y-4 text-center">
                                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                                    <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                                </div>
                                <h1 className="text-3xl font-bold text-foreground">Check Your Email</h1>
                                <p className="text-muted-foreground">
                                    We&apos;ve sent a password reset link to <span className="font-medium text-foreground">{email}</span>. Please check your inbox and follow the instructions.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Didn&apos;t receive the email? Check your spam folder or{' '}
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-primary hover:text-primary/90 transition font-medium"
                                    >
                                        try again
                                    </button>
                                </p>
                            </div>
                        )}

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-background text-muted-foreground">Remember your password?</span>
                            </div>
                        </div>

                        {/* Sign In Link */}
                        <Link href="/sign-in">
                            <Button variant="outline" size="lg" className="w-full h-11">
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
