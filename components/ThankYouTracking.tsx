"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const trackingKey = "consultation-thank-you-tracked";

export function ThankYouTracking() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(trackingKey)) return;
      window.sessionStorage.setItem(trackingKey, "true");

      // Calls are optional: blocked or unavailable analytics must not affect the page.
      window.fbq?.("track", "Lead");
      window.gtag?.("event", "generate_lead");
    } catch {
      // Storage or tracking can be unavailable due to privacy settings.
    }
  }, []);

  return null;
}
