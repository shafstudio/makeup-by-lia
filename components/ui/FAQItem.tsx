"use client";

import { useState } from "react";
import { FAQItemProps } from "@/lib/types";
import Icon from "./Icon";

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sand pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between cursor-pointer py-4 text-lg font-serif text-mahogany hover:text-tobacco transition-colors text-left"
      >
        <span>{question}</span>
        <Icon
          name="expand_more"
          className={`text-mountain font-light transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="pt-2 pb-4 text-mountain font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </div>
  );
}
