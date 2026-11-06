"use client";

import { useState } from "react";
import { MessageSquare, Send, CheckCircle2, ShieldAlert, Sparkles, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import siteConfig from "@/data/site-config.json";

export default function AspirasiPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    batch: "2024",
    category: "Akademik & Perkuliahan",
    message: "",
    isAnonymous: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-400">
          <MessageSquare className="h-4 w-4" />
          <span>Suara Mahasiswa Teknik Fisika</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          KOTAK <span className="text-amber-400">ASPIRASI</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Wadah terbuka dan transparan bagi seluruh mahasiswa Teknik Fisika untuk menyampaikan gagasan, kritik membangun, keluhan akademik, atau aspirasi fasilitas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <div className="md:col-span-8 rounded-3xl border border-[#132b4f] bg-[#09172c]/70 p-6 sm:p-8 backdrop-blur-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Aspirasi Berhasil Terkirim!</h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Terima kasih atas kontribusimu. Pesanmu telah dicatat dan akan ditinjau secara berkala oleh tim BPH Kabinet Adhirajya untuk ditindaklanjuti.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      nim: "",
                      batch: "2024",
                      category: "Akademik & Perkuliahan",
                      message: "",
                      isAnonymous: false,
                    });
                  }}
                  className="rounded-xl bg-[#09172c] border border-[#132b4f] px-5 py-2 text-xs font-bold text-slate-200 hover:text-white"
                >
                  Kirim Aspirasi Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Checkbox Anonim */}
              <div className="rounded-xl border border-[#132b4f] bg-[#050d1a] p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Kirim secara Anonim?</span>
                  <span className="text-[11px] text-slate-400 block">Identitas nama dan NIM tidak akan ditampilkan</span>
                </div>
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="h-4 w-4 rounded border-[#132b4f] bg-[#050d1a] text-amber-500 focus:ring-amber-500"
                />
              </div>

              {!formData.isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#132b4f] bg-[#050d1a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      NIM (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="1101xxxxxx"
                      value={formData.nim}
                      onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                      className="w-full rounded-xl border border-[#132b4f] bg-[#050d1a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Angkatan
                  </label>
                  <select
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full rounded-xl border border-[#132b4f] bg-[#050d1a] px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="2026">Angkatan 2026</option>
                    <option value="2025">Angkatan 2025</option>
                    <option value="2024">Angkatan 2024</option>
                    <option value="2023">Angkatan 2023</option>
                    <option value="2022">Angkatan 2022</option>
                    <option value="Alumni">Alumni / Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Kategori Aspirasi
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl border border-[#132b4f] bg-[#050d1a] px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Akademik & Perkuliahan">Akademik & Perkuliahan</option>
                    <option value="Fasilitas & Laboratorium">Fasilitas & Laboratorium</option>
                    <option value="Kinerja Pengurus BPH">Kinerja Pengurus BPH</option>
                    <option value="Kegiatan & Kaderisasi">Kegiatan & Kaderisasi</option>
                    <option value="Ide Inovasi / Lainnya">Ide Inovasi / Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Isi Aspirasi / Masukan / Kritik
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan pesanmu dengan jelas, objektif, dan konstruktif..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-[#132b4f] bg-[#050d1a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition-all active:scale-95"
              >
                <Send className="h-4 w-4" />
                <span>Kirim Aspirasi Sekarang</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/70 p-5 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Prinsip Penyaluran
            </span>
            <h3 className="text-base font-bold text-white">Kerahasiaan Terjamin</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Seluruh data aspirasi diolah secara etis dan bertanggung jawab. Kami berkomitmen untuk mendengarkan setiap suara demi kemajuan keluarga besar HMTF.
            </p>
          </div>

          <div className="rounded-2xl border border-[#132b4f] bg-[#09172c]/70 p-5 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Advokasi Mendesak?
            </span>
            <h3 className="text-base font-bold text-white">Hubungi Kami Langsung</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jika memerlukan pendampingan akademik atau advokasi darurat, hubungi pengurus melalui kanal resmi:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-amber-400" />
                <span>DM Instagram @hmtftelkomuniv</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-amber-400" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
