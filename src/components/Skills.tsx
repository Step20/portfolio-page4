import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    color: "#818cf8",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    label: "Frontend",
    color: "#a78bfa",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Lit",
      "Tailwind",
      "Redux",
      "HTML",
      "CSS",
      "SASS",
    ],
  },
  {
    label: "Backend & Databases",
    color: "#60a5fa",
    skills: [
      "Node.js",
      "Express",
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    label: "AI & ML",
    color: "#34d399",
    skills: [
      "Retrieval-Augmented Generation",
      "Prompt Engineering",
      "LLM API Integration",
      "Gemini",
      "OpenAI",
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#fb923c",
    skills: [
      "AWS S3",
      "Stripe",
      "Git",
      "Jira",
      "Figma",
      "Agile/Scrum",
      "Runway",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
              04 / Skills
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="space-y-9">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09 }}
            >
              {/* Group label */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: group.color }}
                />
                <p
                  className="text-xs font-mono uppercase tracking-[0.2em]"
                  style={{ color: "#334155" }}
                >
                  {group.label}
                </p>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.09 + j * 0.025 }}
                    whileHover={{
                      scale: 1.06,
                      transition: { duration: 0.15 },
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium cursor-default transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94a3b8",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
