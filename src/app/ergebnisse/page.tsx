import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Users, Star } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, CALENDLY_URL } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Ergebnisse & Case Studies – Erfolge von Fitness- und Ernährungscoaches",
  description:
    "Echte Ergebnisse: Wie Fitness- und Ernährungscoaches im DACH-Raum durch Landingpages, Automatisierungen und KI-Chatbots mehr Kunden gewinnen und Zeit sparen.",
  alternates: { canonical: `${SITE_URL}/ergebnisse` },
  openGraph: { url: `${SITE_URL}/ergebnisse` },
});

const caseStudies = [
  {
    client: "Markus R.",
    role: "Personal Trainer, München",
    challenge:
      "Markus hatte über 500 LinkedIn-Kontakte, aber keine systematische Methode, um Anfragen in Erstgespräche zu verwandeln. Seine alte Webseite lud 8 Sekunden, keine Terminbuchung, kein Follow-up.",
    solution:
      "Neue hochkonvertierende Landingpage + automatische WhatsApp-Sequenz nach LinkedIn-Kontaktaufnahme + Calendly-Integration für sofortige Terminbuchung.",
    results: [
      { metric: "+12 Leads/Monat", detail: "Qualifizierte Erstgespräche" },
      { metric: "0,8s Ladezeit", detail: "Von 8 auf unter 1 Sekunde" },
      { metric: "32% Conversion", detail: "Besucher zu Terminbuchungen" },
    ],
    category: "Fitness Coach",
    initials: "MR",
  },
  {
    client: "Jana K.",
    role: "Ernährungscoach, Hamburg",
    challenge:
      "Jana verbrachte 3 Stunden pro neuem Klienten mit manuellem Onboarding – Vertragsversand, Zugangsdaten, Erklärungen. Bei 4–5 Neukunden pro Monat wurde das untragbar.",
    solution:
      "Vollautomatisches Onboarding-System: Vertrag (DocuSign), Stripe-Zahlung, Kurs-Zugang (Teachable), Willkommens-Sequenz – alles vollautomatisch ausgelöst durch die Buchung.",
    results: [
      { metric: "20 Min.", detail: "Onboarding statt 3 Stunden" },
      { metric: "0 Fehler", detail: "Kein vergessener Klient mehr" },
      { metric: "+2 Klienten", detail: "Durch gewonnene Zeit" },
    ],
    category: "Ernährungscoach",
    initials: "JK",
  },
  {
    client: "Stefan B.",
    role: "Fitness- & Ernährungscoach, Berlin",
    challenge:
      "Stefan war täglich morgens damit beschäftigt, Fragen aus Instagram DMs und WhatsApp zu beantworten – dieselben 10 Fragen, immer und immer wieder. Keine Zeit mehr fürs Coaching.",
    solution:
      "KI-Chatbot auf Website und WhatsApp trainiert auf Stefan's FAQ, Programmbeschreibungen und USPs. Direkte Calendly-Integration für Terminbuchung im Chat.",
    results: [
      { metric: "8 Neukunden", detail: "Im ersten Monat nach Launch" },
      { metric: "2h täglich", detail: "Zeitersparnis durch KI" },
      { metric: "24/7", detail: "Erreichbarkeit automatisch" },
    ],
    category: "Fitness & Ernährung",
    initials: "SB",
  },
];

const overallStats = [
  { icon: TrendingUp, number: "15+", label: "Coaches betreut" },
  { icon: Clock, number: "10h+", label: "Ø Zeitersparnis/Woche" },
  { icon: Users, number: "100%", label: "PageSpeed Garantie" },
  { icon: Star, number: "DACH", label: "Raum-Spezialisierung" },
];

export default function ErgebnissePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-900 font-medium" aria-current="page">
                Ergebnisse
              </li>
            </ol>
          </nav>
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Echte Ergebnisse
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Case Studies & <span className="text-accent">Erfolge</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Keine Hochglanz-Versprechungen – echte Zahlen von echten Coaches,
            die ihr Business mit technischer Exzellenz skaliert haben.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 px-6 bg-accent text-white"
        aria-label="Gesamtergebnisse"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {overallStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon size={28} className="mx-auto mb-3 opacity-80" aria-hidden="true" />
                <p className="text-4xl font-display font-extrabold mb-1">
                  {stat.number}
                </p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 bg-white" aria-label="Case Studies">
        <div className="max-w-5xl mx-auto space-y-16">
          {caseStudies.map((cs, index) => (
            <article
              key={index}
              className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-100"
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/40 to-accent flex items-center justify-center text-white font-bold text-lg">
                  {cs.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">{cs.client}</p>
                  <p className="text-slate-500 text-sm">{cs.role}</p>
                </div>
                <span className="ml-auto bg-accent/10 text-accent text-xs font-bold px-4 py-2 rounded-full">
                  {cs.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Die Herausforderung
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Die Lösung
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {cs.results.map((result, rIndex) => (
                  <div
                    key={rIndex}
                    className="bg-white rounded-2xl p-6 border border-slate-200 text-center"
                  >
                    <p className="text-2xl md:text-3xl font-display font-extrabold text-accent mb-1">
                      {result.metric}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {result.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">
            Dein Ergebnis wartet auf dich
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Lass uns in einem kostenlosen 30-Minuten-Gespräch schauen, welche
            Ergebnisse für dein Business möglich sind.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-xl font-bold shadow-lg shadow-accent/20 transition-all"
          >
            Kostenloses Erstgespräch buchen
            <ArrowRight className="ml-2" size={22} />
          </a>
          <p className="mt-6 text-slate-400 text-sm">
            Kostenlos & unverbindlich · 30 Minuten · Kein Verkaufsdruck
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
