'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Eye, EyeOff } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'

export default function SignIn() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const supabase = createClient()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        toast.error(error.message)
        setIsLoading(false)
        return
      }

      toast.success('Signed in successfully!')
      router.push('/dashboard')
    } catch (err) {
      console.error('Sign in unexpected error:', err)
      toast.error('An unexpected error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your SixthSense account</p>
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

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/90 transition">
                Forgot password?
              </Link>

              {/* Sign In Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Don't have an account?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <Link href="/sign-up">
              <Button variant="outline" size="lg" className="w-full h-11">
                Create an account
              </Button>
            </Link>

            {/* Help Text */}
            <div className="text-center mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">Need help signing in?</p>
              <a
                href="https://wa.me/2349037441641"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/90 transition font-medium"
              >
                Contact us via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
