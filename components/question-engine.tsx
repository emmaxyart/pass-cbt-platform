import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Question } from '@/types'
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, Award, Timer as TimerIcon, AlertCircle } from 'lucide-react'

interface QuestionEngineProps {
    questions: Question[]
    subject: string
    onComplete?: (score: number) => void
    timeLimit?: number // in minutes
}

export function QuestionEngine({ questions, subject, onComplete, timeLimit = 3 }: QuestionEngineProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
    const [isFinished, setIsFinished] = useState(false)
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(timeLimit * 60)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const currentQuestion = questions[currentIndex]

    // Timer logic
    useEffect(() => {
        if (!isFinished && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000)
        } else if (timeLeft === 0 && !isFinished) {
            handleAutoFinish()
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [timeLeft, isFinished])

    const handleAutoFinish = () => {
        calculateScore()
        setIsFinished(true)
    }

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = seconds % 60
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }

    const handleSelect = (option: string) => {
        if (isFinished) return
        setSelectedAnswers({ ...selectedAnswers, [currentIndex]: option })
    }

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            calculateScore()
            setIsFinished(true)
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const calculateScore = () => {
        let s = 0
        questions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correct_option) {
                s++
            }
        })
        setScore(s)
        if (onComplete) onComplete(s)
    }

    const reset = () => {
        setCurrentIndex(0)
        setSelectedAnswers({})
        setIsFinished(false)
        setScore(0)
        setTimeLeft(timeLimit * 60)
    }

    if (isFinished) {
        const percentage = Math.round((score / questions.length) * 100)
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto text-center py-12"
            >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Practice Complete!</h2>
                <p className="text-slate-600 mb-8">You scored {score} out of {questions.length} questions.</p>

                <Card className="p-8 shadow-xl mb-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] border-l border-b border-primary/10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative z-10">
                        <div className="text-5xl font-extrabold text-primary mb-2">{percentage}%</div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Accuracy Score</p>
                    </div>
                </Card>

                <div className="flex gap-4 justify-center">
                    <Button onClick={reset} variant="outline" className="gap-2">
                        <RotateCcw className="w-4 h-4" /> Try Again
                    </Button>
                    <Button onClick={() => window.location.href = '/dashboard'} className="gap-2">
                        Back to Dashboard
                    </Button>
                </div>
            </motion.div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header with Progress and Timer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                {/* Progress Bar */}
                <div className="flex-1">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Question {currentIndex + 1} of {questions.length}</span>
                        <span className="text-primary font-bold leading-none">{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Timer */}
                <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border-2 transition-colors ${timeLeft < 60 ? 'bg-red-50 border-red-200 text-red-600 animate-pulse' : 'bg-white border-slate-100 text-slate-600'}`}>
                    <TimerIcon className="w-5 h-5" />
                    <span className="font-mono text-xl font-bold">{formatTime(timeLeft)}</span>
                </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                        <CardContent className="p-8 md:p-10">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-8"
                                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
                            />

                            <div className="space-y-4">
                                {Object.entries(currentQuestion.options).map(([key, value]) => {
                                    const isSelected = selectedAnswers[currentIndex] === key
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => handleSelect(key)}
                                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group
                        ${isSelected
                                                    ? 'border-primary bg-primary/5 text-primary shadow-md'
                                                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold uppercase transition-colors
                          ${isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                                                    {key}
                                                </span>
                                                <span className="font-semibold">{value}</span>
                                            </div>
                                            {isSelected && <CheckCircle2 className="w-6 h-6" />}
                                        </button>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
                <Button
                    variant="ghost"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="gap-2 text-slate-600 order-2 sm:order-1"
                >
                    <ArrowLeft className="w-4 h-4" /> Previous
                </Button>

                {timeLeft < 60 && (
                    <div className="flex items-center gap-2 text-red-500 font-bold text-sm order-1 sm:order-2 justify-center sm:justify-start">
                        <AlertCircle className="w-4 h-4" />
                        Last minute! Finish quickly.
                    </div>
                )}

                <Button
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentIndex]}
                    className="gap-2 px-8 py-6 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all order-1 sm:order-3"
                >
                    {currentIndex === questions.length - 1 ? 'Finish Practice' : 'Next Question'}
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
