import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    'CBT Practice Questions',
    'Practice authentic JAMB and WAEC CBT past questions with SixthSense. Improve your accuracy and time management for the 2026 exams.',
    '/practice'
)

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
