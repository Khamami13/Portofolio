"use client";
import { motion } from "framer-motion";
import { Layout, BookOpen, Minus, Sparkles, Check } from "lucide-react";
import type { TemplateType } from "@/lib/cv-types";

interface Props {
  selected: TemplateType;
  onSelect: (t: TemplateType) => void;
  onAIGenerate: () => void;
  aiLoading: boolean;
  lang: "id" | "en";
}

const templates: {
  id: TemplateType;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
  icon: React.ReactNode;
  gradient: string;
  accent: string;
}[] = [
  {
    id: "modern",
    nameId: "Modern",
    nameEn: "Modern",
    descId: "Header gradien emerald, layout bersih dan profesional",
    descEn: "Emerald gradient header, clean professional layout",
    icon: <Layout size={24} />,
    gradient: "from-emerald-500 to-teal-400",
    accent: "emerald",
  },
  {
    id: "classic",
    nameId: "Klasik",
    nameEn: "Classic",
    descId: "Tipografi serif elegan, format tradisional",
    descEn: "Elegant serif typography, traditional format",
    icon: <BookOpen size={24} />,
    gradient: "from-amber-500 to-orange-400",
    accent: "amber",
  },
  {
    id: "minimal",
    nameId: "Minimal",
    nameEn: "Minimal",
    descId: "Layout sidebar, desain bersih dan ringkas",
    descEn: "Sidebar layout, clean and concise design",
    icon: <Minus size={24} />,
    gradient: "from-sky-500 to-blue-400",
    accent: "sky",
  },
];

export default function TemplateSelector({
  selected,
  onSelect,
  onAIGenerate,
  aiLoading,
  lang,
}: Props) {
  const isId = lang === "id";

  return (
    <div className="space-y-4">
      <h3 className="font-display font-semibold text-white text-sm flex items-center gap-2">
        <Layout size={16} className="text-emerald-400" />
        {isId ? "Pilih Template" : "Choose Template"}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {templates.map((tpl) => (
          <motion.button
            key={tpl.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(tpl.id)}
            className={`relative glass-card rounded-xl p-4 text-left border transition-all duration-200 ${
              selected === tpl.id
                ? "border-emerald-500/60 bg-emerald-500/5"
                : "border-emerald-500/10 hover:border-emerald-500/30"
            }`}
          >
            {selected === tpl.id && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check size={12} className="text-white" />
              </div>
            )}
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tpl.gradient} flex items-center justify-center text-white mb-3`}
            >
              {tpl.icon}
            </div>
            <div className="font-semibold text-sm text-white mb-0.5">
              {isId ? tpl.nameId : tpl.nameEn}
            </div>
            <div className="text-xs text-gray-500">{isId ? tpl.descId : tpl.descEn}</div>
          </motion.button>
        ))}
      </div>

      {/* AI Generate Button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={onAIGenerate}
        disabled={aiLoading}
        className="w-full glass-card rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 flex items-center gap-3 transition-all duration-200 group disabled:opacity-50"
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white flex-shrink-0">
          {aiLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Sparkles size={20} />
          )}
        </div>
        <div className="text-left">
          <div className="font-semibold text-sm text-white group-hover:text-purple-300 transition-colors">
            {aiLoading
              ? isId
                ? "AI sedang membuat CV..."
                : "AI is generating your CV..."
              : isId
              ? "Buat dengan AI"
              : "Generate with AI"}
          </div>
          <div className="text-xs text-gray-500">
            {isId
              ? "Biarkan AI menyusun CV profesional dari data kamu"
              : "Let AI compose a professional CV from your data"}
          </div>
        </div>
      </motion.button>
    </div>
  );
}
