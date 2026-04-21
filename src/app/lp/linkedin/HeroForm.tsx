"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

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

export function HeroForm() {
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
    <div className="bg-slate-800 border border-slate-700 rounded-[2rem] p-7 shadow-2xl">
      {!submitted && (
        <div className="flex gap-1.5 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                step >= s ? "bg-accent" : "bg-slate-600"
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
            transition={{ duration: 0.22 }}
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
                      ? "bg-accent border-accent text-white"
                      : "border-slate-600 text-slate-300 hover:border-accent/60 hover:bg-slate-700"
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
            transition={{ duration: 0.22 }}
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
                      ? "bg-accent border-accent text-white"
                      : "border-slate-600 text-slate-300 hover:border-accent/60 hover:bg-slate-700"
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
                className="flex-1 border border-slate-600 hover:border-slate-400 text-white rounded-xl py-3 font-semibold text-sm transition-colors"
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
            transition={{ duration: 0.22 }}
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
                className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="text"
                placeholder="E-Mail oder WhatsApp-Nummer"
                value={form.contact}
                onChange={(e) =>
                  setForm((f) => ({ ...f, contact: e.target.value }))
                }
                className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <p className="text-slate-500 text-xs mb-5">
              Keine Weitergabe an Dritte. Ich melde mich innerhalb von 24 Stunden.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border border-slate-600 hover:border-slate-400 text-white rounded-xl py-3 font-semibold text-sm transition-colors"
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
            transition={{ duration: 0.3 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} className="text-accent" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Anfrage erhalten!
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
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
  );
}
