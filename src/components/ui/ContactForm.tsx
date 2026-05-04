"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

interface ContactFormProps {
  pageName: string;
  variant?: "light" | "dark";
  title?: React.ReactNode;
  subline?: string;
  buttonText?: string;
}

export function ContactForm({ 
  pageName, 
  variant = "light",
  title = <>Lass uns deine <span className="text-accent">Maschine bauen.</span></>,
  subline = "Trage kurz deine Daten ein und ich melde mich innerhalb von 2 Stunden persönlich bei dir.",
  buttonText = "Anfrage jetzt absenden"
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "neu",
    budget: "medium",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, page: pageName }),
      });

      if (!res.ok) throw new Error("Fehler beim Senden");
      
      setStatus("success");
      setFormData({ name: "", contact: "", projectType: "neu", budget: "medium", message: "" });
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section 
      className={`py-24 px-6 ${variant === "dark" ? "bg-slate-950" : "bg-white"}`} 
      id="contact-form"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} />
                <span>Kostenloser Website-Check</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 whitespace-pre-line">
                {title}
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                {subline}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Dein Name</label>
                <input
                  required
                  type="text"
                  placeholder="Max Mustermann"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">WhatsApp / Telefon</label>
                <input
                  required
                  type="text"
                  placeholder="0151 / ..."
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-white/5 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Dein Vorhaben</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-white/5 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer"
                >
                  <option value="neu" className="bg-slate-900">Neue Website</option>
                  <option value="redesign" className="bg-slate-900">Redesign (Bestehende Seite)</option>
                  <option value="seo" className="bg-slate-900">SEO & Sichtbarkeit</option>
                  <option value="shop" className="bg-slate-900">Onlineshop</option>
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Budget-Rahmen</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white/5 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer"
                >
                  <option value="small" className="bg-slate-900">bis 500 €</option>
                  <option value="medium" className="bg-slate-900">500 – 1.500 €</option>
                  <option value="large" className="bg-slate-900">1.500 – 3.000 €</option>
                  <option value="xl" className="bg-slate-900">3.000 € +</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Deine Nachricht (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Erzähl mir kurz von deinem Projekt..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`w-full h-16 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    status === "success"
                      ? "bg-emerald-500 text-white cursor-default"
                      : "bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20 active:scale-95 disabled:opacity-70"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === "loading" ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="animate-spin" />
                        Wird gesendet...
                      </motion.div>
                    ) : status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 />
                        Anfrage erhalten!
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={20} />
                        {buttonText}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>

            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-center text-red-400 flex items-center justify-center gap-2 font-medium"
                >
                  <AlertCircle size={18} />
                  Da ist etwas schiefgelaufen. Bitte versuch es nochmal!
                </motion.p>
              )}
            </AnimatePresence>

            <p className="mt-8 text-center text-slate-500 text-sm">
              Sichere Verbindung · Keine Weitergabe an Dritte · DSGVO-konform
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
