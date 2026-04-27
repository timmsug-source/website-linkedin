import type { Metadata } from "next";
import { MaklerHero, MaklerProblem, MaklerSolution } from "@/components/lp/ImmobilienmaklerSections";

export const metadata: Metadata = {
  title: "SEO für Immobilienmakler | Deine Sichtbarkeit",
  description: "Spezialisierte SEO-Leistungen für Immobilienmakler. Gewinne mehr Eigentümer und Käufer durch lokale Suchmaschinenoptimierung.",
};

export default function SEOImmobilienmaklerPage() {
  return (
    <>
      <MaklerHero />
      <MaklerProblem />
      <MaklerSolution />
    </>
  );
}
