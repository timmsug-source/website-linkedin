import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Cpu, Search } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, CALENDLY_URL } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";
import { ServiceFAQ } from "@/components/leistungen/ServiceFAQ";

export const metadata: Metadata = buildMetadata({
  title: "Leistungen – Webdesign, Automatisierungen & SEO für Unternehmen",
  description:
    "Alle Leistungen von Timm Schurig: Professionelles Webdesign, intelligente Automatisierungen und nachhaltige SEO & GEO-Strategien für Unternehmen.",
  keywords: [
    "Webdesign Agentur",
    "Website erstellen lassen",
    "Business Automatisierung",
    "SEO Agentur",
    "Lokale SEO",
    "Generative Engine Optimization",
  ],
  alternates: { canonical: `${SITE_URL}/leistungen` },
  openGraph: { url: `${SITE_URL}/leistungen` },
});

const services = [
  {
    id: "webdesign",
    title: "Webdesign",
    description:
      "Individuelle Websites und Landingpages, die Besucher in Kunden verwandeln. Mobile-First, 100% PageSpeed, SEO-optimiert – für maximale Wirkung.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
    features: [
      "100% PageSpeed Score",
      "Mobile-First Design",
      "SEO-Grundoptimierung",
      "CRM-Integration",
      "Conversion-optimiertes Copywriting",
    ],
    keyword: "Website erstellen lassen",
  },
  {
    id: "automatisierungen",
    title: "Automatisierungen",
    description:
      "Verbinde deine Tools (Zapier, Make) zu einem nahtlosen System. Spare mindestens 10 Stunden pro Woche durch intelligente Workflow-Automatisierung.",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600",
    features: [
      "Zapier & Make Experten-Setup",
      "CRM-Anbindung",
      "Automatische Follow-up Sequenzen",
      "Fehler-Monitoring",
      "Terminbuchungs-Automation",
    ],
    keyword: "Business Automatisierung",
  },
  {
    id: "seo-geo",
    title: "SEO & GEO",
    description:
      "Werde bei Google gefunden und von KI-Suchen empfohlen. Lokale SEO, technische Optimierung und Generative Engine Optimization für die Zukunft.",
    icon: Search,
    color: "bg-green-50 text-green-600",
    features: [
      "Technische SEO-Analyse",
      "Lokale SEO & Google Business",
      "Content-Strategie",
      "GEO für KI-Suchen",
      "Monatliches Reporting",
    ],
    keyword: "SEO Agentur lokal",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Leistungen – Webdesign, Automatisierungen & SEO",
  url: `${SITE_URL}/leistungen`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `${SITE_URL}/leistungen/${service.id}`,
      provider: {
        "@type": "Person",
        name: "Timm Schurig",
      },
    },
  })),
};

export default function LeistungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text + CTA */}
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Alle Leistungen
              </p>
              <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
                Webdesign, Automatisierung &{" "}
                <span className="text-accent">SEO</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Drei Leistungen, die perfekt ineinandergreifen – für eine Online-Präsenz, die wirklich wächst.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-[background-color,box-shadow]"
              >
                Kostenloses Erstgespräch buchen
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>

            {/* Right: Service preview card */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Was du bekommst
              </p>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${service.color} flex items-center justify-center shrink-0`}
                      aria-hidden="true"
                    >
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm">{service.title}</p>
                      <p className="text-slate-500 text-xs leading-snug mt-0.5 truncate">
                        {service.keyword}
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-accent shrink-0" aria-hidden="true" />
                  </div>
                );
              })}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <p className="text-sm text-slate-500 font-medium">
                  Alles aus einer Hand · Kostenloses Erstgespräch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/leistungen/${service.id}`}
                  className="group block bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-accent/20 transition-all"
                  aria-label={`Mehr über ${service.title} erfahren`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    aria-hidden="true"
                  >
                    <Icon size={28} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span
                          className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-accent font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                    Mehr erfahren <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceFAQ />

      <CTA />
    </>
  );
}
