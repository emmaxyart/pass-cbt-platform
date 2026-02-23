'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { Crown } from 'lucide-react'
import confetti from 'canvas-confetti'

interface PremiumButtonProps {
    email: string
    userId: string
}

export function PremiumButton({ email, userId }: PremiumButtonProps) {
    const [isInitializing, setIsInitializing] = React.useState(false)

    const handleUpgradeClick = async () => {
        setIsInitializing(true)
        try {
            const response = await fetch('/api/paystack/initialize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 200000,
                    email: email,
                    origin: window.location.pathname
                }),
            })

            const data = await response.json()

            if (data.authorization_url) {
                window.location.href = data.authorization_url
            } else {
                toast.error(data.error || 'Failed to initialize payment.')
            }
        } catch (error) {
            console.error('Payment Error:', error)
            toast.error('An error occurred. Please try again.')
        } finally {
            setIsInitializing(false)
        }
    }

    return (
        <Button
            onClick={handleUpgradeClick}
            disabled={isInitializing}
            className="bg-gradient-to-r from-amber-400 to-orange-600 hover:from-amber-500 hover:to-orange-700 text-white font-bold gap-2 shadow-lg hover:shadow-xl transition-all"
        >
            <Crown className="w-4 h-4" />
            {isInitializing ? 'Processing...' : 'Upgrade to Premium (₦2,000)'}
        </Button>
    )
}
