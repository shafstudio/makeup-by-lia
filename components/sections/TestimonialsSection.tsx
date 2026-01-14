"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "../ui/TestimonialCard";
import Icon from "../ui/Icon";
import CarouselArrows from "../ui/CarouselArrows";

export default function TestimonialsSection() {
  // Embla carousel with loop enabled
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
  });

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-32 bg-sand/30" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Icon name="format_quote" className="text-4xl text-tobacco/30 mb-6" />
          <h2 className="text-4xl font-serif text-mahogany mb-4">Kind Words</h2>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden -mx-2.5" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2.5"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <CarouselArrows
            onPrev={scrollPrev}
            onNext={scrollNext}
            canGoPrev={true}
            canGoNext={true}
          />
        </div>
      </div>
    </section>
  );
}
