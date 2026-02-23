import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

import { getMetadata } from '@/utils/seo-config'

export const metadata = getMetadata()

import { OrganizationSchema, WebsiteSchema } from '@/components/structured-data'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <OrganizationSchema />
        <WebsiteSchema />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
