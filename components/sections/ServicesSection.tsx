import { SERVICES } from "@/lib/constants";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="py-32 bg-white" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="text-tobacco text-xs font-bold tracking-[0.2em] uppercase">
            Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-mahogany">Curated Experiences</h2>
          <p className="text-mountain font-light max-w-lg">
            Bespoke packages designed for the modern bride.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
