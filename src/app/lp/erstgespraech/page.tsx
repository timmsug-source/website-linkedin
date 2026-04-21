import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kostenloses Erstgespräch – Timm Schurig",
  description:
    "Buche jetzt dein kostenloses 30-Minuten-Erstgespräch mit Timm Schurig. Für Fitness- und Ernährungscoaches im DACH-Raum.",
  robots: { index: false, follow: false },
};

const whatToExpect = [
  "Analyse deiner aktuellen LinkedIn-Präsenz und Prozesse",
  "Identifikation der 3 größten Wachstums-Hebel für dein Business",
  "Konkreter Maßnahmenplan – unabhängig ob wir zusammenarbeiten",
  "Transparente Einschätzung: Was sinnvoll ist, was nicht",
  "Keine Verkaufspitch – echte Beratung",
];

export default function ErstgespraechPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="py-6 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <span className="text-xl font-display font-extrabold tracking-tight text-slate-900">
            TIMM<span className="text-accent">SCHURIG</span>
          </span>
        </div>
      </header>

      <div className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
              Kostenlos & unverbindlich
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-4 leading-tight">
              30 Minuten, die dein{" "}
              <span className="text-accent">Business verändern</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              Im Strategie-Check schauen wir uns gemeinsam deine Situation an
              und entwickeln einen klaren Plan für mehr Kunden und weniger
              Aufwand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Was dich erwartet:
              </h2>
              <ul className="space-y-4">
                {whatToExpect.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Bevorzugst du WhatsApp?</strong>{" "}
                  Schreib mir direkt auf{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent font-bold hover:underline"
                  >
                    WhatsApp
                  </a>{" "}
                  – ich melde mich in der Regel innerhalb von 2 Stunden.
                </p>
              </div>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Termin direkt buchen
                </h2>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Wähle einen Termin, der dir passt. Das Gespräch findet per
                  Video-Call statt.
                </p>
                <a
                  href={PHONE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold w-full shadow-lg shadow-accent/20 transition-all"
                >
                  Termin bei Calendly buchen →
                </a>
                <p className="mt-4 text-xs text-slate-400">
                  Kostenlos · 30 Min. · Video-Call
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 px-6 border-t border-slate-100 text-center text-sm text-slate-400">
        <span>© {new Date().getFullYear()} Timm Schurig</span>
        {" · "}
        <a href="/impressum" className="hover:text-accent">Impressum</a>
        {" · "}
        <a href="/datenschutz" className="hover:text-accent">Datenschutz</a>
      </footer>
    </main>
  );
}
