import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Sparkles, 
  MessageSquare, 
  ChevronRight,
  Award,
  Calendar
} from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";
import bphData from "@/data/bph.json";
import academicData from "@/data/akademik.json";
import eventsData from "@/data/events.json";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-24 border-b border-[#132b4f] bg-gradient-to-b from-[#09172c]/60 via-[#050d1a] to-[#050d1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            
            {/* Center Logo with Glow */}
            <div className="mb-2">
              <Logo size={96} className="shadow-2xl shadow-amber-500/10" />
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#09172c] border border-amber-500/30 px-4 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                {bphData.cabinetName} ({bphData.cabinetSanskrit}) • Periode {siteConfig.period}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              HIMPUNAN MAHASISWA <br />
              <span className="bg-gradient-to-r from-white via-amber-300 to-orange-400 bg-clip-text text-transparent">
                TEKNIK FISIKA
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium">
              Universitas Telkom Bandung
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Rumah bersama para <span className="text-amber-400 font-semibold">Grey Warrior</span>. Wadah kedaulatan, akselerasi keilmuan sains rekayasa, dan sinergi kekeluargaan mahasiswa Teknik Fisika.
            </p>

            {/* Slogan pill */}
            <div className="rounded-xl bg-[#09172c]/90 border border-[#132b4f] px-5 py-2.5 text-sm font-semibold text-slate-200">
              <span className="text-amber-400">”{siteConfig.tagline}”</span> — <span className="text-slate-400">{siteConfig.hashtag}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/bph"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition-all active:scale-95"
              >
                <span>Struktur BPH Adhirajya</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link
                href="/akademik"
                className="inline-flex items-center gap-2 rounded-xl bg-[#09172c] border border-[#132b4f] px-6 py-3 text-sm font-semibold text-slate-200 hover:border-amber-500/40 hover:text-white transition-all active:scale-95"
              >
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Bank Soal & Riset</span>
              </Link>

              <Link
                href="/aspirasi"
                className="inline-flex items-center gap-2 rounded-xl bg-[#09172c]/60 border border-[#132b4f] px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition-all active:scale-95"
              >
                <MessageSquare className="h-4 w-4 text-amber-400" />
                <span>Kotak Aspirasi</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/60 p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">{siteConfig.established.split(" ")[2]}</div>
              <div className="text-xs text-slate-400 mt-1">Tahun Berdiri HMTF</div>
            </div>
            <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/60 p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">8+</div>
              <div className="text-xs text-slate-400 mt-1">Departemen & Biro BPH</div>
            </div>
            <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/60 p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">5</div>
              <div className="text-xs text-slate-400 mt-1">Laboratorium Riset Inti</div>
            </div>
            <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/60 p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-xs text-slate-400 mt-1">Kedaulatan Grey Warrior</div>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG KABINET ADHIRAJYA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-md bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Filosofi & Nilai Pokok</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Mengapa <span className="text-amber-400">Adhirajya</span>?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {bphData.philosophy}
            </p>
            <div className="pt-2">
              <Link
                href="/tentang-kami"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 group"
              >
                <span>Pelajari makna logo & sejarah HMTF</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bphData.values.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#132b4f] bg-[#09172c]/70 p-5 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 mb-3 font-bold text-sm border border-amber-500/20">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUKTUR PIMPINAN SINGKAT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Kepengurusan Aktif
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Jajaran Pimpinan Inti BPH
            </h2>
          </div>
          <Link
            href="/bph"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors"
          >
            <span>Lihat seluruh biro & departemen</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bphData.leadership.slice(0, 3).map((lead, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#132b4f] bg-gradient-to-b from-[#09172c] to-[#050d1a] p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-sm"
            >
              <div>
                <div className="inline-flex items-center rounded-md bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-400 mb-4 border border-amber-500/20">
                  {lead.category.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-white">{lead.role}</h3>
                <p className="text-xs text-amber-400 font-medium mt-0.5">{lead.subtitle}</p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">{lead.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#132b4f] flex items-center justify-between text-xs text-slate-500">
                <span>Kabinet Adhirajya</span>
                <span className="text-amber-400 font-semibold">2026</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LAYANAN AKADEMIK & BANK SOAL HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#132b4f] bg-gradient-to-br from-[#09172c] via-[#09172c]/60 to-[#050d1a] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Portal Akademik Mahasiswa</span>
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Bank Soal & Panduan Laboratorium
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Departemen Akademik HMTF menyediakan akses terpadu arsip soal ujian (UTS/UAS), bimbingan tutor responsi, serta panduan 5 laboratorium keahlian Teknik Fisika Telkom University.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/akademik"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:from-amber-400 hover:to-orange-400 transition-all shadow"
              >
                <span>Buka Repositori Bank Soal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/akademik"
                className="inline-flex items-center gap-2 rounded-xl bg-[#09172c] border border-[#132b4f] px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all"
              >
                <span>Lihat 5 Laboratorium TF</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT & PROGRAM UNGGULAN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
            Aktivitas Himpunan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Agenda & Program Unggulan
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Dari kompetisi sains nasional hingga aksi nyata pengabdian masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventsData.events.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-[#132b4f] bg-[#09172c]/50 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all"
            >
              <div>
                <span className="inline-block rounded-md bg-[#050d1a] border border-[#132b4f] px-2.5 py-1 text-[10px] font-semibold text-amber-300 mb-3">
                  {event.badge}
                </span>
                <h3 className="text-lg font-bold text-white">{event.title}</h3>
                <p className="text-xs text-slate-400 font-medium mb-3">{event.subtitle}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{event.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#132b4f] flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-amber-400" />
                  {event.period}
                </span>
                <span className="font-semibold text-amber-400">{event.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/event"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
          >
            <span>Jelajahi seluruh dokumentasi dan e-magazine</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* KOTAK ASPIRASI BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/25 bg-gradient-to-r from-[#09172c] via-[#0b1b36] to-[#09172c] p-8 sm:p-12 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Suaramu Berarti untuk HMTF
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Punya masukan terkait fasilitas, akademik, perkuliahan, atau kritik membangun untuk pengurus Kabinet Adhirajya? Sampaikan langsung melalui formulir aspirasi.
          </p>
          <div className="pt-2">
            <Link
              href="/aspirasi"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              <span>Buka Kotak Aspirasi Mahasiswa</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
