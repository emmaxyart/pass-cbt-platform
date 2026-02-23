'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CalendarDays, ArrowRight, Loader2, BookOpen, AlertCircle } from 'lucide-react'

interface ExamYearModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    subject: {
        name: string
        icon: string
        color: string
    }
}

interface YearData {
    examyear: string
    questions: number
}

export function ExamYearModal({ open, onOpenChange, subject }: ExamYearModalProps) {
    const router = useRouter()
    const [selectedYear, setSelectedYear] = React.useState<string | null>(null)
    const [years, setYears] = React.useState<YearData[]>([])
    const [totalQuestions, setTotalQuestions] = React.useState<number | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)

    // Fetch years & stats when modal opens
    React.useEffect(() => {
        if (!open) {
            setSelectedYear(null)
            setYears([])
            setTotalQuestions(null)
            setError(null)
            return
        }

        const fetchYearsAndStats = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const [yearsRes, statsRes] = await Promise.all([
                    fetch(`/api/questions?action=years&subject=${subject.name.toLowerCase()}`),
                    fetch(`/api/questions?action=stats&subject=${subject.name.toLowerCase()}`),
                ])

                if (!yearsRes.ok) throw new Error('Failed to load years')
                const yearsData: YearData[] = await yearsRes.json()
                setYears(yearsData)

                if (statsRes.ok) {
                    const statsData = await statsRes.json()
                    setTotalQuestions(statsData?.questions ?? null)
                }
            } catch (err) {
                console.error('ExamYearModal fetch error:', err)
                setError('Could not load available years. Please try again.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchYearsAndStats()
    }, [open, subject.name])

    const handleStartPractice = () => {
        if (selectedYear) {
            onOpenChange(false)
            router.push(`/practice/${subject.name.toLowerCase()}?year=${selectedYear}`)
        }
    }

    const colorBase = subject.color.split(' ')[0]   // e.g. "bg-blue-100"
    const textColor = subject.color.split(' ')[1]   // e.g. "text-blue-600"

    const selectedYearData = years.find(y => y.examyear === selectedYear)

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-1">
                        <div className={`w-10 h-10 rounded-xl ${subject.color} flex items-center justify-center text-xl`}>
                            {subject.icon}
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold text-slate-900">
                                {subject.name}
                            </DialogTitle>
                            <DialogDescription className="text-slate-500 text-sm">
                                Select an exam year to practice
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                {/* Stats Banner */}
                {totalQuestions !== null && !isLoading && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl ${colorBase} mb-1`}
                    >
                        <BookOpen className={`w-4 h-4 ${textColor} flex-shrink-0`} />
                        <span className={`text-sm font-semibold ${textColor}`}>
                            {totalQuestions.toLocaleString()} total questions available
                        </span>
                        <span className="text-xs text-slate-500 ml-auto">
                            across {years.length} years
                        </span>
                    </motion.div>
                )}

                <div className="mt-2">
                    <div className="flex items-center gap-2 mb-3">
                        <CalendarDays className={`w-4 h-4 ${textColor}`} />
                        <span className="text-sm font-medium text-slate-700">
                            Available Exam Years
                        </span>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="flex items-center justify-center py-10 gap-3 text-slate-500">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span className="text-sm">Loading available years…</span>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !isLoading && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            {error}
                        </div>
                    )}

                    {/* Year Grid */}
                    {!isLoading && !error && years.length > 0 && (
                        <div className="grid grid-cols-3 gap-2">
                            <AnimatePresence>
                                {years.map((yearData, index) => (
                                    <motion.button
                                        key={yearData.examyear}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.15, delay: index * 0.02 }}
                                        onClick={() => setSelectedYear(yearData.examyear)}
                                        className={`
                                            relative flex flex-col items-center px-2 py-3 rounded-xl text-sm font-semibold
                                            transition-all duration-200 border-2
                                            focus:outline-none focus:ring-2 focus:ring-primary/30
                                            ${selectedYear === yearData.examyear
                                                ? `${colorBase} ${textColor} border-current shadow-md scale-[1.03]`
                                                : 'bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100 hover:border-slate-200 hover:shadow-sm'
                                            }
                                        `}
                                    >
                                        <span className="text-base font-bold leading-tight">{yearData.examyear}</span>
                                        <span className={`text-[10px] mt-0.5 font-medium ${selectedYear === yearData.examyear ? textColor : 'text-slate-400'}`}>
                                            {yearData.questions}Qs
                                        </span>
                                        {selectedYear === yearData.examyear && (
                                            <motion.div
                                                layoutId="year-indicator"
                                                className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-current`}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* Empty state */}
                    {!isLoading && !error && years.length === 0 && (
                        <div className="text-center py-8 text-slate-500 text-sm">
                            No exam years found for this subject.
                        </div>
                    )}
                </div>

                {/* Action Footer */}
                <div className="mt-6 flex flex-col gap-3">
                    <Button
                        onClick={handleStartPractice}
                        disabled={!selectedYear || isLoading}
                        className="w-full bg-primary hover:bg-primary/90 h-11 text-base font-semibold gap-2 transition-all duration-200 disabled:opacity-50"
                    >
                        {selectedYear
                            ? `Start ${selectedYear} Practice (${selectedYearData?.questions ?? '?'} Qs)`
                            : 'Select a year to continue'
                        }
                        {selectedYear && <ArrowRight className="w-4 h-4" />}
                    </Button>
                    <p className="text-xs text-center text-slate-400">
                        Questions are sourced from past JAMB {subject.name} exams
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
