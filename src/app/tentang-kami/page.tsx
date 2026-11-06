import { Metadata } from "next";
import { 
  ShieldCheck, 
  History, 
  Flag, 
  Sparkles,
  Compass,
  CheckCircle2,
  Palette,
  CircleDot
} from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";

export const metadata: Metadata = {
  title: "Tentang Kami & Filosofi Logo HMTF",
  description: "Sejarah berdirinya HMTF Telkom University sejak 5 April 2014, filosofi resmi logo HMTF, dan nilai Grey Warrior.",
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
          Mengenal akar sejarah berdirinya himpunan, filosofi resmi lambang HMTF, dan makna kedaulatan Kabinet Adhirajya.
        </p>
      </div>

      {/* SEGMEN FILOSOFI RESMI LOGO HMTF */}
      <section className="rounded-3xl border border-[#132b4f] bg-gradient-to-br from-[#09172c] via-[#050d1a] to-[#09172c] p-8 sm:p-12 space-y-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Logo Showcase */}
          <div className="flex flex-col items-center text-center shrink-0">
            <div className="p-4 rounded-3xl bg-[#09172c] border border-[#132b4f] shadow-2xl shadow-amber-500/10">
              <Logo size={140} showGlow={true} />
            </div>
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase mt-4 block">
              Logo Resmi HMTF
            </span>
            <span className="text-[11px] text-slate-400">Universitas Telkom Bandung</span>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-md bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/20">
              <Palette className="h-3.5 w-3.5" />
              <span>Konstitusi Lambang Organisasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Filosofi Logo & Makna Warna HMTF
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Lambang resmi HMTF Telkom University merepresentasikan identitas keilmuan fisika rekayasa yang berakar pada kedaulatan, ketenangan berpikir saintifik, dan dinamika semangat tak berujung.
            </p>

            {/* 3 Warna Dasar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-3.5 w-3.5 rounded-full bg-white border border-slate-300 inline-block" />
                  <span className="text-xs font-bold text-white">Putih</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Melambangkan netralitas, independen, dan pergerakan atas hal yang baik.
                </p>
              </div>

              <div className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-3.5 w-3.5 rounded-full bg-slate-900 border border-[#132b4f] inline-block" />
                  <span className="text-xs font-bold text-white">Hitam / Navy</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Melambangkan ketenangan, keteguhan, dan kewibawaan organisasi.
                </p>
              </div>

              <div className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-3.5 w-3.5 rounded-full bg-amber-500 inline-block" />
                  <span className="text-xs font-bold text-amber-400">Jingga / Oranye</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Melambangkan jiwa yang cerah, optimisme, dan keceriaan mahasiswa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Filosofi Bentuk */}
        <div className="border-t border-[#132b4f] pt-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
            Filosofi Bentuk Geometris:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#132b4f] bg-[#09172c]/50 p-4 flex items-start gap-3">
              <CircleDot className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Lingkaran Segi Tanpa Batas</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Melambangkan tujuan mulia yang kekal untuk kini dan masa yang akan datang.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[#132b4f] bg-[#09172c]/50 p-4 flex items-start gap-3">
              <CircleDot className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Empat Sisi Menuju Empat Arah</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Melambangkan empat bidang pilar keahlian Teknik Fisika Universitas Telkom.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[#132b4f] bg-[#09172c]/50 p-4 flex items-start gap-3">
              <CircleDot className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Simbol Matematis & Fisis Phi (Φ)</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Konstanta tak terbatas (3,14...), mencerminkan kecintaan mahasiswa Teknik Fisika atas himpunannya yang tak pernah berakhir.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[#132b4f] bg-[#09172c]/50 p-4 flex items-start gap-3">
              <CircleDot className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Anagram TF & Physics</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Huruf Phi sekaligus mewakili anagram tulisan TF (Teknik Fisika) dan rumpun keilmuan Physics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        <div className="lg:col-span-5 rounded-2xl border border-[#132b4f] bg-[#09172c]/60 p-6 sm:p-8 space-y-4">
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
          <div className="pt-2 border-t border-[#132b4f] flex items-center justify-between text-xs text-slate-500">
            <span>Didirikan: 5 April 2014</span>
            <span className="text-amber-400 font-semibold">{siteConfig.hashtag}</span>
          </div>
        </div>
      </section>

      {/* FILOSOFI GREY WARRIOR & JAHIM ABU-ABU */}
      <section className="rounded-3xl border border-[#132b4f] bg-gradient-to-br from-[#09172c] via-[#050d1a] to-[#09172c] p-8 sm:p-12 space-y-6">
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
          <div className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-5">
            <h3 className="text-sm font-bold text-amber-400 mb-1">Ketangguhan Riset</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tekun memecahkan persoalan instrumentasi, energi, dan material kompleks dengan metode saintifik yang presisi.
            </p>
          </div>
          <div className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-5">
            <h3 className="text-sm font-bold text-white mb-1">Soliditas Bersaudara</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Membangun empati dan kebersamaan lintas angkatan; saling mendukung dalam perkuliahan hingga gerbang kelulusan.
            </p>
          </div>
          <div className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-5">
            <h3 className="text-sm font-bold text-amber-400 mb-1">Integritas Berdaulat</h3>
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
          <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/50 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Tingkat Pertama
              </span>
              <h3 className="text-lg font-bold text-white">Anggota Muda</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Mahasiswa baru Program Studi S1 Teknik Fisika yang sedang menempuh proses pembinaan dan kaderisasi awal (Kalibrasi) untuk mengenal budaya dan nilai himpunan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#132b4f] text-[11px] text-slate-500">
              Tahap Pembinaan Karakter
            </div>
          </div>

          <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/50 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Tingkat Inti
              </span>
              <h3 className="text-lg font-bold text-white">Anggota Biasa</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Mahasiswa aktif yang telah menyelesaikan seluruh tahapan kaderisasi, memiliki hak suara penuh dalam MUBES, serta berhak menjadi pengurus BPH.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#132b4f] text-[11px] text-slate-500">
              Pemegang Hak Suara & Pengurus
            </div>
          </div>

          <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/50 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Tingkat Kehormatan
              </span>
              <h3 className="text-lg font-bold text-white">Anggota Kehormatan</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Alumni S1 Teknik Fisika Telkom University atau individu yang telah memberikan kontribusi dan jasa luar biasa terhadap eksistensi serta kemajuan himpunan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#132b4f] text-[11px] text-slate-500">
              Ikatan Alumni & Tokoh Berjasa
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
