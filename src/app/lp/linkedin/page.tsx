"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Send,
  Globe,
  Search,
  MapPin,
  MessageCircle,
  Zap,
  TrendingUp,
  Eye,
  AlertCircle,
} from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/utils";

// ─── Form Config ────────────────────────────────────────────────────────────

const projectTypes = [
  { id: "website", label: "Conversion-Website", emoji: "🌐" },
  { id: "seo", label: "SEO-Optimierung", emoji: "📈" },
  { id: "geo", label: "GEO-Marketing", emoji: "📍" },
  { id: "komplett", label: "Komplettpaket", emoji: "🚀" },
];

const budgets = [
  { id: "small", label: "bis 500 €" },
  { id: "medium", label: "500 – 1.500 €" },
  { id: "large", label: "1.500 – 3.000 €" },
  { id: "xl", label: "3.000 € +" },
];

type FormData = {
  projectType: string;
  budget: string;
  name: string;
  contact: string;
};

// ─── HeroForm ────────────────────────────────────────────────────────────────

function HeroForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    projectType: "",
    budget: "",
    name: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const canNext1 = form.projectType !== "";
  const canNext2 = form.budget !== "";
  const canSubmit = form.name.trim() !== "" && form.contact.trim() !== "";

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-[3rem] opacity-30" />
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-7 shadow-2xl overflow-hidden">
        {!submitted && (
          <div className="flex gap-1.5 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  step >= s ? "bg-accent" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1 */}
          {!submitted && step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
                Schritt 1 von 3
              </p>
              <h3 className="text-white font-bold text-lg mb-5 leading-snug">
                Was brauchst du?
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() =>
                      setForm((f) => ({ ...f, projectType: pt.id }))
                    }
                    className={`flex flex-col items-center gap-1.5 px-3 py-4 rounded-xl border text-sm font-semibold transition-all ${
                      form.projectType === pt.id
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/30"
                        : "border-white/20 text-slate-300 hover:border-accent/60 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xl">{pt.emoji}</span>
                    {pt.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => canNext1 && setStep(2)}
                disabled={!canNext1}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]"
              >
                Weiter <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Step 2 */}
          {!submitted && step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
                Schritt 2 von 3
              </p>
              <h3 className="text-white font-bold text-lg mb-5 leading-snug">
                Welches Budget planst du ein?
              </h3>
              <div className="space-y-2 mb-6">
                {budgets.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setForm((f) => ({ ...f, budget: b.id }))}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      form.budget === b.id
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/30"
                        : "border-white/20 text-slate-300 hover:border-accent/60 hover:bg-white/5"
                    }`}
                  >
                    {b.label}
                    {form.budget === b.id && <CheckCircle2 size={16} />}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-white/20 hover:border-white/40 text-white rounded-xl py-3 font-semibold text-sm transition-colors"
                >
                  Zurück
                </button>
                <button
                  onClick={() => canNext2 && setStep(3)}
                  disabled={!canNext2}
                  className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]"
                >
                  Weiter <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {!submitted && step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
                Schritt 3 von 3
              </p>
              <h3 className="text-white font-bold text-lg mb-5 leading-snug">
                Wie kann ich dich erreichen?
              </h3>
              <div className="space-y-3 mb-5">
                <input
                  type="text"
                  placeholder="Dein Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="text"
                  placeholder="E-Mail oder WhatsApp-Nummer"
                  value={form.contact}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, contact: e.target.value }))
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <p className="text-slate-500 text-xs mb-5">
                Keine Weitergabe an Dritte. Ich melde mich innerhalb von 24 Stunden.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-white/20 hover:border-white/40 text-white rounded-xl py-3 font-semibold text-sm transition-colors"
                >
                  Zurück
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit || loading}
                  className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]"
                >
                  {loading ? (
                    <span className="animate-pulse">Wird gesendet…</span>
                  ) : (
                    <>
                      <Send size={15} /> Anfrage senden
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* Success */}
          {submitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-accent" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Anfrage erhalten!
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Ich melde mich bei dir innerhalb von 24 Stunden. Lass uns deine
                LinkedIn-Reichweite in echte Leads verwandeln.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-[background-color]"
              >
                <MessageCircle size={16} /> Direkt auf WhatsApp schreiben
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: TrendingUp,
    title: "Viel Lärm, kein Ertrag",
    description:
      "Du postest regelmäßig, bekommst Applaus – aber keine Buchungen. Likes zahlen keine Rechnungen.",
  },
  {
    icon: AlertCircle,
    title: "Die Sackgasse",
    description:
      "Interessenten klicken auf dein Profil, landen auf einer veralteten Website oder gar keiner – und springen sofort wieder ab.",
  },
  {
    icon: Eye,
    title: "Unsichtbar bei der Suche",
    description:
      "Wenn jemand nach deiner Lösung googelt, findet er deine Konkurrenz, aber nicht dich. Google kennt dich nicht.",
  },
];

