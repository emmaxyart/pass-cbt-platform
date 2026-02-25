import { Metadata } from 'next'

export const SITE_CONFIG = {
    name: 'SixthSense',
    author: 'SixthSense Team',
    description: 'Prepare for JAMB 2026 and WAEC with real past questions, timed CBT tests, performance tracking, and personalized study recommendations.',
    url: 'https://pass-cbt-platform.vercel.app', // Replace with actual domain
    keywords: [
        'JAMB 2026',
        'WAEC 2026',
        'CBT Practice',
        'Exam Prep Nigeria',
        'JAMB Past Questions',
        'WAEC Past Questions',
        'Post-UTME Practice',
        'Syllabus',
        'Nigeria Education',
        'Study Materials',
        'Free JAMB Past Questions',
        'WAEC CBT practice online',
    ],
    links: {
        twitter: 'https://pass-cbt-platform.vercel.app'

    },
    ogImage: 'https://sixthsense.com.ng/og-image.png', // You should create this
}

export const getMetadata = (title?: string, description?: string, path: string = '', noindex: boolean = false): Metadata => {
    const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : `SixthSense – Best JAMB & WAEC CBT Practice Platform 2026 | Past Questions + Analytics`
    const fullDescription = description || SITE_CONFIG.description
    const url = `${SITE_CONFIG.url}${path}`

    return {
        title: fullTitle,
        description: fullDescription,
        keywords: SITE_CONFIG.keywords.join(', '),
        authors: [{ name: SITE_CONFIG.author }],
        creator: SITE_CONFIG.author,
        publisher: SITE_CONFIG.author,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(SITE_CONFIG.url),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url: url,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: SITE_CONFIG.ogImage,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            locale: 'en_NG',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: fullDescription,
            creator: '@sixthsense',
            images: [SITE_CONFIG.ogImage],
        },
        icons: {
            icon: '/icon.svg',
            apple: '/apple-icon.png',
        },
        verification: {
            google: '3oqAF4YjdOJPrAWAaW4PT7Z1usOJq7Yb5AcuOLcuX8I',
        },
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
                'max-video-preview': -1,
                'max-image-preview': 'large' as const,
                'max-snippet': -1,
            },
        },
    }
}
