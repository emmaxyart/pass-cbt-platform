'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, BookOpen, CheckCircle, Target } from 'lucide-react'
import { getSubjectBySlug } from '@/lib/data/syllabus'
import { syllabusTopics } from '@/lib/data/syllabus-topics'

export default function SubjectSyllabusPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.subject as string
    const subject = getSubjectBySlug(slug)

    if (!subject) {
        return (
            <main className="flex flex-col min-h-screen bg-slate-50">
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center py-20 bg-white rounded-3xl shadow-xl px-8 max-w-md mx-4">
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Subject not found</h2>
                        <p className="text-slate-600 mb-6">The syllabus for this subject is not available.</p>
                        <Button onClick={() => router.push('/syllabus')}>Back to Syllabus</Button>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    const topics = syllabusTopics[slug] || []
    const textColor = subject.color.split(' ')[1]

    // Group topics by section (if sections exist)
    let currentSection = ''
    let topicNumber = 0

    return (
        <main className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <div className="flex-1 pt-3 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
                {/* Top Navigation */}
                <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <Button
                        variant="ghost"
                        onClick={() => router.push('/syllabus')}
                        className="gap-2 -ml-2 text-slate-600 hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Syllabus
                    </Button>
                </div>

                {/* Subject Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <Card className="relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-40 h-40 ${subject.color.split(' ')[0]} rounded-bl-[150px] opacity-20`} />
                        <CardContent className="p-8 relative z-10">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                <div className={`w-16 h-16 rounded-2xl ${subject.color} flex items-center justify-center text-3xl shrink-0`}>
                                    {subject.icon}
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                                        {subject.name} — JAMB Syllabus
                                    </h1>
                                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                                        Below are the topics and areas you are expected to study for {subject.name} in the UTME examination. Questions will be drawn from these topics.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Syllabus Topics */}
                {topics.length > 0 ? (
                    <div className="space-y-4">
                        {topics.map((topic, index) => {
                            // Check if we need to render a section header
                            const showSectionHeader = topic.section && topic.section !== currentSection
                            if (topic.section && topic.section !== currentSection) {
                                currentSection = topic.section
                                topicNumber = 0
                            }
                            topicNumber++

                            return (
                                <React.Fragment key={index}>
                                    {showSectionHeader && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.03 }}
                                            className={index > 0 ? 'pt-6' : ''}
                                        >
                                            <div className={`flex items-center gap-3 mb-2 px-1`}>
                                                <div className={`w-2 h-8 rounded-full ${subject.color.split(' ')[0].replace('100', '500')}`} />
                                                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                                                    {topic.section}
                                                </h2>
                                            </div>
                                        </motion.div>
                                    )}

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.04 }}
                                    >
                                        <Card className="group hover:shadow-lg transition-all duration-300">
                                            <CardContent className="p-5 sm:p-6">
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-8 h-8 rounded-lg ${subject.color} flex items-center justify-center text-sm font-bold shrink-0 mt-0.5`}>
                                                        {topicNumber}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-primary transition-colors mb-1">
                                                            {topic.title}
                                                        </h3>

                                                        {/* Subtopics / Contents */}
                                                        {topic.subtopics && topic.subtopics.length > 0 && (
                                                            <div className="mt-3">
                                                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Topics / Contents</p>
                                                                <ul className="space-y-2">
                                                                    {topic.subtopics.map((sub, subIndex) => (
                                                                        <li key={subIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                                                            <CheckCircle className={`w-4 h-4 ${textColor} shrink-0 mt-0.5`} />
                                                                            <span>{sub}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {/* Objectives */}
                                                        {topic.objectives && topic.objectives.length > 0 && (
                                                            <div className="mt-4 pt-4 border-t border-slate-100">
                                                                <div className="flex items-center gap-1.5 mb-2">
                                                                    <Target className="w-3.5 h-3.5 text-amber-500" />
                                                                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Objectives — Candidates should be able to:</p>
                                                                </div>
                                                                <ul className="space-y-2">
                                                                    {topic.objectives.map((obj, objIndex) => (
                                                                        <li key={objIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                                                            <span className="text-amber-500 font-bold text-xs mt-0.5 shrink-0">{String.fromCharCode(105 + objIndex)}.</span>
                                                                            <span>{obj}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                ) : (
                    <Card>
                        <CardContent className="p-10 text-center">
                            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-slate-900 mb-2">Syllabus Coming Soon</h2>
                            <p className="text-slate-500 mb-6">
                                The detailed syllabus for {subject.name} is being updated. Please check back soon.
                            </p>
                            <Button onClick={() => router.push('/syllabus')}>
                                Browse Other Subjects
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
            <Footer />
        </main>
    )
}
