import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/Icons";
import siteConfig from "@/data/site-config.json";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      {/* Top micro coordinate bar */}
      <div className="border-b border-slate-100 bg-slate-50 px-4 sm:px-6 lg:px-8 py-2">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-800">DOC: HMTF-WEB-2026</span>
            <span>•</span>
            <span>BANDUNG, JAWA BARAT, ID</span>
          </div>
          <div className="flex items-center gap-3">
            <span>TERAKREDITASI UNGGUL</span>
            <span>•</span>
            <span className="text-orange-600 font-bold">{siteConfig.hashtag}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Identity & Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={42} framed />
              <div>
                <span className="text-base font-black tracking-tight text-slate-900 block">
                  HMTF TELKOM UNIVERSITY
                </span>
                <span className="font-mono text-xs text-orange-600 font-semibold tracking-wider uppercase">
                  {siteConfig.cabinet} ({siteConfig.cabinetSanskrit})
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              {siteConfig.description} Wadah kedaulatan mahasiswa dalam pengembangan rekayasa fisika, instrumentasi, energi, dan material cerdas.
            </p>
            <div className="font-mono text-[11px] text-slate-500 border-l-2 border-orange-500 pl-3 py-0.5">
              "{siteConfig.tagline}"
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
              Direktori
            </h3>
            <ul className="space-y-2 text-xs">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Layanan Mahasiswa */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
              Layanan & Riset
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/akademik" className="text-slate-600 hover:text-orange-600 transition-colors">
                  Bank Soal UTS / UAS Terpadu
                </Link>
              </li>
              <li>
                <Link href="/akademik" className="text-slate-600 hover:text-orange-600 transition-colors">
                  5 Laboratorium Riset Teknik Fisika
                </Link>
              </li>
              <li>
                <Link href="/event" className="text-slate-600 hover:text-orange-600 transition-colors">
                  Technogine & Pekan Tugas Besar
                </Link>
              </li>
              <li>
                <Link href="/aspirasi" className="text-slate-600 hover:text-orange-600 transition-colors">
                  Kotak Aspirasi Grey Warrior
                </Link>
              </li>
              <li>
                <a
                  href="https://bpe.telkomuniversity.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Portal Prodi S1 Teknik Fisika</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
              Sekretariat & Hubungan
            </h3>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                <span className="leading-tight">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-600 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-slate-900 transition-colors font-mono">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-600 shrink-0" />
                <span className="font-mono">{siteConfig.contact.phone}</span>
              </div>

              {/* Social links */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-300 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={siteConfig.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-300 transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <p>
            © {siteConfig.period} {siteConfig.name}. BPH Kabinet Adhirajya.
          </p>
          <div className="flex items-center gap-3">
            <span>EST. 2014-04-05</span>
            <span>•</span>
            <span className="text-orange-600 font-bold">{siteConfig.hashtag}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
