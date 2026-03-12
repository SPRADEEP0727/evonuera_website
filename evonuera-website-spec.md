# Evonuera Website + AI Architect Funnel

Claude Code / Cursor Development Specification

## Project Objective

Build the official website for **Evonuera**, an AI systems company that provides:

1. AI System Development
2. Custom AI Agents
3. AI Consulting for Businesses
4. AI Education and Training
5. AI Products

The website must present Evonuera as an **AI systems company**, not just a course platform.

Additionally, the website should include a **marketing funnel** to convert visitors into leads for the **Gen AI Systems Architect Program**.

---

# Domain

Primary domain

```
evonuera.com
```

---

# Website Structure

```
/
Home

/services
AI services offered by Evonuera

/learning
AI education programs

/products
Evonuera products

/products/fitness-app
AI Fitness App (Coming Soon)

/about
About Evonuera and founder

/contact
Contact page

/ai-architect
Landing page for ads funnel

/masterclass
Masterclass + program details
```

---

# Navigation Menu

Main navigation

```
Home
Services
Learning
Products
About
Contact
```

Funnel pages should NOT include navigation.

```
/ai-architect
/masterclass
```

These pages should be distraction-free.

---

# Tech Stack

Framework

Next.js 14 (App Router)

Styling

TailwindCSS

Hosting

Vercel

Tracking

Google Tag Manager

Analytics

Google Analytics 4

Ad Tracking

Meta Pixel

Scheduling

Calendly

---

# Folder Structure

```
/app

/page.tsx
Home page

/services/page.tsx
Services

/learning/page.tsx
Learning programs

/products/page.tsx
Products

/products/fitness-app/page.tsx
Fitness app

/about/page.tsx
About page

/contact/page.tsx
Contact page

/ai-architect/page.tsx
Ads landing page

/masterclass/page.tsx
Masterclass page

/components

Navbar.tsx
Footer.tsx
Hero.tsx
ServicesGrid.tsx
FeatureSection.tsx
VideoThumbnail.tsx
LeadModal.tsx
CurriculumSection.tsx
InstructorSection.tsx
CalendlySection.tsx
CTAButton.tsx
```

---

# Branding

Logo will be uploaded manually.

Location

```
/public/logo.png
```

Use logo in the navigation bar.

---

# Color Palette

Dark modern AI theme.

Primary background

```
#0B0F19
```

Primary accent

```
#4F46E5
```

Secondary accent

```
#06B6D4
```

Primary text

```
#FFFFFF
```

Muted text

```
#9CA3AF
```

---

# HOME PAGE

Route

```
/
```

Purpose

Introduce Evonuera as an AI systems company.

---

# Section 1 Hero

Headline

```
Building Intelligent AI Systems
for Businesses and Professionals
```

Subheadline

```
Evonuera designs AI systems, builds intelligent agents,
and trains professionals to create real AI solutions.
```

Primary CTA

```
Explore AI Services
```

Secondary CTA

```
Learn AI Systems
```

---

# Section 2 What We Do

Three columns.

AI Systems Development

Design and build AI-powered systems that automate workflows and solve business problems.

Custom AI Agents

Develop intelligent agents capable of interacting with tools, APIs, and real-world systems.

AI Consulting

Help businesses adopt and implement AI effectively.

---

# Section 3 AI Education

Introduce the learning program.

Title

```
Gen AI Systems Architect Program
```

Description

A structured program designed to teach how to build real AI systems, automation workflows, and intelligent agents.

CTA

```
Watch Masterclass
```

Link

```
/ai-architect
```

---

# Section 4 Products

Introduce Evonuera product vision.

Product Card

AI Fitness App

Description

```
An AI-powered fitness assistant that creates
personalized workout and health plans.
```

Status

Coming Soon

Button

```
Learn More
```

Link

```
/products/fitness-app
```

---

# Section 5 Founder

Founder

Pradeep Subramanian

Role

Tech Lead – Bosch Global Software Technologies
Founder – Evonuera

Highlights

7+ years in software engineering
Built production AI systems
Expert in AI automation and AI agents

---

# SERVICES PAGE

Route

```
/services
```

Sections

AI System Development

Custom AI solutions tailored to business workflows.

Custom AI Agents

Agents capable of automating complex tasks and integrating with tools.

AI Consulting

Helping organizations adopt and deploy AI effectively.

---

# LEARNING PAGE

Route

```
/learning
```

Introduce program.

Program

Gen AI Systems Architect Program

Description

A complete path from AI fundamentals to building production AI systems.

CTA

Watch Masterclass

Link

```
/ai-architect
```

---

# PRODUCTS PAGE

Route

```
/products
```

List current and upcoming products.

First product

AI Fitness App.

---

# FITNESS APP PAGE

Route

```
/products/fitness-app
```

Hero

```
AI Powered Fitness Assistant
Coming Soon
```

Description

An AI-based system designed to help users build personalized fitness plans.

Add waitlist email form.

---

# AI ARCHITECT LANDING PAGE

Route

```
/ai-architect
```

Purpose

Convert ad traffic into leads.

No navigation menu.

---

# Landing Page Hero

Headline

```
How Professionals Are Learning to Build Real AI Systems
Without Getting Stuck Learning Random AI Tools
```

Subheadline

```
Watch this 7-minute masterclass and discover how
AI systems, automation, and AI agents are built.
```

Video thumbnail

Click opens lead modal.

CTA

Watch Free Masterclass

---

# Lead Capture Modal

Fields

Name
Email
Phone

Submit button

Unlock Masterclass

After submission

Redirect

```
/masterclass
```

---

# MASTERCLASS PAGE

Route

```
/masterclass
```

Sections

Masterclass video

Program overview

Curriculum

Instructor

Pricing

Calendly booking

---

# Curriculum

Week 1

AI foundations
Python for AI

Week 2

Prompt engineering
Build AI apps

Week 3

LLM orchestration
RAG systems

Week 4

AI automation

Week 5

AI agents

Week 6

Multi-agent systems

Week 7

Voice AI systems

Week 8

Production AI deployment

Final project

Build and launch an AI MicroSaaS product.

---

# Pricing

```
Full Program Value
₹45,000
```

```
Founders Cohort Price
₹15,000
```

CTA

Book Strategy Call

---

# Calendly Integration

Embed Calendly widget.

Event name

AI Architect Strategy Call

Calendly should include qualification questions.

---

# Tracking

Tracking installed using Google Tag Manager.

Events

PageView
Lead
ViewContent
Schedule
Purchase

---

# Mobile Optimization

Mobile-first layout.

Large CTA buttons.

Responsive video.

Fast loading.

---

# Performance Target

Page load time under 2 seconds.

Use optimized images and lazy loading.

---

END SPEC
