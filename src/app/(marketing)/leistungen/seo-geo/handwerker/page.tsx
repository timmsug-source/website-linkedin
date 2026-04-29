import type { Metadata } from "next";
import { HandwerkerHero, HandwerkerProblem, HandwerkerSolution, HandwerkerProcess, HandwerkerFAQ } from "@/components/lp/HandwerkerSections";

export const metadata: Metadata = {
  title: "SEO für Handwerker | Mehr Aufträge & lokale Sichtbarkeit",
  description: "Ihre SEO Agentur für Handwerksbetriebe. Wir sorgen dafür, dass Kunden Sie finden, wenn sie einen Profi in der Nähe suchen. Mehr Aufträge durch lokales SEO.",
};

export default function HandwerkerSEOPage() {
  return (
    <main className="min-h-screen">
      <HandwerkerHero />
      <HandwerkerProblem />
      <HandwerkerSolution />
      <HandwerkerProcess />
      <HandwerkerFAQ />
    </main>
  );
}
