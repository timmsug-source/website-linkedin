import { MaklerExampleHeader, MaklerExampleHero, MaklerExampleSellBanner } from "@/components/beispiel/MaklerExample";

export const metadata = {
  title: "Beispielseite für Immobilienmakler | Dein Name",
  description: "So könnte Ihre neue Immobilienmakler-Website aussehen. Modern, konversionsstark und professionell.",
};

export default function MaklerExamplePage() {
  return (
    <main className="min-h-screen">
      <MaklerExampleHeader />
      <MaklerExampleHero />
      <MaklerExampleSellBanner />
      
      {/* Spacer for potential next sections */}
      <div className="py-20" />
    </main>
  );
}
