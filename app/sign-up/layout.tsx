import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    'Create an Account',
    'Join SixthSense today and start your journey towards academic excellence with Nigeria\'s most advanced CBT platform.',
    '/sign-up'
)

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
