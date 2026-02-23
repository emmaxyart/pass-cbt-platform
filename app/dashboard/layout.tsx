import { Metadata } from 'next'
import { getMetadata } from '@/utils/seo-config'

export const metadata: Metadata = getMetadata(
    'Dashboard',
    'Manage your exam preparation, view analytics, and track your progress.',
    '/dashboard',
    true // noindex
)

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
