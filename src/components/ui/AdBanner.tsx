"use client";

import type { ScriptHTMLAttributes } from "react";

/**
 * Iklan Adsterra untuk khamami.my.id (Native Banner + Banner 300x250).
 * Ditempatkan di bawah konten utama, di atas footer — sopan, tidak
 * mengganggu hero maupun isi portfolio. Kode iklan dipakai persis
 * seperti yang diterbitkan Adsterra (Website ID 6225792).
 *
 * Catatan: atribut fetchpriority pada <script> Native Banner
 * dipertahankan persis seperti snippet Adsterra; tipe @types/react
 * 18.3 belum mengenal prop itu, jadi props dilewatkan lewat assertion
 * (runtime tetap me-render atribut fetchpriority="high" apa adanya).
 */
const nativeBannerScriptProps = {
  async: true,
  fetchPriority: "high",
  "data-cfasync": "false",
  src: "https://bauval.org/21/d3c48158dbe295a2676628f17ec733b3",
} as unknown as ScriptHTMLAttributes<HTMLScriptElement>;

export default function AdBanner() {
  return (
    <section
      aria-label="Iklan"
      className="relative z-10 mx-auto w-full max-w-5xl px-4 py-10 sm:px-6"
    >
      <div className="rounded-2xl border border-emerald-500/10 bg-white/[0.02] px-4 py-6 text-center">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100/40">
          Iklan
        </p>
        {/* Adsterra Native Banner */}
        <script {...nativeBannerScriptProps} />
        <div id="container-d3c48158dbe295a2676628f17ec733b3" />
        {/* Adsterra Banner 300x250 */}
        <div className="mt-6 flex justify-center">
          <script
            dangerouslySetInnerHTML={{
              __html:
                "atOptions = { 'key' : 'e659d6fb06360c2cd2c0dc05553f6460', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };",
            }}
          />
          <script
            data-cfasync="false"
            src="https://bauval.org/22/e659d6fb06360c2cd2c0dc05553f6460"
          />
        </div>
      </div>
    </section>
  );
}
