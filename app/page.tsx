import { SpecNoticeBar, SpecNoticeFooter } from '@/components/SpecNotice'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Prices } from '@/components/Prices'
import { Booking } from '@/components/Booking'
import { Craft } from '@/components/Craft'
import { Faq } from '@/components/Faq'
import { FindUs } from '@/components/FindUs'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <SpecNoticeBar />
      <Nav />
      <main id="main">
        <Hero />
        <Prices />
        <Booking />
        <Craft />
        <Faq />
        <FindUs />
      </main>
      <SpecNoticeFooter />
      <Footer />
    </>
  )
}
