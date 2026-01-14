import { FAQItemProps } from "@/lib/types";
import Icon from "./Icon";

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b border-sand pb-4">
      <summary className="flex items-center justify-between cursor-pointer py-4 text-lg font-serif text-mahogany hover:text-tobacco transition-colors">
        <span>{question}</span>
        <Icon
          name="expand_more"
          className="text-mountain font-light transform group-open:rotate-180 transition-transform"
        />
      </summary>
      <div
        className="pt-2 pb-4 text-mountain font-light leading-relaxed"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}
