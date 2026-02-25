import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

import { getMetadata } from '@/utils/seo-config'

export const metadata = getMetadata()

import { OrganizationSchema, WebsiteSchema } from '@/components/structured-data'

import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-foreground selection:bg-primary/20`}>
        <OrganizationSchema />
        <WebsiteSchema />
        {children}
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
