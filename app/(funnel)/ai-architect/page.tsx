"use client";

import { useState } from "react";
import VideoThumbnail from "@/components/VideoThumbnail";
import CurrentYear from "@/components/CurrentYear";
import LeadModal from "@/components/LeadModal";

declare global {
  interface Window {
    dataLayer: object[];
  }
}

export default function AIArchitectPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleVideoClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "ViewContent" });
    }
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-brand-bg flex flex-col relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-secondary/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Minimal header */}
      <header className="py-5 px-6 flex justify-center border-b border-white/5 relative z-10">
        <span className="text-white font-extrabold text-xl tracking-tight">
          evonuera
        </span>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 relative z-10">
        <div className="max-w-3xl w-full mx-auto text-center">
          {/* Badge */}
          <div className="badge badge-dot mb-8 animate-fade-in-up">
            Free 7-Minute Masterclass
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 animate-fade-in-up delay-100">
            How Professionals Are Learning to Build Real AI Systems{" "}
            <span className="gradient-text">
              Without Getting Stuck Learning Random AI Tools
            </span>
          </h1>

          <p className="text-brand-secondary font-semibold text-lg mb-6 animate-fade-in-up delay-200">
            Go from Zero to Deploying AI Systems in 8 Weeks
          </p>

          {/* Social proof avatars */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up delay-300">
            <div className="flex -space-x-2">
              {["A", "R", "S", "P", "K"].map((initial, i) => (
                <div
                  key={initial}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary border-2 border-brand-bg flex items-center justify-center text-white text-xs font-bold"
                  style={{ zIndex: 5 - i }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-brand-muted text-sm">
              Join <span className="text-white font-semibold">50+</span> professionals already enrolled
            </span>
          </div>

          <p className="text-brand-muted text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Watch this 7-minute masterclass and discover how AI systems,
            automation, and AI agents are built.
          </p>

          {/* Video thumbnail */}
          <div className="animate-fade-in-up delay-400">
            <VideoThumbnail onClick={handleVideoClick} />
          </div>

          {/* Pain points */}
          <div className="max-w-md mx-auto mt-10 space-y-3 text-left animate-fade-in-up delay-500">
            {[
              { icon: "✕", color: "text-red-400", text: "Without spending years learning random AI tools" },
              { icon: "✕", color: "text-red-400", text: "Without needing a CS degree" },
              { icon: "✓", color: "text-brand-secondary", text: "With a structured 8-week mentor-led system" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`${item.color} font-bold text-sm w-5 text-center`}>{item.icon}</span>
                <span className={`text-sm ${i === 2 ? "text-white font-medium" : "text-brand-muted"}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleVideoClick}
            className="mt-10 bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 animate-fade-in-up delay-500"
          >
            Watch Free Masterclass →
          </button>

          {/* Scarcity */}
          <p className="text-brand-secondary text-sm font-semibold mt-5 animate-pulse">
            Only 8 seats remaining in this cohort
          </p>

          <p className="text-brand-dim text-xs mt-2">
            No credit card required. Instant access.
          </p>
        </div>
      </section>

      {/* Trust footer */}
      <footer className="py-6 px-4 text-center border-t border-white/5 relative z-10">
        <p className="text-brand-dim text-xs">
          © <CurrentYear fallback={new Date().getFullYear()} /> Evonuera. All rights reserved.
        </p>
      </footer>

      {/* Lead modal */}
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
