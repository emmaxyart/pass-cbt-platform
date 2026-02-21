'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <div className="relative flex items-center justify-center">
                {/* Outer Ring 1 */}
                <motion.div
                    className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full absolute"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Outer Ring 2 - slower and reversed */}
                <motion.div
                    className="w-32 h-32 border-2 border-slate-200 border-b-amber-400 rounded-full absolute"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Pulsing Core */}
                <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shadow-inner"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <GraduationCap className="w-8 h-8 text-primary" />
                </motion.div>
            </div>

            <div className="flex flex-col items-center gap-1">
                <motion.h3
                    className="text-xl font-bold text-slate-900 tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    SixthSense
                </motion.h3>
                <motion.div
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1] }}
                        className="text-primary font-bold text-lg"
                    >
                        ...
                    </motion.span>
                </motion.div>
            </div>
        </div>
    )
}

export function PageLoader() {
    return (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
            <LoadingSpinner />
        </div>
    )
}
