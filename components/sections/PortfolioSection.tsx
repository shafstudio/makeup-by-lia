"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PORTFOLIO_IMAGES } from "@/lib/constants";
import PortfolioImage from "../ui/PortfolioImage";
import MinimalCarouselArrows from "../ui/MinimalCarouselArrows";

export default function PortfolioSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split images for mobile
  const topImages = PORTFOLIO_IMAGES.filter((_, index) => index % 2 === 0);
  const bottomImages = PORTFOLIO_IMAGES.filter((_, index) => index % 2 === 1);

  // Desktop/Tablet carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
  });

  // Mobile carousels
  const [emblaTopRef, emblaTopApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [emblaBottomRef, emblaBottomApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi && !emblaTopApi) return;

    const api = isMobile ? emblaTopApi : emblaApi;
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
      if (isMobile && emblaBottomApi) {
        emblaBottomApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, emblaTopApi, emblaBottomApi, isMobile]);

  // Sync mobile carousels
  useEffect(() => {
    if (!emblaTopApi || !emblaBottomApi) return;

    const syncBottom = () => {
      const index = emblaTopApi.selectedScrollSnap();
      emblaBottomApi.scrollTo(index);
    };

    emblaTopApi.on("select", syncBottom);
    return () => {
      emblaTopApi.off("select", syncBottom);
    };
  }, [emblaTopApi, emblaBottomApi]);

  const scrollPrev = useCallback(() => {
    if (isMobile) {
      emblaTopApi?.scrollPrev();
      emblaBottomApi?.scrollPrev();
    } else {
      emblaApi?.scrollPrev();
    }
  }, [emblaApi, emblaTopApi, emblaBottomApi, isMobile]);

  const scrollNext = useCallback(() => {
    if (isMobile) {
      emblaTopApi?.scrollNext();
      emblaBottomApi?.scrollNext();
    } else {
      emblaApi?.scrollNext();
    }
  }, [emblaApi, emblaTopApi, emblaBottomApi, isMobile]);

  return (
    <section className="py-32 bg-vanilla" id="portfolio">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-center text-4xl font-serif text-mahogany mb-16">
          Selected Works
        </h2>

        {/* Mobile: Dual Synced Carousels */}
        {isMobile ? (
          <div className="space-y-4">
            {/* Top Carousel */}
            <div className="overflow-hidden -mx-2" ref={emblaTopRef}>
              <div className="flex">
                {topImages.map((portfolioImage, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                    <PortfolioImage {...portfolioImage} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Carousel */}
            <div className="overflow-hidden -mx-2" ref={emblaBottomRef}>
              <div className="flex">
                {bottomImages.map((portfolioImage, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                    <PortfolioImage {...portfolioImage} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Tablet/Desktop: Single Carousel */
          <div className="relative group">
            <div className="overflow-hidden -mx-2" ref={emblaRef}>
              <div className="flex">
                {PORTFOLIO_IMAGES.map((portfolioImage, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-2"
                  >
                    <PortfolioImage {...portfolioImage} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <MinimalCarouselArrows
              onPrev={scrollPrev}
              onNext={scrollNext}
              canGoPrev={true}
              canGoNext={true}
            />
          </div>
        )}

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <a
            className="group inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-mountain border border-mountain/30 transition-all duration-300 hover:border-tobacco hover:text-tobacco hover:scale-105 cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/bylia.makeup/"
          >
            View More
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
