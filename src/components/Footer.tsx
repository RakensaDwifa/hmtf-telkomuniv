import Link from "next/link";
import { Atom, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/Icons";
import siteConfig from "@/data/site-config.json";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Atom className="h-6 w-6" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">HMTF Telkom Univ</span>
                <span className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
                  {siteConfig.cabinet} ({siteConfig.cabinetSanskrit})
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="inline-block rounded-md bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-semibold text-amber-300">
              {siteConfig.tagline} • {siteConfig.hashtag}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Layanan Akademik & Kemahasiswaan */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Layanan Mahasiswa
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/akademik" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Bank Soal UTS & UAS
                </Link>
              </li>
              <li>
                <Link href="/akademik" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Info 5 Laboratorium TF
                </Link>
              </li>
              <li>
                <Link href="/event" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Technogine & Pekan Tubes
                </Link>
              </li>
              <li>
                <Link href="/aspirasi" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Kotak Aspirasi Grey Warrior
                </Link>
              </li>
              <li>
                <a
                  href="https://bpe.telkomuniversity.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Portal S1 Teknik Fisika</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Sekretariat & Kontak
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>

              {/* Social icons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {siteConfig.period} {siteConfig.name}. Departemen Komunikasi & Informasi {siteConfig.cabinet}.
          </p>
          <div className="flex items-center gap-3">
            <span>Grey Warrior Pride</span>
            <span>•</span>
            <span className="text-amber-500/80 font-semibold">{siteConfig.hashtag}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
