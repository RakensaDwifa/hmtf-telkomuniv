import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveCanvas from "@/components/InteractiveCanvas";
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
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-orange-500 selection:text-white font-sans relative">
        <InteractiveCanvas />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
