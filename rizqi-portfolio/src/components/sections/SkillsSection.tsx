"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Bot, Terminal, Shield, Code, Network } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={18} />,
  bot: <Bot size={18} />,
  terminal: <Terminal size={18} />,
  shield: <Shield size={18} />,
  code: <Code size={18} />,
  network: <Network size={18} />,
};

export default function SkillsSection() {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-emerald-500/30 flex items-center justify-center">
              <Code size={14} className="text-emerald-500" />
            </div>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              {lang === "id" ? "02 / Keahlian" : "02 / Skills"}
            </span>
          </div>
          <h2 className="section-title font-display text-3xl sm:text-4xl font-bold text-white">
            {t.skills.title}
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-lg">{t.skills.subtitle}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.skills.categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1 }}
              className="glass-card glow-border rounded-xl p-6 group transition-all duration-300 cursor-default"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="font-display font-semibold text-sm text-white">{cat.name}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    className="tag hover:border-emerald-500/40 hover:bg-emerald-500/15 cursor-default transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-gray-600 font-mono mt-10"
        >
          {lang === "id"
            ? "// terus belajar dan eksplorasi teknologi baru"
            : "// continuously learning and exploring new technologies"}
        </motion.p>
      </div>
    </section>
  );
}
