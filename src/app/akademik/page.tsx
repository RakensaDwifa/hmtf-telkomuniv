import { Metadata } from "next";
import { 
  BookOpen, 
  ExternalLink, 
  Cpu, 
  Zap, 
  Flame, 
  Atom, 
  Microchip, 
  FolderDown, 
  FileCheck2, 
  GraduationCap
} from "lucide-react";
import academicData from "@/data/akademik.json";
import siteConfig from "@/data/site-config.json";

export const metadata: Metadata = {
  title: "Layanan Akademik & Laboratorium",
  description: "Bank Soal, panduan 5 laboratorium keahlian, dan informasi akademik Program Studi S1 Teknik Fisika Telkom University.",
};

export default function AcademicPage() {
  const labIcons = [
    <Cpu key="0" className="h-5 w-5 text-amber-400" />,
    <Zap key="1" className="h-5 w-5 text-sky-400" />,
    <Flame key="2" className="h-5 w-5 text-orange-400" />,
    <Atom key="3" className="h-5 w-5 text-emerald-400" />,
    <Microchip key="4" className="h-5 w-5 text-purple-400" />
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-400">
          <GraduationCap className="h-4 w-4" />
          <span>Smart Science & Technology</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          AKADEMIK & <span className="text-sky-400">LABORATORIUM</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Pusat informasi keilmuan, repositori arsip soal ujian, dan 5 laboratorium penelitian Program Studi {academicData.prodiTitle}.
        </p>
      </div>

      {/* REPOSITORI BANK SOAL (HIGHLIGHT UTAMA) */}
      <section className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#09172c] via-[#09172c]/60 to-[#050d1a] p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-md bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/20">
              <FolderDown className="h-3.5 w-3.5" />
              <span>Arsip Terpadu Mahasiswa</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {academicData.bankSoal.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {academicData.bankSoal.description} Dikelola secara berkala oleh Departemen Akademik HMTF untuk mendukung persiapan ujian dan pemahaman perkuliahan seluruh tingkat.
            </p>
            <div className="pt-2">
              <a
                href={academicData.bankSoal.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-slate-950 hover:from-amber-400 hover:to-orange-400 transition-all shadow-md active:scale-95"
              >
                <FolderDown className="h-4 w-4" />
                <span>Akses Folder Google Drive Bank Soal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {academicData.bankSoal.categories.map((cat, idx) => (
              <div key={idx} className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-4">
                <h3 className="text-xs font-bold text-amber-400 mb-2">{cat.name}</h3>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {cat.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-amber-400" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 LABORATORIUM TEKNIK FISIKA */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Fasilitas Riset & Praktikum
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            5 Laboratorium Program Studi
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Pusat praktikum dan penelitian mahasiswa serta dosen S1 Teknik Fisika FTE Telkom University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicData.labs.map((lab, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#132b4f] bg-[#09172c]/50 p-6 flex flex-col justify-between hover:border-sky-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {labIcons[idx % labIcons.length]}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500">LAB 0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{lab.name}</h3>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{lab.focus}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#132b4f] text-[11px] text-slate-500">
                Fakultas Teknik Elektro Tel-U
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATA KULIAH UNGGULAN & BIDANG KEAHLIAN */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Kurikulum & Keilmuan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Mata Kuliah Keahlian Utama
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Pilar sains rekayasa yang dipelajari mahasiswa Teknik Fisika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {academicData.coreSubjects.map((sub, idx) => (
            <div key={idx} className="rounded-xl border border-[#132b4f] bg-[#09172c]/40 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-amber-400">{sub.code}</span>
                <FileCheck2 className="h-4 w-4 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold text-white">{sub.name}</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{sub.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTAL PRODI RESMI BANNER */}
      <section className="rounded-2xl border border-[#132b4f] bg-[#09172c]/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Butuh Informasi Resmi Kurikulum & Dosen?</h3>
          <p className="text-xs text-slate-400 mt-1">
            Kunjungi website resmi Program Studi S1 Teknik Fisika Telkom University untuk profil dosen, kurikulum lengkap, dan akreditasi.
          </p>
        </div>
        <a
          href="https://bpe.telkomuniversity.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-5 py-2.5 text-xs font-bold text-slate-200 hover:text-white hover:border-slate-600 transition-all shrink-0"
        >
          <span>Buka Website Prodi</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </section>
    </div>
  );
}
