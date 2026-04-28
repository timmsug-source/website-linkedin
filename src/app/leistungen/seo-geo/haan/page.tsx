import type { Metadata } from "next";
import { SEOHaanHero, SEOHaanProblem, SEOHaanSolution, SEOHaanProcess, SEOHaanRegional, SEOHaanCTA } from "@/components/lp/SEOHaanSections";

export const metadata: Metadata = {
  title: "SEO Agentur in Haan | Sichtbar werden & Kunden gewinnen",
  description: "Deine SEO Agentur in Haan. Wir bringen dein Unternehmen auf Platz 1 bei Google. Lokale SEO-Strategien für messbar mehr Anfragen im Kreis Mettmann.",
};

export default function SEOHaanPage() {
  return (
    <main className="min-h-screen">
      <SEOHaanHero />
      <SEOHaanProblem />
      <SEOHaanSolution />
      <SEOHaanProcess />
      <SEOHaanRegional />
      <SEOHaanCTA />
    </main>
  );
}
