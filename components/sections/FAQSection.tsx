import { FAQS } from "@/lib/constants";
import FAQItem from "../ui/FAQItem";

export default function FAQSection() {
  return (
    <section className="py-32 bg-white" id="faq">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <h2 className="text-4xl font-serif text-mahogany">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
