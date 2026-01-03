"use client";

import { useCallback } from "react";

type CalendlyEventType = "discovery" | "makeup";

export function useCalendly(eventType: CalendlyEventType = "discovery") {
  const openCalendly = useCallback(() => {
    const calendlyUrl =
      eventType === "makeup"
        ? process.env.NEXT_PUBLIC_CALENDLY_MAKEUP_URL
        : process.env.NEXT_PUBLIC_CALENDLY_DISCOVERY_URL;

    if (!calendlyUrl) {
      console.error(
        `Calendly URL not configured for event type: ${eventType}. Please add NEXT_PUBLIC_CALENDLY_${eventType.toUpperCase()}_URL to your .env.local file.`
      );
      return;
    }

    // Check if Calendly widget script is loaded
    if (typeof window !== "undefined" && window.Calendly) {
      // Open Calendly popup with default settings
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback: open in new tab if widget script not loaded yet
      console.warn(
        "Calendly widget not loaded yet. Opening in new tab as fallback."
      );
      window.open(calendlyUrl, "_blank");
    }
  }, [eventType]);

  return { openCalendly };
}
