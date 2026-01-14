"use client";

import { useCalendly } from "@/lib/hooks/useCalendly";
import Button from "./Button";

type CalendlyEventType = "discovery" | "makeup";

interface BookingButtonProps {
  variant?: "primary" | "secondary" | "outline" | "link";
  children: React.ReactNode;
  className?: string;
  eventType?: CalendlyEventType;
}

export default function BookingButton({
  variant = "primary",
  children,
  className,
  eventType = "discovery",
}: BookingButtonProps) {
  const { openCalendly } = useCalendly(eventType);

  return (
    <Button variant={variant} onClick={openCalendly} className={className}>
      {children}
    </Button>
  );
}
