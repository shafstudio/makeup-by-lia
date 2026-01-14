"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";

export default function TermsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  return (
    <>
      {/* Custom Navigation with white background */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-sand/20"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <a
              href="/#home"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Icon name="brush" className="text-mahogany text-3xl font-light" />
              <h1 className="text-2xl font-serif font-medium tracking-widest uppercase text-mahogany">
                BY LIA MAKEUP
              </h1>
            </a>
            <div className="hidden md:flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  className="text-xs font-medium tracking-widest uppercase text-mahogany/80 hover:text-mahogany transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/#contact"
                className="hidden sm:flex items-center justify-center px-8 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 bg-mahogany border border-mahogany text-white hover:bg-mahogany/90"
              >
                Inquire
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-sm transition-colors cursor-pointer text-mahogany hover:bg-mahogany/10"
                aria-label="Toggle mobile menu"
              >
                <Icon name={mobileMenuOpen ? "close" : "menu"} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-70 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-sand">
              <h2 className="text-sm font-bold tracking-widest uppercase text-mahogany">
                Menu
              </h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-mahogany hover:bg-mahogany/10 rounded-sm transition-colors cursor-pointer"
                aria-label="Close mobile menu"
              >
                <Icon name="close" />
              </button>
            </div>
            <div className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-mahogany hover:text-tobacco transition-colors tracking-widest uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-8 py-2.5 bg-mahogany text-white text-xs font-bold tracking-widest uppercase hover:bg-tobacco transition-all duration-300 mt-8"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-10 flex items-center justify-center bg-mahogany">
          <div className="relative z-20 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight tracking-wide">
                Terms &amp; Conditions
              </h1>
              <div className="w-12 h-px bg-white/30"></div>
              <p className="text-white/70 font-light tracking-widest uppercase text-xs">
                Policy &amp; Guidelines
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-vanilla flex-grow">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Icon
                name="gavel"
                className="text-4xl text-tobacco/40 mb-6 font-light block mx-auto"
              />
              <p className="text-lg text-mountain font-light leading-relaxed max-w-2xl mx-auto">
                These Terms &amp; Conditions outline how bookings, payments, and
                appointments work. They're here to make sure your experience is
                clear, fair, and stress-free, so we can focus on creating a
                beautiful, seamless makeup experience for your special day.
              </p>
            </div>

            {/* 1. Booking & Payment */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Booking &amp; Payment
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  A <strong>50% deposit</strong> secures your date and is
                  non-refundable.
                </p>
                <p>
                  Remaining balance is due at least 3 days before your appointment
                  unless otherwise agreed.
                </p>
              </div>
            </div>

            {/* 2. Cancellations & Rescheduling */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Cancellations &amp; Rescheduling
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <div>
                  <p className="font-semibold mb-2">Client cancellations:</p>
                  <p>
                    Deposits are non-refundable. Clients may transfer their deposit
                    once to a new date within 3 months, subject to availability.
                    Cancellations without rescheduling will result in the
                    forfeiture of the deposit. If a client cancels less than 14
                    days before the appointment, the remaining balance may also be
                    charged at the artist's discretion.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Artist cancellations:</p>
                  <p>
                    If I am unable to attend due to illness or unforeseen
                    circumstances, I will arrange a replacement artist or provide a
                    full refund.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Travel & Parking */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Travel &amp; Parking
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  Travel fees apply for off-site bookings; parking costs may be
                  added if venue parking isn't available.
                </p>
                <p>
                  Please provide accurate details to avoid delays or extra
                  charges.
                </p>
              </div>
            </div>

            {/* 4. Health & Safety */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Health &amp; Safety
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  Clients must disclose any allergies, sensitivities, or medical
                  conditions before the appointment.
                </p>
                <p>
                  I reserve the right to refuse service if conditions are unsafe
                  or contagious.
                </p>
              </div>
            </div>

            {/* 5. Media & Photos */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Media &amp; Photos
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  Photos or videos of your look may be used on social media,
                  website, or portfolio.
                </p>
                <p>
                  If you prefer not to be featured, please let me know before your
                  appointment.
                </p>
              </div>
            </div>

            {/* 6. Service Expectations */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Service Expectations
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  Makeup is designed to enhance your natural features and reflect
                  your chosen style.
                </p>
                <p>
                  Results may vary depending on skin, hair, or other personal
                  factors.
                </p>
                <p>
                  Dissatisfaction due to personal expectations or incomplete
                  preparation is not eligible for refunds.
                </p>
              </div>
            </div>

            {/* 7. Additional Charges */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Additional Charges
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  Extra services, unnotified requirements, or overtime may incur
                  additional fees, payable on the day.
                </p>
              </div>
            </div>

            {/* 8. Force Majeure */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Force Majeure
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  I am not responsible for cancellations or delays caused by
                  extraordinary events beyond my control (e.g., severe weather,
                  transport issues, emergencies).
                </p>
              </div>
            </div>

            {/* 9. Early Morning Appointments */}
            <div className="mb-12 border-b border-sand pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Early Morning Appointments
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>Appointments before 7am may incur an additional fee.</p>
              </div>
            </div>

            {/* 10. Agreement */}
            <div className="mb-12 pb-12">
              <h2 className="text-2xl font-serif text-mahogany mb-6">
                Agreement
              </h2>
              <div className="text-mountain font-light leading-loose space-y-4">
                <p>
                  By booking or paying a deposit, you acknowledge that you've
                  read, understood, and agreed to these terms.
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-12">
              <p className="text-[10px] text-mountain uppercase tracking-widest opacity-60">
                Last Updated: January 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
