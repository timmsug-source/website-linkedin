"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Clock, MessageCircle, ChevronRight, Send, Sparkles, ChevronDown, Phone } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL, PHONE } from "@/lib/utils";

const faqs = [
    {
        q: "Wie lange dauert die Erstellung einer Website?",
        a: "In der Regel steht dein neues System innerhalb von 4 bis 6 Wochen, je nach Umfang und Zuarbeit. Ich halte dich während des gesamten Prozesses auf dem Laufenden – keine bösen Überraschungen.",
    },
    {
        q: "Warum ist lokales SEO für Leichlingen so wichtig?",
        a: "Die meisten Menschen suchen heute nach 'Dienstleistung + Ort'. Wenn wir dein Webdesign in Leichlingen gezielt darauf ausrichten, landest du genau vor den Augen der Leute, die jetzt bereit sind zu kaufen – nicht irgendwo in der Masse.",
    },
    {
        q: "Betreust du die Website auch nach dem Launch?",
        a: "Ja, ich biete Wartungspakete an, damit deine Seite sicher, schnell und technisch auf dem neuesten Stand bleibt – inklusive regelmäßiger SEO-Anpassungen. Du bist nach dem Launch nicht allein.",
    },
    {
        q: "Was kostet ein professionelles Webdesign?",
        a: "Jedes Projekt ist individuell. Nach unserem ersten Gespräch erhältst du ein transparentes Festpreisangebot ohne versteckte Kosten. Kein Kleingedrucktes, keine Überraschungen.",
    },
];

