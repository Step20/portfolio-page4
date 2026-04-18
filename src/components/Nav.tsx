import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["about", "experience", "projects", "skills", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current ?? "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div
        className="transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,16,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img
                src="/ar-logo2.png"
                alt="AR"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white text-sm font-semibold hidden sm:block">
              Armand Robinson
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm cursor-pointer transition-colors duration-200 focus:outline-none"
                style={{
                  color:
                    activeSection === link.toLowerCase()
                      ? "#6366f1"
                      : "#94a3b8",
                }}
              >
                {link}
              </button>
            ))}

            <motion.a
              href="mailto:armand.robinson20@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 cursor-pointer rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-85"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              Hire Me
            </motion.a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <motion.span
                animate={
                  mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={
                  mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                className="block h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(8,8,16,0.97)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(link)}
                    className="text-slate-300 text-left py-1.5 hover:text-white transition-colors text-sm focus:outline-none"
                  >
                    {link}
                  </button>
                ))}
                <a
                  href="mailto:armand.robinson20@gmail.com"
                  className="mt-2 px-4 py-2.5 rounded-lg text-white text-sm font-medium text-center"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
