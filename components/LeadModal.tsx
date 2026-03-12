"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    dataLayer: object[];
  }
}

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "Lead",
      lead_name: form.name,
      lead_email: form.email,
    });

    // TODO: connect to your CRM / email service here
    await new Promise((r) => setTimeout(r, 400));
    router.push("/masterclass");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="card-premium w-full max-w-md p-8 sm:p-10 relative shadow-premium animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8">
          <div className="badge badge-dot mb-4">Instant Access</div>
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Watch the Free Masterclass
          </h2>
          <p className="text-brand-muted text-sm">
            Enter your details to unlock instant access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Name", type: "text", placeholder: "Your full name", key: "name" as const },
            { label: "Email", type: "email", placeholder: "your@email.com", key: "email" as const },
            { label: "Phone", type: "tel", placeholder: "+91 98765 43210", key: "phone" as const },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm text-brand-muted mb-1.5 font-medium">{field.label}</label>
              <input
                type={field.type}
                required
                placeholder={field.placeholder}
                value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all text-sm"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-300 mt-3 text-base"
          >
            {loading ? "Unlocking..." : "Unlock Masterclass →"}
          </button>
        </form>

        <p className="text-center text-brand-dim text-xs mt-5">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
