"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight,
  BookOpen, 
  MessageSquare, 
  Calendar,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Terminal,
  Radio
} from "lucide-react";
import Logo from "@/components/Logo";
import SpotlightCard from "@/components/SpotlightCard";
import LabScrollytelling from "@/components/LabScrollytelling";

interface HomeClientViewProps {
  siteConfig: any;
  bphData: any;
  academicData: any;
  eventsData: any;
}

// ponytail: multi-layer parallax hero + scrollytelling 5 lab + cyber telemetry; upgrade to three.js physical particle field if GPU WebGL context is enabled.
export default function HomeClientView({
  siteConfig,
  bphData,
  academicData,
  eventsData,
}: HomeClientViewProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const calloutRef = useRef<HTMLDivElement | null>(null);

  // Hero Parallax Scroll
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothHeroProgress = useSpring(heroScrollProgress, { damping: 25, stiffness: 120 });
  const yHeroBg = useTransform(smoothHeroProgress, [0, 1], ["0%", "35%"]);
  const yHeroContent = useTransform(smoothHeroProgress, [0, 1], ["0%", "15%"]);
  const yHeroSpec = useTransform(smoothHeroProgress, [0, 1], ["0%", "-12%"]);
  const opacityHero = useTransform(smoothHeroProgress, [0, 0.85], [1, 0.2]);

  // Callout Parallax Scroll
  const { scrollYProgress: calloutScrollProgress } = useScroll({
    target: calloutRef,
    offset: ["start end", "end start"],
  });
  const yCalloutGlow = useTransform(calloutScrollProgress, [0, 1], ["-20%", "20%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24 text-slate-100">
      {/* SECTION 1: ARCHITECTURAL PARALLAX HERO */}
      <section
        ref={heroRef}
        className="relative border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        {/* Parallax Background Layer 1: Laser Grids & Physics Constants */}
        <motion.div
          style={{ y: yHeroBg }}
          className="absolute inset-0 pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-tech-grid-dark opacity-40" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-[90px]" />

          {/* Floating Physics Quantum Equations Overlay */}
          <div className="hidden lg:block absolute right-12 top-20 font-mono text-[11px] text-slate-700/60 leading-relaxed text-right space-y-1">
            <div>∇ × E = -∂B/∂t</div>
            <div>iħ ∂ψ/∂t = Ĥψ</div>
            <div>S = k ln Ω</div>
            <div>E = mc² = ħω</div>
          </div>
        </motion.div>

        {/* Hero Interactive Foreground Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Architectural Telemetry Ticker */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 pb-3.5 mb-8 text-[11px] font-mono text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                [SYS: TF-CORE-2026]
              </span>
              <span>•</span>
              <span className="text-slate-300">UNIVERSITAS TELKOM BANDUNG</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>KABINET AKTIF 2026</span>
              </span>
              <span>•</span>
              <span className="font-mono text-orange-400 font-bold">{siteConfig.hashtag}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Parallax Content Column (Left) */}
            <motion.div
              style={{ y: yHeroContent, opacity: opacityHero }}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="lg:col-span-8 space-y-6"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-xs font-mono text-orange-400 shadow-[0_0_15px_rgba(234,88,12,0.15)]">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                  <span className="font-bold">KABINET ADHIRAJYA ({bphData.cabinetSanskrit})</span>
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]"
              >
                HIMPUNAN MAHASISWA <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                  TEKNIK FISIKA
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
              >
                Lembaga eksekutif mahasiswa yang memegang kedaulatan independen sivitas akademika Teknik Fisika Universitas Telkom. Mengakselerasi sains rekayasa fisis, riset instrumentasi cerdas, dan persaudaraan berakar <strong className="text-white">Grey Warrior</strong>.
              </motion.p>

              {/* Slogan & Terminal Quote Block */}
              <motion.div
                variants={itemVariants}
                className="border-l-3 border-orange-500 bg-slate-900/90 border border-slate-800 text-white p-4 sm:p-5 rounded-r-2xl font-mono text-xs space-y-1.5 shadow-xl"
              >
                <div className="font-bold text-orange-400 flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5" />
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
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 text-xs font-mono font-bold text-white tracking-wider uppercase hover:from-orange-500 hover:to-orange-400 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                  >
                    <span>Struktur BPH 2026</span>
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/akademik"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur-sm px-5 py-3 text-xs font-mono font-bold text-slate-200 tracking-wider uppercase hover:border-orange-500 hover:text-orange-400 transition-colors shadow-xs"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-orange-400" />
                    <span>Bank Soal & Laboratorium</span>
                  </Link>
                </motion.div>

                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <span>Filosofi Lambang</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Parallax Spec Sheet Column (Right) */}
            <motion.div
              style={{ y: yHeroSpec }}
              className="lg:col-span-4"
            >
              <SpotlightCard
                tiltIntensity={7}
                spotlightColor="rgba(234, 88, 12, 0.25)"
                className="rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-6 space-y-5 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="space-y-0.5">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-400">
                      Official Insignia
                    </div>
                    <div className="text-xs font-bold text-white">
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
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Tanggal Berdiri</span>
                    <span className="font-semibold text-white">{siteConfig.established}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Program Studi</span>
                    <span className="font-semibold text-white">S1 Teknik Fisika</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Fakultas</span>
                    <span className="font-semibold text-white">Fakultas Teknik Elektro</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Laboratorium Riset</span>
                    <span className="font-semibold text-orange-400 font-bold">5 Unit Lab Terpadu</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Struktur BPH</span>
                    <span className="font-semibold text-white">8 Biro & Departemen</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Warna Identitas</span>
                    <span className="font-semibold text-white">Jahim Abu-Abu</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                  <span>Kedaulatan diputuskan via mekanisme MUBES.</span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL SPEC METRICS BAR (SPOTLIGHT HUD TILES) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { tag: "01 / HISTORI", val: "2014", label: "Deklarasi Berdirinya HMTF", color: "text-white" },
            { tag: "02 / RISET", val: "5 LAB", label: "Laboratorium Keahlian Fisika", color: "text-orange-400" },
            { tag: "03 / ORGANISASI", val: "8 DIVISI", label: "Biro & Departemen BPH 2026", color: "text-white" },
            { tag: "04 / KEDAULATAN", val: "100%", label: "Kedaulatan Mahasiswa Mandiri", color: "text-orange-400" },
          ].map((item, idx) => (
            <SpotlightCard
              key={idx}
              tiltIntensity={5}
              spotlightColor="rgba(234, 88, 12, 0.2)"
              className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-lg"
            >
              <span className="font-mono text-xs text-slate-500 block mb-1">{item.tag}</span>
              <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${item.color}`}>
                {item.val}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{item.label}</div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* SECTION 3: NILAI-NILAI ADHIRAJYA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 rounded-3xl bg-slate-950/85 backdrop-blur-md border border-slate-800 shadow-xl">
          {/* Left column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
              // FILOSOFI KEPEMIMPINAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Makna & Prinsip <br className="hidden sm:block" />
              <span className="text-orange-400">Kabinet Adhirajya</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {bphData.philosophy}
            </p>
            <div className="pt-2">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Pelajari Dokumen Konstitusi Himpunan</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right values row */}
          <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-8 divide-y divide-slate-800/80">
            {bphData.values.map((val: any, idx: number) => (
              <div key={idx} className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline group">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-lg border border-orange-500/20">
                    VAL-0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {val.title}
                  </h3>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SCROLLYTELLING 5 LABORATORIUM KELEMBAGAAN FISIKA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LabScrollytelling labs={academicData.labs} />
      </section>

      {/* SECTION 5: BANK SOAL TERPADU BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SpotlightCard
          tiltIntensity={4}
          spotlightColor="rgba(234, 88, 12, 0.22)"
          className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  ARSIP TERPADU
                </span>
                <span className="font-mono text-xs text-slate-400">UTS & UAS TEKNIK FISIKA</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Bank Soal Ujian Terpadu S1 Teknik Fisika
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Koleksi arsip ujian kurikulum Teknik Fisika lintas semester, dikurasi langsung oleh Departemen Akademik HMTF untuk mendukung persiapan ujian dan responsi sebaya.
              </p>
            </div>
            <a
              href={academicData.bankSoal.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.35)] shrink-0"
            >
              <BookOpen className="h-4 w-4" />
              <span>Buka Google Drive</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </SpotlightCard>
      </section>

      {/* SECTION 6: AGENDA & PROGRAM UNGGULAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-5 mb-8 gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
              // CHRONICLE & PUBLIKASI
            </span>
            <h2 className="text-2xl font-black text-white mt-1">
              Program Kerja & Agenda Utama
            </h2>
          </div>
          <Link
            href="/event"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400 hover:text-orange-300 transition-colors"
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
              spotlightColor="rgba(234, 88, 12, 0.2)"
              className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-6 flex flex-col justify-between shadow-lg hover:border-slate-700 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {event.badge}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">{event.category}</span>
                </div>
                <h3 className="text-base font-bold text-white pt-1">{event.title}</h3>
                <p className="font-mono text-[11px] text-orange-400 font-semibold">{event.subtitle}</p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">{event.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-orange-400" />
                  {event.period}
                </span>
                <span className="text-slate-500">TF-TELU</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* SECTION 7: PARALLAX KOTAK ASPIRASI CALLOUT */}
      <section ref={calloutRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <SpotlightCard
          tiltIntensity={4}
          spotlightColor="rgba(234, 88, 12, 0.28)"
          className="border border-slate-800 bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Parallax Glowing Orb */}
          <motion.div
            style={{ y: yCalloutGlow }}
            className="absolute -right-20 -top-20 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

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
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-500 transition-all shadow-[0_0_25px_rgba(234,88,12,0.4)]"
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
