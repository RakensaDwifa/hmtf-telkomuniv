"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Layers,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

interface LeadershipItem {
  role: string;
  subtitle: string;
  description: string;
  category: string;
  image?: string;
}

interface DepartmentItem {
  id: string;
  name: string;
  cluster: string;
  tagline: string;
  desc: string;
  programs: string[];
  image?: string;
}

interface BphData {
  cabinetName: string;
  cabinetSanskrit: string;
  period: string;
  tagline: string;
  philosophy: string;
  vision: string;
  missions: string[];
  leadership: LeadershipItem[];
  departments: DepartmentItem[];
}

interface BphClientViewProps {
  bphData: BphData;
  hashtag: string;
}

type FilterCategory = "all" | "executive" | "internal" | "external";

// ponytail: instant search + cluster filter with framer-motion AnimatePresence; upgrade to dynamic modal detail view if member bio/social profiles are added.
export default function BphClientView({ bphData, hashtag }: BphClientViewProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filterTabs = [
    { id: "all", label: "Semua Struktur", count: bphData.leadership.length + bphData.departments.length },
    { id: "executive", label: "Pimpinan Inti", count: bphData.leadership.length },
    { id: "internal", label: "Rumpun Internal", count: bphData.departments.filter(d => d.cluster === "Internal").length },
    { id: "external", label: "Rumpun Eksternal", count: bphData.departments.filter(d => d.cluster === "Eksternal").length },
  ];

  // Filtered leadership items
  const filteredLeadership = useMemo(() => {
    if (activeFilter === "internal" || activeFilter === "external") return [];
    return bphData.leadership.filter((l) => {
      const matchQuery =
        l.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchQuery;
    });
  }, [bphData.leadership, activeFilter, searchQuery]);

  // Filtered departments items
  const filteredDepartments = useMemo(() => {
    if (activeFilter === "executive") return [];
    return bphData.departments.filter((d) => {
      const matchCluster =
        activeFilter === "all" ||
        (activeFilter === "internal" && d.cluster === "Internal") ||
        (activeFilter === "external" && d.cluster === "Eksternal");
      
      const matchQuery =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.programs.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCluster && matchQuery;
    });
  }, [bphData.departments, activeFilter, searchQuery]);

  const totalResults = filteredLeadership.length + filteredDepartments.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-14 text-slate-100">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-slate-800 pb-8 space-y-4"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          <span>ROSTER ORGANISASI // PERIODE {bphData.period}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          STRUKTUR BPH <span className="text-orange-400">ADHIRAJYA</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          {bphData.philosophy}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
          <span className="text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/30 font-bold">
            MOTTO: ”{bphData.tagline}”
          </span>
          <span className="text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            SANSKERTA: {bphData.cabinetSanskrit}
          </span>
        </div>
      </motion.div>

      {/* VISI & MISI (SPLIT MANIFESTO) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visi */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-950 text-white p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 relative z-10">
            <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold uppercase">
              <Compass className="h-4 w-4" />
              <span>Visi Strategis</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
              Arah Gerak 2026
            </h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-orange-500 pl-4 py-1 relative z-10">
            ”{bphData.vision}”
          </p>
          <div className="pt-4 border-t border-slate-800 flex justify-between font-mono text-[11px] text-slate-400 relative z-10">
            <span>MANDAT MUBES TF</span>
            <span className="text-orange-400 font-bold">{hashtag}</span>
          </div>
        </motion.div>

        {/* Misi */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-lg"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold uppercase">
            <Target className="h-4 w-4" />
            <span>Pilar Realisasi Program Kerja</span>
          </div>
          <h2 className="text-xl font-black text-white">
            Komitmen Operasional Adhirajya
          </h2>
          <div className="space-y-3 pt-1">
            {bphData.missions.map((misi, idx) => (
              <div key={idx} className="flex items-start gap-3.5 pb-2.5 border-b border-slate-800 last:border-b-0">
                <span className="font-mono text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/30 shrink-0 mt-0.5">
                  MISI-0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{misi}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE CONTROLS BAR: FILTER TABS & LIVE SEARCH */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl">
          {/* Animated Cluster Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800/80">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as FilterCategory)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-2 ${
                    isSelected ? "text-orange-400 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="bph-active-filter-pill"
                      className="absolute inset-0 rounded-lg bg-orange-500/15 shadow-xs border border-orange-500/40"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-orange-500/30 text-orange-300 font-bold" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instant Search Bar */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari struktur, peran, atau proker..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Search feedback ticker */}
        {searchQuery && (
          <div className="font-mono text-xs text-slate-400 px-1">
            Menampilkan <span className="font-bold text-orange-400">{totalResults}</span> hasil untuk &quot;{searchQuery}&quot;
          </div>
        )}

        {/* 1. Jajaran Pimpinan Inti */}
        {filteredLeadership.length > 0 && (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                  // EXECUTIVE BOARD
                </span>
                <span className="font-mono text-xs text-slate-500">({filteredLeadership.length})</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">MANDAT EKSEKUTIF</span>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredLeadership.map((lead) => (
                  <motion.div
                    key={lead.role}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SpotlightCard
                      tiltIntensity={6}
                      spotlightColor="rgba(234, 88, 12, 0.25)"
                      className="rounded-2xl border border-slate-800 p-6 flex flex-col justify-between overflow-hidden shadow-xl min-h-[290px] bg-slate-900/90"
                    >
                      {/* Background Visual Cover with Scrim */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <Image
                          src={lead.image || "/images/bph/bph-card-bg.jpg"}
                          alt={`Latar Belakang Resmi ${lead.role} HMTF`}
                          fill
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/45" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900/90 text-orange-400 border border-slate-700 uppercase shadow-xs">
                            [{lead.category}]
                          </span>
                          <span className="font-mono text-xs text-orange-400 font-bold drop-shadow-sm">2026</span>
                        </div>
                        <h3 className="text-lg font-bold text-white pt-1 drop-shadow-md">{lead.role}</h3>
                        <p className="font-mono text-xs text-orange-400 font-semibold drop-shadow-sm">{lead.subtitle}</p>
                        <p className="text-xs text-slate-300 leading-relaxed pt-1 drop-shadow-sm">{lead.description}</p>
                      </div>

                      <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 font-mono text-[11px] text-slate-400 flex justify-between">
                        <span>HMTF TEL-U</span>
                        <span className="text-orange-400 font-semibold drop-shadow-sm flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>MANDAT AKTIF</span>
                        </span>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* 2. Jajaran Biro & Departemen */}
        {filteredDepartments.length > 0 && (
          <div className="space-y-5 pt-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                  // STRUKTUR PELAKSANA
                </span>
                <span className="font-mono text-xs text-slate-500">({filteredDepartments.length})</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">BIRO & DEPARTEMEN</span>
            </div>

            <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnimatePresence>
                {filteredDepartments.map((dept) => (
                  <motion.div
                    key={dept.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SpotlightCard
                      tiltIntensity={5}
                      spotlightColor="rgba(234, 88, 12, 0.25)"
                      className="rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-xl min-h-[300px] bg-slate-900/90"
                    >
                      {/* Background Visual Cover with Scrim */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <Image
                          src={dept.image || "/images/bph/bph-card-bg.jpg"}
                          alt={`Latar Belakang Resmi ${dept.name} HMTF`}
                          fill
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/45" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-orange-400 bg-slate-900/90 px-2.5 py-0.5 rounded border border-slate-700 shadow-xs">
                            {dept.cluster}
                          </span>
                          <span className="font-mono text-[11px] text-slate-400 drop-shadow-sm">
                            ID: {dept.id.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">{dept.name}</h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed drop-shadow-sm">{dept.desc}</p>

                        <div className="pt-2">
                          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 drop-shadow-sm">
                            Program Kerja Utama:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {dept.programs.map((prog, i) => (
                              <span
                                key={i}
                                className="font-mono text-[11px] bg-slate-900/90 text-slate-300 px-2 py-0.5 rounded border border-slate-800 shadow-xs"
                              >
                                {prog}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>RUMPUN: {dept.cluster}</span>
                        <span className="text-orange-400 font-semibold drop-shadow-sm">BPH 2026</span>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Empty State */}
        {totalResults === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl bg-slate-900/40 space-y-3">
            <Filter className="h-8 w-8 text-slate-500 mx-auto" />
            <div className="text-base font-bold text-white">Tidak ada struktur yang cocok</div>
            <p className="text-xs text-slate-400 font-mono">
              Tidak ditemukan hasil untuk &quot;{searchQuery}&quot; pada filter {activeFilter}.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 text-white font-mono text-xs hover:bg-orange-500 transition-colors shadow-md"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
