import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/utils/seo-config'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard/', '/profile/', '/auth/'],
        },
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    }
}
