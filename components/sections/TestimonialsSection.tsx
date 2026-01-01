import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "../ui/TestimonialCard";
import Icon from "../ui/Icon";

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-sand/30" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Icon name="format_quote" className="text-4xl text-tobacco/30 mb-6" />
          <h2 className="text-4xl font-serif text-mahogany mb-4">Kind Words</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
