import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import arLogo from "../assets/ar-logo2.png";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  const handleComplete = useCallback(() => {
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleComplete();
          return 100;
        }
        const increment = prev < 60 ? 2.8 : prev < 85 ? 1.6 : 0.7;
        return Math.min(prev + increment, 100);
      });
    }, 22);
    return () => clearInterval(interval);
  }, [handleComplete]);

  const round = Math.round(progress);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#080810" }}
    >
      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
        }}
      />
      <motion.div
        animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.28, 0.12] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Corner grid lines for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center text-center"
      >
        {/* Logo with spinning gradient ring */}
        <div className="relative mb-8">
          {/* Spinning outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.25 rounded-[28px]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, #6366f1 25%, #a78bfa 50%, transparent 75%)",
              borderRadius: 28,
            }}
          />
          {/* Inner mask */}
          <div
            className="absolute -inset-0.75 rounded-[26px]"
            style={{ background: "#080810" }}
          />

          {/* Logo image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative w-24 h-24 rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 0 50px rgba(99,102,241,0.45), 0 0 100px rgba(99,102,241,0.15)",
            }}
          >
            <img
              src={arLogo}
              alt="Armand Robinson"
              className="w-full h-full p-1 object-contain"
            />
          </motion.div>
        </div>

        {/* Name — staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55, ease: "easeOut" }}
          className="mb-1"
        >
          <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Armand{" "}
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
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.48, duration: 0.5 }}
          className="text-xs tracking-[0.42em] uppercase mb-10 font-medium"
          style={{ color: "#6366f1" }}
        >
          Software Engineer
        </motion.p>

        {/* Progress section */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.4 }}
          className="flex flex-col items-center gap-3 w-64"
        >
          {/* Glowing progress bar */}
          <div
            className="w-full h-0.5 rounded-full overflow-hidden relative"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <motion.div
              className="h-full rounded-full relative"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(to right, #6366f1, #a78bfa, #c084fc)",
              }}
              transition={{ duration: 0.04 }}
            >
              {/* Glow tip */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                  background: "#c084fc",
                  boxShadow: "0 0 10px 3px rgba(192,132,252,0.8)",
                }}
              />
            </motion.div>
          </div>

          {/* Percentage + dots */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#6366f1" }}
                />
              ))}
            </div>
            <p
              className="text-xs font-mono tabular-nums"
              style={{ color: "#475569" }}
            >
              {round}%
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
