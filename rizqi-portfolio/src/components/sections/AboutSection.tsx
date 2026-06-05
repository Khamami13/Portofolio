"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function AboutSection() {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-emerald-500/30 flex items-center justify-center">
              <User size={14} className="text-emerald-500" />
            </div>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              {lang === "id" ? "01 / Tentang" : "01 / About"}
            </span>
          </div>
          <h2 className="section-title font-display text-3xl sm:text-4xl font-bold text-white">
            {t.about.title}
          </h2>
          <p className="text-emerald-500/70 font-mono text-sm mt-3">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {t.about.bio.map((para, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-[0.95rem]">
                {i === 0 && (
                  <span className="text-emerald-400 font-semibold">
                    {para.slice(0, 20)}
                  </span>
                )}
                {i === 0 ? para.slice(20) : para}
              </p>
            ))}

            {/* Terminal-style bio snippet */}
            <div className="mt-8 font-mono text-xs rounded-lg border border-emerald-500/15 bg-[#0a0f1a] p-4 space-y-1">
              <p className="text-gray-600">{lang === "id" ? "# profil singkat" : "# quick profile"}</p>
              <p><span className="text-emerald-500">name</span><span className="text-gray-500">:</span> <span className="text-white">Rizqi Khamami</span></p>
              <p><span className="text-emerald-500">role</span><span className="text-gray-500">:</span> <span className="text-white">{lang === "id" ? "Penghobi & Praktisi Teknologi" : "Tech Hobbyist & Practitioner"}</span></p>
              <p><span className="text-emerald-500">location</span><span className="text-gray-500">:</span> <span className="text-white">Indonesia</span></p>
              <p><span className="text-emerald-500">status</span><span className="text-gray-500">:</span> <span className="text-emerald-400">{lang === "id" ? "open_to_collaborate" : "open_to_collaborate"}</span></p>
              <p><span className="text-emerald-500">passion</span><span className="text-gray-500">:</span> <span className="text-white">[IoT, AI, Linux, Security]</span></p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-xl p-6 glow-border transition-all duration-300 group cursor-default"
                >
                  <div className="font-display text-4xl font-bold text-emerald-400 mb-2 group-hover:glow-text transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Domains cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 glass-card rounded-xl p-5 glow-border"
            >
              <p className="text-xs text-gray-600 font-mono mb-3 uppercase tracking-wider">
                {lang === "id" ? "Domain Teknologi" : "Tech Domains"}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Electronics", "IoT", "AI Agent", "n8n",
                  "Prompt Engineering", "Linux", "DevSecOps",
                  "DevOps", "Pentest", "Vibe Coding",
                ].map((domain) => (
                  <span key={domain} className="tag">{domain}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
