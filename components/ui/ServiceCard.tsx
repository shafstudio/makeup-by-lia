"use client";

import { ServiceCardProps } from "@/lib/types";
import BookingButton from "./BookingButton";

export default function ServiceCard({
  image,
  title,
  price,
  priceUnit,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="group p-8 bg-vanilla border border-transparent hover:border-sand transition-all duration-500">
      <div className="h-64 mb-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <h3 className="text-2xl font-serif text-mahogany">{title}</h3>
        <p className="text-tobacco font-medium">
          {price}{" "}
          {priceUnit && (
            <span className="text-xs text-mountain">{priceUnit}</span>
          )}
        </p>
        <p className="text-mountain text-sm leading-relaxed mb-6">
          {description}
        </p>
        <ul className="text-sm text-mountain space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-3 w-full">
          <BookingButton eventType="makeup" variant="link">
            Book Now
          </BookingButton>
          <a
            href="/terms-and-conditions"
            className="text-xs text-mountain/60 hover:text-tobacco transition-colors underline"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
