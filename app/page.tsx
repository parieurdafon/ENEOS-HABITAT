import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { QuickQuoteForm } from "@/components/quick-quote-form"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { DPEInfoSection } from "@/components/dpe-info-section"
import { PaymentSection } from "@/components/payment-section"
import { StatsSection } from "@/components/stats-section"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuickQuoteForm />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <DPEInfoSection />
        <PaymentSection />
        <StatsSection />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
