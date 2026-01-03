import Icon from "./Icon";

interface MinimalCarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev?: boolean;
  canGoNext?: boolean;
}

export default function MinimalCarouselArrows({
  onPrev,
  onNext,
  canGoPrev = true,
  canGoNext = true,
}: MinimalCarouselArrowsProps) {
  return (
    <>
      {/* Previous Arrow - Hidden on mobile, show on hover on desktop */}
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-mountain text-mountain bg-white/90 backdrop-blur-sm hidden md:flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:border-tobacco hover:text-tobacco disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer`}
        aria-label="Previous image"
      >
        <Icon name="arrow_back" className="text-base" />
      </button>

      {/* Next Arrow - Hidden on mobile, show on hover on desktop */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-mountain text-mountain bg-white/90 backdrop-blur-sm hidden md:flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:border-tobacco hover:text-tobacco disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer`}
        aria-label="Next image"
      >
        <Icon name="arrow_forward" className="text-base" />
      </button>
    </>
  );
}
