"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";

// ponytail: floating glass pill with framer-motion layoutId spring; upgrade to scroll-shrink dynamic sticky header if page has 10+ sections.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 w-full px-3 py-2 sm:px-6 sm:py-3 pointer-events-none">
      <header className="mx-auto max-w-7xl rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.06)] pointer-events-auto transition-all duration-300">
        {/* Micro-bar architectural status ticker */}
        <div className="hidden md:flex border-b border-slate-100/80 px-5 py-1 items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-slate-800 tracking-wider">HMTF-TELU</span>
            <span className="text-slate-300">/</span>
            <span>S1 TEKNIK FISIKA</span>
            <span className="text-slate-300">/</span>
            <span>FAKULTAS TEKNIK ELEKTRO</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>KABINET ADHIRAJYA 2026</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-orange-600 font-bold">{siteConfig.hashtag}</span>
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
                <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                  HMTF TELKOM UNIVERSITY
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] font-bold px-1.5 py-0.5 bg-orange-50 text-orange-700 rounded border border-orange-200">
                  2026
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-slate-500 tracking-tight">
                Kedaulatan Grey Warrior • Kabinet Adhirajya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Floating Animated Spring Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-xl border border-slate-200/50">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    isActive ? "text-orange-600 font-bold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-lg bg-white shadow-xs border border-slate-200/80"
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
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-mono font-semibold text-white tracking-wider uppercase hover:bg-orange-600 transition-colors shadow-xs group"
              >
                <span>Kirim Aspirasi</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              className="lg:hidden border-t border-slate-100 px-4 pt-3 pb-5 space-y-1 overflow-hidden"
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
                        ? "bg-orange-50 text-orange-600 font-bold border border-orange-200/60"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <Link
                  href="/aspirasi"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-mono font-semibold text-white uppercase hover:bg-orange-600 transition-colors"
                >
                  <span>Kirim Aspirasi</span>
                  <ArrowUpRight className="h-4 w-4 text-orange-400" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
