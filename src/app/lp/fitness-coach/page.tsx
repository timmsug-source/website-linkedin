import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle, Star } from "lucide-react";
import { WHATSAPP_URL, CALENDLY_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Marketing System für Fitness Coaches – Kostenloses Erstgespräch",
  description:
    "Landingpages, Automatisierungen & KI-Chatbots speziell für Personal Trainer. Mehr LinkedIn-Kunden, weniger manueller Aufwand. Jetzt kostenloses Erstgespräch sichern.",
  robots: { index: false, follow: false },
};

const benefits = [
  "Mehr qualifizierte Leads über LinkedIn",
  "Automatisches Follow-up – kein Lead geht verloren",
  "KI-Chatbot antwortet 24/7 für dich",
  "Professionelle Landingpage in 1–2 Wochen",
  "DSGVO-konform und 100% PageSpeed",
];

const socialProof = [
  { text: "+12 qualifizierte Leads/Monat", name: "Markus R., Personal Trainer" },
  { text: "Onboarding-Zeit: 3h → 20 Min.", name: "Jana K., Ernährungscoach" },
  { text: "8 Neukunden im ersten Monat", name: "Stefan B., Fitness Coach" },
];

export default function FitnessCoachLPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Minimal Header */}
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

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
            Speziell für Personal Trainer & Fitness Coaches
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-6">
            Mehr Kunden über LinkedIn –{" "}
            <span className="text-accent">vollautomatisch</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Landingpages, KI-Chatbots und Automatisierungen, die rund um die
            Uhr Leads generieren und qualifizieren. Du coachst, das System
            akquiriert.
          </p>

          {/* Benefits */}
          <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col gap-4 items-center">
            <a
              href={CALENDLY_URL}
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

      {/* Social Proof */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6" aria-label="5-Sterne-Bewertungen">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-amber-400 fill-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="space-y-4">
            {socialProof.map((proof, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 flex items-center gap-4"
              >
                <div className="text-accent font-bold text-lg shrink-0">
                  ✓ {proof.text}
                </div>
                <div className="text-slate-500 text-sm">– {proof.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-4">
            Bereit loszulegen?
          </h2>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-14 text-lg font-bold w-full shadow-lg shadow-accent/20 transition-all"
          >
            Kostenloses Erstgespräch buchen
            <ArrowRight className="ml-2" size={20} />
          </a>
          <p className="mt-4 text-slate-400 text-sm">
            Kostenlos & unverbindlich · 30 Minuten Strategie-Check
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
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
