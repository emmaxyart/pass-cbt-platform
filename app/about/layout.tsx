import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    'About SixthSense',
    'Learn more about SixthSense and our mission to help African students master their exams through technology and community.',
    '/about'
)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
