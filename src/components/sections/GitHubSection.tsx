"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Star, GitFork, Activity } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function GitHubSection() {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const ghUser = t.github.username;

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-emerald-500/30 flex items-center justify-center">
              <Github size={14} className="text-emerald-500" />
            </div>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              {lang === "id" ? "05 / GitHub" : "05 / GitHub"}
            </span>
          </div>
          <h2 className="section-title font-display text-3xl sm:text-4xl font-bold text-white">
            {t.github.title}
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-lg">{t.github.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* GitHub stats cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Stats image from github-readme-stats */}
            <div className="glass-card glow-border rounded-xl p-4 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${ghUser}&show_icons=true&theme=transparent&hide_border=true&title_color=10b981&icon_color=10b981&text_color=9ca3af&bg_color=00000000`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </div>

            {/* Top langs */}
            <div className="glass-card glow-border rounded-xl p-4 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUser}&layout=compact&theme=transparent&hide_border=true&title_color=10b981&text_color=9ca3af&bg_color=00000000`}
                alt="Top Languages"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {/* Streak stats */}
            <div className="glass-card glow-border rounded-xl p-4 overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${ghUser}&theme=transparent&hide_border=true&ring=10b981&fire=10b981&currStreakLabel=10b981&sideLabels=6b7280&currStreakNum=f0fdf4&sideNums=f0fdf4&dates=6b7280`}
                alt="GitHub Streak"
                className="w-full"
                loading="lazy"
              />
            </div>

            {/* Quick info */}
            <div className="glass-card glow-border rounded-xl p-5 space-y-4">
              <h3 className="font-mono text-xs text-emerald-500 uppercase tracking-wider">
                {lang === "id" ? "Aktivitas Terkini" : "Recent Activity"}
              </h3>
              {[
                { icon: Activity, text: lang === "id" ? "Kontribusi aktif setiap minggu" : "Active contributions every week", color: "text-emerald-400" },
                { icon: Star, text: lang === "id" ? "Proyek open-source publik" : "Public open-source projects", color: "text-yellow-400" },
                { icon: GitFork, text: lang === "id" ? "Fork & kontribusi ke komunitas" : "Fork & contribute to community", color: "text-blue-400" },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center ${color}`}>
                    <Icon size={14} />
                  </div>
                  <span className="text-gray-400 text-sm">{text}</span>
                </div>
              ))}

              <a
                href={`https://github.com/${ghUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-outline text-sm justify-center mt-2 w-full"
              >
                <Github size={14} />
                {t.github.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
