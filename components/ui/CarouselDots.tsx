interface CarouselDotsProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export default function CarouselDots({ count, activeIndex, onDotClick }: CarouselDotsProps) {
  if (count <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            index === activeIndex
              ? "bg-tobacco scale-110"
              : "bg-mountain/30 hover:bg-mountain/50 hover:scale-110"
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex ? "true" : "false"}
        />
      ))}
    </div>
  );
}
