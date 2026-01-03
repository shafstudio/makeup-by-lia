/**
 * TypeScript declarations for Calendly popup widget
 * Documentation: https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview
 */

interface CalendlyPopupOptions {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  utm?: Record<string, string>;
}

interface CalendlyEvent {
  event: string;
  payload?: {
    event_type_name?: string;
    invitee_uri?: string;
  };
}

interface Calendly {
  initPopupWidget(options: CalendlyPopupOptions): void;
  closePopupWidget(): void;
  initBadgeWidget(options: {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }): void;
}

interface Window {
  Calendly: Calendly | undefined;
}