const solutions = [
  {
    icon: Globe,
    tag: "Website",
    title: "Conversion-Websites",
    description:
      "Deine Website ist kein digitales Visitenkarten-Museum. Wir bauen einen Funnel, der Besucher psychologisch führt und genau eine Handlung provoziert: Die Anfrage.",
    gradient: "from-blue-500/10 to-indigo-500/10",
    border: "hover:border-blue-400/40",
  },
  {
    icon: Search,
    tag: "SEO",
    title: "SEO-Strategie",
    description:
      "LinkedIn ist nur ein Kanal. Wir sorgen dafür, dass dein Expertenstatus auch bei Google zementiert wird – damit du passiv Leads generierst, auch wenn du mal nicht postest.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "hover:border-emerald-400/40",
  },
  {
    icon: MapPin,
    tag: "GEO",
    title: "GEO-Optimierung",
    description:
      "Gerade für lokale oder regional spezifische Kunden ist GEO-Marketing der Hebel. Wir platzieren dich dort, wo Kunden in deiner Nähe nach deiner Expertise suchen.",
    gradient: "from-orange-500/10 to-rose-500/10",
    border: "hover:border-orange-400/40",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Wir analysieren deinen aktuellen LinkedIn-Auftritt und deine Conversion-Sackgassen. Keine Floskeln – klare Diagnose.",
  },
  {
    number: "02",
    title: "Transformation",
    description:
      "Ich baue deine Website und optimiere deine SEO/GEO-Präsenz für maximale Sichtbarkeit. Handwerk statt Baukasten.",
  },
  {
    number: "03",
    title: "Monetarisierung",
    description:
      "Wir schalten die Verbindung zwischen LinkedIn und deiner Website scharf. Deine Interaktionen werden zu Terminen.",
  },
];

export default function LinkedInLP() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8">
                <Zap size={12} /> LinkedIn × Website × SEO
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] mb-7">
                Mach aus deinen LinkedIn-Likes{" "}
                <span className="text-accent">endlich echte Anfragen.</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
                Du investierst Stunden in Content und Interaktionen, aber dein
                Postfach bleibt leer? Wir bauen das digitale Fundament, das
                deine Reichweite in messbare Leads verwandelt – durch
                Conversion-Websites und gezieltes SEO&nbsp;&amp;&nbsp;GEO.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold text-base transition-[background-color] shadow-lg shadow-accent/20"
              >
                <MessageCircle size={20} /> Melde dich auf WhatsApp
              </a>
              <p className="text-slate-500 text-sm mt-4">
                Kostenlos &amp; unverbindlich · Antwort innerhalb von 2 Stunden
              </p>
            </motion.div>

            {/* Right – HeroForm */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <HeroForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Das Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
              Die Reichweiten-Falle:{" "}
              <span className="text-slate-400">
                Warum dein Content bisher nicht verkauft.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-slate-800/60 border border-slate-700/60 hover:border-accent/30 rounded-3xl p-8 transition-[border-color,box-shadow] hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. LÖSUNG ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Die Lösung
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
              Dein LinkedIn-Erfolg braucht{" "}
              <span className="text-accent">
                ein Zuhause, das konvertiert.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.12 }}
                  className={`group relative overflow-hidden bg-gradient-to-br ${s.gradient} border border-slate-700/60 ${s.border} rounded-3xl p-8 transition-[border-color,box-shadow] hover:shadow-xl`}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/[0.02] group-hover:to-white/[0.04] transition-all duration-500 rounded-3xl" />

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
                      <Icon size={11} />
                      {s.tag}
                    </div>
                    <h3 className="font-bold text-white text-xl mb-4">
                      {s.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PROZESS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Wie wir zusammenarbeiten
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
              In 3 Schritten zur{" "}
              <span className="text-accent">Lead-Maschine.</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.15 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-20 h-20 rounded-full bg-slate-800 border-2 border-accent/40 flex flex-col items-center justify-center mx-auto mb-6">
                    <span className="text-accent font-black text-lg leading-none">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VISION / SOCIAL PROOF ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center"
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6">
              Das Ergebnis
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-10">
              Schluss mit{" "}
              <span className="text-slate-500">Hoffnungs-Marketing.</span>
            </h2>

            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/60 rounded-[2.5rem] p-10 md:p-14 text-left overflow-hidden">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-8xl font-serif text-accent/10 leading-none select-none">
                "
              </div>
              <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-medium relative z-10">
                Stell dir vor, du wachst auf und hast{" "}
                <span className="text-white font-bold">
                  Anfragen im Postfach
                </span>{" "}
                von Leuten, die deinen Content gesehen haben{" "}
                <span className="text-accent font-bold">und</span> durch deine
                Website davon überzeugt wurden, dass du die einzige logische
                Lösung für ihr Problem bist.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "100%", label: "PageSpeed Score" },
                { stat: "< 24h", label: "Antwortzeit" },
                { stat: "3-in-1", label: "Website + SEO + GEO" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/40 rounded-2xl py-6 px-4"
                >
                  <p className="text-3xl font-black text-accent mb-1">
                    {item.stat}
                  </p>
                  <p className="text-slate-400 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. FINALER CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6">
              Bereit?
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
              Bereit, das Spiel{" "}
              <span className="text-accent">umzudrehen?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Hör auf, Zeit in Reichweite zu investieren, die sich nicht
              auszahlt. Lass uns deine Maschine bauen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_URL}
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold text-base transition-[background-color] shadow-lg shadow-accent/20"
              >
                Kostenloses Erstgespräch buchen <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-3 border border-slate-600 hover:border-accent/60 text-slate-300 hover:text-white rounded-full px-8 py-4 font-semibold text-base transition-all"
              >
                <MessageCircle size={18} /> WhatsApp schreiben
              </a>
            </div>
            <p className="text-slate-600 text-sm mt-8">
              Kein Risiko. Kein Vertrag. Nur ein ehrliches Gespräch.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
