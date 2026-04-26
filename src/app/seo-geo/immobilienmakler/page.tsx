import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO für Immobilienmakler | Deine Sichtbarkeit",
  description: "Spezialisierte SEO-Leistungen für Immobilienmakler. Gewinne mehr Eigentümer und Käufer durch lokale Suchmaschinenoptimierung.",
};

export default function SEOImmobilienmaklerPage() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
          SEO für Immobilienmakler
        </h1>
        <p className="text-lg text-slate-600">
          Inhalt folgt in Kürze...
        </p>
      </div>
    </div>
  );
}
