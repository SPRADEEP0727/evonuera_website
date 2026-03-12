"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: Can't export metadata from a client component.
// Create a wrapper server component if metadata is needed, or move form logic to a child component.

const features = [
  "Personalized workout plans based on your goals",
  "AI-generated nutrition recommendations",
  "Progress tracking and adaptation",
  "Voice-guided workouts",
  "Recovery and rest day planning",
];

export default function FitnessAppPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to email list / CRM
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Coming Soon
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            AI Powered Fitness Assistant
          </h1>
          <p className="text-brand-muted text-lg leading-relaxed mb-10">
            An AI-based system designed to help users build personalized fitness
            plans that actually work — tailored to your body, goals, and
            lifestyle.
          </p>

          {/* Waitlist form */}
          {submitted ? (
            <div className="card max-w-md mx-auto p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-white font-bold text-xl mb-2">
                You&apos;re on the waitlist!
              </h3>
              <p className="text-brand-muted text-sm">
                We&apos;ll notify you as soon as the app launches.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-secondary transition-colors text-sm"
              />
              <button
                type="submit"
                className="bg-brand-secondary hover:bg-cyan-400 text-brand-bg font-bold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What to Expect
          </h2>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="card p-4 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-white text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
