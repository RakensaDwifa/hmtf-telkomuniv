import { Metadata } from "next";
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  CheckCircle2, 
  Network, 
  Compass, 
  Sparkles,
  Layers
} from "lucide-react";
import bphData from "@/data/bph.json";
import siteConfig from "@/data/site-config.json";

export const metadata: Metadata = {
  title: "Struktur BPH Kabinet Adhirajya",
  description: "Bagan organisasi dan jajaran pengurus Badan Pengurus Harian (BPH) HMTF Telkom University periode 2026.",
};

export default function BphPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-400">
          <ShieldCheck className="h-4 w-4" />
          <span>Badan Pengurus Harian 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          KABINET <span className="text-amber-400">ADHIRAJYA</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {bphData.philosophy}
        </p>
        <div className="inline-block rounded-lg bg-[#09172c] border border-[#132b4f] px-4 py-1.5 text-xs font-semibold text-amber-300">
          ”{bphData.tagline}”
        </div>
      </div>

      {/* VISI & MISI */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Visi */}
        <div className="lg:col-span-5 rounded-2xl border border-[#132b4f] bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-950 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-amber-400 mb-4">
              <Compass className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Visi Kabinet</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Arah Gerak Satu Periode
            </h2>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              ”{bphData.vision}”
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-[#132b4f] text-xs text-slate-500 flex items-center justify-between">
            <span>BPH HMTF Periode 2026</span>
            <span className="text-amber-400/90 font-medium">{siteConfig.hashtag}</span>
          </div>
        </div>

        {/* Misi */}
        <div className="lg:col-span-7 rounded-2xl border border-[#132b4f] bg-[#09172c]/40 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-amber-400 mb-4">
            <Target className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Misi Utama</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Landasan Kerja & Komitmen
          </h2>
          <div className="space-y-3.5">
            {bphData.missions.map((misi, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 font-bold text-xs mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{misi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIMPINAN INTI (EXECUTIVE BOARD) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Jajaran Inti
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Pimpinan Badan Pengurus Harian
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Penggerak strategis dan penanggung jawab arah langkah Kabinet Adhirajya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bphData.leadership.map((lead, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#132b4f] bg-gradient-to-b from-slate-900/70 to-slate-950 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/20 uppercase">
                    {lead.category}
                  </span>
                  <Award className="h-4 w-4 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{lead.role}</h3>
                <p className="text-xs text-amber-400 font-medium mt-0.5">{lead.subtitle}</p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">{lead.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#132b4f]/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>HMTF Adhirajya</span>
                <span>2026</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPARTEMEN & BIRO */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Struktur Pelaksana
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Departemen & Biro BPH HMTF
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Rumpun pelaksana program kerja teknis, keprofesian, dan pengabdian masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bphData.departments.map((dept) => (
            <div
              key={dept.id}
              className="rounded-2xl border border-[#132b4f] bg-[#09172c]/50 p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-400">{dept.cluster}</span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400">
                    ID: {dept.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                <p className="text-xs italic text-amber-300/80 mt-1">”{dept.tagline}”</p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">{dept.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#132b4f]/70">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Program Kerja Utama:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {dept.programs.map((proker, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{proker}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRUKTUR ORGANISASI VISUAL BANNER */}
      <section className="rounded-2xl border border-[#132b4f] bg-[#09172c]/40 p-8 text-center space-y-3">
        <Network className="h-8 w-8 text-amber-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Prinsip Koordinasi BPH 2026</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          Seluruh biro dan departemen bergerak secara sinkron di bawah koordinasi Wakil Bidang Internal dan Wakil Bidang Eksternal untuk menjamin soliditas aparatur dan dampak eksternal yang terukur.
        </p>
      </section>
    </div>
  );
}
