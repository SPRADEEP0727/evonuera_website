"use client";

import { useState } from "react";

const weeks = [
  {
    week: "Week 1",
    title: "Foundations of AI Thinking",
    topics: ["AI Thinking", "AI Fundamentals", "Python for AI", "AI Workflow Coding"],
    outcomes: [
      "Understand what AI, ML, Deep Learning, and Generative AI actually mean",
      "Learn how to think logically with AI systems instead of randomly using tools",
      "Set up your own AI development environment (step-by-step, beginner friendly)",
      "Understand basic programming concepts needed for AI workflows",
      "Build and run your first simple AI-powered application",
    ],
  },
  {
    week: "Week 2",
    title: "Prompt Engineering & AI Tools",
    topics: ["Prompt Engineering", "Advanced Prompting", "AI Reliability", "Build Simple AI App"],
    outcomes: [
      "Learn how to structure prompts to control AI output",
      "Improve AI reasoning using practical prompting techniques",
      "Reduce wrong or misleading AI responses",
      "Generate structured outputs usable in business or development",
      "Use AI tools for faster learning, coding, research, and productivity",
    ],
  },
  {
    week: "Week 3",
    title: "LLM Orchestration & Knowledge Systems (RAG)",
    topics: ["LLM Orchestration", "LangChain", "RAG Systems", "Context & Memory"],
    outcomes: [
      "Understand how AI searches and retrieves information from data",
      "Build a system that answers questions from your own documents",
      "Learn how businesses give AI access to company knowledge",
      "Improve AI accuracy using better context handling",
      "Create a working AI knowledge assistant",
    ],
  },
  {
    week: "Week 4",
    title: "AI Automation & Workflows (N8N)",
    topics: ["AI Automation (N8N)", "Workflow Design", "API Integration", "AI Workflows"],
    outcomes: [
      "Understand how repetitive business tasks can be automated",
      "Build workflows that connect AI with Email, WhatsApp, Google Apps, etc.",
      "Create structured automation without heavy coding",
      "Build AI-powered systems for classification, summarization, and reporting",
      "Deploy automation systems useful for real-world business needs",
    ],
  },
  {
    week: "Week 5",
    title: "AI Agents & Intelligent Automation",
    topics: ["AI Agents", "Tool-Using Agents", "Memory Agents", "Agent Applications"],
    outcomes: [
      "Understand what an AI agent is and how it thinks and acts",
      "Build an AI system that can take actions instead of just giving answers",
      "Add memory so the AI can remember conversations and data",
      "Control and improve agent decisions safely",
      "Build a functional intelligent assistant for real use cases",
    ],
  },
  {
    week: "Week 6",
    title: "Advanced Agentic AI Systems",
    topics: ["Multi-Agent Systems", "Agent Collaboration", "CrewAI Framework", "Agent Architectures"],
    outcomes: [
      "Understand how multiple AI agents can work together like a team",
      "Design systems where different AI roles collaborate on tasks",
      "Build structured multi-agent workflows",
      "Handle coordination and communication between agents",
      "Create advanced AI systems capable of solving complex tasks",
    ],
  },
  {
    week: "Week 7",
    title: "Voice Agents & Advanced Autogen Systems",
    topics: ["Voice AI Systems", "LiveKit Voice Agents", "Autogen Agents", "Human-in-the-Loop AI"],
    outcomes: [
      "Understand how voice-based AI systems work in real time",
      "Build a voice-enabled AI assistant",
      "Connect speech input and AI responses into a working system",
      "Create programmable AI agents using structured frameworks",
      "Deploy a voice AI system usable in real-world scenarios",
    ],
  },
  {
    week: "Week 8",
    title: "MCP & Production AI Systems",
    topics: ["MCP AI Systems", "Agent Infrastructure", "Production Deployment"],
    outcomes: [
      "Understand how AI systems are structured for production use",
      "Connect AI agents securely with external tools and services",
      "Design scalable AI systems for real-world deployment",
      "Learn reliability, monitoring, and optimization basics",
      "Prepare AI applications for professional-level usage",
    ],
  },
];

export default function CurriculumSection() {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            8-Week Program
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            What You&apos;ll Learn{" "}
            <span className="gradient-text">Week by Week</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            A structured path from AI fundamentals to production-ready AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — week tabs */}
          <div className="lg:col-span-4 space-y-3">
            {weeks.map((item, idx) => (
              <button
                key={item.week}
                onClick={() => setActiveWeek(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${
                  activeWeek === idx
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-transparent shadow-lg"
                    : "bg-white border-gray-200 hover:border-brand-primary/40 hover:shadow-md"
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-extrabold shrink-0 ${
                    activeWeek === idx
                      ? "bg-white/20 text-white"
                      : "bg-brand-primary/10 text-brand-primary"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${
                      activeWeek === idx ? "text-white/80" : "text-brand-primary"
                    }`}
                  >
                    {item.week}
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      activeWeek === idx ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right — outcome details */}
          <div className="lg:col-span-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 h-full">
              <div className="mb-6">
                <p className="text-brand-primary text-sm font-semibold uppercase tracking-wider mb-2">
                  {weeks[activeWeek].week}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  {weeks[activeWeek].title}
                </h3>
                <p className="text-gray-500 text-base">
                  By the end of this week, you will be able to:
                </p>
              </div>

              <ul className="space-y-4">
                {weeks[activeWeek].outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <span className="w-7 h-7 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-brand-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-base leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>

              {/* Topics covered */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm font-medium mb-3">Topics covered:</p>
                <div className="flex flex-wrap gap-2">
                  {weeks[activeWeek].topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-sm font-medium px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capstone project */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-center shadow-lg">
          <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
            Capstone Project
          </p>
          <p className="text-white font-bold text-xl">
            Build & Launch Your AI MicroSaaS Product
          </p>
          <p className="text-white/70 text-sm mt-2">
            Turn an AI idea into a real product — build it from scratch, deploy it live, integrate payments, and launch a revenue-generating AI MicroSaaS.
          </p>
        </div>
      </div>
    </section>
  );
}
