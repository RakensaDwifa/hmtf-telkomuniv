import { Metadata } from "next";
import { 
  Calendar, 
  Camera, 
  ArrowUpRight
} from "lucide-react";
import eventsData from "@/data/events.json";
import siteConfig from "@/data/site-config.json";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata: Metadata = {
  title: "Event, Program Kerja & Buletin HMTF",
  description: "Dokumentasi agenda, kompetisi sains Technogine, Pekan Tubes, dan publikasi E-Magazine HMTF Telkom University.",
};

// ponytail: cyber chronicle & publications feed; upgrade to dynamic CMS api stream if notion or sanity database hooked.
export default function EventPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16 text-slate-100">
      {/* Editorial Header */}
      <div className="border-b border-slate-800 pb-8 space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold uppercase tracking-wider">
          <Camera className="h-4 w-4" />
          <span>KRONIK & PUBLIKASI // PERIODE {siteConfig.period}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          AGENDA & <span className="text-orange-400">PUBLIKASI HMTF</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Dokumentasi program kerja unggulan, kompetisi rekayasa sains berskala nasional, pengabdian masyarakat, dan arsip buletin digital Grey Warrior.
        </p>
      </div>

      {/* AGENDA UTAMA & PROGRAM KERJA */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
            // RANGKAIAN PROGRAM
          </span>
          <h2 className="text-2xl font-black text-white mt-1">
            Program Kerja & Agenda Unggulan
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Ajang akselerasi keilmuan teknologi, tradisi kekeluargaan, dan kontribusi nyata kepada civitas akademika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.events.map((ev) => (
            <SpotlightCard
              key={ev.id}
              tiltIntensity={5}
              spotlightColor="rgba(234, 88, 12, 0.22)"
              className="rounded-2xl border border-slate-800 bg-slate-900/85 backdrop-blur-md p-6 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {ev.badge}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">{ev.category}</span>
                </div>
                <h3 className="text-lg font-bold text-white pt-1">{ev.title}</h3>
                <p className="font-mono text-xs text-orange-400 font-semibold">{ev.subtitle}</p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">{ev.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-orange-400" />
                  {ev.period}
                </span>
                <span className="text-slate-500">TF-TELU</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* E-MAGAZINE & BULETIN MAHASISWA */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-6 sm:p-10 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-4">
          <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
            // KAJIAN & MEDIA CETAK DIGITAL
          </span>
          <h2 className="text-2xl font-black text-white mt-1">
            E-Magazine & Buletin Himpunan
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">
            Majalah digital berkala Departemen Komunikasi & Informasi yang mengulas terobosan riset Teknik Fisika, profil alumni berprestasi, dan dinamika keorganisasian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventsData.publications.map((pub, idx) => (
            <SpotlightCard
              key={idx}
              tiltIntensity={4}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
                  [{pub.edition}]
                </span>
                <h3 className="text-base font-bold text-white">{pub.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pub.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>Buka Buletin di Google Drive</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-orange-400" />
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* SOCIAL MEDIA DISPATCH */}
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-base font-bold text-white">
            Liputan & Foto Dokumentasi Kegiatan Terkini
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Dokumentasi Parade Wisuda, live report kompetisi, pengabdian masyarakat, dan pengumuman lomba diunggah secara reguler di kanal media sosial resmi.
          </p>
        </div>
        <a
          href={siteConfig.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-500 transition-colors shrink-0 shadow-md"
        >
          <span>Instagram @hmtftelkomuniv</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-white" />
        </a>
      </section>
    </div>
  );
}
