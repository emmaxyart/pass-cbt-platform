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
    const [showReview, setShowReview] = useState(false)
    const [showCurrentFeedback, setShowCurrentFeedback] = useState(false)
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
        if (isFinished || showCurrentFeedback) return
        setSelectedAnswers({ ...selectedAnswers, [currentIndex]: option })
        setShowCurrentFeedback(true)
    }

    const handleNext = () => {
        setShowCurrentFeedback(false)
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            calculateScore()
            setIsFinished(true)
        }
    }

    const handlePrev = () => {
        setShowCurrentFeedback(!!selectedAnswers[currentIndex - 1])
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
        const failedCount = questions.length - score

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-3xl mx-auto text-center py-12 px-4"
            >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Practice Complete!</h2>
                <p className="text-slate-600 mb-8">You've completed the {subject} practice session.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="p-6 shadow-xl relative overflow-hidden group border-none bg-white">
                        <div className="text-4xl font-extrabold text-primary mb-1">{percentage}%</div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accuracy</p>
                    </Card>
                    <Card className="p-6 shadow-xl relative overflow-hidden group border-none bg-white">
                        <div className="text-4xl font-extrabold text-emerald-500 mb-1">{score}</div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Correct</p>
                    </Card>
                    <Card className="p-6 shadow-xl relative overflow-hidden group border-none bg-white">
                        <div className="text-4xl font-extrabold text-rose-500 mb-1">{failedCount}</div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Failed</p>
                    </Card>
                </div>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <Button onClick={reset} variant="outline" className="gap-2 h-12 px-6 rounded-xl border-2">
                        <RotateCcw className="w-4 h-4" /> Try Again
                    </Button>
                    <Button onClick={() => setShowReview(!showReview)} variant={showReview ? "secondary" : "default"} className="gap-2 h-12 px-6 rounded-xl shadow-lg">
                        {showReview ? 'Hide Review' : 'Review Answers'}
                    </Button>
                    <Button onClick={() => window.location.href = '/dashboard'} variant="ghost" className="gap-2 h-12 px-6 rounded-xl">
                        Back to Dashboard
                    </Button>
                </div>

                {showReview && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 text-left"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-primary" /> Detailed Review
                        </h3>
                        {questions.map((q, idx) => {
                            const userAnswer = selectedAnswers[idx]
                            const isSkipped = userAnswer === undefined
                            const isCorrect = !isSkipped && userAnswer === q.correct_option
                            return (
                                <Card key={q.id} className={`border-2 overflow-hidden rounded-2xl ${isSkipped ? 'border-slate-100' : isCorrect ? 'border-emerald-100' : 'border-rose-100'}`}>
                                    <div className={`px-4 py-2 text-xs font-bold uppercase tracking-wider flex justify-between items-center ${isSkipped ? 'bg-slate-50 text-slate-500' : isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                        <span>Question {idx + 1}</span>
                                        <span className="flex items-center gap-1">
                                            {isSkipped ? <AlertCircle className="w-3.5 h-3.5" /> : isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                                            {isSkipped ? 'Skipped' : isCorrect ? 'Correct' : 'Incorrect'}
                                        </span>
                                    </div>
                                    <CardContent className="p-6 bg-white">
                                        <p className="text-lg font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{ __html: q.question }} />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                            {Object.entries(q.options).map(([key, value]) => {
                                                const isUserChoice = userAnswer === key
                                                const isCorrectOption = q.correct_option === key

                                                let variant = "border-slate-100 text-slate-600"
                                                if (isCorrectOption) variant = "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold"
                                                else if (isUserChoice && !isCorrectOption) variant = "border-rose-500 bg-rose-50 text-rose-700 font-bold"

                                                return (
                                                    <div key={key} className={`p-3 rounded-xl border-2 flex items-center gap-3 ${variant}`}>
                                                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs uppercase ${isCorrectOption ? 'bg-emerald-500 text-white' : isUserChoice ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                                            {key}
                                                        </span>
                                                        <span className="text-sm">{value}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {q.explanation && (
                                            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Explanation</p>
                                                <p className="text-sm text-slate-600 leading-relaxed">{q.explanation}</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </motion.div>
                )}
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
                                    const isCorrect = currentQuestion.correct_option === key
                                    const showAsCorrect = showCurrentFeedback && isCorrect
                                    const showAsWrong = showCurrentFeedback && isSelected && !isCorrect

                                    return (
                                        <button
                                            key={key}
                                            disabled={showCurrentFeedback}
                                            onClick={() => handleSelect(key)}
                                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group
                                                ${showAsCorrect
                                                    ? 'border-emerald-500 bg-emerald-50/50 text-emerald-700'
                                                    : showAsWrong
                                                        ? 'border-rose-500 bg-rose-50/50 text-rose-700'
                                                        : isSelected
                                                            ? 'border-primary bg-primary/5 text-primary shadow-md'
                                                            : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold uppercase transition-colors
                                                    ${showAsCorrect
                                                        ? 'bg-emerald-500 text-white'
                                                        : showAsWrong
                                                            ? 'bg-rose-500 text-white'
                                                            : isSelected
                                                                ? 'bg-primary text-white'
                                                                : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                                                    {key}
                                                </span>
                                                <span className="font-semibold">{value}</span>
                                            </div>
                                            {showAsCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                                            {showAsWrong && <XCircle className="w-6 h-6 text-rose-500" />}
                                            {isSelected && !showCurrentFeedback && <CheckCircle2 className="w-6 h-6 text-primary" />}
                                        </button>
                                    )
                                })}

                                {showCurrentFeedback && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`mt-6 p-6 rounded-2xl border-2 ${selectedAnswers[currentIndex] === currentQuestion.correct_option ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`mt-1 p-2 rounded-xl ${selectedAnswers[currentIndex] === currentQuestion.correct_option ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                                                {selectedAnswers[currentIndex] === currentQuestion.correct_option ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <h4 className={`text-sm font-bold uppercase tracking-wider mb-1 ${selectedAnswers[currentIndex] === currentQuestion.correct_option ? 'text-emerald-700' : 'text-rose-700'}`}>
                                                    {selectedAnswers[currentIndex] === currentQuestion.correct_option
                                                        ? `Correct! The answer is indeed "${currentQuestion.options[currentQuestion.correct_option as keyof typeof currentQuestion.options]}"`
                                                        : `Incorrect. The correct answer is ${currentQuestion.correct_option.toUpperCase()}: ${currentQuestion.options[currentQuestion.correct_option as keyof typeof currentQuestion.options]}`}
                                                </h4>
                                                {currentQuestion.explanation && (
                                                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                                                        <span className="font-bold text-slate-900">Explanation:</span> {currentQuestion.explanation}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
                {/* Warning message always above buttons on mobile */}
                {timeLeft < 60 && (
                    <div className="flex items-center gap-2 text-red-500 font-bold text-sm justify-center sm:justify-start sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:mt-4">
                        <AlertCircle className="w-4 h-4" />
                        Last minute! Finish quickly.
                    </div>
                )}

                <Button
                    variant="ghost"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="gap-2 text-slate-600 order-2 sm:order-1"
                >
                    <ArrowLeft className="w-4 h-4" /> Previous
                </Button>

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
