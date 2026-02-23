import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    'Profile',
    'View and edit your SixthSense profile and account settings.',
    '/profile',
    true // noindex
)

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
