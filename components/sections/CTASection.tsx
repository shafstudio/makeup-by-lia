"use client";

import BookingButton from "../ui/BookingButton";

export default function CTASection() {
  return (
    <section className="py-24 bg-mahogany text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-10">
        <h2 className="text-4xl md:text-5xl font-serif leading-tight">Secure Your Date</h2>
        <p className="text-white/70 font-light max-w-xl text-lg">
          Availability for the upcoming season is limited. Let's create something beautiful
          together.
        </p>
        <BookingButton
          variant="outline"
          className="px-12 py-4 border-white/30 text-white font-bold tracking-widest text-xs uppercase hover:bg-white hover:text-mahogany"
        >
          Inquire Now
        </BookingButton>
      </div>
    </section>
  );
}
