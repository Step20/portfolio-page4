import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "3+", label: "AI Products Built" },
  { value: "Jack Henry", label: "Current Employer" },
  { value: "B.S. CS", label: "Florida Int'l Univ." },
];

const cardStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.07)",
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6">
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
              01 / About
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-3 space-y-4 leading-relaxed text-base"
            style={{ color: "#64748b" }}
          >
            <p>
              I'm a Software Engineer based in Miami, FL, currently working at{" "}
              <span style={{ color: "#818cf8" }} className="font-medium">
                Jack Henry &amp; Associates
              </span>
              , where I build fintech solutions and AI-powered features for
              banking customers.
            </p>
            <p>
              I hold a B.S. in Computer Science from{" "}
              <span className="text-slate-300 font-medium">
                Florida International University
              </span>{" "}
              (Dec 2025). My coursework spans Algorithms, AI, Machine Learning,
              Systems Programming, and more.
            </p>
            <p>
              I specialize in{" "}
              <span className="text-slate-300 font-medium">TypeScript</span>,{" "}
              <span className="text-slate-300 font-medium">React</span>, and AI
              integrations using{" "}
              <span className="text-slate-300 font-medium">
                Retrieval-Augmented Generation (RAG)
              </span>
              . I've shipped production features independently, led teams, and
              built AI operating systems that solve real problems.
            </p>
            <p>
              Outside of engineering, I'm exploring the intersection of AI and
              product design — building tools like Curslo, inurō, and Bizly that
              centralize workflows and automate complex processes.
            </p>

            <div className="pt-3">
              <a
                href="mailto:armand.robinson20@gmail.com"
                className="inline-flex items-center gap-1.5 font-medium text-sm transition-colors hover:opacity-80"
                style={{ color: "#818cf8" }}
              >
                armand.robinson20@gmail.com
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="p-5 rounded-2xl transition-all duration-300"
                style={cardStyle}
              >
                <div
                  className="text-xl font-bold mb-1"
                  style={{ color: "#c4b5fd" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs leading-snug"
                  style={{ color: "#475569" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Education detail card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.65 }}
              className="col-span-2 p-5 rounded-2xl"
              style={cardStyle}
            >
              <div
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "#475569" }}
              >
                Education
              </div>
              <div className="text-white text-sm font-semibold">
                Florida International University
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                B.S. Computer Science · Dec 2025
              </div>
              <div className="text-slate-600 text-xs mt-2 leading-relaxed">
                Algorithms · AI · ML · Systems · Architecture
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
