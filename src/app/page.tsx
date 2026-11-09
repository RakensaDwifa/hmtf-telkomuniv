import siteConfig from "@/data/site-config.json";
import bphData from "@/data/bph.json";
import academicData from "@/data/akademik.json";
import eventsData from "@/data/events.json";
import HomeClientView from "./HomeClientView";

export default function HomePage() {
  return (
    <HomeClientView
      siteConfig={siteConfig}
      bphData={bphData}
      academicData={academicData}
      eventsData={eventsData}
    />
  );
}
