import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md overflow-hidden">
            <img
              src="/ar-logo2.png"
              alt="AR"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-medium" style={{ color: "#94a3b8" }}>
            Armand Robinson
          </span>
        </div>

        {/* Built with */}
        <p className="text-xs text-center" style={{ color: "#475569" }}>
          Built with React · TypeScript · Tailwind · Framer Motion
        </p>

        {/* Social + year */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Step20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200 hover:text-slate-300"
            style={{ color: "#475569" }}
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/armandrobinsonjr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200 hover:text-slate-300"
            style={{ color: "#475569" }}
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="mailto:armand.robinson20@gmail.com"
            aria-label="Email"
            className="transition-colors duration-200 hover:text-slate-300"
            style={{ color: "#475569" }}
          >
            <FiMail size={16} />
          </a>
          <span className="text-xs" style={{ color: "#334155" }}>
            © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
