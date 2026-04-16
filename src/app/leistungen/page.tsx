import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layout, Cpu, MessageSquare, Mail, UserPlus } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, CALENDLY_URL } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";
import { ServiceFlow } from "@/components/leistungen/ServiceFlow";
import { ServiceFAQ } from "@/components/leistungen/ServiceFAQ";

export const metadata: Metadata = buildMetadata({
  title: "Leistungen – Landingpages, Automatisierungen & KI-Chatbots für Coaches",
  description:
    "Alle Leistungen von Timm Schurig: Landingpage Erstellung, Automatisierungen, WhatsApp Marketing, E-Mail Marketing, KI-Chatbots und automatisiertes Onboarding für Fitness- und Ernährungscoaches.",
  keywords: [
    "Landingpage Fitness Coach erstellen lassen",
    "Automatisierung Fitness Coach",
    "WhatsApp Marketing Fitness Coach",
    "KI Chatbot Fitness Coach",
    "E-Mail Marketing Personal Trainer",
    "Onboarding automatisieren Coach",
  ],
  alternates: { canonical: `${SITE_URL}/leistungen` },
  openGraph: { url: `${SITE_URL}/leistungen` },
});

const services = [
  {
    id: "landingpage-erstellung",
    title: "Landingpage Erstellung",
    description:
      "Hochkonvertierende Landingpages für Fitness- und Ernährungscoaches. Mobile-First, 100% PageSpeed, SEO-optimiert – für maximale Lead-Generierung über LinkedIn.",
    icon: Layout,
    color: "bg-blue-50 text-blue-600",
    features: [
      "100% PageSpeed Score",
      "Mobile-First Design",
      "SEO-Grundoptimierung",
      "CRM-Integration",
      "Conversion-optimiertes Copywriting",
    ],
    keyword: "Landingpage Fitness Coach erstellen lassen",
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
      "Follow-up Sequenzen",
      "Fehler-Monitoring",
      "Terminbuchungs-Automation",
      "CRM-Synchronisation",
    ],
    keyword: "Automatisierung Fitness Coach",
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    description:
      "Automatisierte WhatsApp-Sequenzen, die Leads warmhalten und in Buchungen umwandeln. Die direkteste Kommunikation mit deiner Zielgruppe.",
    icon: Mail,
    color: "bg-green-50 text-green-600",
    features: [
      "WhatsApp Business API",
      "Personalisierte Sequenzen",
      "Lead-Nurturing Flows",
      "Automatisierte Follow-ups",
      "Opt-in Management",
    ],
    keyword: "WhatsApp Marketing Fitness Coach",
  },
  {
    id: "email-marketing",
    title: "E-Mail Marketing",
    description:
      "Vollautomatische E-Mail-Funnels, die deine Leads durch den Kaufprozess führen – vom ersten Kontakt bis zur Buchung deines Coachings.",
    icon: Mail,
    color: "bg-blue-50 text-blue-600",
    features: [
      "Willkommens-Sequenzen",
      "Nurture-Flows",
      "Reaktivierungs-Kampagnen",
      "A/B-Testing",
      "Segmentierung",
    ],
    keyword: "E-Mail Marketing Personal Trainer",
  },
  {
    id: "ki-chatbot",
    title: "KI-Chatbots",
    description:
      "Intelligente Assistenten, die auf dein Wissen trainiert sind – beantworten Fragen, qualifizieren Leads und buchen Termine, während du schläfst.",
    icon: MessageSquare,
    color: "bg-orange-50 text-orange-600",
    features: [
      "GPT-4 basierte KI",
      "Website & WhatsApp Integration",
      "Direkte Terminbuchung",
      "Lead-Qualifizierung",
      "24/7 Verfügbarkeit",
    ],
    keyword: "KI Chatbot Fitness Coach",
  },
  {
    id: "automatisiertes-onboarding",
    title: "Automatisiertes Onboarding",
    description:
      "Ein professionelles Onboarding-Erlebnis für neue Kunden ab der ersten Sekunde – vollautomatisch. Verträge, Zahlung, Zugang, Willkommen.",
    icon: UserPlus,
    color: "bg-accent/10 text-accent",
    features: [
      "Digitale Signaturen",
      "Automatische Rechnungsstellung",
      "Sofortiger Plattform-Zugang",
      "Willkommens-Sequenz",
      "Feedback-Automation",
    ],
    keyword: "Onboarding automatisieren Coach",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Leistungen für Fitness- und Ernährungscoaches",
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
      <section className="pt-36 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Alle Leistungen
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Marketing & Technik für{" "}
            <span className="text-accent">Fitness-Coaches</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Full-Service aus einer Hand – von der Landingpage bis zum
            vollautomatisierten Onboarding. Alles, was du brauchst, um über
            LinkedIn planbar Kunden zu gewinnen.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all"
          >
            Kostenloses Erstgespräch buchen
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <ServiceFlow />
      <ServiceFAQ />

      <CTA />
    </>
  );
}
