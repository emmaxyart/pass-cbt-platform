import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CtaSection } from '@/components/cta-section'
import { Community } from '@/components/community'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Page Content */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <Features />
        <CtaSection />
        <Community />
        <Footer />
      </div>
    </main>
  )
}
