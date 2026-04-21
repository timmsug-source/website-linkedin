import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Marketing für Ernährungscoaches – Kostenloses Erstgespräch",
  description:
    "Spezialist für Ernährungscoach-Marketing: Landingpages, WhatsApp Marketing, KI-Chatbots und Automatisierungen. Jetzt kostenloses Erstgespräch sichern.",
  robots: { index: false, follow: false },
};

const benefits = [
  "Landingpage speziell für Ernährungscoaches",
  "Automatische WhatsApp & E-Mail Sequenzen",
  "KI-Chatbot, der 24/7 Fragen beantwortet",
  "Vollautomatisches Klienten-Onboarding",
  "LinkedIn-optimierte Strategie für deine Nische",
];

export default function ErnaehrungscoachLPPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="py-6 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xl font-display font-extrabold tracking-tight text-slate-900">
            TIMM<span className="text-accent">SCHURIG</span>
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 bg-[#25D366] text-white rounded-full px-4 py-2 text-sm font-bold"
          >
            <MessageCircle size={16} fill="currentColor" />
            WhatsApp
          </a>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
            Speziell für Ernährungscoaches & Ernährungsberater
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-6">
            Als Ernährungscoach{" "}
            <span className="text-accent">planbar Kunden gewinnen</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Ich verstehe die spezifischen Schmerzpunkte von Ernährungscoaches –
            und baue dir das System, das automatisch qualifizierte Klienten
            über LinkedIn generiert.
          </p>

          <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 items-center">
            <a
              href={PHONE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-xl font-bold w-full max-w-sm shadow-lg shadow-accent/20 transition-all"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="ml-2" size={22} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 text-slate-600 font-medium hover:text-accent transition-colors"
            >
              <MessageCircle size={18} />
              Oder per WhatsApp schreiben
            </a>
          </div>
          <p className="mt-4 text-slate-400 text-sm">
            Kostenlos & unverbindlich · 30 Minuten
          </p>
        </div>
      </section>

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
