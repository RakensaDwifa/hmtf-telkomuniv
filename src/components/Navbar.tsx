"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";

// ponytail: floating cyber HUD pill with framer-motion layoutId spring; upgrade to scroll-shrink dynamic sticky header if page has 10+ sections.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 w-full px-3 py-2 sm:px-6 sm:py-3 pointer-events-none">
      <header className="mx-auto max-w-7xl rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)] pointer-events-auto transition-all duration-300">
        {/* Micro-bar architectural status ticker */}
        <div className="hidden md:flex border-b border-slate-800/80 bg-slate-900/50 px-5 py-1 items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-slate-200 tracking-wider">HMTF-TELU</span>
            <span className="text-slate-600">/</span>
            <span>S1 TEKNIK FISIKA</span>
            <span className="text-slate-600">/</span>
            <span>FAKULTAS TEKNIK ELEKTRO</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>KABINET ADHIRAJYA 2026</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-orange-400 font-bold">{siteConfig.hashtag}</span>
          </div>
        </div>

        {/* Main Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-16 sm:h-18">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Logo size={40} framed />
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  HMTF TELKOM UNIVERSITY
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] font-bold px-1.5 py-0.5 bg-orange-500/15 text-orange-400 rounded border border-orange-500/30">
                  2026
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-slate-400 tracking-tight">
                Kedaulatan Grey Warrior • Kabinet Adhirajya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Floating Animated Spring Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive ? "text-orange-400 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-lg bg-orange-500/15 border border-orange-500/40 shadow-[0_0_12px_rgba(234,88,12,0.25)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/aspirasi"
                className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-4 py-2 text-xs font-mono font-semibold text-white tracking-wider uppercase hover:bg-orange-500 transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] group"
              >
                <span>Kirim Aspirasi</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-300 hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 text-orange-400" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-3 pb-5 space-y-1 overflow-hidden"
            >
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-orange-500/15 text-orange-400 font-bold border border-orange-500/40"
                        : "text-slate-300 hover:bg-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-800 mt-2">
                <Link
                  href="/aspirasi"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-mono font-semibold text-white uppercase hover:bg-orange-500 transition-colors shadow-md"
                >
                  <span>Kirim Aspirasi</span>
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
