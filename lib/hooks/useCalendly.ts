"use client";

import { useCallback } from "react";

export function useCalendly() {
  const openCalendly = useCallback(() => {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

    if (!calendlyUrl) {
      console.error(
        "Calendly URL not configured. Please add NEXT_PUBLIC_CALENDLY_URL to your .env.local file."
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
  }, []);

  return { openCalendly };
}
