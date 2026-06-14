# Rizqi Khamami – Portfolio Website & CV Builder

> Personal portfolio website dengan dark modern tech design, bilingual Indonesia–English, dan terintegrasi dengan **CV Builder App** berbasis Neon PostgreSQL.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Khamami13/portfolio)

---

## 🚀 Tech Stack

| Tech | Fungsi | Versi |
|------|--------|-------|
| [Next.js](https://nextjs.org/) | Framework Utama (App Router) | 14.x |
| [TypeScript](https://www.typescriptlang.org/) | Bahasa Pemrograman | 5.x |
| [Tailwind CSS](https://tailwindcss.com/) | Styling Framework | 3.x |
| [Framer Motion](https://www.framer.com/motion/) | Animasi UI | 11.x |
| [Neon PostgreSQL](https://neon.tech/) | Serverless Database (Serverless Driver) | Latest |
| [Bcrypt & Jose](https://github.com/dcodeIO/bcrypt.js) | Kriptografi & Autentikasi (JWT) | Latest |
| [jsPDF & html2canvas](https://artskydj.github.io/jsPDF/docs/jsPDF.html) | Export PDF Client-Side | Latest |

---

## 🔧 Fitur Utama

### 1. Portfolio & Showcase
- ✅ Dark modern tech design dengan aksen warna emerald/green
- ✅ Responsive mobile & desktop
- ✅ Bilingual Indonesia–English dengan language switcher (Global state)
- ✅ Hero section (Typewriter effect) & About section (Terminal card)
- ✅ Skills, Projects (Status badge), Experience timeline (Zigzag), GitHub stats
- ✅ SEO metadata lengkap, Open Graph tags, dan JSON-LD Schema

### 2. Terintegrasi CV Builder (`/cv-builder`)
- ✅ **Aplikasi pembuat CV mandiri** di dalam portfolio
- ✅ **Sistem Autentikasi:** Login/Register menggunakan JWT + Cookies yang aman (HttpOnly)
- ✅ **Cloud Database:** Menyimpan data pengguna dan isi CV di database serverless Neon PostgreSQL.
- ✅ **Bilingual CV:** Buat CV dalam bahasa Indonesia atau Inggris.
- ✅ **Portfolio Import:** Tarik data langsung dari file konfigurasi portfolio dengan fitur "Gunakan data dari portfolio".
- ✅ **3 Pilihan Template CV:** Modern, Classic, dan Minimal.
- ✅ **Export PDF:** Unduh CV ke format file PDF ukuran A4 murni dengan resolusi tinggi.
- ✅ **Simulasi AI Generation:** Tombol untuk meningkatkan dan memperbaiki summary profil CV menggunakan AI.

---

## 📁 Struktur Folder

```
/
├── .env.example             # Contoh format environment variables
├── package.json
├── tailwind.config.ts
└── src/
    ├── app/
    │   ├── api/             # API Routes (Auth Login/Register, CV CRUD)
    │   ├── cv-builder/      # Halaman Aplikasi CV Builder
    │   ├── layout.tsx       # Root layout + metadata
    │   └── page.tsx         # Halaman Utama Portfolio
    ├── components/
    │   ├── cv-builder/      # Komponen khusus Editor CV & Templates
    │   ├── sections/        # Komponen seksi portfolio (Hero, About, dll)
    │   └── ui/              # Komponen shared (Navbar, Footer, Modal)
    └── lib/
        ├── auth.ts          # Logic JWT & Autentikasi
        ├── db.ts            # Logic Koneksi DB Neon
        ├── content.ts       # Semua konfigurasi teks PORTFOLIO BILINGUAL
        ├── portfolio-data.ts# Jembatan mapper data Portfolio ke format CV
        ├── cv-types.ts      # TypeScript interfaces untuk CV
        └── lang-context.tsx # Context state bahasa
```

---

## ⚡ Setup & Cara Menjalankan Lokal

### 1. Kloning dan Install
```bash
git clone https://github.com/Khamami13/Portofolio.git
cd Portofolio
npm install
```

### 2. Konfigurasi Environment Variables
Buat file `.env.local` di root folder dan isi dengan variabel berikut (lihat `.env.example`):
```env
# URL Koneksi Neon PostgreSQL (Dapatkan di dashboard Neon)
DATABASE_URL=postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require

# Rahasia JWT (MINIMAL HARUS 32 KARAKTER)
JWT_SECRET=rahasia-jwt-kamu-yang-panjang-dan-aman-12345
```

### 3. Inisialisasi DB (Otomatis)
Aplikasi akan secara otomatis membuat tabel `cv_users` dan `cv_data` pada database saat endpoint API dipanggil untuk pertama kalinya.

### 4. Jalankan Development Server
```bash
npm run dev
# Buka http://localhost:3000
```

---

## 🌐 Deploy ke Vercel

Pastikan untuk menambahkan `DATABASE_URL` dan `JWT_SECRET` di **Vercel Environment Variables** sebelum melakukan deploy. Jika tidak, proses login dan pendaftaran akan error di production.

1. Push kode ke GitHub
2. Buka dashboard Vercel, lalu import repositori ini.
3. Masuk ke **Settings > Environment Variables**. Tambahkan `DATABASE_URL` dan `JWT_SECRET`.
4. Deploy.

---

## ✏️ Cara Edit Konten Portfolio

**Semua teks website utama ada di file:**
```
src/lib/content.ts
```

File ini berisi konten bilingual. Edit isi object JSON di dalamnya:
```typescript
hero: {
  greeting: "Halo, saya",
  name: "Rizqi Khamami",
  ...
}
```

---

## 📝 License

MIT — bebas digunakan dan dimodifikasi.

---

**Dibuat dengan ❤️ oleh Rizqi Khamami**
