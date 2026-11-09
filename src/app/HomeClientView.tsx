"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight,
  BookOpen, 
  MessageSquare, 
  Calendar,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";
import Logo from "@/components/Logo";
import SpotlightCard from "@/components/SpotlightCard";

interface HomeClientViewProps {
  siteConfig: any;
  bphData: any;
  academicData: any;
  eventsData: any;
}

// ponytail: staggered hero entrance + spotlight interactive cards; upgrade to live websocket telemetry metrics if lab instruments emit real-time stream.
export default function HomeClientView({
  siteConfig,
  bphData,
  academicData,
  eventsData,
}: HomeClientViewProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* SECTION 1: ARCHITECTURAL HERO */}
      <section className="border-b border-slate-200/80 bg-white/70 backdrop-blur-md pt-8 pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top metadata ticker */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200/80 pb-3.5 mb-8 text-[11px] font-mono text-slate-500 gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                [SPEC: TF-PORTAL-2026]
              </span>
              <span>•</span>
              <span>UNIVERSITAS TELKOM BANDUNG</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 font-semibold text-orange-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>KABINET AKTIF 2026</span>
              </span>
              <span>•</span>
              <span className="font-mono text-slate-700">{siteConfig.hashtag}</span>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
          >
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-6">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200/80 text-xs font-mono text-orange-950 shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-orange-600 animate-ping" />
                  <span className="font-bold">KABINET ADHIRAJYA ({bphData.cabinetSanskrit})</span>
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]"
              >
                HIMPUNAN MAHASISWA <br />
                <span className="text-orange-600 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  TEKNIK FISIKA
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl"
              >
                Lembaga eksekutif mahasiswa yang memegang kedaulatan independen sivitas akademika Teknik Fisika Universitas Telkom. Berfokus pada penguatan keilmuan sains rekayasa, akselerasi riset terapan, dan solidaritas persaudaraan <strong className="text-slate-900">Grey Warrior</strong>.
              </motion.p>

              {/* Slogan & Quote Block with micro-glow */}
              <motion.div
                variants={itemVariants}
                className="border-l-3 border-orange-500 bg-slate-900 text-white p-4 sm:p-5 rounded-r-2xl font-mono text-xs space-y-1.5 shadow-md"
              >
                <div className="font-bold text-white flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-orange-400" />
                  <span>MOTTO: ”{siteConfig.tagline}”</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  REF: Deklarasi MUBES Mahasiswa S1 Teknik Fisika • {siteConfig.hashtag}
                </div>
              </motion.div>

              {/* Action Buttons with Spring Feedback */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/bph"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-mono font-bold text-white tracking-wider uppercase hover:bg-orange-600 transition-colors shadow-md"
                  >
                    <span>Struktur Kepengurusan BPH</span>
                    <ArrowRight className="h-3.5 w-3.5 text-orange-400" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/akademik"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/90 backdrop-blur-sm px-5 py-3 text-xs font-mono font-bold text-slate-800 tracking-wider uppercase hover:border-orange-500 hover:text-orange-600 transition-colors shadow-xs"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-orange-600" />
                    <span>Bank Soal & Laboratorium</span>
                  </Link>
                </motion.div>

                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono text-slate-600 hover:text-orange-600 transition-colors"
                >
                  <span>Filosofi Lambang</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </div>

            {/* Right Specification Data Sheet with 3D Tilt */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <SpotlightCard
                tiltIntensity={7}
                className="rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-md p-6 space-y-5 shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="space-y-0.5">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Official Insignia
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      Lambang Resmi HMTF
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Logo size={48} framed />
                  </motion.div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Tanggal Berdiri</span>
                    <span className="font-semibold text-slate-900">{siteConfig.established}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Program Studi</span>
                    <span className="font-semibold text-slate-900">S1 Teknik Fisika</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Fakultas</span>
                    <span className="font-semibold text-slate-900">Fakultas Teknik Elektro</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Laboratorium Riset</span>
                    <span className="font-semibold text-orange-600 font-bold">5 Unit Lab Terpadu</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Struktur BPH</span>
                    <span className="font-semibold text-slate-900">8 Biro & Departemen</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Warna Identitas</span>
                    <span className="font-semibold text-slate-900">Jahim Abu-Abu</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-600 shrink-0" />
                  <span>Kedaulatan diputuskan via mekanisme MUBES.</span>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL SPEC METRICS BAR (INTERACTIVE SPOTLIGHT TILES) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { tag: "01 / HISTORI", val: "2014", label: "Deklarasi Berdirinya HMTF", color: "text-slate-900" },
            { tag: "02 / RISET", val: "5 LAB", label: "Laboratorium Keahlian Fisika", color: "text-orange-600" },
            { tag: "03 / ORGANISASI", val: "8 DIVISI", label: "Biro & Departemen BPH 2026", color: "text-slate-900" },
            { tag: "04 / KEDAULATAN", val: "100%", label: "Kedaulatan Mahasiswa Mandiri", color: "text-orange-600" },
          ].map((item, idx) => (
            <SpotlightCard
              key={idx}
              tiltIntensity={5}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white/85 backdrop-blur-sm shadow-xs"
            >
              <span className="font-mono text-xs text-slate-400 block mb-1">{item.tag}</span>
              <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${item.color}`}>
                {item.val}
              </div>
              <div className="text-xs text-slate-600 mt-1 font-medium">{item.label}</div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* SECTION 3: NILAI-NILAI ADHIRAJYA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
          {/* Left column */}
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
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 hover:text-orange-600 transition-colors"
              >
                <span>Pelajari Dokumen Konstitusi Himpunan</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right values row */}
          <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 divide-y divide-slate-100">
            {bphData.values.map((val: any, idx: number) => (
              <div key={idx} className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline group">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-200">
                    VAL-0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {val.title}
                  </h3>
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
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 space-y-8 shadow-sm">
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
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-orange-600 transition-colors"
            >
              <span>Katalog Lengkap Akademik</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Bank Soal Spotlight Card */}
            <div className="lg:col-span-5">
              <SpotlightCard
                tiltIntensity={6}
                className="rounded-2xl border border-slate-200 bg-slate-950 text-white p-6 sm:p-7 space-y-4 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-600 text-white">
                    ARSIP TERPADU
                  </span>
                  <span className="font-mono text-xs text-slate-400">UTS & UAS</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Bank Soal Ujian Terpadu S1 Teknik Fisika
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Koleksi arsip ujian kurikulum Teknik Fisika lintas semester, dikurasi langsung oleh Departemen Akademik HMTF untuk mendukung persiapan ujian dan responsi sebaya.
                </p>
                <div className="pt-2">
                  <a
                    href={academicData.bankSoal.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-xs"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Buka Google Drive</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </SpotlightCard>
            </div>

            {/* 5 Labs Directory List */}
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                5 Laboratorium Keahlian Riset:
              </span>
              <div className="divide-y divide-slate-100 border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-xs">
                {academicData.labs.map((lab: any, idx: number) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="p-3.5 sm:p-4 flex items-start justify-between gap-4 hover:bg-orange-50/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-orange-600">LAB-0{idx + 1}</span>
                        <h4 className="text-xs font-bold text-slate-900">{lab.name}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{lab.focus}</p>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 shrink-0 mt-0.5 bg-slate-100 px-2 py-0.5 rounded">
                      FTE TEL-U
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AGENDA & PROGRAM UNGGULAN */}
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
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-orange-600 transition-colors"
          >
            <span>Arsip Seluruh Agenda & E-Magazine</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventsData.events.slice(0, 3).map((event: any) => (
            <SpotlightCard
              key={event.id}
              tiltIntensity={5}
              className="rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-sm p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
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
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* SECTION 6: KOTAK ASPIRASI CALLOUT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SpotlightCard
          tiltIntensity={4}
          spotlightColor="rgba(234, 88, 12, 0.25)"
          className="border border-slate-800 bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="max-w-3xl space-y-4 relative z-10">
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
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  href="/aspirasi"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-lg"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Salurkan Aspirasi Sekarang</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </SpotlightCard>
      </section>
    </div>
  );
}
