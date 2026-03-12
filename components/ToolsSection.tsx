const tools = [
  "Python", "OpenAI", "Claude", "LangChain", "LangGraph",
  "AutoGen", "CrewAI", "n8n", "Flowise", "Streamlit",
  "FastAPI", "Flask", "Supabase", "Pinecone", "ChromaDB",
  "Docker", "GitHub", "VS Code", "Cursor", "Hugging Face",
  "Eleven Labs", "Whisper", "Redis", "Playwright", "Selenium",
  "Jupyter", "Google Colab", "Vercel", "Railway", "Notion AI",
];

export default function ToolsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-both relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="badge badge-dot mb-6">Tech Stack</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Tools You&apos;ll{" "}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            The exact tools and frameworks used in production AI systems across the industry.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {tools.map((tool) => (
            <span
              key={tool}
              className="bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-brand-primary/5 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-default"
            >
              {tool}
            </span>
          ))}
          <span className="bg-brand-primary/10 border border-brand-primary/30 text-brand-secondary text-sm font-medium px-4 py-2 rounded-full">
            + many more
          </span>
        </div>
      </div>
    </section>
  );
}
