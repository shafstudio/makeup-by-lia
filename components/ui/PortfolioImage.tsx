import { PortfolioImageProps } from "@/lib/types";

export default function PortfolioImage({ image, alt }: PortfolioImageProps) {
  return (
    <div className="aspect-[3/4] overflow-hidden group relative cursor-pointer">
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all z-10"></div>
      <img
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        src={image}
      />
    </div>
  );
}
