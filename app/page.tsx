import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ValueStrip } from '@/components/value-strip'
import { HowItWorks } from '@/components/how-it-works'
import { Features } from '@/components/features'
import { ProfileShowcase } from '@/components/profile-showcase'
import { WhoItsFor } from '@/components/who-its-for'
import { PhysicalCard } from '@/components/physical-card'
import { CtaSection } from '@/components/cta-section'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <HowItWorks />
        <Features />
        <ProfileShowcase />
        <WhoItsFor />
        <PhysicalCard />
        <CtaSection />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
