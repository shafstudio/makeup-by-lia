import { FAQS } from "@/lib/constants";
import FAQItem from "../ui/FAQItem";

export default function FAQSection() {
  // Split FAQs into two columns
  const midpoint = Math.ceil(FAQS.length / 2);
  const leftColumnFaqs = FAQS.slice(0, midpoint);
  const rightColumnFaqs = FAQS.slice(midpoint);

  return (
    <section className="py-32 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <h2 className="text-4xl font-serif text-mahogany">
            Common Questions
          </h2>
        </div>
        
        {/* Desktop: Two independent flex columns side by side */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-0 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="flex-1 w-full flex flex-col space-y-0">
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="flex-1 w-full flex flex-col space-y-0">
            {rightColumnFaqs.map((faq, index) => (
              <FAQItem key={midpoint + index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
