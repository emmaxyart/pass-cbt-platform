import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

type Props = {
    params: Promise<{ subject: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const subjectSlug = (await params).subject
    const subjectName = subjectSlug.charAt(0).toUpperCase() + subjectSlug.slice(1)

    return getMetadata(
        `${subjectName} JAMB CBT Practice`,
        `Practice real JAMB past questions for ${subjectName}. Test your knowledge, improve your speed, and get detailed performance analytics.`,
        `/practice/${subjectSlug}`
    )
}

export default function PracticeSubjectLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
