'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, BarChart4, BookOpen, Zap } from 'lucide-react'

export function ProductShowcase() {
    return (
        <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        See How SixthSense Works
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A sneak peek into the most advanced CBT portal in Nigeria. Simple, fast, and results-driven.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Mockup 1: Question Interface */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative bg-slate-100 rounded-2xl p-4 shadow-2xl border border-slate-200">
                            {/* Browser Header */}
                            <div className="flex items-center gap-1.5 mb-3 px-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                <div className="ml-2 flex-1 h-5 bg-white rounded-md border border-slate-200" />
                            </div>

                            {/* App UI Simulation */}
                            <div className="bg-white rounded-lg shadow-sm p-6 min-h-[300px]">
                                <div className="flex justify-between items-center mb-6 border-b pb-4">
                                    <div className="flex items-center gap-2">
                                        <BookOpen size={18} className="text-primary" />
                                        <span className="font-bold text-sm">JAMB Mock: Mathematics</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full font-bold text-xs">
                                        <Clock size={14} />
                                        <span>01:45:22</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="font-bold text-slate-800">
                                        Question 14: If the coordinates of the mid-point of the line segment joining (3, x) and (y, -2) is (5, 1). Find x and y.
                                    </p>

                                    <div className="space-y-3">
                                        {['x = 4, y = 7', 'x = 3, y = 6', 'x = 5, y = 8', 'x = 2, y = 5'].map((option, i) => (
                                            <div key={i} className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${i === 0 ? 'bg-primary/5 border-primary ring-1 ring-primary/20' : 'border-slate-200'}`}>
                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-primary text-white border-primary' : 'border-slate-300'}`}>
                                                    {String.fromCharCode(65 + i)}
                                                </div>
                                                <span className="text-sm font-medium">{option}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Label */}
                            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border-4 border-white rotate-3">
                                <div className="bg-white/20 p-2 rounded-xl">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black opacity-80 leading-none mb-1 text-white">Feature</p>
                                    <p className="font-bold text-sm leading-none text-white whitespace-nowrap">Real CBT Simulation</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-8 lg:pl-10">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                                Practice in an Environment that Feels Like the Real Exam
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our interface is meticulously designed to mimic the actual JAMB CBT and WAEC portals. No surprises on exam day—you&apos;ll be right at home.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                'Authentic 2026 JAMB testing interface',
                                'Precise countdown timers for time management',
                                'Detailed step-by-step explanations for every question',
                                'Works perfectly on mobile and desktop'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
                    {/* Text Content */}
                    <div className="space-y-8 lg:pr-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                                Smart Analytics that Detect Your Weakest Spots
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Don&apos;t just practice blindly. Our platform analyzes your performance after every test and tells you exactly which topics you need to focus on to hit 300+.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <BarChart4 className="text-primary mb-2" />
                                <p className="text-sm font-black text-slate-900">Topic Breakdown</p>
                                <p className="text-xs text-slate-500">Know your score per topic</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <CheckCircle className="text-green-500 mb-2" />
                                <p className="text-sm font-black text-slate-900">Weekly Progress</p>
                                <p className="text-xs text-slate-500">Track your score growth</p>
                            </div>
                        </div>
                    </div>

                    {/* Mockup 2: Analytics Dashboard */}
                    <motion.div
                        className="relative order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 ring-1 ring-slate-900/5">
                            <div className="flex justify-between items-center mb-8">
                                <div className="space-y-1">
                                    <h4 className="font-black text-slate-900">Overall Performance</h4>
                                    <p className="text-xs text-slate-500 font-medium">Last updated: Today, 10:30 AM</p>
                                </div>
                                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs">
                                    JAMB Prep Mode
                                </div>
                            </div>

                            <div className="flex items-center gap-8 mb-8">
                                <div className="w-32 h-32 rounded-full border-[12px] border-primary flex items-center justify-center relative">
                                    <div className="text-center">
                                        <p className="text-2xl font-black text-slate-900 leading-none">325</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Avg Score</p>
                                    </div>
                                    {/* Decorative Progress Dots */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm" />
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span className="text-slate-700">English Language</span>
                                            <span className="text-primary">82%</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-[82%] h-full bg-primary" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span className="text-slate-700">Mathematics</span>
                                            <span className="text-green-500">75%</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-[75%] h-full bg-green-500" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span className="text-slate-700">Physics (Weak spot)</span>
                                            <span className="text-amber-500">45%</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-[45%] h-full bg-amber-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recommendation Card */}
                            <div className="p-4 bg-slate-900 rounded-xl text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-white/20 rounded-lg">
                                        <Zap size={14} className="text-amber-400 fill-current" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-wider">AI Insight</span>
                                </div>
                                <p className="text-xs font-medium text-slate-300">
                                    Focus on <span className="text-white font-bold">Waves & Optics</span> this week. You missed 4 questions on this in your last test.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
