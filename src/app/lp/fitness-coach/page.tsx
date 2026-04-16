import type { Metadata } from "next";
import { ArrowRight, AlertCircle, CheckCircle2, MonitorSmartphone, Rocket, Clock, MessageCircle } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Exklusives LinkedIn Angebot | Timm Schurig",
  description:
    "Eine hochkonvertierende Landingpage für dein Fitness-Coaching. Jetzt zum exklusiven LinkedIn-Sonderpreis sichern.",
  robots: { index: false, follow: false },
};

export default function LinkedInFunnelPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Top Offer Bar (Replaces Navbar) */}
      <div className="bg-slate-900 py-3 px-6 text-white fixed top-0 w-full z-50">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-sm font-medium opacity-90 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Timm Schurig · Exklusives LinkedIn-Angebot
          </span>
          <div className="bg-accent/20 border border-accent/40 text-accent font-bold px-4 py-1.5 rounded-full text-sm inline-flex items-center gap-2 shadow-lg shadow-accent/10">
            Sonderpreis: 150€ (statt 450€)
          </div>
        </div>
      </div>

      {/* Hero & Problem Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-8">
            Für Fitness- & Ernährungscoaches
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.15] mb-6">
            Du betreibst viel Akquise auf LinkedIn, aber <span className="text-accent">kaum jemand bucht?</span>
          </h1>

          {/* Problem Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 my-14 text-left shadow-lg shadow-slate-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-2 rounded-full text-red-500">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Das Problem</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              Du steckst Stunden in DMs, baust Netzwerke auf und schreibst Beiträge. Die Leute antworten sogar auf deine Nachrichten – aber wenn es darum geht, ans Telefon zu gehen oder ein Erstgespräch zu buchen, springen sie ab.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              <strong className="text-slate-900">Der Grund:</strong> Wenn Interessenten dich auf LinkedIn finden, suchen sie nach einem Profil oder einer Webseite, die <span className="underline decoration-red-300 underline-offset-4">maximales Vertrauen</span> ausstrahlt. Fehlt dieser zentrale Ort, sind sie weg.
            </p>
          </div>
        </div>
      </section>

      {/* Lösung Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold mb-8 backdrop-blur-sm">
            <CheckCircle2 size={16} className="text-accent" /> Die Lösung
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-8">
            Eine laser-fokussierte Landingpage, die aus LinkedIn-Leads echte Meetings macht.
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Wir bauen dir keine generische 10-Unterseiten-Webseite, auf der sich niemand zurechtfindet. Du bekommst einen hochkonvertierenden One-Pager, der exakt ein Ziel hat: <strong className="text-white">Vertrauen aufbauen & Erstgespräche generieren.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl">
              <MonitorSmartphone className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Modernes Design</h3>
              <p className="text-slate-400 text-sm">Premium Look, der dein Coaching hochwertig erscheinen lässt und Einwände im Vorfeld löst.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl">
              <Rocket className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Hochkonvertierend</h3>
              <p className="text-slate-400 text-sm">Klare CTAs, psychologisch durchdachte Struktur und extrem schnelle Ladezeiten für maximale Conversion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
              Der schnelle Ablauf
            </h2>
            <p className="text-slate-600">Von der Idee bis zur Live-Schaltung in Rekordzeit.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-slate-100 z-0"></div>

            {[
              { num: "01", title: "Kick-off Call", desc: "Wir besprechen in 30 Min. dein Angebot, deine Zielgruppe und deine Wünsche." },
              { num: "02", title: "Design & Copy", desc: "Wir bauen das komplette Design und schreiben starke Texte, die verkaufen." },
              { num: "03", title: "Live-Gang", desc: "Abnahme, letzte Anpassungen und die Seite geht auf deiner Domain online." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-white border border-slate-100 p-8 rounded-3xl shadow-xl shadow-slate-200/40 text-center">
                <div className="w-16 h-16 bg-accent text-white font-display font-extrabold text-2xl rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/30">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mit Angebot */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent opacity-10 blur-3xl rounded-full"></div>

          <Clock className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Sichere dir das LinkedIn-Sonderangebot
          </h2>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 inline-block shadow-sm">
            <p className="text-slate-500 line-through mb-1 text-sm font-bold">Normalpreis: 450€</p>
            <p className="text-4xl font-extrabold text-slate-900">
              Nur <span className="text-accent">150€</span>
            </p>
            <p className="text-xs text-slate-400 mt-2">Einmalig. Transparent. Keine versteckten Kosten.</p>
          </div>

          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Da du über meine LinkedIn-Akquise hier bist, biete ich dir an, deine Landingpage für einen unschlagbaren Bruchteil des Normalpreises aufzubauen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-16 text-lg font-bold w-full sm:w-auto shadow-lg shadow-accent/30 transition-all hover:scale-105"
            >
              Angebot für 150€ sichern <ArrowRight size={20} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full px-8 h-16 text-lg font-bold w-full sm:w-auto shadow-sm transition-all"
            >
              <MessageCircle size={20} className="text-[#25D366]" />
              Fragen? WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
