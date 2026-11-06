"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquare } from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#132b4f] bg-[#050d1a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand with Official HMTF Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <Logo size={44} />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
                HMTF
              </span>
              <span className="inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                2026
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium tracking-tight">
              Kabinet Adhirajya • Telkom Univ
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-amber-400 bg-[#09172c] border border-amber-500/30 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-[#09172c]/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/aspirasi"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition-all active:scale-95"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Aspirasi</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-[#09172c] hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#132b4f] bg-[#050d1a]/95 px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                  isActive
                    ? "bg-[#09172c] text-amber-400 border border-amber-500/30"
                    : "text-slate-300 hover:bg-[#09172c] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/aspirasi"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2.5 text-sm font-bold text-slate-950 shadow hover:from-amber-400 hover:to-orange-400"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Kirim Aspirasi Mahasiswa</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
