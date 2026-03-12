"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill?: object;
        utm?: object;
      }) => void;
    };
    dataLayer: object[];
  }
}

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/evonuera/ai-architect-strategy-call";

export default function CalendlySection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.Calendly?.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: document.getElementById("calendly-inline-widget"),
      });
    };

    // Listen for scheduling event to fire GTM event
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "Schedule" });
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your Strategy Call
          </h2>
          <p className="text-brand-muted text-lg">
            Schedule a free 1-on-1 strategy call to learn how the Gen AI Systems
            Architect Program can accelerate your career.
          </p>
        </div>

        {/* Calendly inline widget */}
        <div
          id="calendly-inline-widget"
          className="rounded-2xl overflow-hidden border border-white/10"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
