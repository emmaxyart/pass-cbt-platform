'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, LogOut, Bell } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setIsLoading(false)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/sign-in'
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/practice', label: 'Practice' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/profile', label: 'Profile' },
    { href: '/about', label: 'About Us' },
  ]

  const filteredLinks = navLinks.filter(link => pathname !== link.href)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-80 transition">
          SixthSense
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {!isLoading && (
            user ? (
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  onClick={handleLogout}
                  className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold gap-2 shadow-sm transition-all active:scale-95"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Sign Up
                  </Button>
                </Link>
              </>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          {user && (
            <div className="relative cursor-pointer group mr-1">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-slate-100 transition shadow-sm">
                <Bell className="w-5 h-5 text-slate-600" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white">14</span>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {filteredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-3 flex flex-col gap-2">
              {!isLoading && (
                user ? (
                  <>
                    <Button
                      size="sm"
                      onClick={handleLogout}
                      className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/sign-in" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/sign-up" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
