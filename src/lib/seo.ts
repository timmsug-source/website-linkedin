import type { Metadata } from "next";
import { SITE_URL } from "./utils";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Timm Schurig – Marketing & Automatisierung für Fitness- & Ernährungscoaches",
    template: "%s | Timm Schurig",
  },
  description:
    "Ich helfe Fitness- und Ernährungscoaches, über LinkedIn planbar neue Kunden zu gewinnen – mit Landingpages, KI-Chatbots, WhatsApp-Marketing und vollautomatisiertem Onboarding.",
  keywords: [
    "Marketing Agentur Fitness Coach",
    "Kunden gewinnen als Fitness Coach",
    "LinkedIn Marketing Fitness Coach",
    "Landingpage Personal Trainer erstellen lassen",
    "KI Chatbot Fitness Coach",
    "WhatsApp Marketing Fitness Coach",
    "Automatisierung Fitness Coach",
    "Ernährungscoach Marketing",
    "Personal Trainer Neukunden gewinnen",
    "Onboarding automatisieren Coach",
  ],
  authors: [{ name: "Timm Schurig", url: SITE_URL }],
  creator: "Timm Schurig",
  publisher: "Timm Schurig",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Timm Schurig",
    title:
      "Timm Schurig – Marketing & Automatisierung für Fitness- & Ernährungscoaches",
    description:
      "Landingpages, KI-Chatbots, WhatsApp-Marketing und Automatisierungen – exklusiv für Fitness- und Ernährungscoaches im DACH-Raum.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Timm Schurig – Marketing für Fitness- und Ernährungscoaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Timm Schurig – Marketing & Automatisierung für Fitness- & Ernährungscoaches",
    description:
      "Landingpages, KI-Chatbots, WhatsApp-Marketing und Automatisierungen – exklusiv für Coaches im DACH-Raum.",
    images: ["/og-image.jpg"],
    creator: "@timmschurig",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-DE": SITE_URL,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph || {}),
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...(overrides.twitter || {}),
    },
  };
}
