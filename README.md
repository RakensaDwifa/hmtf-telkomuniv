# Website Resmi HMTF Telkom University - Kabinet Adhirajya (2026)

Official web portal untuk **Himpunan Mahasiswa Teknik Fisika (HMTF) Universitas Telkom**. Dibangun dengan inspirasi arsitektur informasi himpunan modern, mengakomodasi kebutuhan profil organisasi, BPH Kabinet Adhirajya, portal akademik & bank soal, agenda event nasional (Technogine, Pekan Tubes), dan kanal aspirasi mahasiswa.

> **Slogan:** *"Daya Tercipta, Adhirajya Berjaya"* • `#VIVATF`

---

## 🚀 Fitur & Halaman
- **Beranda (`/`):** Hero banner, identitas himpunan, nilai Adhirajya, sorotan pimpinan, dan tautan cepat layanan mahasiswa.
- **BPH Adhirajya (`/bph`):** Visi, misi, jajaran pimpinan inti (Kahim, Wakahim Internal & Eksternal, Sekretaris, Bendahara, Brand Ambassador), serta 8 biro/departemen beserta program kerjanya.
- **Akademik & Laboratorium (`/akademik`):** Repositori Bank Soal UTS/UAS terintegrasi, profil 5 laboratorium keahlian Teknik Fisika, dan ringkasan kurikulum inti.
- **Event & Galeri (`/event`):** Dokumentasi Technogine, Pekan Tugas Besar, Parade Wisuda (Parwis), Kalibrasi, dan publikasi E-Magazine.
- **Kotak Aspirasi (`/aspirasi`):** Formulir penyampaian kritik, saran, dan aspirasi mahasiswa yang aman dan responsif.
- **Tentang Kami (`/tentang-kami`):** Sejarah pendirian HMTF (5 April 2014), filosofi jaket himpunan abu-abu (*Grey Warrior*), dan sistem keanggotaan.

---

## 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Architecture:** Statis terstruktur via berkas JSON di `src/data/` (memudahkan pengurus memperbarui data tanpa harus mengubah kode komponen).

---

## 💻 Menjalankan di Lokal

```bash
# Clone repositori
git clone https://github.com/RakensaDwifa/hmtf-telkomuniv.git
cd hmtf-telkomuniv

# Install dependensi (pnpm / npm)
pnpm install

# Jalankan server pengembangan
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser.

---

## 📦 Build Produksi

```bash
pnpm build
pnpm start
```

---

© 2026 HMTF Telkom University. Departemen Komunikasi dan Informasi Kabinet Adhirajya.
