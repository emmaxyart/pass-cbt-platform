import { Metadata } from 'next'

export const SITE_CONFIG = {
    name: 'SixthSense',
    author: 'SixthSense Team',
    description: 'pass jamb and waec easily with sixthsense- surest waec and jamb questions plug',
    url: 'https://pass-cbt-platform.vercel.app', // Replace with actual domain
    keywords: [
        'JAMB',
        'WAEC',
        'CBT Practice',
        'Exam Prep',
        'Past Questions',
        'Syllabus',
        'Nigeria Education',
        'Study Materials',
    ],
    links: {
        twitter: 'https://pass-cbt-platform.vercel.app'

    },
    ogImage: 'https://sixthsense.com.ng/og-image.png', // You should create this
}

export const getMetadata = (title?: string, description?: string, path: string = '', noindex: boolean = false): Metadata => {
    const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} - Master JAMB & WAEC Exams`
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
            icon: '/favicon.png',
            apple: '/favicon.png',
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
