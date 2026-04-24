import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE_URL } from "@/lib/utils";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProblem } from "@/components/service/ServiceProblem";
import { ServiceSolution } from "@/components/service/ServiceSolution";
import { ServiceInfo } from "@/components/service/ServiceInfo";
import { WebdesignReasons } from "@/components/service/WebdesignReasons";
import { WebdesignCities } from "@/components/service/WebdesignCities";
import { LeichlingenFlow, LeichlingenAbout, LeichlingenSolution } from "@/components/lp/LeichlingenSections";
const leichlingenService = {
  id: "webdesign-leichlingen",
  title: "Webdesign Leichlingen",
  badge: "Webdesign & Funnel-Marketing Leichlingen",
  floatingBadge: "Live in 1–2 Wochen",
  heroHeadline: "Professionelles Webdesign in Leichlingen",
  heroSubline: "Ich entwickle für dich maßgeschneiderte High-End-Websites, die auf einem durchdachten Funnel-System basieren. Mein Ziel ist es, deine Marke in der Region Leichlingen, Witzhelden und dem gesamten Rheinisch-Bergischen Kreis an die Spitze zu bringen.",
  heroChecklist: [
    "Maßgeschneidertes High-End-Design",
    "Durchdachtes Funnel-System",
    "Lokales SEO für Leichlingen",
    "Vertrauensaufbau & Conversion",
    "Mobile-First & Blitzschnell"
  ],

  heroStat: [
    { value: "1–2 Wo.", label: "bis sie live ist" },
    { value: "100 %", label: "PageSpeed Score" },
  ],
  problemHeadline: "Warum die meisten Websites in Leichlingen unter ihren Möglichkeiten bleiben",
  problemSubline: "Vielleicht kennst du das: Du hast eine Website, aber die Anfragen über das Kontaktformular bleiben aus. Im Jahr 2026 ist die Aufmerksamkeitsspanne kürzer denn je.",
  problemPoints: [
    "Unsichtbarkeit bei Google-Suchen nach „Webdesign in Leichlingen“.",
    "Keine klare Nutzerführung – Besucher werden mit Infos erschlagen.",
    "Ladezeiten, die langsamer sind als der Feierabendverkehr auf der L294.",
    "Veraltetes Design schreckt potenzielle Kunden ab.",
    "Keine Strategie: Besucher kommen, aber gehen ohne Handlung."
  ],
  solutionHeadline: "Die Lösung: Der Funnel-Ansatz – Webdesign mit psychologischer Tiefe",
  solution: "Mein Ansatz für Webdesign in Leichlingen geht weit über das Visuelle hinaus. Ich kombiniere modernes Design mit Verkaufspsychologie und modernster Technik.",
  solutionPoints: [
    "Präzises lokales SEO für die Region Leichlingen",
    "Strategisch platzierte Vertrauenselemente",
    "Intuitive Nutzerführung zum Ziel (Anruf/Anfrage)",
    "Moderner Technik-Stack für maximale Speed",
    "Psychologisch fundierter Informationsaufbau"
  ],
  process: [
    { title: "Analyse & Strategie", desc: "Zielgruppe, USP und Conversion-Ziele definieren." },
    { title: "Design & Konzept", desc: "Individuelles Design nach deinem Branding." },
    { title: "Entwicklung", desc: "Technisch saubere Umsetzung mit Next.js." },
    { title: "Launch & SEO", desc: "Live-Schaltung und Grundoptimierung für Google." },
  ],
  solutionIntro: [
    "Schluss mit Kompromissen. Während herkömmliche Websites oft nur digitale Visitenkarten ohne messbaren Nutzen sind, entwickeln wir Lösungen, die strategisch auf deinen Erfolg einzahlen. Wir kombinieren technisches High-End-Webdesign mit intelligenter Verkaufspsychologie und zukunftssicherer KI-Optimierung.",
    "Das Ergebnis ist eine Online-Präsenz, die nicht nur durch Ästhetik überzeugt, sondern aktiv für dich arbeitet: Sie zieht die richtigen Besucher an, überzeugt sie von deiner Expertise und verwandelt sie automatisiert in loyale Kunden. So definieren wir gemeinsam den neuen Standard für dein Business.",
  ],
  ctaHeadline: "Starte jetzt dein digitales Upgrade!",
  ctaSubline: "Lass uns gemeinsam dafür sorgen, dass dein Webdesign in Leichlingen zum echten Wettbewerbsvorteil wird.",
  features: [
    { title: "Lokale Expertise", desc: "Ich kenne den Markt in Leichlingen und Witzhelden genau." },
    { title: "Funnel-Struktur", desc: "Keine digitale Visitenkarte, sondern ein echter Vertriebskanal." },
    { title: "SEO-Dominanz", desc: "Top-Platzierungen bei lokalen Suchen in der Blütenstadt." },
    { title: "Persönliche Beratung", desc: "Kein Agentur-Flair, sondern Partnerschaft auf Augenhöhe." }
  ],
  faq: [
    {
      q: "Was unterscheidet einen Funnel von einer normalen Website?",
      a: "Eine normale Website ist oft ein reines Informationsarchiv. Ein Funnel hingegen ist ein geführter Prozess, der darauf optimiert ist, den Besucher zu einer bestimmten Handlung zu bewegen. Das erhöht die Conversion-Rate drastisch."
    },
    {
      q: "Wie wichtig ist lokales SEO für mein Unternehmen in Leichlingen?",
      a: "Extrem wichtig! Wenn jemand nach „Webdesign in Leichlingen“ oder deiner Dienstleistung sucht, entscheidet oft die Platzierung unter den ersten drei Ergebnissen über den Auftrag. Ich sorge dafür, dass du lokal gefunden wirst."
    },
    {
      q: "Kann ich die Inhalte meiner Website später selbst ändern?",
      a: "Natürlich. Ich baue deine Seite auf einem benutzerfreundlichen System auf, mit dem du Texte und Bilder ganz einfach selbst pflegen kannst, ohne programmieren zu lernen. Eine Einweisung von mir ist immer inklusive."
    },
    {
      q: "Was passiert, wenn sich SEO-Trends im Jahr 2026 ändern?",
      a: "Die digitale Welt ist im stetigen Wandel. Deshalb sind meine Seiten so konzipiert, dass sie flexibel an neue Algorithmen angepasst werden können. Zudem biete ich laufende Betreuung an."
    }
  ],
  relatedServices: []
};

