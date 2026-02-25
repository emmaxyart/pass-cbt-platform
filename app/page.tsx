import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { SocialProofBar } from '@/components/social-proof-bar'
import { Features } from '@/components/features'
import { ProductShowcase } from '@/components/product-showcase'
import { CtaSection } from '@/components/cta-section'
import { Community } from '@/components/community'
import { Pricing } from '@/components/pricing'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Page Content */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <SocialProofBar />
        <Features />
        <ProductShowcase />
        <CtaSection />
        <Community />
        <Pricing />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  )
}
