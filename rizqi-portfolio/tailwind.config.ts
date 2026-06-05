import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        emerald: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          900: "#064e3b",
          950: "#022c22",
        },
        dark: {
          900: "#030712",
          800: "#0a0f1a",
          700: "#0d1526",
          600: "#111827",
          500: "#1a2332",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "typewriter": "typewriter 3s steps(40) forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px #10b981, 0 0 20px #10b981, 0 0 40px #10b981" },
          to: { boxShadow: "0 0 20px #10b981, 0 0 40px #10b981, 0 0 80px #10b981" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#10b981" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)",
        "hero-gradient": "radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(3,7,18,0.9) 100%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      boxShadow: {
        "emerald": "0 0 20px rgba(16,185,129,0.3)",
        "emerald-lg": "0 0 40px rgba(16,185,129,0.4)",
        "card": "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
