"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Clock, MessageCircle, ChevronRight, Send, Sparkles, ChevronDown, AlertTriangle, Lightbulb, User, BarChart3 } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils";

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
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={open === i}
                    >
                        <span className="font-bold text-slate-900 text-sm leading-snug">{faq.q}</span>
                        <ChevronDown
                            size={18}
                            className={`shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                            aria-hidden="true"
                        />
                    </button>
                    <AnimatePresence>
                        {open === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                            >
                                <p className="text-slate-500 text-sm leading-relaxed px-6 pb-5">
                                    {faq.a}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

const vorteile = [
    "Individuelle Gestaltung garantiert",
    "Funnel-Strategie inklusive",
    "Mobile-First & PageSpeed 100",
    "Lokales SEO & GEO-Targeting",
    "DSGVO-konforme Umsetzung",
    "Persönlicher Ansprechpartner",
];

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

type FormData = {
    projectType: string;
    budget: string;
    name: string;
    contact: string;
};

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
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
        setSubmitted(true);
    };

    const canNextStep1 = form.projectType !== "";
    const canNextStep2 = form.budget !== "";
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
                                className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= s ? "bg-accent" : "bg-white/20"}`}
                            />
                        ))}
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {!submitted && step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 1 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5 leading-snug">Was planst du?</h3>
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {projectTypes.map((pt) => (
                                    <button
                                        key={pt.id}
                                        onClick={() => setForm((f) => ({ ...f, projectType: pt.id }))}
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
                            <button onClick={() => canNextStep1 && setStep(2)} disabled={!canNextStep1} className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]">
                                Weiter <ChevronRight size={16} />
                            </button>
                        </motion.div>
                    )}

                    {!submitted && step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 2 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5 leading-snug">Welches Budget planst du ein?</h3>
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
                                <button onClick={() => setStep(1)} className="flex-1 border border-white/20 hover:border-white/40 text-white rounded-xl py-3 font-semibold text-sm transition-colors">Zurück</button>
                                <button onClick={() => canNextStep2 && setStep(3)} disabled={!canNextStep2} className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]">
                                    Weiter <ChevronRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {!submitted && step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 3 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5 leading-snug">Wie kann ich dich erreichen?</h3>
                            <div className="space-y-3 mb-5">
                                <input type="text" placeholder="Dein Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-accent transition-colors" />
                                <input type="text" placeholder="E-Mail oder WhatsApp-Nummer" value={form.contact} onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <p className="text-slate-500 text-xs mb-5">Keine Weitergabe an Dritte. Ich melde mich innerhalb von 24 Stunden.</p>
                            <div className="flex gap-2">
                                <button onClick={() => setStep(2)} className="flex-1 border border-white/20 hover:border-white/40 text-white rounded-xl py-3 font-semibold text-sm transition-colors">Zurück</button>
                                <button onClick={handleSubmit} disabled={!canSubmit || loading} className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]">
                                    {loading ? <span className="animate-pulse">Wird gesendet…</span> : <><Send size={15} /> Anfrage senden</>}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {submitted && (
                        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} className="text-center py-6">
                            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-5">
                                <Sparkles size={28} className="text-accent" />
                            </div>
                            <h3 className="text-white font-extrabold text-xl mb-2">Anfrage erhalten!</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Danke, {form.name.split(" ")[0]}! Ich melde mich innerhalb von 24 Stunden bei dir.
                            </p>
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
                        <MapPin size={14} className="text-accent" />
                        Webdesign für Unternehmen in Leichlingen & Umgebung
                    </span>
                    <div className="bg-accent/20 border border-accent/40 text-accent font-bold px-4 py-1.5 rounded-full text-sm">
                        Kostenloses Erstgespräch
                    </div>
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-slate-300 text-sm font-bold mb-8 border border-white/10">
                                <MapPin size={14} className="text-accent" /> Webdesign Leichlingen
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
                                Professionelles <span className="text-accent">Webdesign</span> für Leichlingen.
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-medium">
                                Kein anonymes Agenturpaket – sondern ein Funnel-System, das deine Besucher zu Kunden macht. Lokal verwurzelt, digital führend.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-6">
                                {["Funnel-Strategie", "Lokales SEO", "PageSpeed 100"].map((badge) => (
                                    <div key={badge} className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                                        <CheckCircle2 size={16} className="text-accent" />
                                        {badge}
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

            {/* Main Content + Sticky Sidebar */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-[1fr,360px] gap-12 items-start">

                    {/* LEFT: Content */}
                    <div className="space-y-16">

                        {/* Problem */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                                    <AlertTriangle size={18} className="text-red-500" />
                                </div>
                                <p className="text-red-500 font-bold text-sm uppercase tracking-widest">Das Problem</p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Warum deine Website aktuell vermutlich Geld kostet, statt welches zu verdienen
                            </h2>
                            <div className="w-12 h-1 bg-red-400 rounded-full mb-6" />
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Viele Unternehmen in der Blütenstadt verlassen sich auf veraltete digitale Visitenkarten. Das Problem? Eine Website, die zwar „nett" aussieht, aber keine klare Nutzerführung hat, ist wie ein Ladenlokal in der Leichlinger Innenstadt ohne Eingangstür.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Unsichtbarkeit", desc: "Du wirst bei Suchen nach 'Dienstleistung + Leichlingen' nicht gefunden." },
                                    { title: "Vertrauensverlust", desc: "Veraltetes Design schreckt potenzielle Kunden ab, bevor sie überhaupt lesen." },
                                    { title: "Ladezeiten", desc: "Deine Seite ist langsamer als der Feierabendverkehr auf der L294." },
                                    { title: "Keine Strategie", desc: "Besucher kommen auf die Seite, verlassen sie aber ohne eine Handlung – kein Anruf, keine Anfrage." },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-2xl p-5">
                                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Lösung */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                    <Lightbulb size={18} className="text-accent" />
                                </div>
                                <p className="text-accent font-bold text-sm uppercase tracking-widest">Die Lösung</p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Der Funnel-Ansatz – Webdesign mit System
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Webdesign in Leichlingen bedeutet für mich nicht nur Ästhetik, sondern Konversions-Optimierung. Ich baue keine statischen Seiten, sondern automatisierte Verkaufs-Funnel, die deine Zielgruppe abholen.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Zielgruppenanalyse", desc: "Wir sprechen genau die Sprache deiner Kunden im Rheinisch-Bergischen Kreis." },
                                    { title: "SEO & GEO-Targeting", desc: "Durch lokale Optimierung dominierst du die Suchergebnisse in Leichlingen, Witzhelden, Burscheid und Langenfeld." },
                                    { title: "Mobile First", desc: "Perfekte Darstellung auf allen Endgeräten – Standard im Jahr 2026." },
                                    { title: "Psychologische Nutzerführung", desc: "Wir leiten den Besucher gezielt von der ersten Information bis zum Abschluss." },
                                ].map((item) => (
                                    <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-accent/30 hover:shadow-md transition-[border-color,box-shadow]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CheckCircle2 size={16} className="text-accent shrink-0" />
                                            <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Kurz zu mir */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                                    <User size={18} className="text-slate-600" />
                                </div>
                                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Dein Partner vor Ort</p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Kurz zu mir
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8">
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md">
                                        <Image
                                            src="/images/timm-portrait.jpeg"
                                            alt="Timm Schurig – Webdesign Leichlingen"
                                            fill
                                            className="object-cover"
                                            sizes="96px"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-slate-600 leading-relaxed text-base">
                                            Hallo, ich bin dein Experte für <strong className="text-slate-900">Webdesign in Leichlingen</strong>. Ich verbinde technisches Know-how mit lokalem Marktverständnis. Während andere Agenturen nur anonyme Nummern verwalten, schätze ich den persönlichen Austausch hier in der Region.
                                        </p>
                                        <p className="text-slate-600 leading-relaxed text-base mt-4">
                                            Mein Ziel ist es, den Mittelstand in Leichlingen digital an die Spitze zu bringen – mit <strong className="text-slate-900">messbaren Ergebnissen</strong> statt leerer Floskeln.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Ablauf */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                In 5 Schritten zu deiner neuen Website
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-8" />
                            <div className="space-y-5">
                                {[
                                    { n: "01", t: "Strategie-Call", d: "Wir analysieren dein Business und deine Ziele in Leichlingen – kostenlos und unverbindlich." },
                                    { n: "02", t: "Konzept & Funnel-Plan", d: "Wir legen fest, wie wir Besucher zu Anfragen konvertieren. Keine Templates, sondern Strategie." },
                                    { n: "03", t: "Design & Entwicklung", d: "Ich erstelle ein modernes Design, das deine Marke widerspiegelt und technisch auf höchstem Niveau ist." },
                                    { n: "04", t: "SEO-Turbo", d: "Wir optimieren alle Inhalte für maximale Sichtbarkeit bei Google – lokal und überregional." },
                                    { n: "05", t: "Go-Live & Support", d: "Deine Seite geht online und ich bleibe dein Ansprechpartner für Wartung und Wachstum." },
                                ].map((step) => (
                                    <div key={step.n} className="flex gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-accent text-white font-display font-black text-lg flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                                            {step.n}
                                        </div>
                                        <div className="pt-1">
                                            <p className="font-bold text-slate-900 mb-1">{step.t}</p>
                                            <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Erfolgsgeschichten */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                    <BarChart3 size={18} className="text-accent" />
                                </div>
                                <p className="text-accent font-bold text-sm uppercase tracking-widest">Erfolgsgeschichten</p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Ergebnisse aus der Region
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-8" />
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { result: "+40%", label: "mehr Anfragen", desc: "Handwerksbetrieb aus der Region über das neue Kontaktformular." },
                                    { result: "Top 1", label: "bei Google", desc: "Kanzlei aus Leichlingen für lokale Fachbegriffe in der Suche." },
                                    { result: "5 Std.", label: "gespart / Woche", desc: "Einzelhandel durch automatisierte Terminbuchung auf der Website." },
                                ].map((s) => (
                                    <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:border-accent/30 hover:shadow-md transition-all">
                                        <p className="text-3xl font-display font-black text-accent mb-1">{s.result}</p>
                                        <p className="font-bold text-slate-900 text-sm mb-2">{s.label}</p>
                                        <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* RIGHT: Sticky Sidebar */}
                    <div className="lg:sticky lg:top-28 space-y-5">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-slate-900 text-base mb-5">Deine Vorteile</h3>
                            <div className="space-y-3">
                                {vorteile.map((v) => (
                                    <div key={v} className="flex items-start gap-3">
                                        <CheckCircle2 size={17} className="text-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm leading-snug">{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-6">
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Bereit zu starten?</p>
                            <h3 className="font-extrabold text-white text-lg mb-3 leading-snug">
                                Dein Strategie-Check wartet.
                            </h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                                30 Minuten, kein Verkaufsdruck – nur echte Antworten auf deine Fragen.
                            </p>
                            <a href={PHONE_URL} className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-xl px-5 py-3.5 font-bold text-sm transition-[background-color] w-full mb-3">
                                Ruf mich gerne direkt an <ArrowRight size={16} />
                            </a>
                            <a href={WHATSAPP_URL} className="flex items-center justify-center gap-2 border border-white/20 hover:border-accent text-white rounded-xl px-5 py-3 font-semibold text-sm transition-colors w-full">
                                <MessageCircle size={16} /> WhatsApp schreiben
                            </a>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: "5+", label: "Jahre Erfahrung" },
                                    { value: "4–6W", label: "bis zur fertigen Seite" },
                                    { value: "100", label: "PageSpeed Score" },
                                    { value: "∞", label: "Persönlicher Support" },
                                ].map((s) => (
                                    <div key={s.label} className="text-center">
                                        <p className="text-2xl font-display font-extrabold text-accent">{s.value}</p>
                                        <p className="text-xs text-slate-500 mt-1 leading-tight">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-slate-900 max-w-4xl mx-auto mb-10 rounded-[3rem] text-center shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
                    Lass uns dein Projekt in <span className="text-accent">Leichlingen starten!</span>
                </h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
                    Bist du bereit für eine Website, die wirklich für dich arbeitet? Warte nicht, bis die Konkurrenz an dir vorbeizieht.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={PHONE_URL} className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-14 text-base font-bold transition-[background-color] shadow-xl shadow-accent/30">
                        Ruf mich gerne direkt an <ArrowRight className="ml-2" size={18} />
                    </a>
                    <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-accent text-white rounded-full px-10 h-14 text-base font-semibold transition-colors">
                        <MessageCircle size={18} /> WhatsApp
                    </a>
                </div>
                <p className="text-slate-500 text-sm mt-5 flex items-center justify-center gap-2">
                    <Clock size={14} /> Unverbindlich, kompetent und direkt aus der Nachbarschaft.
                </p>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3">FAQ</p>
                        <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900">
                            Häufige Fragen zum Webdesign in Leichlingen.
                        </h2>
                        <div className="w-12 h-1 bg-accent rounded-full mt-5" />
                    </div>
                    <FaqAccordion />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center border-t border-slate-100">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                    © {new Date().getFullYear()} Timm Schurig · <a href="/impressum" className="hover:text-accent">Impressum</a> · <a href="/datenschutz" className="hover:text-accent">Datenschutz</a>
                </p>
            </footer>
        </main>
    );
}
