"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to contact form service (e.g. Resend, Formspree, etc.)
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-primary/10 border border-brand-primary/30 text-brand-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Contact Evonuera
            </h1>
            <p className="text-brand-muted">
              Have a project in mind or questions about our programs? We&apos;d love
              to hear from you.
            </p>
          </div>

          {submitted ? (
            <div className="card p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-white font-bold text-xl mb-2">Message Sent!</h2>
              <p className="text-brand-muted text-sm">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8 space-y-5">
              <div>
                <label className="block text-sm text-brand-muted mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-brand-muted mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-brand-muted mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
