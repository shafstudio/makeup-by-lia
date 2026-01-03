"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "../ui/TestimonialCard";
import Icon from "../ui/Icon";
import CarouselDots from "../ui/CarouselDots";
import CarouselArrows from "../ui/CarouselArrows";
import { useCarousel } from "@/lib/hooks/useCarousel";

export default function TestimonialsSection() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Detect screen size and set slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet: 2 cards
      } else {
        setSlidesToShow(1); // Mobile: 1 card
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create infinite loop by cloning testimonials
  const cloneCount = slidesToShow;
  const createInfiniteArray = (items: typeof TESTIMONIALS) => {
    const clonedStart = items.slice(-cloneCount);
    const clonedEnd = items.slice(0, cloneCount);
    return [...clonedStart, ...items, ...clonedEnd];
  };

  const infiniteTestimonials = createInfiniteArray(TESTIMONIALS);

  const {
    currentIndex,
    totalSlides,
    next,
    prev,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    pause,
    resume,
    canGoPrev,
    canGoNext,
  } = useCarousel({
    itemsCount: TESTIMONIALS.length,
    slidesToShow: 1, // Slide one testimonial at a time
    autoPlayInterval: 6000,
    infinite: true,
  });

  // Infinite loop state - track actual position including clones
  const [actualIndex, setActualIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Sync actualIndex with currentIndex and handle infinite loop
  useEffect(() => {
    setActualIndex(currentIndex + cloneCount);
  }, [currentIndex, cloneCount]);

  // Handle seamless infinite loop
  useEffect(() => {
    const handleTransitionEnd = () => {
      const arrayLength = TESTIMONIALS.length;

      // If we're at the end clones, jump to the real start
      if (actualIndex >= arrayLength + cloneCount) {
        setIsTransitioning(false);
        setActualIndex(cloneCount);
      }
      // If we're at the start clones, jump to the real end
      else if (actualIndex < cloneCount) {
        setIsTransitioning(false);
        setActualIndex(arrayLength + cloneCount - 1);
      }
    };

    // Re-enable transition after jump
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }

    return handleTransitionEnd;
  }, [actualIndex, cloneCount, isTransitioning]);

  // Calculate transform offset based on slidesToShow
  const getTransformValue = () => {
    const percentPerItem = 100 / slidesToShow;
    return -actualIndex * percentPerItem;
  };

  return (
    <section className="py-32 bg-sand/30" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Icon name="format_quote" className="text-4xl text-tobacco/30 mb-6" />
          <h2 className="text-4xl font-serif text-mahogany mb-4">Kind Words</h2>
        </div>

        <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-out"
                  : ""
              }`}
              style={{
                transform: `translateX(${getTransformValue()}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {infiniteTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-5 ${
                    slidesToShow === 3
                      ? "w-full lg:w-1/3"
                      : slidesToShow === 2
                      ? "w-full md:w-1/2"
                      : "w-full"
                  }`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <CarouselArrows
              onPrev={() => {
                prev();
                pause();
                resume();
              }}
              onNext={() => {
                next();
                pause();
                resume();
              }}
              canGoPrev={canGoPrev}
              canGoNext={canGoNext}
            />
          )}
        </div>

        {/* Dot Indicators */}
        {totalSlides > 1 && (
          <CarouselDots
            count={totalSlides}
            activeIndex={currentIndex}
            onDotClick={(index) => {
              goToSlide(index);
              pause();
              resume();
            }}
          />
        )}
      </div>
    </section>
  );
}
