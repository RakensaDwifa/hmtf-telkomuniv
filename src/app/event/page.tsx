import { Metadata } from "next";
import { 
  Calendar, 
  Flame, 
  Trophy, 
  BookOpen, 
  ExternalLink, 
  Camera, 
  Sparkles,
  Layers
} from "lucide-react";
import eventsData from "@/data/events.json";

export const metadata: Metadata = {
  title: "Event & Dokumentasi Galeri",
  description: "Dokumentasi kegiatan, kompetisi sains Technogine, Pekan Tubes, dan publikasi E-Magazine HMTF Telkom University.",
};

export default function EventPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-400">
          <Camera className="h-4 w-4" />
          <span>Aktivitas & Publikasi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          EVENT & <span className="text-amber-400">GALERI HMTF</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Arsip program kerja unggulan, kompetisi teknologi berskala nasional, serta dinamika kekeluargaan Grey Warrior Telkom University.
        </p>
      </div>

      {/* EVENT UNGGULAN & PROGRAM KERJA */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Rangkaian Program
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Program Kerja & Agenda Utama
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Ajang pengembangan akademik, tradisi kekeluargaan, dan kontribusi nyata kepada masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.events.map((ev) => (
            <div
              key={ev.id}
              className="rounded-2xl border border-[#132b4f] bg-[#09172c]/70 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block rounded-md bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/20">
                    {ev.badge}
                  </span>
                  <span className="text-[10px] text-slate-400">{ev.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{ev.title}</h3>
                <p className="text-xs text-amber-400 font-medium mt-0.5 mb-3">{ev.subtitle}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{ev.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#132b4f]/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-amber-400" />
                  {ev.period}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">HMTF Tel-U</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E-MAGAZINE & BULETIN */}
      <section className="rounded-3xl border border-[#132b4f] bg-gradient-to-br from-[#09172c] via-[#050d1a] to-[#09172c] p-8 sm:p-12 space-y-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-md bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/20 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Kajian & Publikasi</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            E-Magazine & Buletin Mahasiswa
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Majalah digital berkala yang mengulas seputar inovasi riset Teknik Fisika, profil alumni berprestasi, dan dinamika keorganisasian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {eventsData.publications.map((pub, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  {pub.edition}
                </span>
                <h3 className="text-base font-bold text-white">{pub.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{pub.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#132b4f]">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Baca Buletin di Google Drive</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL MEDIA FEED CALLOUT */}
      <section className="rounded-2xl border border-[#132b4f] bg-[#09172c]/60 p-8 text-center space-y-3">
        <Sparkles className="h-7 w-7 text-amber-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Ikuti Liputan Kegiatan Terbaru Kami</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Foto dokumentasi Parade Wisuda, liputan pengabdian masyarakat, dan pengumuman lomba diunggah secara berkala di akun Instagram resmi himpunan.
        </p>
        <div className="pt-2">
          <a
            href="https://www.instagram.com/hmtftelkomuniv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#09172c] border border-[#132b4f] px-5 py-2.5 text-xs font-bold text-white hover:border-amber-500/40 transition-all"
          >
            <span>Buka Instagram @hmtftelkomuniv</span>
            <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
          </a>
        </div>
      </section>
    </div>
  );
}
