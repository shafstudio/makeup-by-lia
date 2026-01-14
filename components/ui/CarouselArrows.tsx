import Icon from "./Icon";

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev?: boolean;
  canGoNext?: boolean;
}

export default function CarouselArrows({
  onPrev,
  onNext,
  canGoPrev = true,
  canGoNext = true,
}: CarouselArrowsProps) {
  return (
    <>
      {/* Previous Arrow - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 sm:-translate-x-6 md:-translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-tobacco text-tobacco bg-white/80 backdrop-blur-sm items-center justify-center transition-all duration-300 hover:bg-tobacco hover:text-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:text-tobacco disabled:hover:scale-100 cursor-pointer`}
        aria-label="Previous testimonial"
      >
        <Icon name="arrow_back" className="text-base sm:text-lg md:text-xl" />
      </button>

      {/* Next Arrow - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 sm:translate-x-6 md:translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-tobacco text-tobacco bg-white/80 backdrop-blur-sm items-center justify-center transition-all duration-300 hover:bg-tobacco hover:text-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:text-tobacco disabled:hover:scale-100 cursor-pointer`}
        aria-label="Next testimonial"
      >
        <Icon name="arrow_forward" className="text-base sm:text-lg md:text-xl" />
      </button>
    </>
  );
}
