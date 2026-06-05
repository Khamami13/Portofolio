"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Download, MessageSquare, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail size={20} />,
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
};

const colorMap: Record<string, string> = {
  linkedin: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
  github: "hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400",
  mail: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400",
};

export default function ContactSection() {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-emerald-500/30 flex items-center justify-center">
              <MessageSquare size={14} className="text-emerald-500" />
            </div>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              {lang === "id" ? "06 / Kontak" : "06 / Contact"}
            </span>
          </div>
          <h2 className="section-title font-display text-3xl sm:text-4xl font-bold text-white mx-auto">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-md mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-400 text-sm leading-relaxed mb-10"
          >
            {t.contact.description}
          </motion.p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {t.contact.links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`glass-card rounded-xl p-5 flex flex-col items-center gap-3 group border border-emerald-500/10 text-gray-400 transition-all duration-300 ${colorMap[link.icon]}`}
              >
                <div className="w-12 h-12 rounded-xl border border-current/20 bg-current/5 flex items-center justify-center transition-all">
                  {iconMap[link.icon]}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm text-white mb-0.5">{link.label}</div>
                  <div className="text-xs text-gray-600">{link.hint}</div>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -mb-1 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* CV download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="glass-card glow-border rounded-xl p-6 flex flex-col sm:flex-row items-center gap-5"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Download size={20} />
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="font-display font-semibold text-white mb-1">Curriculum Vitae</div>
              <div className="text-xs text-gray-500">{t.contact.cv_note}</div>
            </div>
            <a
              href="/cv-rizqi-khamami.pdf"
              download
              className="btn-primary flex items-center gap-2 text-sm flex-shrink-0"
            >
              <Download size={14} />
              {lang === "id" ? "Unduh CV" : "Download CV"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
