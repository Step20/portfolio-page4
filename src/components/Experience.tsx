import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Jack Henry & Associates",
    role: "Software Engineer",
    period: "March 2026",
    location: "Remote",
    current: true,
    bullets: [
      "Re-architected and rebuilt a major customer information management section, improving modularity, performance, and maintainability.",
      "Designed and implemented an AI-powered suggestion engine using Retrieval-Augmented Generation (RAG) that provides contextual recommendations — improving user efficiency and reducing manual navigation friction.",
      "Built modular web components with Lit and TypeScript, collaborating closely with backend/API teams.",
      "Delivered production-ready features independently within Agile/Scrum environments.",
    ],
    tech: ["TypeScript", "Lit", "RAG", "REST APIs", "Agile"],
  },
  {
    company: "Jack Henry & Associates",
    role: "Software Engineer Intern → Apprentice",
    period: "June 2024 – September 2025",
    location: "Remote",
    current: false,
    bullets: [
      "Developed fintech solutions using lit-html web components, Context API, TypeScript, CSS, Git, and REST APIs while collaborating with backend teams.",
      "Led a team of 3 engineers in implementing a new feature, improving UX and application functionality.",
      "Conducted comprehensive end-to-end (E2E) and component testing, ensuring high code quality and reliability.",
      "Participated in sprint planning and delivered solutions on schedule using Jira in Agile/Scrum environments.",
    ],
    tech: ["TypeScript", "lit-html", "E2E Testing", "Git", "Jira", "REST APIs"],
  },
];

const cardStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.07)",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-28 px-6"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(13,13,26,0.5) 30%, rgba(13,13,26,0.5) 70%, transparent)",
      }}
    >
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
              02 / Experience
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-4 bottom-4 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #6366f1aa, #8b5cf666, transparent)",
            }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3 top-8 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    background: exp.current ? "#6366f1" : "#1e1b4b",
                    borderColor: exp.current ? "#818cf8" : "#4338ca",
                    boxShadow: exp.current
                      ? "0 0 12px rgba(99,102,241,0.5)"
                      : "none",
                  }}
                />

                <div
                  className="rounded-2xl p-6 transition-all duration-300 group"
                  style={cardStyle}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: "rgba(99,102,241,0.15)",
                              color: "#818cf8",
                              border: "1px solid rgba(99,102,241,0.3)",
                            }}
                          >
                            Most Recent
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: "#818cf8" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm" style={{ color: "#64748b" }}>
                        {exp.period}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "#334155" }}
                      >
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "#64748b" }}
                      >
                        <span
                          className="shrink-0 mt-0.5"
                          style={{ color: "#6366f1" }}
                        >
                          ›
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono"
                        style={{
                          background: "rgba(99,102,241,0.08)",
                          color: "#818cf8",
                          border: "1px solid rgba(99,102,241,0.2)",
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
      </div>
    </section>
  );
}
