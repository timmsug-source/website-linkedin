import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title:
    "Kunden gewinnen als Ernährungscoach – Marketing Automatisierung im DACH-Raum",
  description:
    "Speziell für Ernährungscoaches und Ernährungsberater: Landingpages, KI-Chatbots, WhatsApp Marketing und Automatisierungen für planbare Neukundengewinnung über LinkedIn.",
  keywords: [
    "Kunden gewinnen als Ernährungscoach",
    "Marketing Ernährungsberater",
    "Ernährungscoach Marketing Strategie",
    "LinkedIn für Ernährungscoaches",
    "Neukundengewinnung Coach Ernährungsberater",
    "Landingpage Ernährungscoach",
  ],
  alternates: { canonical: `${SITE_URL}/fuer-ernaehrungscoaches` },
  openGraph: { url: `${SITE_URL}/fuer-ernaehrungscoaches` },
});

const painPoints = [
  "Interessenten verstehen nicht sofort, was du anders machst als andere",
  "Du verlierst Zeit durch Einzel-Onboarding jedes neuen Klienten",
  "Deine LinkedIn-Posts werden gelesen, aber niemand bucht ein Gespräch",
  "Du hast keine automatisierte Nachverfolgung für Interessenten",
  "Anfragen über deine Webseite bleiben oft ohne Antwort",
  "Du unterscheidest dich nicht von anderen Ernährungscoaches online",
];

const solutions = [
  {
    title: "Landingpage für Ernährungscoaches",
    description:
      "Eine individuelle Seite, die deine Expertise als Ernährungscoach kommuniziert und Interessenten gezielt zur Buchung führt.",
    href: "/leistungen/landingpage-erstellung",
  },
  {
    title: "WhatsApp & E-Mail Sequenzen",
    description:
      "Automatische Nurture-Flows, die Interessenten informieren, Vertrauen aufbauen und zur Buchung motivieren.",
    href: "/leistungen/whatsapp-marketing",
  },
  {
    title: "KI-Chatbot auf deiner Website",
    description:
      "24/7 Ansprechpartner, der Fragen zu deinen Programmen beantwortet und direkt Erstgespräche bucht.",
    href: "/leistungen/ki-chatbot",
  },
  {
    title: "Automatisiertes Klienten-Onboarding",
    description:
      "Vom ersten Kontakt bis zum laufenden Ernährungs-Coaching – ein nahtloser, professioneller Prozess ohne Mehraufwand.",
    href: "/leistungen/automatisiertes-onboarding",
  },
];

const differences = [
  "Ernährungscoaches haben andere Schmerzpunkte als Fitness Coaches – ich verstehe beide",
  "Spezifisches Copywriting für Ernährungsthemen (Gewichtsmanagement, Sportlerernährung, Intoleranzen)",
  "Erfahrung mit typischen Einwänden von Ernährungs-Interessenten",
  "LinkedIn-Strategie speziell für Ernährungscoaches im B2B- und B2C-Bereich",
];

export default function ErnaehrungscoachesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-gradient-to-b from-green-50/50 to-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
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
                Für Ernährungscoaches
              </li>
            </ol>
          </nav>
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Speziell für Ernährungscoaches & Ernährungsberater
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Als <span className="text-accent">Ernährungscoach</span> planbar Kunden
            gewinnen – über LinkedIn
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Ich helfe Ernährungscoaches und -beratern im DACH-Raum dabei, ihr
            Wissen in ein skalierbares Business zu verwandeln – mit Systemen, die
            automatisch für dich akquirieren.
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
      <section
        className="py-20 px-6 bg-white"
        aria-label="Herausforderungen als Ernährungscoach"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">
            Das kennen viele Ernährungscoaches
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

      {/* Why Specialized */}
      <section
        className="py-20 px-6 bg-slate-50"
        aria-label="Warum spezialisiert auf Ernährungscoaches"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 text-center">
            Warum ich Ernährungscoaches{" "}
            <span className="text-accent">separat</span> betreue
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            Ernährungscoaches und Fitness Coaches haben unterschiedliche
            Zielgruppen, andere Einwände und verschiedene USPs – eine generische
            Lösung reicht nicht.
          </p>
          <div className="space-y-4">
            {differences.map((diff, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-100"
              >
                <CheckCircle2
                  size={20}
                  className="text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-slate-700">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        className="py-24 px-6 bg-white"
        aria-label="Lösungen für Ernährungscoaches"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4 text-center">
            Meine Leistungen für{" "}
            <span className="text-accent">Ernährungscoaches</span>
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
            Alle Lösungen werden individuell auf dein Ernährungs-Coaching
            zugeschnitten – keine Templates, kein Copy-Paste.
          </p>
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
