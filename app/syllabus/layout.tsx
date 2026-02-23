import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    '2026 JAMB Syllabus',
    'Explore the official JAMB & WAEC syllabus for all subjects. Study the right topics and pass your exams with confidence.',
    '/syllabus'
)

export default function SyllabusLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
