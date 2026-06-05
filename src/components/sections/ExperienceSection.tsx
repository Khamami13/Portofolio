"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function ExperienceSection() {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-emerald-500/30 flex items-center justify-center">
              <Clock size={14} className="text-emerald-500" />
            </div>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              {lang === "id" ? "04 / Perjalanan" : "04 / Journey"}
            </span>
          </div>
          <h2 className="section-title font-display text-3xl sm:text-4xl font-bold text-white">
            {t.experience.title}
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-lg">{t.experience.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/30 to-transparent" />

          <div className="space-y-8">
            {t.experience.items.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"} ml-10 md:ml-0`}>
                    <div className="glass-card glow-border rounded-xl p-5 group hover:bg-[#0d1526]/90 transition-all duration-300">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded px-2.5 py-1 mb-3">
                        <span className="font-mono text-xs text-emerald-400">{item.year}</span>
                      </div>

                      <h3 className="font-display font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag text-[10px]">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#030712] shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
