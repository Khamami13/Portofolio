"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, Save, Download, LogOut, Terminal,
  Loader2, CheckCircle, AlertCircle, Eye, EyeOff,
  Lock, ArrowLeft,
} from "lucide-react";
import type { CVData, TemplateType } from "@/lib/cv-types";
import { defaultCVData } from "@/lib/cv-types";
import LoginModal from "@/components/cv-builder/LoginModal";
import CVEditor from "@/components/cv-builder/CVEditor";
import CVPreview from "@/components/cv-builder/CVPreview";
import TemplateSelector from "@/components/cv-builder/TemplateSelector";
import { getPortfolioData } from "@/lib/portfolio-data";

export default function CVBuilderPage() {
  const [user, setUser] = useState<{id:number;email:string;name:string}|null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cvData, setCvData] = useState<CVData>(defaultCVData);
  const [template, setTemplate] = useState<TemplateType>("modern");
  const [lang, setLang] = useState<"id"|"en">("id");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<{type:"ok"|"err";text:string}|null>(null);
  const [showPreview, setShowPreview] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const isId = lang === "id";

  // Check auth on mount
  useEffect(() => {
    fetch("/api/auth/me").then(r => r.json()).then(d => {
      if (d.user) setUser(d.user);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  // Load CV data when user logs in
  useEffect(() => {
    if (!user) return;
    fetch("/api/cv").then(r => r.json()).then(d => {
      if (d.data && Object.keys(d.data).length > 0) {
        setCvData(d.data);
        if (d.template) setTemplate(d.template);
        if (d.lang) setLang(d.lang);
      }
    }).catch(() => {});
  }, [user]);

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg(null);
    try {
      const res = await fetch("/api/cv", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ data: cvData, template, lang }),
      });
      if (res.ok) setSaveMsg({type:"ok",text:isId?"Tersimpan!":"Saved!"});
      else setSaveMsg({type:"err",text:isId?"Gagal menyimpan":"Failed to save"});
    } catch { setSaveMsg({type:"err",text:isId?"Error koneksi":"Connection error"}); }
    finally { setSaving(false); setTimeout(()=>setSaveMsg(null),3000); }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout",{method:"POST"});
    setUser(null);
    setCvData(defaultCVData);
  };

  const handleExportPDF = async () => {
    if (!previewRef.current) return;
    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");
    const canvas = await html2canvas(previewRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pw = pdf.internal.pageSize.getWidth();
    const ph = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pw / canvas.width, ph / canvas.height);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width * ratio, canvas.height * ratio);
    pdf.save(`CV-${cvData.profile.fullName || "Untitled"}.pdf`);
  };

  const handleAIGenerate = () => {
    setAiLoading(true);
    setTimeout(() => {
      const portfolio = getPortfolioData(lang);
      const enhanced: CVData = {
        ...portfolio,
        profile: {
          ...portfolio.profile,
          summary: lang === "id"
            ? "Praktisi teknologi berpengalaman dengan keahlian mendalam di bidang IoT, AI Agent Development, dan DevSecOps. Memiliki track record membangun solusi end-to-end dari perancangan hardware elektronik hingga implementasi AI agent cerdas. Terbiasa bekerja dengan ekosistem Linux, container orchestration, dan workflow automation. Passionate dalam mengeksplorasi teknologi cutting-edge dan menerapkannya untuk memecahkan masalah nyata."
            : "Experienced technology practitioner with deep expertise in IoT, AI Agent Development, and DevSecOps. Proven track record of building end-to-end solutions from electronic hardware design to intelligent AI agent implementation. Proficient in Linux ecosystem, container orchestration, and workflow automation. Passionate about exploring cutting-edge technology and applying it to solve real-world problems.",
        },
      };
      setCvData(enhanced);
      setAiLoading(false);
    }, 2000);
  };

  const updateLang = (newLang: "id"|"en") => {
    setLang(newLang);
    setCvData(prev => ({...prev, language: newLang}));
  };

  // ===== LOADING STATE =====
  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <Loader2 size={32} className="text-emerald-500 animate-spin" />
      </div>
    );
  }

  // ===== NOT LOGGED IN — SHOW LOGIN GATE =====
  if (!user) {
    return (
      <main className="min-h-screen bg-[#030712] relative flex items-center justify-center">
        {/* Background */}
        <div className="fixed inset-0 bg-grid opacity-100 pointer-events-none" />
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-md mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg border border-emerald-500/40 flex items-center justify-center bg-emerald-500/10">
                <FileText size={20} className="text-emerald-400" />
              </div>
            </div>
            <h1 className="font-display text-2xl font-bold text-white mb-2">CV Builder</h1>
            <p className="text-sm text-gray-400">
              {isId ? "Masuk untuk membuat dan mengelola CV profesional kamu" : "Sign in to create and manage your professional CV"}
            </p>
          </motion.div>

          {/* Login/Register Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <LoginModal
              lang={lang}
              onLogin={u => setUser(u)}
              onClose={() => {}}
              embedded={true}
            />
          </motion.div>

          {/* Language toggle + Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-center justify-between"
          >
            <a href="/" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors">
              <ArrowLeft size={14} />
              {isId ? "Kembali ke Portfolio" : "Back to Portfolio"}
            </a>
            <button onClick={()=>updateLang(lang==="id"?"en":"id")} className="flex items-center gap-1 font-mono text-xs border border-emerald-500/30 rounded px-2.5 py-1 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all">
              <span className={lang==="id"?"text-emerald-300":"text-gray-500"}>ID</span>
              <span className="text-gray-600 mx-0.5">/</span>
              <span className={lang==="en"?"text-emerald-300":"text-gray-500"}>EN</span>
            </button>
          </motion.div>
        </div>
      </main>
    );
  }

  // ===== LOGGED IN — SHOW EDITOR =====
  return (
    <main className="min-h-screen bg-[#030712] relative">
      {/* Background */}
      <div className="fixed inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-emerald-500/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded border border-emerald-500/40 flex items-center justify-center group-hover:border-emerald-500 transition-all">
                <Terminal size={12} className="text-emerald-400" />
              </div>
              <span className="font-mono text-xs text-emerald-400 hidden sm:inline">
                rizqi@khamami<span className="text-emerald-600">:~$</span>
              </span>
            </a>
            <div className="w-px h-5 bg-emerald-500/15" />
            <div className="flex items-center gap-1.5">
              <FileText size={16} className="text-emerald-400" />
              <span className="font-display font-semibold text-white text-sm">CV Builder</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button onClick={()=>updateLang(lang==="id"?"en":"id")} className="flex items-center gap-1 font-mono text-xs border border-emerald-500/30 rounded px-2.5 py-1 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all">
              <span className={lang==="id"?"text-emerald-300":"text-gray-500"}>ID</span>
              <span className="text-gray-600 mx-0.5">/</span>
              <span className={lang==="en"?"text-emerald-300":"text-gray-500"}>EN</span>
            </button>

            {/* Preview toggle (mobile) */}
            <button onClick={()=>setShowPreview(!showPreview)} className="lg:hidden flex items-center gap-1 text-xs border border-emerald-500/30 rounded px-2.5 py-1 text-emerald-400 hover:border-emerald-500 transition-all">
              {showPreview?<EyeOff size={14}/>:<Eye size={14}/>}
              <span className="hidden sm:inline">{showPreview?(isId?"Sembunyikan":"Hide"):(isId?"Preview":"Preview")}</span>
            </button>

            {/* Save */}
            <button onClick={handleSave} disabled={saving} className="flex items-center gap-1.5 text-xs font-medium border border-emerald-500/30 rounded px-2.5 py-1 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all disabled:opacity-50">
              {saving?<Loader2 size={14} className="animate-spin"/>:<Save size={14}/>}
              {isId?"Simpan":"Save"}
            </button>

            {/* Export PDF */}
            <button onClick={handleExportPDF} className="flex items-center gap-1.5 text-xs font-semibold btn-primary py-1 px-2.5">
              <Download size={14}/>{isId?"Ekspor PDF":"Export PDF"}
            </button>

            {/* User info + logout */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 hidden md:inline">{user.name}</span>
              <button onClick={handleLogout} className="text-gray-500 hover:text-red-400 transition-colors p-1"><LogOut size={16}/></button>
            </div>
          </div>
        </div>

        {/* Save message */}
        <AnimatePresence>
          {saveMsg && (
            <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs ${saveMsg.type==="ok"?"bg-emerald-500/15 text-emerald-400 border border-emerald-500/30":"bg-red-500/15 text-red-400 border border-red-500/30"}`}>
              {saveMsg.type==="ok"?<CheckCircle size={14}/>:<AlertCircle size={14}/>}{saveMsg.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-6">
          {/* Editor panel */}
          <div className={`${showPreview?"w-full lg:w-[480px] xl:w-[520px]":"w-full max-w-3xl mx-auto"} flex-shrink-0 space-y-5`}>
            <TemplateSelector selected={template} onSelect={setTemplate} onAIGenerate={handleAIGenerate} aiLoading={aiLoading} lang={lang} />
            <CVEditor data={cvData} onChange={setCvData} lang={lang} />
          </div>

          {/* Preview panel */}
          {showPreview && (
            <div className="hidden lg:block flex-1 min-w-0">
              <div className="sticky top-20">
                <h3 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
                  <Eye size={16} className="text-emerald-400" />
                  {isId ? "Preview CV" : "CV Preview"}
                </h3>
                <div className="bg-gray-900/50 rounded-xl border border-emerald-500/10 p-4 overflow-hidden" style={{height:"calc(100vh - 140px)"}}>
                  <div className="overflow-auto h-full custom-scrollbar">
                    <CVPreview data={{...cvData, language: lang}} template={template} previewRef={previewRef} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
