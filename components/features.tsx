'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, TrendingUp, Trophy, Zap } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Real Past Questions',
    description: 'Access authentic past exam questions from JAMB and WAEC to practice with actual exam-style content.'
  },
  {
    icon: TrendingUp,
    title: 'Detailed Analytics',
    description: 'Track your performance with comprehensive analytics, identify weak areas, and monitor your progress over time.'
  },
  {
    icon: Zap,
    title: 'Smart Suggestions',
    description: 'Get personalized improvement recommendations based on your performance and learning patterns.'
  }
]

export function Features() {
  return (
    <section id="practice" className="w-full pt-4 md:pt-8 lg:pt-12 pb-8 md:pb-12 lg:pb-16 bg-background/0">
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
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive exam preparation tools are designed to help Nigerian students succeed in JAMB and WAEC
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="bg-white transition-all duration-300 h-full hover:shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[120px] border-l border-b border-primary/10 group-hover:scale-110 transition-transform duration-500" />
                  <CardHeader className="relative z-10 p-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                      <Icon className="w-9 h-9 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-black text-slate-900 leading-tight">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 px-10 pb-10">
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
        </motion.div>
      </div>
    </section>
  )
}
