import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import HotServices from '@/components/HotServices'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import HotrodTeaser from '@/components/HotrodTeaser'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import InspectionPopup from '@/components/InspectionPopup'

export default function Home() {
  return (
    <main className="bg-jd-black min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <HotServices />
      <Services />
      <WhyUs />
      <Testimonials />
      <HotrodTeaser />
      <Contact />
      <Footer />
      <InspectionPopup />
    </main>
  )
}
