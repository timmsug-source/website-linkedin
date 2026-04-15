import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Problems } from "@/components/home/Problems";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title:
    "Timm Schurig – Marketing & Automatisierung für Fitness- & Ernährungscoaches | LinkedIn-Spezialist",
  description:
    "Ich helfe Fitness- und Ernährungscoaches im DACH-Raum, über LinkedIn planbar neue Kunden zu gewinnen – mit Landingpages, KI-Chatbots, WhatsApp-Marketing und vollautomatisiertem Onboarding. Kostenloses Erstgespräch buchen.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title:
      "Timm Schurig – Marketing & Automatisierung für Fitness- & Ernährungscoaches",
    description:
      "Landingpages, KI-Chatbots, WhatsApp & E-Mail Marketing, Automatisierungen – exklusiv für Coaches im DACH-Raum. LinkedIn-First Ansatz.",
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Timm Schurig",
      description:
        "Marketing & Automatisierung für Fitness- und Ernährungscoaches im DACH-Raum",
      inLanguage: "de-DE",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Timm Schurig",
      url: SITE_URL,
      jobTitle: "Marketing & Automatisierungs-Experte für Fitness-Coaches",
      description:
        "Spezialist für LinkedIn-Kundengewinnung, Landingpages, KI-Chatbots und Marketing-Automatisierung für Fitness- und Ernährungscoaches.",
      knowsAbout: [
        "LinkedIn Marketing",
        "Marketing Automatisierung",
        "KI-Chatbots",
        "WhatsApp Marketing",
        "Landingpage Erstellung",
        "Fitness Coach Marketing",
      ],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "51.165691",
          longitude: "10.451526",
        },
        description: "DACH-Raum (Deutschland, Österreich, Schweiz)",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Timm Schurig – Marketing & Automatisierung",
      url: SITE_URL,
      description:
        "Full-Service Marketing und Automatisierung für Fitness- und Ernährungscoaches im DACH-Raum",
      serviceArea: "DE, AT, CH",
      priceRange: "€€",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Marketing Services für Fitness-Coaches",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Landingpage Erstellung für Fitness Coaches",
              description:
                "Hochkonvertierende Landingpages für Fitness- und Ernährungscoaches",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KI-Chatbot für Fitness Coaches",
              description:
                "Intelligente Chatbots für automatische Lead-Qualifizierung und Terminbuchung",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WhatsApp Marketing für Fitness Coaches",
              description:
                "WhatsApp-Automatisierungen und Sequenzen für Coach-Marketing",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Für wen sind die Dienstleistungen von Timm Schurig geeignet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Die Lösungen sind speziell für Fitness- und Ernährungscoaches konzipiert, die bereits Kunden über LinkedIn gewinnen oder gewinnen wollen und ihre Prozesse professionalisieren oder automatisieren möchten.",
          },
        },
        {
          "@type": "Question",
          name: "Muss ich technisch versiert sein?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nein. Timm Schurig kümmert sich um die gesamte technische Umsetzung und liefert schlüsselfertige Systeme, die einfach zu bedienen sind.",
          },
        },
        {
          "@type": "Question",
          name: "Wie lange dauert die Umsetzung einer Landingpage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eine Landingpage ist meist innerhalb von 1–2 Wochen live. Komplexe Automatisierungen und KI-Chatbots dauern in der Regel 3–4 Wochen.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problems />
      <Services />
      <Process />
      <Testimonials />
      <AboutPreview />
      <FAQ />
      <CTA />
    </>
  );
}
