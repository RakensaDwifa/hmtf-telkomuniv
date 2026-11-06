"use client";

import { useState } from "react";
import { MessageSquare, Send, CheckCircle2, Mail, ArrowUpRight } from "lucide-react";
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
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs text-orange-600 font-bold uppercase tracking-wider">
          <MessageSquare className="h-4 w-4" />
          <span>PORTAL DISPATCH // KOTAK ASPIRASI 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          KOTAK ASPIRASI <span className="text-orange-600">GREY WARRIOR</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Saluran resmi komunikasi dua arah untuk menyampaikan evaluasi akademik, usulan fasilitas laboratorium, kritik konstruktif, serta gagasan pengembangan iklim studi S1 Teknik Fisika.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <div className="md:col-span-8 rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Aspirasi Berhasil Dicatat</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Terima kasih atas kontribusimu. Masukanmu telah masuk ke dalam log rekapitulasi Departemen Aspirasi & Advokasi BPH Kabinet Adhirajya untuk ditindaklanjuti.
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
                  className="rounded bg-slate-900 px-4 py-2 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-600 transition-colors"
                >
                  Kirim Aspirasi Baru
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Checkbox Anonim */}
              <div className="rounded border border-slate-200 bg-slate-50 p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Kirim secara Anonim?</span>
                  <span className="font-mono text-[11px] text-slate-500 block">
                    Nama dan NIM tidak akan dicatat di log publik
                  </span>
                </div>
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                />
              </div>

              {!formData.isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-700 mb-1">
                      NAMA LENGKAP
                    </label>
                    <input
                      type="text"
                      placeholder="Nama mahasiswa..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-700 mb-1">
                      NIM (OPSIONAL)
                    </label>
                    <input
                      type="text"
                      placeholder="1101xxxxxx"
                      value={formData.nim}
                      onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                      className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-semibold text-slate-700 mb-1">
                    ANGKATAN MAHASISWA
                  </label>
                  <select
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-slate-900 focus:outline-none font-mono"
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
                  <label className="block font-mono text-xs font-semibold text-slate-700 mb-1">
                    KATEGORI BIDANG
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-slate-900 focus:outline-none font-mono"
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
                <label className="block font-mono text-xs font-semibold text-slate-700 mb-1">
                  ISI PESAN / SARAN / ADVOKASI
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan pokok pikiran secara objektif, jelas, dan konstruktif..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded border border-slate-200 bg-white p-3 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none resize-none font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-slate-900 px-5 py-3 text-xs font-mono font-bold text-white uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-xs"
              >
                <Send className="h-3.5 w-3.5 text-orange-400" />
                <span>Kirimkan Dokumen Aspirasi</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="rounded border border-slate-200 bg-white p-5 space-y-2.5">
            <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider block">
              // PRINSIP DISPATCH
            </span>
            <h3 className="text-sm font-bold text-slate-900">Kerahasiaan Terjamin</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seluruh aspirasi diolah secara independen dan etis. Informasi pribadi tidak akan dibagikan ke pihak mana pun tanpa persetujuan pengirim.
            </p>
          </div>

          <div className="rounded border border-slate-200 bg-slate-50 p-5 space-y-2.5">
            <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block">
              // ADVOKASI DARURAT
            </span>
            <h3 className="text-sm font-bold text-slate-900">Kontak Langsung BPH</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Untuk urusan pendampingan akademik darurat, hubungi pengurus melalui kanal resmi:
            </p>
            <div className="space-y-2 pt-1 text-xs font-mono">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-orange-600" />
                <span>DM Instagram @hmtftelkomuniv</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-orange-600" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
