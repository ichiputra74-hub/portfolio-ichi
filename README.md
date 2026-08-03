# 🌟 Luxury Minimalist Portfolio & Studio CMS (Next.js 15)

Website portofolio sinematografi profesional, luxury real estate, drone aerial, & commercial video production yang terintegrasi langsung dengan **Sanity CMS Studio (v3 Embedded)**.

---

## 🛠️ Fitur Utama
- **Sanity Studio Embedded:** Akses admin CMS langsung di `/studio` tanpa memerlukan dashboard eksternal terpisah.
- **Dynamic Content:** Konten, project, video link, foto galeri, kategori, statistik, dan link WhatsApp sepenuhnya dapat diubah tanpa edit kodingan.
- **Filter Portfolio Interaktif:** Filter kategori dinamis (Video Editing, Photography, Drone, Luxury Villa, Real Estate, Commercial).
- **SEO & Performance:** Termasuk dynamic OpenGraph tags, Lazy Loading, Sitemap XML (`/sitemap.xml`), & Robots (`/robots.txt`).

---

## ⚡ Langkah Instalasi Local

### 1. Extract & Open in VS Code
Buka folder `luxury-portfolio` menggunakan Visual Studio Code.

### 2. Install Dependencies
Buka terminal VS Code dan jalankan:
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env.local` pada root project `luxury-portfolio`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="your_sanity_read_token"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4. Jalankan Server Development
```bash
npm run dev
```
- **Aplikasi Utama:** `http://localhost:3000`
- **Sanity Studio CMS:** `http://localhost:3000/studio`

---

## 🌐 Cara Menghubungkan Project ID Sanity CMS

1. Buat akun gratis di [Sanity.io](https://www.sanity.io/) jika belum punya.
2. Buat project baru di Sanity Management Dashboard.
3. Salin **Project ID** Anda dan paste pada `.env.local` di variabel `NEXT_PUBLIC_SANITY_PROJECT_ID`.
4. Buka URL `http://localhost:3000/studio`, Anda akan diminta login dengan akun Sanity Anda.
5. Anda dapat langsung mulai menambah Kategori, Project Portfolio, Halaman About, dan Setting Contact melalui interface Studio.

---

## 🚀 Deployment ke Vercel

1. Push folder `luxury-portfolio` ke repository GitHub / GitLab Anda.
2. Buka [Vercel Dashboard](https://vercel.com/) dan pilih **Add New Project**.
3. Import repository GitHub Anda.
4. Masukkan Environment Variables di Vercel:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SITE_URL` (masukkan domain vercel Anda, contoh: `https://luxury-portfolio.vercel.app`)
5. Klik **Deploy**.
6. **PENTING (CORS Setup):** Setelah deploy selesai, buka dashboard Sanity di [sanity.io/manage](https://sanity.io/manage) -> Pilih Project -> **API** -> **CORS Origins** -> Tambahkan URL domain Vercel Anda dan beri centang **Allow credentials**.
