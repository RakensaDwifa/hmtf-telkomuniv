import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight,
  BookOpen, 
  MessageSquare, 
  Calendar,
  Compass,
  FileText,
  Sliders,
  Cpu,
  Layers
} from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";
import bphData from "@/data/bph.json";
import academicData from "@/data/akademik.json";
import eventsData from "@/data/events.json";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* SECTION 1: ARCHITECTURAL HERO */}
      <section className="border-b border-slate-200 bg-white pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Top metadata ticker */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 mb-8 text-[11px] font-mono text-slate-500 gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">[SPEC: TF-PORTAL-2026]</span>
              <span>•</span>
              <span>UNIVERSITAS TELKOM BANDUNG</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-600 font-semibold">STATUS: KABINET AKTIF</span>
              <span>•</span>
              <span>PERIODE 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-600" />
                <span>KABINET ADHIRAJYA ({bphData.cabinetSanskrit})</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                HIMPUNAN MAHASISWA <br />
                <span className="text-orange-600">TEKNIK FISIKA</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
                Lembaga eksekutif mahasiswa yang memegang kedaulatan independen sivitas akademika Teknik Fisika Universitas Telkom. Berfokus pada penguatan keilmuan sains rekayasa, akselerasi riset terapan, dan solidaritas persaudaraan <strong className="text-slate-900">Grey Warrior</strong>.
              </p>

              {/* Slogan & Quote Block */}
              <div className="border-l-2 border-slate-900 bg-slate-50 p-4 rounded-r font-mono text-xs text-slate-700 space-y-1">
                <div className="font-bold text-slate-900">
                  MOTTO: ”{siteConfig.tagline}”
                </div>
                <div className="text-slate-500">
                  REF: Deklarasi MUBES Mahasiswa S1 Teknik Fisika • {siteConfig.hashtag}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/bph"
                  className="inline-flex items-center gap-2 rounded bg-slate-900 px-5 py-3 text-xs font-mono font-bold text-white tracking-wider uppercase hover:bg-orange-600 transition-colors shadow-xs"
                >
                  <span>Struktur Kepengurusan BPH</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href="/akademik"
                  className="inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-5 py-3 text-xs font-mono font-bold text-slate-800 tracking-wider uppercase hover:border-slate-900 hover:text-slate-900 transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5 text-orange-600" />
                  <span>Bank Soal & Laboratorium</span>
                </Link>

                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono text-slate-600 hover:text-orange-600 transition-colors"
                >
                  <span>Filosofi Lambang</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Specification Data Sheet */}
            <div className="lg:col-span-4 rounded-lg border border-slate-200 bg-slate-50/80 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Official Insignia
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Lambang Resmi HMTF
                  </div>
                </div>
                <Logo size={48} framed />
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Tanggal Berdiri</span>
                  <span className="font-semibold text-slate-900">{siteConfig.established}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Program Studi</span>
                  <span className="font-semibold text-slate-900">S1 Teknik Fisika</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Fakultas</span>
                  <span className="font-semibold text-slate-900">Fakultas Teknik Elektro</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Laboratorium Riset</span>
                  <span className="font-semibold text-slate-900">5 Unit Lab Terintegrasi</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="text-slate-500">Struktur BPH</span>
                  <span className="font-semibold text-slate-900">8 Biro & Departemen</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Warna Kebanggaan</span>
                  <span className="font-semibold text-slate-900">Jahim Abu-Abu</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                Kedaulatan diputuskan melalui mekanisme Musyawarah Besar (MUBES).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL SPEC METRICS BAR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-slate-200 bg-white rounded divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          <div className="p-6">
            <span className="font-mono text-xs text-slate-400 block mb-1">01 / HISTORI</span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">2014</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Deklarasi Berdirinya HMTF</div>
          </div>
          <div className="p-6">
            <span className="font-mono text-xs text-slate-400 block mb-1">02 / RISET</span>
            <div className="text-2xl sm:text-3xl font-black text-orange-600 font-mono">5 LAB</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Laboratorium Keahlian Fisika</div>
          </div>
          <div className="p-6">
            <span className="font-mono text-xs text-slate-400 block mb-1">03 / ORGANISASI</span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">8 DIVISI</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Biro & Departemen BPH 2026</div>
          </div>
          <div className="p-6">
            <span className="font-mono text-xs text-slate-400 block mb-1">04 / KEDAULATAN</span>
            <div className="text-2xl sm:text-3xl font-black text-orange-600 font-mono">100%</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Kedaulatan Mahasiswa Independen</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NILAI-NILAI ADHIRAJYA (EDITORIAL LAYOUT) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left sticky column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
              // FILOSOFI KEPEMIMPINAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Makna & Prinsip <br className="hidden sm:block" />
              <span className="text-orange-600">Kabinet Adhirajya</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {bphData.philosophy}
            </p>
            <div className="pt-2">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 hover:text-orange-600"
              >
                <span>Pelajari Dokumen Konstitusi Himpunan</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right values row */}
          <div className="lg:col-span-8 border-t border-slate-200 divide-y divide-slate-200">
            {bphData.values.map((val, idx) => (
              <div key={idx} className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    VAL-0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: REPOSITORI AKADEMIK & 5 LAB RISET */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-5 gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
                // LAYANAN STUDI
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                Akses Bank Soal & Ekosistem Laboratorium
              </h2>
            </div>
            <Link
              href="/akademik"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-orange-600"
            >
              <span>Katalog Lengkap Akademik</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Bank Soal Card */}
            <div className="lg:col-span-5 rounded border border-slate-200 bg-slate-50 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                  ARSIP DRIVE
                </span>
                <span className="font-mono text-xs text-slate-500">UTS & UAS</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Bank Soal Ujian Terpadu S1 Teknik Fisika
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Koleksi arsip ujian lintas semester (Semester 1 hingga 8), dikurasi langsung oleh Departemen Akademik HMTF untuk mendukung persiapan ujian dan tutor sebaya.
              </p>
              <div className="pt-2">
                <a
                  href={academicData.bankSoal.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-slate-900 px-4 py-2.5 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-600 transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Buka Google Drive Bank Soal</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-orange-400" />
                </a>
              </div>
            </div>

            {/* 5 Labs Directory List */}
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                5 Laboratorium Keahlian Riset:
              </span>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded bg-white">
                {academicData.labs.map((lab, idx) => (
                  <div key={idx} className="p-3.5 flex items-start justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-orange-600">LAB-0{idx + 1}</span>
                        <h4 className="text-xs font-bold text-slate-900">{lab.name}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{lab.focus}</p>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 shrink-0 mt-0.5">
                      FTE TEL-U
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AGENDA & PROGRAM UNGGULAN (CHRONICLE FORMAT) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-5 mb-8 gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
              // CHRONICLE & PUBLIKASI
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">
              Program Kerja & Agenda Utama
            </h2>
          </div>
          <Link
            href="/event"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-orange-600"
          >
            <span>Arsip Seluruh Agenda & E-Magazine</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventsData.events.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="rounded border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-slate-400 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200">
                    {event.badge}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">{event.category}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 pt-1">{event.title}</h3>
                <p className="font-mono text-[11px] text-orange-600 font-semibold">{event.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">{event.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {event.period}
                </span>
                <span className="text-slate-400">TF-TELU</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: KOTAK ASPIRASI CALLOUT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 bg-slate-900 text-white rounded-lg p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
              // FORUM KEDAULATAN MAHASISWA
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Suara & Gagasan Mahasiswa Teknik Fisika
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kotak aspirasi resmi HMTF Kabinet Adhirajya dibuka untuk menerima evaluasi kurikulum, advokasi fasilitas laboratorium, serta gagasan pengembangan iklim akademik kampus secara terbuka dan transparan.
            </p>
            <div className="pt-2">
              <Link
                href="/aspirasi"
                className="inline-flex items-center gap-2 rounded bg-orange-600 px-5 py-3 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-xs"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Salurkan Aspirasi Sekarang</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
