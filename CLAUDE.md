# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official website for **Evonuera**, an AI systems company. Includes a marketing funnel for the **Gen AI Systems Architect Program**. The full spec is in `evonuera-website-spec.md.md`.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Hosting**: Vercel
- **Tracking**: Google Tag Manager (GTM), Google Analytics 4, Meta Pixel
- **Scheduling**: Calendly embed

## Commands

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
```

## App Router Structure

```
/app
  /(site)/layout.tsx            # Wraps with Navbar + Footer
    /page.tsx                   # Home
    /services/page.tsx
    /learning/page.tsx
    /products/page.tsx
    /products/fitness-app/page.tsx
    /about/page.tsx
    /contact/page.tsx
  /(funnel)/layout.tsx          # No Navbar/Footer
    /ai-architect/page.tsx      # Funnel landing page
    /masterclass/page.tsx       # Masterclass + Calendly
/components
  Navbar.tsx / Footer.tsx      # Excluded on funnel pages
  Hero.tsx
  ServicesGrid.tsx
  FeatureSection.tsx
  VideoThumbnail.tsx           # Click triggers LeadModal
  LeadModal.tsx                # Name/Email/Phone → redirect to /masterclass
  CurriculumSection.tsx
  InstructorSection.tsx
  CalendlySection.tsx
  CTAButton.tsx
/public
  logo.png                     # Added manually
```

## Key Architecture Decisions

**Funnel pages** (`/ai-architect`, `/masterclass`) must be distraction-free — no `Navbar` or `Footer`. Handle this at the layout level or with conditional rendering in the root layout.

**Lead capture flow**: `/ai-architect` → video thumbnail click → `LeadModal` (Name, Email, Phone) → on submit → redirect to `/masterclass`.

**Tracking events** via GTM: `PageView`, `Lead`, `ViewContent`, `Schedule`, `Purchase`. Push to `window.dataLayer` from client components.

**Meta Pixel + GTM** should be loaded in `app/layout.tsx` via `<Script>` with `strategy="afterInteractive"`.

## Branding

| Token | Value |
|---|---|
| Background | `#0B0F19` |
| Primary accent | `#4F46E5` |
| Secondary accent | `#06B6D4` |
| Text | `#FFFFFF` |
| Muted text | `#9CA3AF` |

Configure these as custom Tailwind colors in `tailwind.config.ts`.

## Pricing (Masterclass Page)

- Full Program Value: ₹45,000
- Founders Cohort Price: ₹15,000
- CTA: "Book Strategy Call" → Calendly embed (event: "AI Architect Strategy Call")
