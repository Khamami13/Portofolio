"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderOpen, Leaf, Network, Bot, Server, Zap, ExternalLink, Github } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf size={20} />,
  network: <Network size={20} />,
  bot: <Bot size={20} />,
  server: <Server size={20} />,
  zap: <Zap size={20} />,
};

const statusClass: Record<string, string> = {
  Selesai: "status-completed",
  Completed: "status-completed",
  Aktif: "status-active",
  Active: "status-active",
  Eksperimen: "status-experimental",
  Experimental: "status-experimental",
  Ongoing: "status-ongoing",
};

export default function ProjectsSection() {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-emerald-500/30 flex items-center justify-center">
              <FolderOpen size={14} className="text-emerald-500" />
            </div>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              {lang === "id" ? "03 / Proyek" : "03 / Projects"}
            </span>
          </div>
          <h2 className="section-title font-display text-3xl sm:text-4xl font-bold text-white">
            {t.projects.title}
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-lg">{t.projects.subtitle}</p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="glass-card glow-border rounded-xl p-6 flex flex-col gap-4 group hover:bg-[#0d1526]/90 transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-all">
                  {iconMap[project.icon]}
                </div>
                <span className={`text-[10px] font-mono px-2 py-1 rounded-full ${statusClass[project.status] ?? "status-ongoing"}`}>
                  {project.status}
                </span>
              </div>

              {/* Title & description */}
              <div>
                <h3 className="font-display font-semibold text-white mb-2 text-[0.95rem] leading-snug group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Highlight */}
              <div className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-3 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-emerald-400/80 text-[11px] font-mono">{project.highlight}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-[10px]">{tag}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-emerald-500/10">
                <a
                  href={`https://github.com/rizqikhamami/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  <Github size={12} />
                  GitHub
                </a>
                <a
                  href={`https://github.com/rizqikhamami/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors ml-auto"
                >
                  <ExternalLink size={12} />
                  {lang === "id" ? "Detail" : "Details"}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/rizqikhamami"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <Github size={14} />
            {lang === "id" ? "Lihat Semua di GitHub" : "View All on GitHub"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
