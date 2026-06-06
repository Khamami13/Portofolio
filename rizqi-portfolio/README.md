# Rizqi Khamami – Portfolio Website

> Personal portfolio website dengan dark modern tech design, bilingual Indonesia–English, dan aksen warna emerald/green.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Khamami13/portfolio)

---

## 🚀 Tech Stack

| Tech | Versi |
|------|-------|
| [Next.js](https://nextjs.org/) | 14.x (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x |
| [Framer Motion](https://www.framer.com/motion/) | 11.x |
| [Lucide React](https://lucide.dev/) | Latest |

---

## 📁 Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata + JSON-LD
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx        # Hero dengan typewriter effect
│   │   ├── AboutSection.tsx       # Tentang saya + statistik
│   │   ├── SkillsSection.tsx      # Grid keahlian per kategori
│   │   ├── ProjectsSection.tsx    # Kartu proyek dengan status
│   │   ├── ExperienceSection.tsx  # Timeline perjalanan
│   │   ├── GitHubSection.tsx      # Stats GitHub
│   │   └── ContactSection.tsx     # Link kontak + download CV
│   └── ui/
│       ├── Navbar.tsx      # Navigasi + language switcher
│       └── Footer.tsx      # Footer
└── lib/
    ├── content.ts          # SEMUA KONTEN BILINGUAL DI SINI
    ├── lang-context.tsx    # Language context (React)
    └── utils.ts            # cn() helper
```

---

## ⚡ Cara Menjalankan Lokal

```bash
# Clone repo
git clone https://github.com/Khamami13/portfolio.git
cd portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev
# Buka http://localhost:3000
```

---

## 🌐 Deploy ke Vercel

### Cara 1: Via Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Cara 2: Via Vercel Dashboard
1. Push kode ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Deploy otomatis!

---

## ✏️ Cara Edit Konten

**Semua teks website ada di satu file:**
```
src/lib/content.ts
```

File ini berisi konten bilingual Indonesia dan English. Edit bagian yang diinginkan:

```typescript
// Contoh: ganti nama di hero
hero: {
  greeting: "Halo, saya",
  name: "Nama Kamu",    // ← ganti di sini
  ...
}

// Contoh: tambah project baru
projects: {
  items: [
    {
      id: "project-baru",
      title: "Nama Proyek Baru",
      description: "Deskripsi proyek...",
      tags: ["Tag1", "Tag2"],
      status: "Aktif",
      highlight: "Highlight proyek",
      icon: "zap",  // leaf | network | bot | server | zap
    },
    ...
  ]
}
```

---

## 🎨 Kustomisasi Warna

Edit di `tailwind.config.ts` untuk mengubah warna aksen:
```typescript
// Ganti emerald dengan warna lain (misal: cyan, violet, rose)
colors: {
  emerald: { ... }
}
```

Edit di `src/app/globals.css` untuk CSS variables:
```css
:root {
  --emerald: #10b981;         /* Ganti warna utama */
  --emerald-dim: rgba(...);   /* Ganti warna redup */
}
```

---

## 📸 Tambah CV

Taruh file CV di folder `public/`:
```
public/
└── cv-rizqi-khamami.pdf    ← file CV kamu
```

---

## 🔧 Fitur

- ✅ Dark modern tech design
- ✅ Aksen warna emerald/green
- ✅ Responsive mobile & desktop
- ✅ Bilingual Indonesia–English dengan language switcher
- ✅ Hero section dengan typewriter effect
- ✅ About section dengan terminal card
- ✅ Skills section per kategori
- ✅ Projects section dengan status badge
- ✅ Experience timeline (zigzag)
- ✅ GitHub stats section
- ✅ Contact section + CV download
- ✅ Framer Motion animations
- ✅ SEO metadata lengkap
- ✅ Open Graph tags
- ✅ JSON-LD Person schema
- ✅ Deploy-ready Vercel

---

## 📝 License

MIT — bebas digunakan dan dimodifikasi.

---

**Dibuat dengan ❤️ oleh Rizqi Khamami**
