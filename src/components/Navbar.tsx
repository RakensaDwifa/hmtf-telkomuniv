"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs border-b border-slate-200">
      {/* Top architectural micro-bar */}
      <div className="hidden md:flex border-b border-slate-100 bg-slate-50 px-4 sm:px-6 lg:px-8 py-1 items-center justify-between text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-700 tracking-wider">HMTF-TELU</span>
          <span className="text-slate-300">/</span>
          <span>PROGRAM STUDI S1 TEKNIK FISIKA</span>
          <span className="text-slate-300">/</span>
          <span>FAKULTAS TEKNIK ELEKTRO</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>KABINET ADHIRAJYA 2026</span>
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-bold">{siteConfig.hashtag}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={42} framed />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                HMTF TELKOM UNIVERSITY
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                2026
              </span>
            </div>
            <span className="font-mono text-[11px] text-slate-500 tracking-tight">
              Kedaulatan Grey Warrior • Kabinet Adhirajya
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/aspirasi"
            className="inline-flex items-center gap-1.5 rounded bg-slate-900 px-3.5 py-2 text-xs font-mono font-semibold text-white tracking-wider uppercase hover:bg-orange-600 transition-colors"
          >
            <span>Kirim Aspirasi</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-orange-400" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-semibold ${
                  isActive
                    ? "bg-slate-100 text-orange-600 font-bold"
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
              className="flex items-center justify-center gap-2 w-full rounded bg-slate-900 px-4 py-2.5 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-600"
            >
              <span>Kirim Aspirasi Mahasiswa</span>
              <ArrowUpRight className="h-4 w-4 text-orange-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
