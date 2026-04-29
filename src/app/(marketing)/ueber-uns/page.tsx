import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, LINKEDIN_URL, PHONE_URL, PHONE } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Über mich – Timm Schurig | LinkedIn & Automatisierungs-Experte für Coaches",
  description:
    "Ich bin Timm Schurig – Spezialist für LinkedIn-Kundengewinnung und Marketing-Automatisierung für Fitness- und Ernährungscoaches im DACH-Raum. Lerne mich kennen.",
  alternates: { canonical: `${SITE_URL}/ueber-uns` },
  openGraph: { url: `${SITE_URL}/ueber-uns` },
});

const values = [
  {
    title: "Ehrlichkeit über Hype",
    description:
      "Ich sage dir, was für dein Business wirklich sinnvoll ist – auch wenn das bedeutet, dass ich weniger verkaufe.",
  },
  {
    title: "Technische Exzellenz",
    description:
      "Alles, was ich baue, ist auf Qualität und Langlebigkeit ausgelegt. Keine Quick-Fixes, keine billigen Templates.",
  },
  {
    title: "Nischen-Fokus",
    description:
      "Durch die Spezialisierung auf Fitness- und Ernährungscoaches kann ich deutlich bessere Ergebnisse liefern als Generalisten.",
  },
  {
    title: "Persönliche Betreuung",
    description:
      "Du arbeitest direkt mit mir – kein Staffing, keine Outsourcing-Kaskaden. Ein Ansprechpartner, klare Kommunikation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Timm Schurig",
  url: SITE_URL,
  jobTitle: "Marketing & Automatisierungs-Experte für Fitness-Coaches",
  description:
    "Spezialist für LinkedIn-Kundengewinnung und Marketing-Automatisierung für Fitness- und Ernährungscoaches im DACH-Raum.",
  knowsAbout: [
    "LinkedIn Marketing",
    "Marketing Automatisierung",
    "KI-Chatbots",
    "WhatsApp Marketing",
    "Landingpage Erstellung",
    "Fitness Coach Marketing",
    "Ernährungscoach Marketing",
  ],
  sameAs: [LINKEDIN_URL],
};

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-900 font-medium" aria-current="page">
                Über mich
              </li>
            </ol>
          </nav>
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Über mich
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
            Ich bin Timm Schurig.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-white" aria-label="Meine Geschichte">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>
                Als Spezialist für LinkedIn-Marketing und technische
                Automatisierung helfe ich Fitness- und Ernährungscoaches dabei,
                ihr Business systematisch zu skalieren – ohne mehr Zeit zu
                investieren.
              </p>
              <p>
                Was mich von klassischen Marketing-Agenturen unterscheidet: Ich
                bin kein Generalist. Ich habe mich bewusst auf eine Nische
                spezialisiert, weil ich überzeugt bin, dass tiefes
                Branchen-Know-how zu deutlich besseren Ergebnissen führt als
                ein breites Portfolio.
              </p>
              <p>
                In der Wettbewerbsanalyse des DACH-Markts wurde deutlich: Kein
                anderer Anbieter kombiniert LinkedIn-Spezialisierung mit einem
                vollständigen technischen Backend (Landingpage, WhatsApp, KI-Chatbot,
                Onboarding) speziell für Fitness- und Ernährungscoaches.
              </p>
              <p>
                Das ist mein Alleinstellungsmerkmal – und damit dein Vorteil.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-6">
                <h3 className="font-bold text-slate-900 text-lg">
                  Kurz zusammengefasst
                </h3>
                <ul className="space-y-4">
                  {[
                    "LinkedIn-Spezialist im DACH-Raum",
                    "Full-Stack Marketing & Automatisierung",
                    "Exklusiv für Fitness- & Ernährungscoaches",
                    "15+ betreute Coaches",
                    "100% PageSpeed Garantie",
                    "Direkte, persönliche Betreuung",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 flex gap-3">
                  <a
                    href={PHONE_URL}
                    className="flex-1 inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-3 font-bold transition-all text-sm"
                  >
                    Jetzt anrufen
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                  <a
                    href={PHONE_URL}
                    className="inline-flex items-center justify-center border border-slate-200 rounded-full px-4 py-3 text-slate-700 hover:border-accent hover:text-accent transition-all"
                    aria-label="Timm Schurig anrufen"
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-slate-50" aria-label="Meine Werte">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">
            Wie ich arbeite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
