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
      {/* Previous Arrow */}
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-tobacco text-tobacco bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-tobacco hover:text-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:text-tobacco disabled:hover:scale-100`}
        aria-label="Previous testimonial"
      >
        <Icon name="arrow_back" className="text-xl" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-tobacco text-tobacco bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-tobacco hover:text-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:text-tobacco disabled:hover:scale-100`}
        aria-label="Next testimonial"
      >
        <Icon name="arrow_forward" className="text-xl" />
      </button>
    </>
  );
}
