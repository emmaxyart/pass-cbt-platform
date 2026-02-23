import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const reference = searchParams.get('reference')

    if (!reference) {
        return NextResponse.redirect(new URL('/dashboard?error=no_reference', req.url))
    }

    try {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            },
        })

        const data = await response.json()
        const originUrl = data.data?.metadata?.origin_url || '/dashboard'

        if (data.status && data.data.status === 'success') {
            const userId = data.data.metadata.user_id
            const supabase = await createClient()

            // 1. Update Profile in DB (Source of Truth)
            const { error: profileError } = await supabase
                .from('profiles')
                .update({
                    is_premium: true,
                    updated_at: new Date().toISOString()
                })
                .eq('id', userId)

            if (profileError) {
                console.error('Profile Update Error:', profileError)
            }

            // Note: Updating Auth Metadata from here requires Service Role Key.
            // Since we primarily use the 'profiles' table, we redirect with success.
            return NextResponse.redirect(new URL(`${originUrl}?payment=success`, req.url))
        }

        // If payment failed or was cancelled
        return NextResponse.redirect(new URL(`${originUrl}?payment=failed`, req.url))
    } catch (error) {
        console.error('Paystack Verify Error:', error)
        return NextResponse.redirect(new URL('/dashboard?error=verification_failed', req.url))
    }
}
