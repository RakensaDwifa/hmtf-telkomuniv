import { Metadata } from "next";
import { 
  Atom, 
  ShieldCheck, 
  History, 
  Users, 
  Flag, 
  Sparkles,
  Compass,
  CheckCircle2
} from "lucide-react";
import siteConfig from "@/data/site-config.json";
import bphData from "@/data/bph.json";

export const metadata: Metadata = {
  title: "Tentang Kami & Sejarah HMTF",
  description: "Sejarah berdirinya HMTF Telkom University sejak 5 April 2014, filosofi Grey Warrior, dan nilai dasar organisasi.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-400">
          <History className="h-4 w-4" />
          <span>Profil & Rekam Jejak</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          TENTANG <span className="text-amber-400">HMTF TELKOM UNIV</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Mengenal akar sejarah berdirinya himpunan, filosofi jaket kebanggaan Grey Warrior, dan makna kedaulatan Kabinet Adhirajya.
        </p>
      </div>

      {/* SEJARAH BERDIRI */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Kilas Balik Pendirian
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Lahir pada 5 April 2014
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              Program Studi S1 Teknik Fisika di Universitas Telkom dibentuk pada tahun 2009 di bawah naungan Fakultas Teknik Elektro (FTE). Seiring bertambahnya mahasiswa dan kebutuhan akan wadah aspirasi serta pengembangan potensi keilmuan, maka pada tanggal <strong className="text-white">5 April 2014</strong>, Himpunan Mahasiswa Teknik Fisika (HMTF) resmi dideklarasikan.
            </p>
            <p>
              Langkah awal fundamental dimulai melalui penyelenggaraan kongres mahasiswa pertama untuk menyusun Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) sebagai pedoman resmi organisasi. Kepemimpinan HMTF dipilih secara demokratis melalui mekanisme <strong className="text-white">Musyawarah Besar (MUBES)</strong> yang melibatkan seluruh mahasiswa Teknik Fisika.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Flag className="h-5 w-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Musyawarah Besar</span>
              <span className="text-[11px] text-slate-400 block">Kedaulatan Suara Mahasiswa</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            HMTF menempatkan MUBES sebagai instrumen tertinggi pengambilan keputusan strategis dan suksesi estafet kepemimpinan, memastikan setiap anggota memiliki hak suara yang setara dalam menentukan masa depan organisasi.
          </p>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>Didirikan: 5 April 2014</span>
            <span className="text-amber-400 font-semibold">{siteConfig.hashtag}</span>
          </div>
        </div>
      </section>

      {/* FILOSOFI GREY WARRIOR & JAHIM ABU-ABU */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/50 to-slate-950 p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-md bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Identitas & Simbolik</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Filosofi Grey Warrior & Jaket Abu-Abu
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Jaket himpunan (Jahim) berwarna abu-abu bukan sekadar pakaian seragam, melainkan lambang perjuangan, ketangguhan intelektual, dan persaudaraan tanpa sekat. Warna abu-abu merepresentasikan sifat netral, tenang, bijaksana, serta keteguhan dalam menganalisis fenomena fisika dan tantangan rekayasa teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
            <h3 className="text-sm font-bold text-amber-400 mb-1">Ketangguhan Riset</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tekun memecahkan persoalan instrumentasi, energi, dan material kompleks dengan metode saintifik yang presisi.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
            <h3 className="text-sm font-bold text-sky-400 mb-1">Soliditas Bersaudara</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Membangun empati dan kebersamaan lintas angkatan; saling mendukung dalam perkuliahan hingga gerbang kelulusan.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
            <h3 className="text-sm font-bold text-emerald-400 mb-1">Integritas Berdaulat</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Memegang teguh etika profesi rekayasa dan independensi nilai organisasi demi kebermanfaatan bangsa.
            </p>
          </div>
        </div>
      </section>

      {/* KLASIFIKASI KEANGGOTAAN */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Struktur Konstitusi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Status Keanggotaan HMTF
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Berdasarkan AD/ART HMTF Telkom University, anggota terbagi menjadi 3 tingkatan:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Tingkat Pertama
              </span>
              <h3 className="text-lg font-bold text-white">Anggota Muda</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Mahasiswa baru Program Studi S1 Teknik Fisika yang sedang menempuh proses pembinaan dan kaderisasi awal (Kalibrasi) untuk mengenal budaya dan nilai himpunan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
              Tahap Pembinaan Karakter
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Tingkat Inti
              </span>
              <h3 className="text-lg font-bold text-white">Anggota Biasa</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Mahasiswa aktif yang telah menyelesaikan seluruh tahapan kaderisasi, memiliki hak suara penuh dalam MUBES, serta berhak menjadi pengurus BPH.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
              Pemegang Hak Suara & Pengurus
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Tingkat Kehormatan
              </span>
              <h3 className="text-lg font-bold text-white">Anggota Kehormatan</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Alumni S1 Teknik Fisika Telkom University atau individu yang telah memberikan kontribusi dan jasa luar biasa terhadap eksistensi serta kemajuan himpunan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
              Ikatan Alumni & Tokoh Berjasa
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
