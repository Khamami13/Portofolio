import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Builder",
  description: "Buat CV profesional dengan template modern, klasik, atau minimal. Didukung oleh AI.",
};

export default function CVBuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
