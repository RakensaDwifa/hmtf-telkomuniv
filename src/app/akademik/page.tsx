import { Metadata } from "next";
import { 
  BookOpen, 
  ExternalLink, 
  GraduationCap,
  FolderDown,
  ArrowUpRight,
  FileCode2,
  Atom
} from "lucide-react";
import academicData from "@/data/akademik.json";
import siteConfig from "@/data/site-config.json";

export const metadata: Metadata = {
  title: "Layanan Akademik & 5 Laboratorium Riset",
  description: "Bank Soal UTS & UAS, direktori 5 laboratorium keahlian fisika, dan kurikulum Program Studi S1 Teknik Fisika Telkom University.",
};

export default function AcademicPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs text-orange-600 font-bold uppercase tracking-wider">
          <GraduationCap className="h-4 w-4" />
          <span>KATALOG KURIKULUM // PRODI {academicData.degree}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          AKADEMIK & <span className="text-orange-600">LABORATORIUM</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Pusat informasi keilmuan, repositori arsip soal ujian, dan direktori 5 laboratorium penelitian di bawah naungan Program Studi {academicData.prodiTitle}.
        </p>
      </div>

      {/* REPOSITORI BANK SOAL (HIGHLIGHT UTAMA) */}
      <section className="rounded-lg border border-slate-200 bg-white p-6 sm:p-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-orange-600 font-bold uppercase">
              <FolderDown className="h-4 w-4" />
              <span>ARSIP RESMI DEPARTEMEN AKADEMIK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {academicData.bankSoal.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {academicData.bankSoal.description} Dikurasi dan dimutakhirkan secara konsisten setiap semester untuk menunjang persiapan UTS, UAS, dan responsi tutor sebaya.
            </p>
            <div className="pt-2">
              <a
                href={academicData.bankSoal.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-slate-900 px-5 py-3 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-xs"
              >
                <FolderDown className="h-4 w-4" />
                <span>Akses Google Drive Bank Soal</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-orange-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            {academicData.bankSoal.categories.map((cat, idx) => (
              <div key={idx} className="rounded border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-bold text-slate-900 text-xs mb-2 border-b border-slate-200 pb-1.5">
                  {cat.name}
                </h3>
                <ul className="space-y-1.5 text-[11px] text-slate-600">
                  {cat.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-orange-600" />
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
        <div className="border-b border-slate-200 pb-4">
          <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
            // FASILITAS RISET & PRAKTIKUM
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            5 Laboratorium Keahlian Teknik Fisika
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Laboratorium integratif di bawah naungan Fakultas Teknik Elektro (FTE) untuk riset sensor, sistem energi terbarukan, rekayasa termal, dan material cerdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicData.labs.map((lab, idx) => (
            <div
              key={idx}
              className="rounded border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-slate-400 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    LAB-0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">{lab.short}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 pt-1">{lab.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">{lab.focus}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>FAKULTAS TEKNIK ELEKTRO</span>
                <span className="text-orange-600 font-bold">TEL-U</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATA KULIAH KEAHLIAN INTI */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
            // MATRIKS KURIKULUM
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Mata Kuliah Keahlian Pokok
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Pilar sains rekayasa inti yang dipelajari mahasiswa S1 Teknik Fisika.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {academicData.coreSubjects.map((sub, idx) => (
            <div key={idx} className="rounded border border-slate-200 bg-white p-4 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-orange-600">{sub.code}</span>
                <span className="font-mono text-[10px] text-slate-400">INTI TF</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{sub.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{sub.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTAL PRODI RESMI BANNER */}
      <section className="rounded border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <h3 className="text-base font-bold text-slate-900">
            Perlu Informasi Resmi Silabus & Dosen Pembimbing?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Kunjungi portal resmi Program Studi S1 Teknik Fisika Universitas Telkom untuk kurikulum komprehensif, kalender akademik, dan dokumen akreditasi institusi.
          </p>
        </div>
        <a
          href="https://bpe.telkomuniversity.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-slate-900 px-4 py-2.5 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-600 transition-colors shrink-0"
        >
          <span>Buka Portal Prodi TF</span>
          <ExternalLink className="h-3.5 w-3.5 text-orange-400" />
        </a>
      </section>
    </div>
  );
}
