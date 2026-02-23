import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    'Reset Password',
    'Reset your SixthSense account password to regain access to your exam prep materials.',
    '/forgot-password',
    true // noindex
)

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
