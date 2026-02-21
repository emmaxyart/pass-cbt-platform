'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Eye, EyeOff } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo',
  'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
  'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
  'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
]

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    schoolLocation: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const supabase = createClient()

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            username: formData.username,
            phone_number: formData.phoneNumber,
            school_name: formData.schoolName,
            school_location: formData.schoolLocation,
            is_premium: false, // Default to non-premium
          },
        },
      })

      if (error) {
        toast.error(error.message)
        setIsLoading(false)
        return
      }

      toast.success('Registration successful! Please check your email to confirm.')
      // Optional: Redirect to a success page or sign-in
      setTimeout(() => {
        window.location.href = '/sign-in'
      }, 2000)
    } catch (err) {
      toast.error('An unexpected error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Create your account</h1>
            <p className="text-lg text-muted-foreground">
              to start practicing for your JAMB exam
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-xl border border-border">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder=""
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder=""
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>
            </div>

            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-foreground">
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder=""
                value={formData.username}
                onChange={handleChange}
                required
                className="h-11"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                required
                className="h-11"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-medium text-foreground">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder=""
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="h-11"
              />
            </div>

            {/* School Name */}
            <div className="space-y-2">
              <label htmlFor="schoolName" className="text-sm font-medium text-foreground">
                Secondary School Name
              </label>
              <Input
                id="schoolName"
                name="schoolName"
                type="text"
                placeholder="What secondary school did you attend (past or present)?"
                value={formData.schoolName}
                onChange={handleChange}
                required
                className="h-11"
              />
            </div>

            {/* School Location */}
            <div className="space-y-2">
              <label htmlFor="schoolLocation" className="text-sm font-medium text-foreground">
                School Location (State)
              </label>
              <select
                id="schoolLocation"
                name="schoolLocation"
                value={formData.schoolLocation}
                onChange={handleChange}
                required
                className="w-full h-11 px-3 rounded-md border border-input bg-background text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a state</option>
                {NIGERIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 rounded border-input w-4 h-4"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>

            {/* Sign In Link */}
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/sign-in" className="text-primary hover:text-primary/90 transition font-medium">
                  Sign in
                </Link>
              </p>
              <p className="text-sm mt-4 text-muted-foreground">
                Need help registering?{' '}
                <a
                  href="https://wa.me/2349037441641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/90 transition font-medium"
                >
                  Contact us via WhatsApp
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
