import { MaklerExampleHeader, MaklerExampleHero, MaklerExampleSellBanner, MaklerExampleAbout } from "@/components/beispiel/MaklerExample";

export const metadata = {
  title: "Webdesign für Immobilienmakler: Branchen-Lösung & Portfolio-Referenz",
  description: "Entdecken Sie unsere spezialisierte Webdesign-Lösung für Immobilienmakler. Performance-orientiertes Design and Portfolio-Showcase für modernes Immobilien-Marketing.",
};

export default function MaklerExamplePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Immobilienmakler Webdesign Branchen-Lösung",
    "description": "Ein Beispiel für eine hochoptimierte Website für Immobilienmakler.",
    "author": {
      "@type": "Person",
      "name": "Timm Schurig"
    },
    "genre": "Webdesign Portfolio"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <MaklerExampleHeader />
        <MaklerExampleHero />
        <MaklerExampleAbout />
        <MaklerExampleSellBanner />
        
        {/* Spacer for potential next sections */}
        <div className="py-20" />
      </main>
    </>
  );
}
