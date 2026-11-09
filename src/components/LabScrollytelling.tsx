"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Zap, 
  Thermometer, 
  Atom, 
  CircuitBoard, 
  ArrowRight, 
  ExternalLink,
  Activity,
  Layers,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";

interface LabItem {
  name: string;
  short: string;
  focus: string;
}

interface LabScrollytellingProps {
  labs: LabItem[];
}

const LAB_ICONS = [GaugeIcon, Zap, Thermometer, Atom, CircuitBoard];

function GaugeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l3-3m-6 3a3 3 0 116 0 3 3 0 01-6 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a8 8 0 10-14.8 0" />
    </svg>
  );
}

const LAB_METRICS = [
  { code: "SPEC-INS", telemetry: "48 I/O Channels", equipment: "DSO, PLC S7-1200, Sensor Hub", status: "ONLINE // CALIBRATED" },
  { code: "SPEC-TKE", telemetry: "2.4 kWp Monocrystalline", equipment: "Solar Simulator, Pyranometer, Wind Tunnel", status: "ACTIVE // GRID SYNC" },
  { code: "SPEC-TRM", telemetry: "ΔT 180°C Boundary", equipment: "Conduction Benchmark, Refrigeration Rig", status: "NOMINAL // STEADY STATE" },
  { code: "SPEC-MAT", telemetry: "Nanoscale XRD & UV-Vis", equipment: "Sputtering Chamber, Four-Point Probe", status: "SECURE // VACUUM 10^-5" },
  { code: "SPEC-SIS", telemetry: "32-bit RISC-V SoC", equipment: "SMD Rework Station, Logic Analyzer 16Ch", status: "READY // TEST RUNNING" },
];

// ponytail: sticky scrollytelling with discrete step interpolation; upgrade to canvas WebGL 3D lab instrument model preview if 3D assets available.
export default function LabScrollytelling({ labs }: LabScrollytellingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map 0 -> 1 into 0, 1, 2, 3, 4
      const step = Math.min(Math.floor(latest * labs.length), labs.length - 1);
      setActiveStep(Math.max(0, step));
    });
    return () => unsubscribe();
  }, [scrollYProgress, labs.length]);

  const activeLab = labs[activeStep] || labs[0];
  const activeMetric = LAB_METRICS[activeStep] || LAB_METRICS[0];
  const ActiveIcon = LAB_ICONS[activeStep] || Cpu;

  return (
    <div ref={containerRef} className="relative min-h-[260vh] sm:min-h-[300vh]">
      {/* Sticky Frame Viewport */}
      <div className="sticky top-20 sm:top-24 h-auto min-h-[580px] w-full flex flex-col justify-center py-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-6 sm:p-10 shadow-[0_0_50px_rgba(234,88,12,0.12)] relative overflow-hidden">
          {/* Subtle Cyber Grid Glow */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800/80 pb-5 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                <span>SCROLLYTELLING // 5 LABORATORIUM RISET</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                Ekosistem Laboratorium Keahlian Fisika
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400">
                FASE [{activeStep + 1} / {labs.length}]
              </span>
              <Link
                href="/akademik"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Katalog Penuh</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Scrollytelling Interactive Stage */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Active Lab HUD Display Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLab.name}
                  initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <SpotlightCard
                    tiltIntensity={5}
                    spotlightColor="rgba(234, 88, 12, 0.22)"
                    className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
                  >
                    {/* Top Status Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold">
                          LAB-0{activeStep + 1}
                        </span>
                        <span className="text-slate-400">[{activeMetric.code}]</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{activeMetric.status}</span>
                      </span>
                    </div>

                    {/* Main Title & Icon */}
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-slate-800 border border-orange-500/30 text-orange-400 shrink-0">
                        <ActiveIcon className="h-7 w-7" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-xs text-orange-400 font-semibold uppercase tracking-wider">
                          {activeLab.short}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                          {activeLab.name}
                        </h3>
                      </div>
                    </div>

                    {/* Focus Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-orange-500/80 pl-4 py-1">
                      {activeLab.focus}
                    </p>

                    {/* Technical Specs Telemetry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                          Parameter Telemetri:
                        </span>
                        <span className="text-slate-200 font-semibold">{activeMetric.telemetry}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                          Instrumen Utama:
                        </span>
                        <span className="text-orange-300 font-semibold">{activeMetric.equipment}</span>
                      </div>
                    </div>

                    {/* Bottom Link Action */}
                    <div className="pt-2 flex justify-between items-center text-xs font-mono text-slate-400">
                      <span>LOKASI: FTE TELKOM UNIVERSITY</span>
                      <Link
                        href="/akademik"
                        className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-bold"
                      >
                        <span>Akses SOP & Praktikum</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: 5 Labs Navigation List / Timeline Rail */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-3">
                // KLIK ATAU GULIR UNTUK MEMILIH LAB:
              </span>
              <div className="space-y-2">
                {labs.map((lab, idx) => {
                  const isSelected = activeStep === idx;
                  const Icon = LAB_ICONS[idx] || Cpu;

                  return (
                    <button
                      key={lab.name}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 border-orange-500/80 shadow-[0_0_20px_rgba(234,88,12,0.18)]"
                          : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded font-bold transition-colors ${
                            isSelected
                              ? "bg-orange-500 text-slate-950"
                              : "bg-slate-800 text-slate-400 group-hover:text-slate-200"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <div>
                          <div
                            className={`text-xs sm:text-sm font-bold transition-colors ${
                              isSelected ? "text-orange-400" : "text-slate-300 group-hover:text-white"
                            }`}
                          >
                            {lab.short}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 font-mono">
                            {LAB_METRICS[idx]?.code}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isSelected ? (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                          </span>
                        ) : (
                          <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress Indicator Track */}
              <div className="pt-4 flex items-center gap-2">
                <span className="font-mono text-[10px] text-slate-500">SCROLL PROGRESS</span>
                <div className="flex-1 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                    style={{ width: `${((activeStep + 1) / labs.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