export const metadata: Metadata = buildMetadata({
  title: "Webdesign Leichlingen – Deine Website als Kundenmaschine",
  description: "Professionelles Webdesign in Leichlingen. Ich entwickle High-End-Websites mit Funnel-System & SEO für messbare Ergebnisse. Jetzt Termin anfragen.",
  keywords: ["Webdesign Leichlingen", "Website erstellen lassen Leichlingen", "SEO Leichlingen", "Leichlingen Webdesign"],
  alternates: { canonical: `${SITE_URL}/webdesign/leichlingen` }
});

export default function LeichlingenPage() {
  return (
    <>
      {/* 1. HERO */}
      <ServiceHero service={leichlingenService as any} />

      {/* 2. PROBLEM */}
      <ServiceProblem service={leichlingenService as any} />

      {/* 3. LÖSUNG */}
      <LeichlingenSolution />

      {/* 4. ABLAUF (Customized for Leichlingen) */}
      <LeichlingenFlow />

      {/* 5. RISIKEN / REASONS */}
      <WebdesignReasons />

      {/* 6. CTA + ÜBER MICH (Customized for Leichlingen) */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 rounded-2xl px-8 py-6">
            <p className="text-white font-bold text-lg text-center sm:text-left">
              Bereit für dein digitales Upgrade in Leichlingen?{" "}
              <span className="text-accent">Lass uns sprechen.</span>
            </p>
            <a
              href={PHONE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-7 py-3 font-bold text-sm whitespace-nowrap transition-[background-color] shadow-lg shadow-accent/20 shrink-0"
            >
              Jetzt Erstgespräch anfragen
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. ÜBER MICH (Customized for Leichlingen) */}
      <LeichlingenAbout />



      {/* 10. ALLGEMEINE INFOS & FAQ */}
      <ServiceInfo 
        service={leichlingenService as any} 
        hideFeatures={true} 
        hideRelated={true} 
      />

      {/* CTA Final */}
      <section className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">
            Start jetzt dein digitales Upgrade!
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Klicke auf den Button unten und vereinbare dein kostenloses Erstgespräch. Ich freue mich darauf, dein Projekt in der Blütenstadt nach vorne zu bringen!
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

