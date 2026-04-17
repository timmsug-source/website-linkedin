import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Problems } from "@/components/home/Problems";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { TechFoundation } from "@/components/home/TechFoundation";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title:
    "Timm Schurig – Webdesign, Automatisierung & SEO | Digital-Agentur",
  description:
    "Professionelles Webdesign, intelligente Automatisierungen und nachhaltige SEO-Strategien für Unternehmen. Websites, die wirklich Kunden bringen. Kostenloses Erstgespräch buchen.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title:
      "Timm Schurig – Webdesign, Automatisierung & SEO",
    description:
      "Professionelles Webdesign, Automatisierungen und SEO & GEO – alles aus einer Hand für nachhaltiges Wachstum.",
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
        "Webdesign, Automatisierung & SEO für Unternehmen",
      inLanguage: "de-DE",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Timm Schurig",
      url: SITE_URL,
      jobTitle: "Webdesigner & Digital-Stratege",
      description:
        "Spezialist für Webdesign, Marketing-Automatisierung und lokale SEO & GEO-Strategien.",
      knowsAbout: [
        "Webdesign",
        "Marketing Automatisierung",
        "SEO",
        "Generative Engine Optimization",
        "Landingpage Erstellung",
        "Zapier & Make",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Timm Schurig – Webdesign & Digital-Strategie",
      url: SITE_URL,
      description:
        "Webdesign, Automatisierungen und SEO & GEO für Unternehmen",
      priceRange: "€€",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital-Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Webdesign",
              description:
                "Professionelle Websites und Landingpages mit 100% PageSpeed",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatisierungen",
              description:
                "Intelligente Workflow-Automatisierung mit Zapier & Make",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & GEO",
              description:
                "Lokale SEO-Optimierung und Generative Engine Optimization",
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
          name: "Für wen sind die Leistungen von Timm Schurig geeignet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selbstständige, Freiberufler und kleine bis mittelständische Unternehmen, die ihre Online-Präsenz professionalisieren und mehr Kunden gewinnen möchten.",
          },
        },
        {
          "@type": "Question",
          name: "Was ist GEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GEO (Generative Engine Optimization) optimiert Inhalte so, dass KI-basierte Suchen wie ChatGPT, Perplexity oder Google Gemini ein Unternehmen als Experten empfehlen.",
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
      <TechFoundation />
      <AboutPreview />
      <CTA />
      <FAQ />
    </>
  );
}
