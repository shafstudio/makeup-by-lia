"use client";

import { useState, useEffect } from "react";
import { PORTFOLIO_IMAGES } from "@/lib/constants";
import PortfolioImage from "../ui/PortfolioImage";
import MinimalCarouselArrows from "../ui/MinimalCarouselArrows";
import { useCarousel } from "@/lib/hooks/useCarousel";

export default function PortfolioSection() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and set slidesToShow
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(4); // Desktop: 4 images
        setIsMobile(false);
      } else if (width >= 768) {
        setSlidesToShow(3); // Tablet: 3 images
        setIsMobile(false);
      } else {
        setSlidesToShow(1); // Mobile: 1 image per carousel (2 stacked)
        setIsMobile(true);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split images for mobile: top and bottom carousels
  const topImages = PORTFOLIO_IMAGES.filter((_, index) => index % 2 === 0);
  const bottomImages = PORTFOLIO_IMAGES.filter((_, index) => index % 2 === 1);

  // Create infinite loop by cloning images
  // Clone enough images to fill the viewport (slidesToShow) at the beginning and end
  const cloneCount = slidesToShow;

  const createInfiniteArray = (images: typeof PORTFOLIO_IMAGES) => {
    const clonedStart = images.slice(-cloneCount);
    const clonedEnd = images.slice(0, cloneCount);
    return [...clonedStart, ...images, ...clonedEnd];
  };

  const infiniteImages = createInfiniteArray(PORTFOLIO_IMAGES);
  const infiniteTopImages = createInfiniteArray(topImages);
  const infiniteBottomImages = createInfiniteArray(bottomImages);

  // For mobile, we need to calculate based on the smaller array (since we have two stacked)
  // For tablet/desktop, use the full array length
  const effectiveItemsCount = isMobile
    ? topImages.length
    : PORTFOLIO_IMAGES.length;

  const {
    currentIndex,
    totalSlides,
    next,
    prev,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    pause,
    resume,
    canGoPrev,
    canGoNext,
  } = useCarousel({
    itemsCount: effectiveItemsCount,
    slidesToShow: 1, // Slide one image at a time
    autoPlayInterval: 3000,
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
      const arrayLength = isMobile ? topImages.length : PORTFOLIO_IMAGES.length;

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
  }, [actualIndex, cloneCount, isMobile, topImages.length, isTransitioning]);

  // Calculate transform offset - slide one image at a time
  const getTransformValue = () => {
    const percentPerImage = 100 / slidesToShow;
    return -actualIndex * percentPerImage;
  };

  return (
    <section className="py-32 bg-vanilla" id="portfolio">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-center text-4xl font-serif text-mahogany mb-16">
          Selected Works
        </h2>

        {/* Mobile: Dual Synced Carousels (Stacked Vertically) */}
        {isMobile ? (
          <div className="space-y-4">
            {/* Top Carousel */}
            <div
              className="relative group"
              onMouseEnter={pause}
              onMouseLeave={resume}
            >
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
                  {infiniteTopImages.map((portfolioImage, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <PortfolioImage {...portfolioImage} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Carousel */}
            <div
              className="relative group"
              onMouseEnter={pause}
              onMouseLeave={resume}
            >
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
                  {infiniteBottomImages.map((portfolioImage, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <PortfolioImage {...portfolioImage} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tablet/Desktop: Single Carousel */
          <div
            className="relative group"
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
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
                {infiniteImages.map((portfolioImage, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 px-2 ${
                      slidesToShow === 4 ? "w-full lg:w-1/4" : "w-full md:w-1/3"
                    }`}
                  >
                    <PortfolioImage {...portfolioImage} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Only on tablet/desktop */}
            {totalSlides > 1 && (
              <MinimalCarouselArrows
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
        )}

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <a
            className="group inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-mountain border border-mountain/30 rounded-full transition-all duration-300 hover:border-tobacco hover:text-tobacco hover:scale-105 cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/bylia.makeup/"
          >
            View More Projects
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
