'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const socialProof = [
    {
        name: 'Chioma Okafor',
        score: '340 JAMB',
        text: 'Best platform for real past questions!',
        avatar: 'https://i.pravatar.cc/100?u=chioma'
    },
    {
        name: 'Oluwaseun A.',
        score: 'Distinction WAEC',
        text: 'The analytics helped me fix my weak spots.',
        avatar: 'https://i.pravatar.cc/100?u=seun'
    },
    {
        name: 'Zainab I.',
        score: '365 JAMB',
        text: 'Highly recommended for 2026 students.',
        avatar: 'https://i.pravatar.cc/100?u=zainab'
    }
]

export function SocialProofBar() {
    return (
        <div className="w-full bg-slate-50 border-y border-slate-200 py-8 overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    {socialProof.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-slate-200 flex-shrink-0">
                                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1 mb-0.5">
                                    <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                                    <span className="text-[10px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                        {item.score}
                                    </span>
                                </div>
                                <div className="flex gap-0.5 mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={10} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 font-medium italic">&quot;{item.text}&quot;</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
