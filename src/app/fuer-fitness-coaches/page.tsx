import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Zap, TrendingUp } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title:
    "Marketing Agentur Fitness Coach – Kunden gewinnen als Personal Trainer",
  description:
    "Du bist Personal Trainer oder Fitness Coach und willst planbar neue Kunden über LinkedIn gewinnen? Landingpages, Automatisierungen, WhatsApp Marketing und KI-Chatbots speziell für dich.",
  keywords: [
    "Marketing Agentur Fitness Coach",
    "Kunden gewinnen als Fitness Coach",
    "Online Marketing Personal Trainer",
    "Personal Trainer Neukunden gewinnen",
    "LinkedIn Marketing Fitness Coach",
    "Personal Trainer Landingpage erstellen lassen",
  ],
  alternates: { canonical: `${SITE_URL}/fuer-fitness-coaches` },
  openGraph: { url: `${SITE_URL}/fuer-fitness-coaches` },
});

const painPoints = [
  "Dein LinkedIn-Profil hat Besucher, aber keine Buchungen",
  "Du verbringst Stunden mit manuellem Onboarding neuer Kunden",
  "Leads kühlen ab, weil kein automatisches Follow-up existiert",
  "Du weißt nicht, wie du LinkedIn systematisch für Kundengewinnung nutzt",
  "Deine Webseite konvertiert nicht – zu langsam, zu unübersichtlich",
  "Du verlierst Leads außerhalb deiner Arbeitszeiten",
];

const solutions = [
  {
    title: "Landingpage für Personal Trainer",
    description:
      "Eine hochkonvertierende Seite, die deine LinkedIn-Besucher in qualifizierte Erstgespräche verwandelt – 100% PageSpeed, Mobile-First.",
    href: "/leistungen/landingpage-erstellung",
  },
  {
    title: "Automatisierung & Workflows",
    description:
      "Terminbuchung, Follow-ups, Onboarding – vollautomatisch. Du coachst, dein System akquiriert.",
    href: "/leistungen/automatisierungen",
  },
  {
    title: "WhatsApp Marketing",
    description:
      "Automatische Nachrichten-Sequenzen, die Interessenten warmhalten und zur Buchung führen.",
    href: "/leistungen/whatsapp-marketing",
  },
  {
    title: "KI-Chatbot für Fitness Coaches",
    description:
      "24/7 auf deiner Website verfügbar: Beantwortet Fragen, qualifiziert Leads, bucht Termine.",
    href: "/leistungen/ki-chatbot",
  },
];

const results = [
  {
    number: "+12",
    unit: "qualifizierte Leads/Monat",
    description: "Durchschnittliche Lead-Steigerung bei Fitness Coaches",
  },
  {
    number: "10h",
    unit: "Zeitersparnis pro Woche",
    description: "Durch Automatisierung von Onboarding & Follow-ups",
  },
  {
    number: "100%",
    unit: "PageSpeed Score",
    description: "Für alle gebauten Landingpages garantiert",
  },
  {
    number: "24/7",
    unit: "Lead-Generierung",
    description: "Dein System arbeitet auch wenn du nicht da bist",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing & Automatisierung für Fitness Coaches",
  description:
    "Spezialisierte Marketing-Dienstleistungen für Personal Trainer und Fitness Coaches: Landingpages, Automatisierungen, WhatsApp Marketing und KI-Chatbots",
  url: `${SITE_URL}/fuer-fitness-coaches`,
  provider: { "@type": "Person", name: "Timm Schurig", url: SITE_URL },
  audience: {
    "@type": "Audience",
    audienceType: "Personal Trainer und Fitness Coaches",
  },
  areaServed: "DE, AT, CH",
};

export default function FitnessCoachesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-900 font-medium" aria-current="page">
                Für Fitness Coaches
              </li>
            </ol>
          </nav>
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Speziell für Personal Trainer & Fitness Coaches
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Kunden gewinnen als{" "}
            <span className="text-accent">Fitness Coach</span> – planbar & automatisch
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Du bist der beste Coach – aber dein Marketing hält nicht Schritt? Ich
            baue dir das technische System, das kontinuierlich qualifizierte Leads
            über LinkedIn generiert und automatisch zu Kunden konvertiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center border border-slate-200 bg-white rounded-full px-8 h-14 text-lg font-semibold text-slate-900 hover:border-accent hover:text-accent transition-all"
            >
              Per WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 bg-white" aria-label="Typische Probleme von Fitness Coaches">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">
            Kennst du das?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div
                  className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-red-500 text-xs font-bold">✗</span>
                </div>
                <p className="text-slate-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-accent text-white" aria-label="Ergebnisse">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Was du durch die Zusammenarbeit gewinnst
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-display font-extrabold mb-1">
                  {result.number}
                </p>
                <p className="text-sm font-bold text-white/90 mb-2">
                  {result.unit}
                </p>
                <p className="text-xs text-white/70 leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6 bg-white" aria-label="Lösungen für Fitness Coaches">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4">
              Meine Lösungen speziell für{" "}
              <span className="text-accent">Fitness Coaches</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Von der Landingpage bis zum vollautomatischen Onboarding – alles aus
              einer Hand, speziell auf die Bedürfnisse von Personal Trainern
              zugeschnitten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group flex flex-col p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-xl hover:border-accent/20 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-1 mb-4">
                  {solution.description}
                </p>
                <div className="flex items-center text-accent font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
