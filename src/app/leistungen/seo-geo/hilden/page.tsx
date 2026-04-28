import type { Metadata } from "next";
import { SEOHildenHero, SEOHildenProblem, SEOHildenSolution, SEOHildenCTA } from "@/components/lp/SEOHildenSections";

export const metadata: Metadata = {
  title: "SEO Hilden | Top-Rankings & mehr Kundenanfragen",
  description: "Ihre SEO Agentur für Hilden. Wir optimieren Ihre Website für maximale lokale Sichtbarkeit. Gewinnen Sie mehr Kunden in Hilden durch strategisches SEO.",
};

export default function SEOHildenPage() {
  return (
    <main className="min-h-screen">
      <SEOHildenHero />
      <SEOHildenProblem />
      <SEOHildenSolution />
      <SEOHildenCTA />
    </main>
  );
}
