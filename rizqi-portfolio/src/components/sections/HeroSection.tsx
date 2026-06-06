"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Download,
  Cpu,
  Bot,
  Terminal,
  Shield,
} from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

const floatingIcons = [
  { Icon: Cpu, x: "10%", y: "20%", delay: 0, size: 18 },
  { Icon: Bot, x: "85%", y: "15%", delay: 0.5, size: 22 },
  { Icon: Terminal, x: "80%", y: "70%", delay: 1, size: 16 },
  { Icon: Shield, x: "12%", y: "75%", delay: 1.5, size: 20 },
];

export default function HeroSection() {
  const { lang } = useLang();
  const t = content[lang];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = t.hero.roles;

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-500/10 pointer-events-none hidden md:block"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 5 + delay,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={size * 3} strokeWidth={0.8} />
        </motion.div>
      ))}

      {/* Center glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-mono text-emerald-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {lang === "id"
            ? "Tersedia untuk kolaborasi"
            : "Available for collaboration"}
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-emerald-500 text-sm sm:text-base mb-2"
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          {t.hero.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "gradient-text" : ""}>
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 sm:h-10 mb-6 flex items-center justify-center"
        >
          <span className="font-mono text-emerald-400 text-lg sm:text-xl">
            <span className="text-gray-500">{">"} </span>
            {displayed}
            <span className="animate-pulse text-emerald-500">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary flex items-center gap-2">
            {t.hero.cta_projects}
          </a>
          <a href="#contact" className="btn-outline flex items-center gap-2">
            {t.hero.cta_contact}
          </a>
          <a
            href="/cv-rizqi-khamami.pdf"
            download
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors font-medium"
          >
            <Download size={14} />
            {t.hero.cta_cv}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: Github,
              url: "https://github.com/Khamami13",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              url: "https://www.linkedin.com/in/rizqi-khamami-475a801b3/",
              label: "LinkedIn",
            },
          ].map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded border border-emerald-500/20 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
