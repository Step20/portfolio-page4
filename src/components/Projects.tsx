import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    name: "Curslo",
    tagline: "AI Academic Operating System",
    description:
      "An AI-powered academic workspace that centralizes courses, assignments, and notes. Built structured retrieval pipelines using embeddings and semantic search. Features a RAG-based study assistant for study guides, quizzes, and roadmaps.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Gemini",
      "Stripe",
      "RAG",
    ],
    gradient:
      "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 100%)",
    accentColor: "#818cf8",
    borderHover: "rgba(99,102,241,0.35)",
    github: "https://github.com/Step20",
    live: null,
  },
  {
    name: "inurō",
    tagline: "AI Brand Operating System",
    description:
      "An AI system that transforms any idea into a full brand identity, content strategy, and automated growth workflows. Built agentic automation pipelines with webhook triggers and integrated multimodal AI (text, image, video) with persistent brand memory via RAG.",
    tech: [
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "OpenAI",
      "Gemini",
      "Runway",
      "AWS S3",
    ],
    gradient:
      "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(192,132,252,0.15) 100%)",
    accentColor: "#c084fc",
    borderHover: "rgba(139,92,246,0.35)",
    github: "https://github.com/Step20",
    live: null,
  },
  {
    name: "Bizly",
    tagline: "AI Business Launch Assistant",
    description:
      "An AI assistant that generates cost breakdowns, launch roadmaps, and structured business feedback. Implements retrieval-based prompt pipelines for contextual decision support tailored to each business idea.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Gemini",
      "Stripe",
      "RAG",
    ],
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.15) 100%)",
    accentColor: "#60a5fa",
    borderHover: "rgba(59,130,246,0.35)",
    github: "https://github.com/Step20",
    live: "https://getbizly.app/",
  },
];

const cardBase = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.07)",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-xs font-mono tracking-[0.25em] uppercase"
              style={{ color: "#818cf8" }}
            >
              03 / Projects
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-sm mt-2" style={{ color: "#475569" }}>
            AI-first products built for real-world workflows.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
              style={cardBase}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: proj.gradient }}
              />

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ border: `1px solid ${proj.borderHover}` }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {proj.name}
                    </h3>
                    <p
                      className="text-xs mt-1 font-medium"
                      style={{ color: proj.accentColor }}
                    >
                      {proj.tagline}
                    </p>
                  </div>
                  <div className="flex gap-2.5 shrink-0 ml-3">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="transition-colors duration-200 hover:text-white"
                      style={{ color: "#334155" }}
                      aria-label="GitHub"
                    >
                      <FiGithub size={17} />
                    </a>
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="transition-colors duration-200 hover:text-white"
                        style={{ color: "#334155" }}
                        aria-label="Live demo"
                      >
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "#475569" }}
                >
                  {proj.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "#475569",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
