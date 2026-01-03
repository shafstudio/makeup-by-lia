import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
