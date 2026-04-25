import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE_URL } from "@/lib/utils";
import { ServiceHero } from "@/components/service/ServiceHero";
import { HaanProblem, HaanSolution, HaanProcess, HaanRegional } from "@/components/lp/HaanSections";

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
      <HaanRegional />

      {/* CTA Final */}
      <section className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">
            Bereit für dein Webdesign in Haan?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Klicke auf den Button unten und vereinbare dein kostenloses Erstgespräch. Lass uns gemeinsam dafür sorgen, dass dein Unternehmen in Haan die Aufmerksamkeit bekommt, die es verdient!
          </p>
          <div className="flex flex-col items-center gap-6">
            <a 
              href={PHONE_URL}
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-5 text-xl font-bold shadow-xl shadow-accent/20 transition-all group"
            >
              Jetzt unverbindliches Strategiegespräch buchen
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-slate-500 font-medium flex items-center gap-2">
              <Clock size={18} className="text-accent" /> Kostenlos & unverbindlich
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
