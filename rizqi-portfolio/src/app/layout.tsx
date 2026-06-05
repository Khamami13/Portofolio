import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/lang-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://rizqikhamami.vercel.app"),
  title: {
    default: "Rizqi Khamami – IoT, AI Agent & DevSecOps Enthusiast",
    template: "%s | Rizqi Khamami",
  },
  description:
    "Portfolio Rizqi Khamami – penghobi dan praktisi teknologi di bidang Electronics, IoT, AI Agent, n8n, Linux, DevSecOps, dan Prompt Engineering.",
  keywords: [
    "Rizqi Khamami",
    "IoT",
    "AI Agent",
    "n8n",
    "DevSecOps",
    "Linux",
    "Electronics",
    "Prompt Engineering",
    "Vibe Coding",
    "MikroTik",
    "Pentest",
    "Portfolio",
  ],
  authors: [{ name: "Rizqi Khamami", url: "https://github.com/rizqikhamami" }],
  creator: "Rizqi Khamami",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://rizqikhamami.vercel.app",
    siteName: "Rizqi Khamami Portfolio",
    title: "Rizqi Khamami – IoT, AI Agent & DevSecOps Enthusiast",
    description:
      "Penghobi teknologi yang membangun solusi nyata di persimpangan hardware, otomasi, dan kecerdasan buatan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizqi Khamami Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizqi Khamami – IoT, AI Agent & DevSecOps",
    description: "Technology hobbyist building at the intersection of hardware, automation, and AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rizqi Khamami",
  url: "https://rizqikhamami.vercel.app",
  sameAs: [
    "https://linkedin.com/in/rizqikhamami",
    "https://github.com/rizqikhamami",
  ],
  jobTitle: "Technology Hobbyist & Practitioner",
  knowsAbout: [
    "IoT",
    "Electronics",
    "AI Agent",
    "n8n",
    "Linux",
    "DevSecOps",
    "Prompt Engineering",
    "MikroTik",
    "Network Automation",
  ],
  description:
    "Penghobi dan praktisi teknologi di bidang Electronics, IoT, AI Agent, n8n, Linux, DevSecOps, dan Prompt Engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-900 text-emerald-50 antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
