import { Metadata } from "next";
import bphData from "@/data/bph.json";
import siteConfig from "@/data/site-config.json";
import BphClientView from "./BphClientView";

export const metadata: Metadata = {
  title: "Struktur Organisasi BPH Kabinet Adhirajya 2026",
  description: "Bagan organisasi, visi, misi, dan jajaran 8 biro & departemen Badan Pengurus Harian (BPH) HMTF Telkom University.",
};

export default function BphPage() {
  return <BphClientView bphData={bphData} hashtag={siteConfig.hashtag} />;
}
