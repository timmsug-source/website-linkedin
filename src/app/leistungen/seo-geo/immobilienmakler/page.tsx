import type { Metadata } from "next";
import { MaklerHero } from "@/components/lp/ImmobilienmaklerSections";

export const metadata: Metadata = {
  title: "SEO für Immobilienmakler | Deine Sichtbarkeit",
  description: "Spezialisierte SEO-Leistungen für Immobilienmakler. Gewinne mehr Eigentümer und Käufer durch lokale Suchmaschinenoptimierung.",
};

export default function SEOImmobilienmaklerPage() {
  return (
    <>
      <MaklerHero />
      
      {/* Weiterer Inhalt folgt... */}
      <div className="pt-24 pb-24 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg text-slate-600">
            Inhalt folgt in Kürze...
          </p>
        </div>
      </div>
    </>
  );
}
