import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Evonuera",
  description:
    "Insights on AI systems, automation, agents, and building production-ready AI applications.",
};

const posts = [
  {
    slug: "why-ai-agents-are-the-future",
    title: "Why AI Agents Are the Future of Software",
    excerpt:
      "AI agents are transforming how we build software — from simple chatbots to autonomous systems that reason, plan, and execute. Here's why every developer needs to understand them.",
    category: "AI Agents",
    date: "Mar 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "building-rag-systems-from-scratch",
    title: "Building RAG Systems from Scratch: A Practical Guide",
    excerpt:
      "Retrieval-Augmented Generation is the backbone of modern AI applications. Learn how to architect a production-ready RAG pipeline step by step.",
    category: "RAG Systems",
    date: "Mar 5, 2026",
    readTime: "8 min read",
  },
  {
    slug: "multi-agent-systems-explained",
    title: "Multi-Agent Systems Explained: Architecture & Patterns",
    excerpt:
      "How do you get multiple AI agents to collaborate effectively? We break down the key architectures, communication patterns, and real-world use cases.",
    category: "Multi-Agent",
    date: "Feb 28, 2026",
    readTime: "7 min read",
  },
  {
    slug: "ai-automation-for-businesses",
    title: "AI Automation for Businesses: Where to Start",
    excerpt:
      "Not every process needs AI. Learn how to identify high-impact automation opportunities and build workflows that actually save time and money.",
    category: "Automation",
    date: "Feb 20, 2026",
    readTime: "5 min read",
  },
  {
    slug: "from-zero-to-ai-microsaas",
    title: "From Zero to AI MicroSaaS: Lessons from Our Builders",
    excerpt:
      "Real stories from our Gen AI Architect Program graduates who went from learning Python to launching their own AI-powered SaaS products.",
    category: "MicroSaaS",
    date: "Feb 14, 2026",
    readTime: "6 min read",
  },
  {
    slug: "voice-ai-with-livekit",
    title: "Building Voice AI Assistants with LiveKit",
    excerpt:
      "Voice is the next frontier for AI interaction. Learn how to build real-time voice AI agents using LiveKit and integrate them into your applications.",
    category: "Voice AI",
    date: "Feb 8, 2026",
    readTime: "7 min read",
  },
];

const categories = ["All", "AI Agents", "RAG Systems", "Multi-Agent", "Automation", "MicroSaaS", "Voice AI"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-secondary/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="badge badge-dot mb-6">Blog</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Insights on{" "}
            <span className="gradient-text">AI Systems</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Deep dives into AI agents, automation, RAG systems, and building
            production-ready AI applications.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
                cat === "All"
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white"
                  : "bg-white/5 text-brand-muted hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group card p-6 hover:border-brand-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                  {post.category}
                </span>
                <span className="text-xs text-brand-muted">{post.readTime}</span>
              </div>

              <h2 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300 leading-snug">
                {post.title}
              </h2>

              <p className="text-brand-muted text-sm leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-brand-muted">{post.date}</span>
                <span className="text-brand-primary text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1">
                  Read more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
          <div className="rounded-2xl bg-brand-bg p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Stay Ahead in AI
            </h2>
            <p className="text-brand-muted mb-6 max-w-lg mx-auto">
              Get weekly insights on AI systems, agents, and automation
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-primary/50 transition-colors"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
