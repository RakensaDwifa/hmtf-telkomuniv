import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteConfig from "@/data/site-config.json";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.cabinet} ${siteConfig.period}`,
    template: `%s | ${siteConfig.shortName} Telkom University`,
  },
  description: `${siteConfig.description} Slogan: ${siteConfig.tagline}.`,
  icons: {
    icon: "/images/logo-hmtf.png",
    shortcut: "/images/logo-hmtf.png",
    apple: "/images/logo-hmtf.png",
  },
  keywords: [
    "HMTF",
    "HMTF Telkom University",
    "Teknik Fisika Telkom University",
    "Kabinet Adhirajya",
    "Grey Warrior",
    "Fakultas Teknik Elektro",
    "Bank Soal Teknik Fisika",
  ],
  authors: [{ name: "Departemen Kominfo HMTF Adhirajya" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#050d1a] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
