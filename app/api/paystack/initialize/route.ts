import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const { amount, email, origin } = await req.json()

        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount,
                email,
                callback_url: `${new URL(req.url).origin}/api/paystack/verify`,
                metadata: {
                    user_id: user.id,
                    origin_url: origin
                }
            }),
        })

        const data = await response.json()

        if (!data.status) {
            return NextResponse.json({ error: data.message }, { status: 400 })
        }

        return NextResponse.json(data.data)
    } catch (error: any) {
        console.error('Paystack Initialize Error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
