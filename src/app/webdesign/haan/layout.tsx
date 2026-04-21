import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign in Haan | Professionell, Schnell & KI-Ready",
  description:
    "Individuelle Websites für Unternehmen in Haan & Umgebung. Professionelles Webdesign mit Fokus auf SEO, Performance & KI-Optimierung.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://timmschurig.com/webdesign/haan" },
  openGraph: {
    title: "Webdesign in Haan | Professionell, Schnell & KI-Ready",
    description:
      "Individuelle Websites für Unternehmen in Haan & Umgebung. Professionelles Webdesign mit Fokus auf SEO, Performance & KI-Optimierung.",
    url: "https://timmschurig.com/webdesign/haan",
    locale: "de_DE",
    type: "website",
  },
};

export default function HaanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
