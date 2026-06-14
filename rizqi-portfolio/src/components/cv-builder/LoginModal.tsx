"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, LogIn, UserPlus, X, Loader2, Eye, EyeOff } from "lucide-react";

interface Props {
  onLogin: (user: { id: number; email: string; name: string }) => void;
  onClose: () => void;
  lang: "id" | "en";
}

export default function LoginModal({ onLogin, onClose, lang }: Props) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const isId = lang === "id";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const url = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const body =
        mode === "login"
          ? { email, password }
          : { email, password, name };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || (isId ? "Terjadi kesalahan" : "Something went wrong"));
        return;
      }

      onLogin(data.user);
    } catch {
      setError(isId ? "Gagal terhubung ke server" : "Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md"
        >
          <div className="glass-card rounded-2xl border border-emerald-500/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-500/10 px-6 py-5 flex items-center justify-between border-b border-emerald-500/10">
              <div>
                <h2 className="text-lg font-display font-bold text-white">
                  {mode === "login"
                    ? isId
                      ? "Masuk ke CV Builder"
                      : "Sign in to CV Builder"
                    : isId
                    ? "Daftar Akun Baru"
                    : "Create New Account"}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  {isId
                    ? "Simpan dan kelola CV kamu secara online"
                    : "Save and manage your CV online"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-white transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              {mode === "register" && (
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    {isId ? "Nama Lengkap" : "Full Name"}
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder={isId ? "Masukkan nama..." : "Enter your name..."}
                      className="w-full bg-dark-800/80 border border-emerald-500/15 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={isId ? "email@contoh.com" : "email@example.com"}
                    className="w-full bg-dark-800/80 border border-emerald-500/15 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full bg-dark-800/80 border border-emerald-500/15 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-xs text-red-400"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : mode === "login" ? (
                  <LogIn size={16} />
                ) : (
                  <UserPlus size={16} />
                )}
                {mode === "login"
                  ? isId
                    ? "Masuk"
                    : "Sign In"
                  : isId
                  ? "Daftar"
                  : "Sign Up"}
              </button>
            </form>

            {/* Footer toggle */}
            <div className="px-6 py-4 border-t border-emerald-500/10 text-center">
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "login" ? "register" : "login");
                  setError("");
                }}
                className="text-xs text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {mode === "login"
                  ? isId
                    ? "Belum punya akun? Daftar"
                    : "Don't have an account? Sign Up"
                  : isId
                  ? "Sudah punya akun? Masuk"
                  : "Already have an account? Sign In"}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
