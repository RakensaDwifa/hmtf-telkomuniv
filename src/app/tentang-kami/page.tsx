import { Metadata } from "next";
import { 
  History, 
  Flag, 
  CircleDot
} from "lucide-react";
import Logo from "@/components/Logo";
import siteConfig from "@/data/site-config.json";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata: Metadata = {
  title: "Tentang Kami & Dokumen Konstitusi HMTF",
  description: "Sejarah deklarasi HMTF Telkom University sejak 5 April 2014, spesifikasi resmi logo HMTF, dan kedaulatan Grey Warrior.",
};

// ponytail: constitution blueprint & history chronicle; upgrade to interactive timeline slider if multimedia archives digitised.
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16 text-slate-100">
      {/* Editorial Header */}
      <div className="border-b border-slate-800 pb-8 space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold uppercase tracking-wider">
          <History className="h-4 w-4" />
          <span>DOKUMEN HISTORIS // KODE: HMTF-HIST-2014</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          PROFIL & KONSTITUSI <span className="text-orange-400">HMTF</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Arsip autentik pendirian Himpunan Mahasiswa Teknik Fisika Universitas Telkom sejak 5 April 2014, bedah spesifikasi filosofi lambang $\Phi$, dan prinsip kedaulatan Grey Warrior.
        </p>
      </div>

      {/* SEGMEN BEDAH SPESIFIKASI LOGO HMTF */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-6 sm:p-10 space-y-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-slate-800 pb-6 gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              [ANALISIS GEOMETRIS & KROMATIK]
            </span>
            <h2 className="text-2xl font-black text-white">
              Spesifikasi Lambang Resmi HMTF
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Lambang resmi HMTF Telkom University merepresentasikan identitas keilmuan fisika rekayasa yang berakar pada kedaulatan independen, ketenangan berpikir saintifik, dan semangat berkesinambungan.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-md">
            <Logo size={80} framed />
            <div className="font-mono text-xs space-y-0.5">
              <div className="font-bold text-white">INSIGNIA: RESMI</div>
              <div className="text-slate-400">FORMAT: CIRCULAR VECTOR</div>
              <div className="text-orange-400 font-semibold">STATUS: KONSTITUSIONAL</div>
            </div>
          </div>
        </div>

        {/* 3 Warna Konstitusional */}
        <div>
          <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            Tiga Nilai Warna Konstitusi:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SpotlightCard
              tiltIntensity={4}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-3 w-3 rounded-full bg-white inline-block shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span className="font-mono text-xs font-bold text-white">PUTIH [NETRAL]</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Melambangkan netralitas, independensi dari intervensi luar, dan konsistensi pergerakan atas dasar kebenaran ilmiah.
              </p>
            </SpotlightCard>

            <SpotlightCard
              tiltIntensity={4}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-3 w-3 rounded-full bg-slate-700 border border-slate-500 inline-block" />
                <span className="font-mono text-xs font-bold text-slate-200">HITAM / NAVY [WIBAWA]</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Melambangkan ketenangan berpikir, keteguhan sikap dalam musyawarah, serta kedalaman intelektual civitas Teknik Fisika.
              </p>
            </SpotlightCard>

            <SpotlightCard
              tiltIntensity={4}
              spotlightColor="rgba(234, 88, 12, 0.25)"
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-3 w-3 rounded-full bg-orange-500 inline-block shadow-[0_0_10px_rgba(234,88,12,0.8)]" />
                <span className="font-mono text-xs font-bold text-orange-400">JINGGA / ORANYE [DINAMIS]</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Melambangkan jiwa yang cerah, optimisme inovasi teknologi, serta keceriaan semangat kebersamaan seluruh angkatan.
              </p>
            </SpotlightCard>
          </div>
        </div>

        {/* 4 Filosofi Bentuk Geometris */}
        <div className="border-t border-slate-800 pt-6">
          <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
            Empat Anatomi Bentuk Geometris:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex items-start gap-3">
              <CircleDot className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">01. Lingkaran Segi Tanpa Batas</span>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Melambangkan kebulatan tekad dan tujuan mulia yang kekal untuk kini dan masa yang akan datang.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex items-start gap-3">
              <CircleDot className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">02. Empat Sisi Menuju Empat Arah</span>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Mewakili empat bidang pilar keahlian utama Program Studi S1 Teknik Fisika Universitas Telkom.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex items-start gap-3">
              <CircleDot className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">03. Simbol Matematis & Fisis Phi (Φ)</span>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Konstanta irasional tak terbatas (3,14...), mencerminkan kecintaan mahasiswa pada himpunan yang tidak berkesudahan.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex items-start gap-3">
              <CircleDot className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">04. Anagram TF & Physics</span>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Huruf Phi (Φ) sekaligus menyatukan representasi akronim Teknik Fisika (TF) dan payung keilmuan Physics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH PENDIRIAN */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
            // KRONOLOGI PENDIRIAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Deklarasi 5 April 2014 & Musyawarah Besar
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              Program Studi S1 Teknik Fisika di Universitas Telkom dibentuk pada tahun 2009 di bawah naungan Fakultas Teknik Elektro (FTE). Seiring berkembangnya jumlah mahasiswa dan urgensi hadirnya wadah aspirasi serta akselerasi potensi keilmuan saintifik, maka pada tanggal <strong className="text-white">5 April 2014</strong>, Himpunan Mahasiswa Teknik Fisika (HMTF) resmi dideklarasikan.
            </p>
            <p>
              Fondasi dasar organisasi disusun melalui Kongres Mahasiswa pertama yang merumuskan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART). Regenerasi kepemimpinan dilangsungkan melalui <strong className="text-white">Musyawarah Besar (MUBES)</strong> sebagai forum kedaulatan tertinggi yang menjamin setiap suara mahasiswa memiliki bobot setara.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-xs font-mono shadow-md">
              <Flag className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-white block">Kedaulatan MUBES</span>
              <span className="font-mono text-[11px] text-slate-400 block">Kekuasaan Tertinggi Himpunan</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Musyawarah Besar bukan sekadar pergantian tampuk kepengurusan, melainkan evaluasi mandat konstitusional, pengesahan GBHK, dan perumusan arah gerak mahasiswa Teknik Fisika.
          </p>
          <div className="pt-2 border-t border-slate-800 flex justify-between font-mono text-[11px] text-slate-400">
            <span>DIDIRIKAN: 05/04/2014</span>
            <span className="text-orange-400 font-bold">{siteConfig.hashtag}</span>
          </div>
        </div>
      </section>

      {/* FILOSOFI GREY WARRIOR & JAHIM ABU-ABU */}
      <section className="border-t border-slate-800 pt-12 space-y-6">
        <div>
          <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
            // ENTITAS & IDENTITAS
          </span>
          <h2 className="text-2xl font-black text-white mt-1">
            Filosofi Grey Warrior & Jaket Abu-Abu
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Jaket himpunan (Jahim) abu-abu adalah perlambang komitmen intelektual dan persaudaraan tanpa sekat kasta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard
            tiltIntensity={4}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-2"
          >
            <span className="font-mono text-xs font-bold text-orange-400 block">PIL-01</span>
            <h3 className="text-sm font-bold text-white">Ketangguhan Riset</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Disiplin memecahkan problem instrumentasi, sensor, energi, dan material melalui metode saintifik presisi tinggi.
            </p>
          </SpotlightCard>

          <SpotlightCard
            tiltIntensity={4}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-2"
          >
            <span className="font-mono text-xs font-bold text-orange-400 block">PIL-02</span>
            <h3 className="text-sm font-bold text-white">Soliditas Bersaudara</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Memupuk kebersamaan lintas angkatan; saling menopang dalam studi perkuliahan, laboratorium, hingga kelulusan.
            </p>
          </SpotlightCard>

          <SpotlightCard
            tiltIntensity={4}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-2"
          >
            <span className="font-mono text-xs font-bold text-orange-400 block">PIL-03</span>
            <h3 className="text-sm font-bold text-white">Integritas Berdaulat</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Memegang teguh etika keilmuan dan independensi organisasi demi kontribusi nyata kepada masyarakat.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* KLASIFIKASI KEANGGOTAAN SESUAI AD/ART */}
      <section className="border-t border-slate-800 pt-12 space-y-6">
        <div>
          <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider block">
            // STRUKTUR KONSTITUSI AD/ART
          </span>
          <h2 className="text-2xl font-black text-white mt-1">
            Status Keanggotaan HMTF
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Berdasarkan regulasi resmi AD/ART HMTF Telkom University, hierarki anggota terbagi menjadi 3 tingkatan:
          </p>
        </div>

        <div className="border border-slate-800 rounded-3xl divide-y divide-slate-800 bg-slate-900/80 backdrop-blur-md overflow-hidden font-mono text-xs">
          <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline">
            <div className="md:col-span-3">
              <span className="font-bold text-orange-400 block">TINGKAT I</span>
              <h3 className="text-sm font-bold text-white">Anggota Muda</h3>
            </div>
            <div className="md:col-span-7 font-sans text-xs text-slate-300 leading-relaxed">
              Mahasiswa baru Program Studi S1 Teknik Fisika yang sedang menempuh tahapan kaderisasi awal (Kalibrasi) untuk mengenal kultur keilmuan dan nilai luhur himpunan.
            </div>
            <div className="md:col-span-2 text-right text-slate-400 text-[11px]">
              Tahap Pembinaan
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline">
            <div className="md:col-span-3">
              <span className="font-bold text-orange-400 block">TINGKAT II</span>
              <h3 className="text-sm font-bold text-white">Anggota Biasa</h3>
            </div>
            <div className="md:col-span-7 font-sans text-xs text-slate-300 leading-relaxed">
              Mahasiswa aktif yang telah lulus rangkaian kaderisasi formal, memegang hak suara penuh dalam forum MUBES, serta berhak mencalonkan diri sebagai pengurus BPH.
            </div>
            <div className="md:col-span-2 text-right text-slate-400 text-[11px]">
              Hak Suara Penuh
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline">
            <div className="md:col-span-3">
              <span className="font-bold text-orange-400 block">TINGKAT III</span>
              <h3 className="text-sm font-bold text-white">Anggota Kehormatan</h3>
            </div>
            <div className="md:col-span-7 font-sans text-xs text-slate-300 leading-relaxed">
              Alumni S1 Teknik Fisika Telkom University atau tokoh yang telah memberikan kontribusi dan dedikasi luar biasa bagi keberlanjutan dan nama baik himpunan.
            </div>
            <div className="md:col-span-2 text-right text-slate-400 text-[11px]">
              Dewan Alumni & Jasa
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
