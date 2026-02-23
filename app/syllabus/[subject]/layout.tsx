import { Metadata } from 'next'
import { getSubjectBySlug } from '@/lib/data/syllabus'
import { getMetadata } from '@/utils/seo-config'

type Props = {
    params: Promise<{ subject: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const subjectSlug = (await params).subject
    const subject = getSubjectBySlug(subjectSlug)

    if (!subject) {
        return getMetadata('Subject Not Found', 'The syllabus for this subject is not available.')
    }

    return getMetadata(
        `${subject.name} JAMB Syllabus`,
        `Explore the official 2026 JAMB syllabus for ${subject.name}. Detailed topics, subtopics, and objectives to help you prepare for your UTME.`,
        `/syllabus/${subjectSlug}`
    )
}

export default function SubjectLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