function FaqAccordion() {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <div className="divide-y divide-slate-200 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
                <div key={i}>
                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                        aria-expanded={open === i}
                    >
                        <span className="font-bold text-slate-900 text-base leading-snug group-hover:text-accent transition-colors">{faq.q}</span>
                        <ChevronDown size={18} className={`shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    <AnimatePresence>
                        {open === i && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                                <p className="text-slate-500 text-sm leading-relaxed pb-6">{faq.a}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

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
        <main className="min-h-screen bg-white overflow-x-hidden">

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
            <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden bg-slate-950">
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

            {/* Problem */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">Das Problem</p>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
                        Warum deine Website aktuell<br className="hidden md:block" /> Geld kostet, statt welches zu verdienen
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed mb-16 max-w-2xl">
                        Viele Unternehmen in der Blütenstadt verlassen sich auf veraltete digitale Visitenkarten – die zwar „nett" aussehen, aber keine klare Nutzerführung haben.
                    </p>

                    <div className="divide-y divide-slate-100">
                        {[
                            { n: "01", title: "Unsichtbarkeit", desc: "Du wirst bei Suchen nach 'Dienstleistung + Leichlingen' nicht gefunden – deine Konkurrenz schon." },
                            { n: "02", title: "Vertrauensverlust", desc: "Veraltetes Design schreckt potenzielle Kunden ab, bevor sie überhaupt die erste Zeile lesen." },
                            { n: "03", title: "Ladezeiten", desc: "Deine Seite ist langsamer als der Feierabendverkehr auf der L294. Google bestraft das." },
                            { n: "04", title: "Keine Strategie", desc: "Besucher kommen, verlassen die Seite aber ohne Anruf oder Anfrage – kein System dahinter." },
                        ].map((item) => (
                            <div key={item.n} className="flex gap-8 py-8 group">
                                <span className="text-5xl font-black text-red-100 group-hover:text-red-200 transition-colors leading-none mt-1 shrink-0 select-none">{item.n}</span>
                                <div>
                                    <p className="font-extrabold text-slate-900 text-lg mb-1">{item.title}</p>
                                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lösung */}
            <section className="py-28 px-6 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Die Lösung</p>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
                        Der Funnel-Ansatz –<br className="hidden md:block" /> Webdesign mit System
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-16 max-w-2xl">
                        Webdesign in Leichlingen bedeutet für mich nicht nur Ästhetik, sondern Konversions-Optimierung. Ich baue keine statischen Seiten, sondern automatisierte Verkaufs-Funnel.
                    </p>

                    <div className="divide-y divide-white/10">
                        {[
                            { title: "Zielgruppenanalyse", desc: "Wir sprechen genau die Sprache deiner Kunden im Rheinisch-Bergischen Kreis." },
                            { title: "SEO & GEO-Targeting", desc: "Durch lokale Optimierung dominierst du die Suchergebnisse in Leichlingen, Witzhelden, Burscheid und Langenfeld." },
                            { title: "Mobile First", desc: "Perfekte Darstellung auf allen Endgeräten – kein optionaler Bonus, sondern Standard im Jahr 2026." },
                            { title: "Psychologische Nutzerführung", desc: "Wir leiten den Besucher gezielt von der ersten Information bis zum Abschluss – ohne Umwege." },
                        ].map((item, i) => (
                            <div key={item.title} className="flex gap-8 py-8 group items-start">
                                <CheckCircle2 size={22} className="text-accent shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="font-extrabold text-white text-lg">{item.title}</p>
                                        <span className="text-white/10 font-black text-3xl leading-none select-none group-hover:text-white/20 transition-colors">0{i + 1}</span>
                                    </div>
                                    <p className="text-slate-400 leading-relaxed mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kurz zu mir */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Dein Partner vor Ort</p>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">Kurz zu mir</h2>
                    <p className="text-lg text-slate-500 leading-relaxed mb-16 max-w-2xl">
                        Ich verbinde technisches Know-how mit lokalem Marktverständnis. Während andere Agenturen anonyme Nummern verwalten, schätze ich den persönlichen Austausch hier in der Region.
                    </p>

                    <div className="grid md:grid-cols-[280px,1fr] gap-12 items-start">
                        <div className="relative">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/timm-portrait.jpeg"
                                    alt="Timm Schurig – Webdesign Leichlingen"
                                    fill
                                    className="object-cover"
                                    sizes="280px"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-2xl px-4 py-3 shadow-xl">
                                <p className="font-black text-xl leading-none">5+</p>
                                <p className="text-xs font-semibold opacity-80 mt-0.5">Jahre Erfahrung</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="divide-y divide-slate-100">
                                {[
                                    { label: "Wer ich bin", text: "Ich bin Timm Schurig – Webdesigner und SEO-Stratege mit Fokus auf den Raum Leichlingen und das Bergische Land." },
                                    { label: "Was mich antreibt", text: "Mein Ziel ist es, den Mittelstand in Leichlingen digital an die Spitze zu bringen – mit messbaren Ergebnissen statt leerer Floskeln." },
                                    { label: "Wie ich arbeite", text: "Direkt, transparent und auf Augenhöhe. Keine Zwischenhändler, keine anonymen Agenturen – du hast immer einen konkreten Ansprechpartner." },
                                ].map((item) => (
                                    <div key={item.label} className="py-6">
                                        <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{item.label}</p>
                                        <p className="text-slate-600 leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ablauf */}
            <section className="py-28 px-6 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Der Prozess</p>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
                        In 5 Schritten zu deiner<br className="hidden md:block" /> neuen Website
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-16 max-w-2xl">
                        Kein Rätselraten, kein Warten im Dunkeln – du weißt immer genau, wo wir stehen.
                    </p>

                    <div className="space-y-0">
                        {[
                            { n: "01", t: "Strategie-Call", d: "Wir analysieren dein Business und deine Ziele in Leichlingen – kostenlos und unverbindlich." },
                            { n: "02", t: "Konzept & Funnel-Plan", d: "Wir legen fest, wie wir Besucher zu Anfragen konvertieren. Keine Templates, sondern Strategie." },
                            { n: "03", t: "Design & Entwicklung", d: "Ich erstelle ein modernes Design, das deine Marke widerspiegelt und technisch auf höchstem Niveau ist." },
                            { n: "04", t: "SEO-Turbo", d: "Wir optimieren alle Inhalte für maximale Sichtbarkeit bei Google – lokal und überregional." },
                            { n: "05", t: "Go-Live & Support", d: "Deine Seite geht online und ich bleibe dein Ansprechpartner für Wartung und Wachstum." },
                        ].map((step, i) => (
                            <div key={step.n} className={`flex gap-6 md:gap-10 items-stretch py-8 ${i < 4 ? "border-b border-white/10" : ""}`}>
                                {/* Number + line */}
                                <div className="flex flex-col items-center gap-2 shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                                        <span className="text-accent font-black text-xs">{step.n}</span>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="flex-1 pb-2">
                                    <p className="font-extrabold text-white text-lg mb-2">{step.t}</p>
                                    <p className="text-slate-400 leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ergebnisse */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Erfolgsgeschichten</p>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-16 leading-tight">Ergebnisse aus der Region</h2>

                    <div className="divide-y divide-slate-100">
                        {[
                            { result: "+40 %", label: "mehr Anfragen", desc: "Handwerksbetrieb aus der Region über das neue Kontaktformular – in den ersten 8 Wochen nach Relaunch." },
                            { result: "Top 1", label: "bei Google", desc: "Kanzlei aus Leichlingen für lokale Fachbegriffe – organisch, ohne bezahlte Werbung." },
                            { result: "5 Std.", label: "gespart pro Woche", desc: "Einzelhandel durch automatisierte Terminbuchung – Zeit, die jetzt ins Kerngeschäft fließt." },
                        ].map((s) => (
                            <div key={s.label} className="grid md:grid-cols-[180px,1fr] gap-4 md:gap-10 py-10 items-center group">
                                <div>
                                    <p className="text-5xl md:text-6xl font-display font-black text-accent leading-none">{s.result}</p>
                                    <p className="text-slate-400 font-bold text-sm mt-1 uppercase tracking-wide">{s.label}</p>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-6 bg-accent relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
                        Lass uns dein Projekt<br className="hidden md:block" /> in Leichlingen starten!
                    </h2>
                    <p className="text-white/80 text-xl mb-12 leading-relaxed max-w-xl mx-auto">
                        Unverbindlich, kompetent und direkt aus der Nachbarschaft. Ich freue mich auf dein Projekt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={PHONE_URL} className="inline-flex items-center justify-center gap-2 bg-white text-accent hover:bg-white/90 rounded-full px-10 h-14 text-base font-bold transition-all shadow-xl">
                            <Phone size={18} /> {PHONE}
                        </a>
                        <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white rounded-full px-10 h-14 text-base font-semibold transition-colors">
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                    </div>
                    <p className="text-white/60 text-sm mt-8 flex items-center justify-center gap-2">
                        <Clock size={14} /> Antwort in &lt; 2 Stunden
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">FAQ</p>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-16 leading-tight">
                        Häufige Fragen
                    </h2>
                    <FaqAccordion />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center border-t border-slate-100 bg-white">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                    © {new Date().getFullYear()} Timm Schurig · <a href="/impressum" className="hover:text-accent">Impressum</a> · <a href="/datenschutz" className="hover:text-accent">Datenschutz</a>
                </p>
            </footer>
        </main>
    );
}
