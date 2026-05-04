import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE_URL, CONTACT_URL } from "@/lib/utils";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProblem } from "@/components/service/ServiceProblem";
import { ServiceSolution } from "@/components/service/ServiceSolution";
import { ServiceInfo } from "@/components/service/ServiceInfo";
import { WebdesignReasons } from "@/components/service/WebdesignReasons";
import { WebdesignCities } from "@/components/service/WebdesignCities";
import { LeichlingenFlow, LeichlingenAbout, LeichlingenSolution, LeichlingenWhyNow } from "@/components/lp/LeichlingenSections";
import { ContactForm } from "@/components/ui/ContactForm";
const leichlingenService = {
  id: "webdesign-leichlingen",
  title: "Webdesign Leichlingen",
  badge: "Webdesign & Funnel-Marketing Leichlingen",
  floatingBadge: "Live in 1–2 Wochen",
  heroHeadline: "Professionelles Webdesign in Leichlingen",
  heroSubline: "Ich entwickle für dich professionelles Webdesign in Leichlingen, das durch maßgeschneiderte High-End-Websites überzeugt. Mein Ansatz basiert auf einem durchdachten Funnel-System, das Besucher nicht nur informiert, sondern gezielt zu Kunden macht.\n\nMein Ziel ist es, deine Marke in Leichlingen, Witzhelden und dem gesamten Rheinisch-Bergischen Kreis sichtbar zu machen und dich nachhaltig an die Spitze zu bringen.",
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
      q: "Warum sollte ich auf lokales Webdesign in Leichlingen setzen?",
      a: "Ein Webauftritt „von der Stange“ ignoriert oft die regionalen Gegebenheiten. Wenn wir dein Webdesign in Leichlingen umsetzen, achten wir darauf, dass du genau die Kunden aus der Blütenstadt und dem Umland (wie Witzhelden, Langenfeld oder Solingen) ansprichst. Lokale Nähe schafft Vertrauen – und wir sorgen dafür, dass dieses Vertrauen digital sofort spürbar ist."
    },
    {
      q: "Wie schnell ist meine neue Website live?",
      a: "Qualität braucht ein solides Fundament, aber wir trödeln nicht. In der Regel steht dein neues Webdesign in Leichlingen innerhalb von 4 bis 6 Wochen. Das hängt natürlich vom Umfang ab, aber durch kurze Kommunikationswege kommen wir meist sehr zügig ans Ziel."
    },
    {
      q: "Wird meine Seite bei Google in Leichlingen und Umgebung gefunden?",
      a: "Ja, das ist der Plan! Jedes Projekt wird von Beginn an für Suchmaschinen optimiert. Wir fokussieren uns darauf, dass du bei Begriffen wie „Handwerker Leichlingen“ oder „Praxis in Leichlingen“ ganz oben auftauchst. Ohne SEO ist Webdesign heute nur die halbe Miete."
    },
    {
      q: "Was kostet ein professionelles Webdesign in Leichlingen?",
      a: "Pauschalpreise sind im Handwerk schwierig – und im Webdesign auch. Ein kleiner Blumenladen in der Innenstadt hat andere Anforderungen als ein Industriebetrieb im Gewerbegebiet. Nach unserem ersten Gespräch erstelle ich dir ein faires Festpreis-Angebot, das exakt zu deinem Budget und deinen Zielen passt."
    },
    {
      q: "Sieht meine Website auch auf dem Smartphone gut aus?",
      a: "Definitiv. „Mobile First“ ist bei mir Gesetz. Da die meisten Menschen heute von unterwegs in der Leichlinger Innenstadt oder beim Pendeln nach Köln/Düsseldorf suchen, optimieren wir dein Webdesign in Leichlingen perfekt für alle Endgeräte – vom Smartphone bis zum großen Desktop-Monitor."
    },
    {
      q: "Kann ich Inhalte später selbst anpassen?",
      a: "Klar! Ich baue deine Seite so auf, dass du kein IT-Studium brauchst, um mal einen Text zu ändern oder ein neues Foto hochzuladen. Nach dem Launch gebe ich dir eine kurze Einweisung, damit du die volle Kontrolle über deinen Internetauftritt behältst."
    },
    {
      q: "Können wir uns für die Planung persönlich treffen?",
      a: "Sehr gerne. Das ist ja der Vorteil an regionalem Webdesign in Leichlingen. Ob auf einen Kaffee in der Stadt oder direkt bei dir im Betrieb – ein persönliches Gespräch hilft oft dabei, die Vision deines Unternehmens noch besser zu verstehen."
    },
    {
      q: "Lohnt sich eine neue Website auch für kleine Betriebe oder Vereine?",
      a: "Gerade für kleine Unternehmen ist die digitale Sichtbarkeit oft der entscheidende Faktor gegen die große Konkurrenz aus den Nachbarstädten. Ein professionelles Auftreten sorgt dafür, dass du als lokaler Experte wahrgenommen wirst – egal, wie groß dein Team ist."
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

      {/* 5. KONTAKT-FORMULAR */}
      <ContactForm 
        pageName="Leichlingen Landingpage" 
        title={<>Deine <span className="text-accent">Lösung</span> für digitales Wachstum</>}
        subline="Trage kurz deine Daten ein und wir besprechen, wie wir dein Projekt in Leichlingen zum Erfolg führen."
        buttonText="Lösung jetzt anfragen"
      />

      {/* 6. WARUM JETZT */}
      <LeichlingenWhyNow />



      {/* 6. ÜBER MICH (Customized for Leichlingen) */}

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
              href={CONTACT_URL}
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

