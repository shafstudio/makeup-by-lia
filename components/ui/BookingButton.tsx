"use client";

import { useCalendly } from "@/lib/hooks/useCalendly";
import Button from "./Button";

interface BookingButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function BookingButton({
  variant = "primary",
  children,
  className,
}: BookingButtonProps) {
  const { openCalendly } = useCalendly();

  return (
    <Button variant={variant} onClick={openCalendly} className={className}>
      {children}
    </Button>
  );
}
