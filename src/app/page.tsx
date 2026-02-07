import { SequenceScroll } from '@/components/SequenceScroll'
import { AboutSection } from '@/components/AboutSection'
import { BentoGrid } from '@/components/BentoGrid'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SequenceScroll />
      
      {/* Overlapping section to close the hero */}
      <div className="-mt-[100vh] relative z-10 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <AboutSection />
        <BentoGrid />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
