import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    'Sign In',
    'Sign in to your SixthSense account to access your personalized exam prep materials and progress analytics.',
    '/sign-in'
)

export default function SignInLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
