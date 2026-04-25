import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";
import { ServiceHero } from "@/components/service/ServiceHero";
import { HaanProblem, HaanSolution, HaanProcess } from "@/components/lp/HaanSections";

const haanService = {
  id: "webdesign-haan",
  title: "Webdesign in Haan",
  badge: "Webdesign & Funnel-Marketing Haan",
  floatingBadge: "Live in 1–2 Wochen",
  heroHeadline: "Professionelles Webdesign in Haan",
  heroSubline: "Ich entwickle für dich maßgeschneiderte High-End-Websites, die auf einem durchdachten Funnel-System basieren. Mein Ziel ist es, deine Marke in der Region Haan, Erkrath und Umgebung an die Spitze zu bringen.",
  heroChecklist: [
    "Maßgeschneidertes High-End-Design",
    "Durchdachtes Funnel-System",
    "Lokales SEO für Haan",
    "Vertrauensaufbau & Conversion",
    "Mobile-First & Blitzschnell"
  ],
  heroStat: [
    { value: "1–2 Wo.", label: "bis sie live ist" },
    { value: "100 %", label: "PageSpeed Score" },
  ],
  
  // Leere Fallbacks für Felder, die aktuell nicht gerendert werden müssen
  problemHeadline: "",
  problemSubline: "",
  problemPoints: [],
  solutionHeadline: "",
  solution: "",
  solutionPoints: [],
  process: [],
  solutionIntro: [],
  ctaHeadline: "",
  ctaSubline: "",
  features: [],
  faq: [],
  relatedServices: []
};

export const metadata: Metadata = buildMetadata({
  title: "Webdesign in Haan – Deine Website als Kundenmaschine",
  description: "Professionelles Webdesign in Haan. Ich entwickle High-End-Websites mit Funnel-System & SEO für messbare Ergebnisse. Jetzt Termin anfragen.",
  keywords: ["Webdesign in Haan", "Website erstellen lassen Haan", "SEO Haan", "Haan Webdesign"],
  alternates: { canonical: `${SITE_URL}/webdesign/haan` }
});

export default function HaanPage() {
  return (
    <>
      <ServiceHero service={haanService as any} />
      <HaanProblem />
      <HaanSolution />
      <HaanProcess />
    </>
  );
}
