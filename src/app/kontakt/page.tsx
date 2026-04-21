import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, Phone, Calendar, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, WHATSAPP_URL, EMAIL, PHONE_URL, PHONE, CALENDLY_URL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt – Timm Schurig | Kostenloses Erstgespräch buchen",
  description:
    "Kontaktiere Timm Schurig für ein kostenloses 30-Minuten-Erstgespräch. Per WhatsApp, E-Mail oder direkt Termin buchen. Für Fitness- und Ernährungscoaches.",
  alternates: { canonical: `${SITE_URL}/kontakt` },
  openGraph: { url: `${SITE_URL}/kontakt` },
});

const contactOptions = [
  {
    icon: Calendar,
    title: "Kostenloses Erstgespräch",
    description:
      "30 Minuten Strategie-Check. Wir analysieren deine aktuelle Situation und schauen, was für dein Business möglich ist.",
    action: "Termin buchen",
    href: CALENDLY_URL,
    highlight: true,
    external: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    description:
      "Keine Lust auf Formulare? Schreib mir direkt auf WhatsApp – ich antworte in der Regel innerhalb von 2 Stunden.",
    action: "Chat starten",
    href: WHATSAPP_URL,
    highlight: false,
    external: true,
  },
  {
    icon: Mail,
    title: "E-Mail",
    description:
      "Für ausführliche Anfragen oder wenn du lieber per E-Mail kommunizierst. Antwort innerhalb von 24 Stunden.",
    action: EMAIL,
    href: `mailto:${EMAIL}`,
    highlight: false,
    external: false,
  },
  {
    icon: Phone,
    title: "Telefon",
    description:
      "Du erreichst mich direkt unter meiner Handynummer – für kurze Rückfragen oder wenn du lieber telefonierst.",
    action: PHONE,
    href: PHONE_URL,
    highlight: false,
    external: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/kontakt`,
  name: "Kontakt – Timm Schurig",
  description: "Kostenloses Erstgespräch für Fitness- und Ernährungscoaches",
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-36 pb-24 px-6 bg-white">
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
                Kontakt
              </li>
            </ol>
          </nav>

          <div className="mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Lass uns reden
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
              Bereit für deinen{" "}
              <span className="text-accent">nächsten Schritt?</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Wähle den Weg, der dir am liebsten ist. Ich bin persönlich
              erreichbar – kein Support-Team, kein Ticketsystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <a
                  key={index}
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noreferrer noopener" : undefined}
                  className={`group flex flex-col p-8 rounded-3xl border transition-all ${
                    option.highlight
                      ? "bg-accent text-white border-accent shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
                      : "bg-slate-50 border-slate-100 hover:shadow-xl hover:border-accent/20"
                  }`}
                  aria-label={`${option.title}: ${option.action}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                      option.highlight ? "bg-white/20" : "bg-accent/10 text-accent"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon
                      size={28}
                      className={option.highlight ? "text-white" : ""}
                    />
                  </div>
                  <h2
                    className={`text-xl font-bold mb-3 ${
                      option.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {option.title}
                  </h2>
                  <p
                    className={`leading-relaxed mb-6 flex-1 ${
                      option.highlight ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {option.description}
                  </p>
                  <span
                    className={`font-bold text-sm ${
                      option.highlight
                        ? "text-white"
                        : "text-accent group-hover:underline"
                    }`}
                  >
                    {option.action} →
                  </span>
                </a>
              );
            })}
          </div>

          {/* Location */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center gap-6">
            <div
              className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Standort</h3>
              <p className="text-slate-600 text-sm">
                Deutschland (DACH-Raum) · Remote-Zusammenarbeit weltweit möglich
              </p>
            </div>
            <div className="ml-auto text-right hidden sm:block">
              <p className="text-sm text-slate-500 font-medium">
                Antwortzeit
              </p>
              <p className="font-bold text-slate-900">&lt; 2 Stunden</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
