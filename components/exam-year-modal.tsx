'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CalendarDays, ArrowRight } from 'lucide-react'

interface ExamYearModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    subject: {
        name: string
        icon: string
        color: string
    }
}

const EXAM_YEARS = Array.from({ length: 16 }, (_, i) => 2025 - i) // 2025 down to 2010

export function ExamYearModal({ open, onOpenChange, subject }: ExamYearModalProps) {
    const router = useRouter()
    const [selectedYear, setSelectedYear] = React.useState<number | null>(null)

    const handleYearSelect = (year: number) => {
        setSelectedYear(year)
    }

    const handleStartPractice = () => {
        if (selectedYear) {
            onOpenChange(false)
            router.push(`/practice/${subject.name.toLowerCase()}?year=${selectedYear}`)
        }
    }

    // Reset selection when modal opens/closes
    React.useEffect(() => {
        if (!open) {
            setSelectedYear(null)
        }
    }, [open])

    const colorBase = subject.color.split(' ')[0] // e.g. "bg-blue-100"
    const textColor = subject.color.split(' ')[1] // e.g. "text-blue-600"

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

                <div className="mt-2">
                    <div className="flex items-center gap-2 mb-4">
                        <CalendarDays className={`w-4 h-4 ${textColor}`} />
                        <span className="text-sm font-medium text-slate-700">
                            Available Years (2010 – 2025)
                        </span>
                    </div>

                    {/* Year Grid */}
                    <div className="grid grid-cols-4 gap-2">
                        {EXAM_YEARS.map((year, index) => (
                            <motion.button
                                key={year}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.15, delay: index * 0.02 }}
                                onClick={() => handleYearSelect(year)}
                                className={`
                                    relative px-3 py-3 rounded-xl text-sm font-semibold
                                    transition-all duration-200 border-2
                                    focus:outline-none focus:ring-2 focus:ring-primary/30
                                    ${selectedYear === year
                                        ? `${colorBase} ${textColor} border-current shadow-md scale-[1.02]`
                                        : 'bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100 hover:border-slate-200 hover:shadow-sm'
                                    }
                                `}
                            >
                                {year}
                                {selectedYear === year && (
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
                    </div>
                </div>

                {/* Action Footer */}
                <div className="mt-6 flex flex-col gap-3">
                    <Button
                        onClick={handleStartPractice}
                        disabled={!selectedYear}
                        className="w-full bg-primary hover:bg-primary/90 h-11 text-base font-semibold gap-2 transition-all duration-200 disabled:opacity-50"
                    >
                        {selectedYear
                            ? `Start ${selectedYear} Practice`
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
