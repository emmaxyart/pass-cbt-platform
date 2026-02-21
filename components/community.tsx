'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Chioma Okafor',
    role: 'WAEC 2025 Top Performer',
    quote: 'SixthSense helped me score 340 in JAMB. The real past questions and analytics were game-changers for my preparation.',
    score: 340,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZK7C-Gr5vL91-xKlesqxHASK93S5Bm81Yg&s'
  },
  {
    name: 'Oluwaseun Adeyemi',
    role: 'WAEC Distinction',
    quote: 'The timed practice mode really helped me get used to the exam pressure. It was the perfect way to build my speed.',
    score: 9,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4xW3PtFdGE5HtcD8gq0hRQpvqKuIV-HwwQ&s'
  },
  {
    name: 'Zainab Ibrahim',
    role: 'JAMB Top Performer',
    quote: 'The detailed analytics showed exactly where I was weak. The improvement suggestions were spot-on and super helpful.',
    score: 365,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mPajpofa-yK9UvN-ATVUrnxWdS0PgxvcRA&s'
  },
  {
    name: 'Tunde Ayomide',
    role: 'WAEC Excellent',
    quote: 'Best exam prep platform I\'ve used. The interface is clean, questions are authentic, and the tracking is amazing.',
    score: 8.5,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFia3XImCSOZWO8_tohjHmtQHo_lbMJ6Y-A&s'
  }
]

export function Community() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="w-full pt-4 md:pt-8 lg:pt-12 pb-12 md:pb-24 lg:pb-32 bg-transparent">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students who achieved their exam goals using SixthSense
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto h-[320px] sm:h-[280px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 p-1.5 rounded-full bg-white shadow-lg text-slate-900 hover:bg-slate-50 transition hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-10 p-1.5 rounded-full bg-white shadow-lg text-slate-900 hover:bg-slate-50 transition hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="w-full overflow-hidden flex items-center justify-center px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full max-w-xl border-none"
              >
                <Card className="border-none bg-white shadow-lg text-black">
                  <CardContent className="p-6 sm:p-8">
                    {/* Quote Icon */}
                    <div className="text-primary/20 mb-2 italic text-4xl font-serif">"</div>

                    {/* Quote */}
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-center mb-6 font-medium">
                      {testimonials[current].quote}
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-sm">
                        <Image
                          src={testimonials[current].avatar}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-slate-900 text-base">{testimonials[current].name}</p>
                        <p className="text-xs text-slate-500 font-medium">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`transition-all duration-300 rounded-full ${index === current
                  ? 'w-6 h-1.5 bg-primary'
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
