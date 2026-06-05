"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = content[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-xl border-b border-emerald-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded border border-emerald-500/40 flex items-center justify-center group-hover:border-emerald-500 group-hover:shadow-emerald transition-all duration-200">
                <Terminal size={14} className="text-emerald-400" />
              </div>
              <span className="font-mono text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
                rizqi@khamami
                <span className="text-emerald-600">:~$</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <button
                onClick={toggle}
                className="flex items-center gap-1 font-mono text-xs border border-emerald-500/30 rounded px-3 py-1.5 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-200"
              >
                <span className={lang === "id" ? "text-emerald-300" : "text-gray-500"}>ID</span>
                <span className="text-gray-600 mx-0.5">/</span>
                <span className={lang === "en" ? "text-emerald-300" : "text-gray-500"}>EN</span>
              </button>

              {/* CV Button */}
              <a
                href="/cv-rizqi-khamami.pdf"
                download
                className="hidden md:flex items-center gap-1.5 text-xs font-semibold btn-primary"
              >
                <Download size={12} />
                {t.hero.cta_cv}
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-emerald-500/10 md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-emerald-400 font-medium py-2 border-b border-emerald-500/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/cv-rizqi-khamami.pdf"
                download
                className="flex items-center justify-center gap-1.5 btn-primary text-sm"
              >
                <Download size={14} />
                {t.hero.cta_cv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
