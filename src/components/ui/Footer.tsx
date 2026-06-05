"use client";
import { Heart, Terminal } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-500/10 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal size={16} className="text-emerald-500" />
            <span className="font-mono text-sm text-emerald-500">rizqi@khamami:~$</span>
          </div>

          {/* Credit */}
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            {t.footer.made_with}
            <Heart size={12} className="text-emerald-500 fill-emerald-500" />
            {t.footer.by}
          </p>

          {/* Rights */}
          <p className="text-xs text-gray-600 font-mono">
            © {year} · {t.footer.rights}
          </p>
        </div>

        {/* Stack badge */}
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
            <span key={tech} className="tag text-gray-500 border-gray-800">{tech}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
