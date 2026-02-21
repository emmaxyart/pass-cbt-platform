'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, LayoutDashboard } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'

export function CtaSection() {
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
        <section className="w-full pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-8 lg:pb-12 bg-background/0">
            <div className="px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative w-full rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* CTA Image */}
                    <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem]">
                        <Image
                            src="https://miva.edu.ng/wp-content/uploads/2025/06/How-to-Check-Your-WAEC-Result.png"
                            alt="Students preparing for exams together"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

                        {/* CTA Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Ready to Ace Your Exams?
                            </motion.h2>
                            <motion.p
                                className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Join thousands of Nigerian students who are already preparing smarter with SixthSense.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {!isLoading && (
                                    <Link href={user ? "/dashboard" : "/sign-up"}>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 gap-2">
                                                {user ? (
                                                    <>
                                                        <LayoutDashboard className="w-5 h-5" />
                                                        Start Practicing
                                                    </>
                                                ) : (
                                                    <>
                                                        Get Started Now
                                                        <ArrowRight className="ml-2 h-5 w-5" />
                                                    </>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </Link>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
