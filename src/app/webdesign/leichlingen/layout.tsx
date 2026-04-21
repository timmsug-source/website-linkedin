import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign in Leichlingen | Professionell, Schnell & KI-Ready",
  description:
    "Sichtbar werden & Kunden gewinnen: Dein individuelles Webdesign in Leichlingen. Fokus auf Performance, SEO & KI-Optimierung für lokale Unternehmen.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://timmschurig.com/webdesign/leichlingen" },
  openGraph: {
    title: "Webdesign in Leichlingen | Professionell, Schnell & KI-Ready",
    description:
      "Sichtbar werden & Kunden gewinnen: Dein individuelles Webdesign in Leichlingen. Fokus auf Performance, SEO & KI-Optimierung für lokale Unternehmen.",
    url: "https://timmschurig.com/webdesign/leichlingen",
    locale: "de_DE",
    type: "website",
  },
};

export default function LeichlingenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
