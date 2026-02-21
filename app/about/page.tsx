'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Users, Lightbulb, Rocket, ShieldCheck, Zap } from 'lucide-react'
import Image from 'next/image'

const values = [
    {
        icon: Target,
        title: 'Mission-Driven',
        description: 'We exist to help Nigerian students overcome the hurdles of JAMB and WAEC through technology.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Using data analytics and smart suggestions to personalize the learning experience for every student.'
    },
    {
        icon: Users,
        title: 'Community',
        description: 'Building a space where students can compete, collaborate, and grow together.'
    },
    {
        icon: ShieldCheck,
        title: 'Authenticity',
        description: 'Our questions are verified and modeled directly after the real JAMB and WAEC standards.'
    }
]

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <main className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-col min-h-screen">
                <Header />

                {/* Hero Section */}
                <section className="pt-20 pb-12 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Building the Future of <span className="text-primary">Nigerian Education</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            SixthSense is on a mission to democratize academic excellence. We provide every Nigerian student with the tools they need to pass JAMB and WAEC with flying colors.
                        </motion.p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://mindmaze.com.ng/media/event_images/WAEC_Nigerian_Students_.jpeg"
                                alt="Nigerian Students Preparing"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 font-serif">Our Story</h2>
                            <p className="text-slate-700 leading-relaxed">
                                SixthSense started with a simple observation: millions of brilliant Nigerian students struggle with exams not because they aren't capable, but because they lack access to high-quality practice materials and guidance.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                We set out to create more than just a testing platform. We wanted to build a mentor in your pocket—a system that understands where you struggle, celebrates where you excel, and guides you step-by-step toward your university dreams.
                            </p>
                            <div className="flex items-center gap-4 pt-4 text-primary">
                                <Zap className="w-6 h-6" />
                                <span className="font-semibold text-lg">Over 50,000 Questions mastered by our students</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
                            <p className="text-muted-foreground">The principles that guide everything we build at SixthSense.</p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {values.map((val, idx) => {
                                const Icon = val.icon
                                return (
                                    <motion.div key={idx} variants={itemVariants}>
                                        <Card className="border-none bg-white shadow-lg h-full hover:shadow-xl transition-shadow">
                                            <CardContent className="p-6 text-center">
                                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Icon className="w-7 h-7 text-primary" />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {val.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />

                    <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Vision</h2>
                            <p className="text-xl text-white/90 leading-relaxed font-light italic">
                                "To become the primary catalyst for academic success in Africa, where every student has the confidence and tools to unlock their potential."
                            </p>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    )
}
