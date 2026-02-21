'use client'

import React from 'react'
import { usePaystackPayment } from 'react-paystack'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { Crown } from 'lucide-react'

interface PremiumButtonProps {
    email: string
    userId: string
    onSuccess?: () => void
}

export function PremiumButton({ email, userId, onSuccess }: PremiumButtonProps) {
    const supabase = createClient()

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: 500000, // NGN 5,000 in kobo
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    }

    const initializePayment = usePaystackPayment(config)

    const handleSuccess = async (reference: any) => {
        toast.success('Payment successful! Upgrading your account...')

        // 1. Update Profile in DB (Assuming profiles table exists)
        const { error: profileError } = await supabase
            .from('profiles')
            .update({ is_premium: true })
            .eq('id', userId)

        // 2. Update User Metadata (Backup)
        const { error: authError } = await supabase.auth.updateUser({
            data: { is_premium: true }
        })

        if (profileError && authError) {
            toast.error('Payment verified but upgrade failed. Contact support.')
            console.error(profileError, authError)
        } else {
            toast.success('Account upgraded to PREMIUM! 🚀')
            if (onSuccess) onSuccess()
            // Refresh page to update UI
            setTimeout(() => window.location.reload(), 2000)
        }
    }

    const handleClose = () => {
        toast.info('Payment window closed.')
    }

    return (
        <Button
            onClick={() => {
                if (!config.publicKey) {
                    toast.error('Paystack Public Key is missing in .env')
                    return
                }
                initializePayment({ onSuccess: handleSuccess, onClose: handleClose })
            }}
            className="bg-gradient-to-r from-amber-400 to-orange-600 hover:from-amber-500 hover:to-orange-700 text-white font-bold gap-2 shadow-lg hover:shadow-xl transition-all"
        >
            <Crown className="w-4 h-4" />
            Upgrade to Premium (₦2,000)
        </Button>
    )
}
