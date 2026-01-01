import { PORTFOLIO_IMAGES } from "@/lib/constants";
import PortfolioImage from "../ui/PortfolioImage";

export default function PortfolioSection() {
  return (
    <section className="py-32 bg-white" id="portfolio">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-center text-4xl font-serif text-mahogany mb-16">
          Selected Works
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PORTFOLIO_IMAGES.map((portfolioImage, index) => (
            <PortfolioImage key={index} {...portfolioImage} />
          ))}
        </div>
      </div>
    </section>
  );
}
