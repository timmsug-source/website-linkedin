import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign in Langenfeld | Professionell, Schnell & KI-Ready",
  description:
    "Individuelle Websites für Unternehmen in Langenfeld & Umgebung. Professionelles Webdesign mit Fokus auf SEO, Performance & KI-Optimierung.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://timmschurig.com/webdesign/langenfeld" },
  openGraph: {
    title: "Webdesign in Langenfeld | Professionell, Schnell & KI-Ready",
    description:
      "Individuelle Websites für Unternehmen in Langenfeld & Umgebung. Professionelles Webdesign mit Fokus auf SEO, Performance & KI-Optimierung.",
    url: "https://timmschurig.com/webdesign/langenfeld",
    locale: "de_DE",
    type: "website",
  },
};

export default function LangenfeldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
