import { Metadata } from "next";
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Layers,
  ArrowRight
} from "lucide-react";
import bphData from "@/data/bph.json";
import siteConfig from "@/data/site-config.json";

export const metadata: Metadata = {
  title: "Struktur Organisasi BPH Kabinet Adhirajya 2026",
  description: "Bagan organisasi, visi, misi, dan jajaran 8 biro & departemen Badan Pengurus Harian (BPH) HMTF Telkom University.",
};

export default function BphPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs text-orange-600 font-bold uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          <span>ROSTER ORGANISASI // PERIODE {siteConfig.period}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          STRUKTUR BPH <span className="text-orange-600">ADHIRAJYA</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {bphData.philosophy}
        </p>
        <div className="font-mono text-xs text-slate-700 bg-slate-100 px-3 py-1.5 rounded inline-block border border-slate-200">
          MOTTO KABINET: ”{bphData.tagline}”
        </div>
      </div>

      {/* VISI & MISI (SPLIT MANIFESTO) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visi */}
        <div className="lg:col-span-5 rounded border border-slate-200 bg-slate-900 text-white p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold uppercase">
              <Compass className="h-4 w-4" />
              <span>Visi Strategis</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
              Arah Gerak 2026
            </h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans border-l-2 border-orange-500 pl-4 py-1">
            ”{bphData.vision}”
          </p>
          <div className="pt-4 border-t border-slate-800 flex justify-between font-mono text-[11px] text-slate-400">
            <span>MANDAT MUBES TF</span>
            <span className="text-orange-400 font-bold">{siteConfig.hashtag}</span>
          </div>
        </div>

        {/* Misi */}
        <div className="lg:col-span-7 rounded border border-slate-200 bg-white p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 font-mono text-xs text-orange-600 font-bold uppercase">
            <Target className="h-4 w-4" />
            <span>Empat Komitmen Operasional (Misi)</span>
          </div>
          <h2 className="text-xl font-black text-slate-900">
            Pilar Realisasi Program Kerja
          </h2>
          <div className="space-y-4 pt-1">
            {bphData.missions.map((misi, idx) => (
              <div key={idx} className="flex items-start gap-3.5 pb-3 border-b border-slate-100 last:border-b-0">
                <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 shrink-0 mt-0.5">
                  MISI-0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{misi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIMPINAN INTI (EXECUTIVE ROSTER) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
            // EXECUTIVE BOARD
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Jajaran Pimpinan Inti BPH
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bphData.leadership.map((lead, idx) => (
            <div
              key={idx}
              className="rounded border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-slate-400 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 uppercase">
                    [{lead.category}]
                  </span>
                  <span className="font-mono text-xs text-orange-600 font-bold">2026</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 pt-1">{lead.role}</h3>
                <p className="font-mono text-xs text-orange-600 font-semibold">{lead.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">{lead.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-400 flex justify-between">
                <span>HMTF TEL-U</span>
                <span>MANDAT AKTIF</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8 BIRO & DEPARTEMEN PELAKSANA */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
            // STRUKTUR PELAKSANA
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            8 Biro & Departemen BPH
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Rumpun pelaksana teknis keilmuan, keprofesian, kaderisasi, komunikasi, dan pengabdian masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bphData.departments.map((dept) => (
            <div
              key={dept.id}
              className="rounded border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-slate-400 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    {dept.cluster}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    ID: {dept.id.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{dept.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{dept.desc}</p>

                <div className="pt-2">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Program Kerja Utama:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.programs.map((prog, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>RUMPUN: {dept.cluster}</span>
                <span className="text-orange-600 font-semibold">BPH 2026</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
