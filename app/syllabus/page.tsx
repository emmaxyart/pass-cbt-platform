'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { syllabusSubjects } from '@/lib/data/syllabus'

export default function SyllabusPage() {
    return (
        <main className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <div className="flex-1 pt-3 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-left md:text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        <GraduationCap className="w-4 h-4" />
                        2026 UTME Syllabus
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
                        Current JAMB Syllabus
                    </h1>
                    <div className="max-w-3xl md:mx-auto">
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                            The JAMB Syllabus is an official document or material that contains a detailed information and guide on the areas or topics you are expected to cover on a particular subject for your UTME. This syllabus can very well be applied for use as the 2026 UTME syllabus. The questions you are to answer on the examination day will be drawn from these areas or topics.
                        </p>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                            SixthSense has now provided you with the current JAMB Syllabus for your respective subjects. Please click on the subjects below to view their respective syllabus and topics to study:
                        </p>
                    </div>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {syllabusSubjects.map((subject, index) => (
                        <motion.div
                            key={subject.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                        >
                            <Link href={`/syllabus/${subject.slug}`}>
                                <Card className="group hover:shadow-xl transition-all duration-300 relative cursor-pointer">
                                    <div className={`absolute top-0 right-0 w-20 h-20 ${subject.color.split(' ')[0]} rounded-bl-[100px] border-l border-b border-slate-100 opacity-20 group-hover:scale-110 transition-transform duration-500`} />
                                    <CardContent className="p-6 relative z-10">
                                        <div className={`w-12 h-12 rounded-xl ${subject.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                            {subject.icon}
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors leading-tight">
                                                {subject.name}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-6">
                                            View the JAMB syllabus for {subject.name}.
                                        </p>
                                        <Button className="w-full bg-primary hover:bg-primary/90 group/btn">
                                            View Syllabus
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}
