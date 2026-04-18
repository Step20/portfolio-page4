import { motion, type Variants } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiFileText,
} from "react-icons/fi";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/Step20",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/armandrobinsonjr",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: "mailto:armand.robinson20@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "25%",
          left: "15%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%",
          right: "10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#4ade80",
                boxShadow: "0 0 8px #4ade80",
                animation: "pulse 2s infinite",
              }}
            />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-5 leading-[1.05] tracking-tight"
        >
          <span className="text-white">Armand</span>{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Robinson
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl font-medium mb-4"
          style={{ color: "#94a3b8" }}
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#475569" }}
        >
          Building intelligent, production-ready products — from fintech
          platforms to AI-powered operating systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 0 30px rgba(99,102,241,0.3)",
            }}
          >
            View Projects
          </motion.button>

          <motion.a
            href="/resume-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <FiFileText size={16} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-5"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: "#818cf8" }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
              style={{ color: "#475569" }}
              className="transition-colors duration-200"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.4,
          duration: 1.8,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-10 focus:outline-none"
        style={{ color: "#334155" }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.button>
    </section>
  );
}
