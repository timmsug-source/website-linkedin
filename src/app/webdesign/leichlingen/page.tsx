"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, ChevronRight, Send, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { PHONE_URL } from "@/lib/utils";

const projectTypes = [
    { id: "neu", label: "Neue Website", emoji: "🚀" },
    { id: "redesign", label: "Redesign", emoji: "✏️" },
    { id: "seo", label: "SEO / Sichtbarkeit", emoji: "📈" },
    { id: "shop", label: "Onlineshop", emoji: "🛍️" },
];

const budgets = [
    { id: "small", label: "bis 500 €" },
    { id: "medium", label: "500 – 1.500 €" },
    { id: "large", label: "1.500 – 3.000 €" },
    { id: "xl", label: "3.000 € +" },
];

type FormData = { projectType: string; budget: string; name: string; contact: string; };

function HeroForm() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState<FormData>({ projectType: "", budget: "", name: "", contact: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, page: "Webdesign Leichlingen" }),
            });
        } catch (err) { console.error(err); }
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-[3rem] opacity-30" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-7 shadow-2xl">
                {!submitted && (
                    <div className="flex gap-1.5 mb-6">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= s ? "bg-accent" : "bg-white/20"}`} />
                        ))}
                    </div>
                )}
                <AnimatePresence mode="wait">
                    {!submitted && step === 1 && (
                        <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 1 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5">Was planst du?</h3>
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {projectTypes.map((pt) => (
                                    <button key={pt.id} onClick={() => setForm(f => ({ ...f, projectType: pt.id }))}
                                        className={`flex flex-col items-center gap-1.5 px-3 py-4 rounded-xl border text-sm font-semibold transition-all ${form.projectType === pt.id ? "bg-accent border-accent text-white shadow-lg shadow-accent/30" : "border-white/20 text-slate-300 hover:border-accent/60 hover:bg-white/5"}`}>
                                        <span className="text-xl">{pt.emoji}</span>{pt.label}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => form.projectType && setStep(2)} disabled={!form.projectType}
                                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]">
                                Weiter <ChevronRight size={16} />
                            </button>
                        </motion.div>
                    )}
                    {!submitted && step === 2 && (
                        <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 2 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5">Welches Budget planst du ein?</h3>
                            <div className="space-y-2 mb-6">
                                {budgets.map((b) => (
                                    <button key={b.id} onClick={() => setForm(f => ({ ...f, budget: b.id }))}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${form.budget === b.id ? "bg-accent border-accent text-white shadow-lg shadow-accent/30" : "border-white/20 text-slate-300 hover:border-accent/60 hover:bg-white/5"}`}>
                                        {b.label}{form.budget === b.id && <CheckCircle2 size={16} />}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setStep(1)} className="flex-1 border border-white/20 hover:border-white/40 text-white rounded-xl py-3 font-semibold text-sm transition-colors">Zurück</button>
                                <button onClick={() => form.budget && setStep(3)} disabled={!form.budget}
                                    className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]">
                                    Weiter <ChevronRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {!submitted && step === 3 && (
                        <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 3 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5">Wie kann ich dich erreichen?</h3>
                            <div className="space-y-3 mb-5">
                                <input type="text" placeholder="Dein Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-accent transition-colors" />
                                <input type="text" placeholder="E-Mail oder WhatsApp-Nummer" value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <p className="text-slate-500 text-xs mb-5">Keine Weitergabe an Dritte. Ich melde mich innerhalb von 24 Stunden.</p>
                            <div className="flex gap-2">
                                <button onClick={() => setStep(2)} className="flex-1 border border-white/20 hover:border-white/40 text-white rounded-xl py-3 font-semibold text-sm transition-colors">Zurück</button>
                                <button onClick={handleSubmit} disabled={!form.name.trim() || !form.contact.trim() || loading}
                                    className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]">
                                    {loading ? <span className="animate-pulse">Wird gesendet…</span> : <><Send size={15} /> Anfrage senden</>}
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {submitted && (
                        <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} className="text-center py-6">
                            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-5">
                                <Sparkles size={28} className="text-accent" />
                            </div>
                            <h3 className="text-white font-extrabold text-xl mb-2">Anfrage erhalten!</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">Danke, {form.name.split(" ")[0]}! Ich melde mich innerhalb von 24 Stunden.</p>
                            <a href={PHONE_URL} className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-[background-color]">
                                Direkt anrufen <ArrowRight size={15} />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function WebdesignLeichlingen() {
    return (
        <main className="min-h-screen bg-slate-950 overflow-x-hidden">

            {/* Top Bar */}
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="bg-slate-900 py-3 px-6 text-white fixed top-0 w-full z-50 border-b border-white/10" style={{ willChange: "transform" }}>
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <span className="text-sm font-medium opacity-90 inline-flex items-center gap-2">
                        <MapPin size={14} className="text-accent" /> Webdesign für Unternehmen in Leichlingen & Umgebung
                    </span>
                    <div className="bg-accent/20 border border-accent/40 text-accent font-bold px-4 py-1.5 rounded-full text-sm">Kostenloses Erstgespräch</div>
                </div>
            </motion.div>

            {/* Hero */}
            <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                </div>
                <div className="max-w-6xl mx-auto relative z-10 w-full">
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm font-bold mb-8 border border-white/10">
                                <MapPin size={14} className="text-accent" /> Webdesign Leichlingen
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
                                Professionelles <span className="text-accent">Webdesign</span> für Leichlingen.
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-medium">
                                Kein anonymes Agenturpaket – sondern ein Funnel-System, das deine Besucher zu Kunden macht. Lokal verwurzelt, digital führend.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                {["Funnel-Strategie", "Lokales SEO", "PageSpeed 100"].map((b) => (
                                    <div key={b} className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                                        <CheckCircle2 size={16} className="text-accent" />{b}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <HeroForm />
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    );
}
