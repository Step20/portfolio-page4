import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";

const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: "armand.robinson20@gmail.com",
    href: "mailto:armand.robinson20@gmail.com",
    color: "#818cf8",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "804-299-0532",
    href: "tel:8042990532",
    color: "#a78bfa",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/armandrobinsonjr",
    href: "https://www.linkedin.com/in/armandrobinsonjr",
    color: "#60a5fa",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Step20",
    href: "https://github.com/Step20",
    color: "#94a3b8",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div
              className="flex-1 h-px max-w-24"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span
              className="text-xs font-mono tracking-[0.25em] uppercase"
              style={{ color: "#818cf8" }}
            >
              05 / Contact
            </span>
            <div
              className="flex-1 h-px max-w-24"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p
            className="text-base leading-relaxed max-w-md mx-auto"
            style={{ color: "#475569" }}
          >
            I'm open to new roles, collaborations, and conversations. Whether
            you have a project in mind or just want to connect — reach out.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
        >
          {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
              className={`flex items-center gap-4 p-4 rounded-xl group transition-all duration-200${i === contactItems.length - 1 && contactItems.length % 2 !== 0 ? " sm:col-span-2" : ""}`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                style={{
                  background: `${color}15`,
                  color: color,
                }}
              >
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs mb-0.5" style={{ color: "#334155" }}>
                  {label}
                </p>
                <p
                  className="text-sm font-medium truncate group-hover:text-white transition-colors duration-200"
                  style={{ color: "#94a3b8" }}
                >
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center"
        >
          <motion.a
            href="mailto:armand.robinson20@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 0 40px rgba(99,102,241,0.25)",
            }}
          >
            <FiMail size={17} />
            Say Hello
            <FiArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
