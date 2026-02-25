'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'

const heroImages = [
  {
    src: '/reading.jpg',
    alt: 'Student preparing for exams',
  },
  {
    src: 'https://mindmaze.com.ng/media/event_images/WAEC_Nigerian_Students_.jpeg',
    alt: 'Nigerian students taking WAEC exams',
  },
]

function HeroCarousel({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                ? 'bg-primary w-6'
                : 'bg-white/60 hover:bg-white/80'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
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

  return (
    <section id="home" className="w-full pt-6 pb-6 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              🚀 Updated for 2025/2026 Updated Questions
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance text-foreground leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Score <span className="text-secondary-foreground underline decoration-primary decoration-4 underline-offset-4">300+</span> in JAMB 2026
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground text-balance max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="block mb-2 font-semibold text-foreground">Prepare smarter, not harder.</span>
              Timed CBT simulation • Detailed explanations • Weak topic detection • 2025/2026 authentic past questions.
            </motion.p>

            {/* Trust Elements */}
            <motion.div
              className="flex flex-wrap items-center gap-6 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="student" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <span className="text-primary font-bold">5,000+</span> students prepared
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                95% Success Rate
              </div>
            </motion.div>

            {/* Mobile-only Carousel */}
            <motion.div
              className="flex lg:hidden items-center justify-center py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <HeroCarousel className="w-full h-64 sm:h-80" />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {!isLoading && (
                user ? (
                  <>
                    <Link href="/dashboard" className="w-full sm:w-auto">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full h-14 text-lg px-8">
                          Continue Learning
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/practice" className="w-full sm:w-auto">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full h-14 text-lg px-8 shadow-xl shadow-primary/20">
                          Try Free Demo Test
                          <Zap className="ml-2 h-5 w-5 fill-current" />
                        </Button>
                      </motion.div>
                    </Link>
                    <Link href="/sign-up" className="w-full sm:w-auto">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                        <Button size="lg" variant="outline" className="w-full h-14 text-lg px-8 border-2">
                          Sign Up Free
                        </Button>
                      </motion.div>
                    </Link>
                  </>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Carousel (Desktop) */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroCarousel className="w-full h-[35rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
