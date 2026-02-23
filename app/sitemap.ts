import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/utils/seo-config'
import { syllabusSubjects } from '@/lib/data/syllabus'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url

    const staticRoutes = [
        '',
        '/about',
        '/syllabus',
        '/practice',
        '/sign-in',
        '/sign-up',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const syllabusRoutes = syllabusSubjects.map((subject) => ({
        url: `${baseUrl}/syllabus/${subject.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    const practiceSubjects = [
        'english',
        'mathematics',
        'physics',
        'chemistry',
        'biology',
        'economics',
        'government',
        'crk',
    ]

    const practiceRoutes = practiceSubjects.map((subject) => ({
        url: `${baseUrl}/practice/${subject}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticRoutes, ...syllabusRoutes, ...practiceRoutes]
}
