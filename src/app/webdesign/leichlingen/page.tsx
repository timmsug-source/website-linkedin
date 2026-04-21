"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Clock, MessageCircle, ChevronRight, Send, Sparkles, ChevronDown } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils";

const faqs = [
    {
        q: "Warum sollte ich mich für einen Webdesigner direkt aus der Region entscheiden?",
        a: "Ein lokaler Partner für Webdesign in Leichlingen bietet dir kurze Wege und ein echtes Verständnis für den Markt im Rheinland. Wir können uns bei Bedarf persönlich austauschen, und ich kenne die lokalen Suchgewohnheiten deiner Kunden zwischen Witzhelden und dem Stadtzentrum genau.",
    },
    {
        q: "Wie lange dauert es, bis meine neue Website in Leichlingen live geht?",
        a: "Die Projektdauer hängt vom Umfang ab, liegt aber in der Regel zwischen 4 und 8 Wochen. Da ich auf einen klaren Prozess aus Strategie, Design und technischer Umsetzung setze, erhältst du zügig ein professionelles Ergebnis für dein Webdesign in Leichlingen, ohne dass die Qualität leidet.",
    },
    {
        q: "Werden meine Kunden mich bei Google finden, wenn ich Webdesign in Leichlingen bei dir buche?",
        a: "Absolut. Jedes Projekt wird von Grund auf für Suchmaschinen optimiert. Ich sorge dafür, dass dein Webdesign in Leichlingen technisch einwandfrei ist und lokal gefunden wird, damit du gegen die Konkurrenz in der Region (wie Leverkusen oder Solingen) die Nase vorn hast.",
    },
    {
        q: "Ist meine Website auch für moderne KI-Suchen wie ChatGPT vorbereitet?",
        a: "Ja. Als einer der wenigen Anbieter integriere ich das Thema GEO (Generative Engine Optimization) direkt in mein Webdesign in Leichlingen. Ich strukturiere deine Daten so, dass KI-Modelle deine Expertise erkennen und dich als Top-Empfehlung in der Region ausspielen können.",
    },
    {
        q: "Was passiert, wenn nach dem Launch technische Probleme auftreten?",
        a: "Du bist bei mir nicht auf dich allein gestellt. Ich biete dir eine langfristige Partnerschaft für dein Webdesign in Leichlingen an. Ich kümmere mich um Wartung, Sicherheits-Updates und die laufende Performance-Optimierung, damit deine Seite immer sicher und schnell bleibt.",
    },
    {
        q: "Ist das Webdesign in Leichlingen auch für kleine Betriebe bezahlbar?",
        a: "Ich biete keine anonymen Massenpakete an, sondern individuelle Lösungen, die sich an deinen Zielen orientieren. Mein Webdesign in Leichlingen ist eine Investition, die sich durch mehr Sichtbarkeit und automatisierte Kundenanfragen schnell bezahlt macht – egal ob für Start-ups oder etablierte Handwerksbetriebe.",
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
    "Live- und Abnahme-Tests inklusive",
    "Integriert in alle gängigen CMS",
    "Optimiert für alle Endgeräte",
    "Mobile-First & PageSpeed 100",
    "DSGVO-konforme Umsetzung",
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
        // Simulate send
        await new Promise((r) => setTimeout(r, 900));
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

                {/* Progress bar */}
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
                    {/* Step 1 – Projekt-Art */}
                    {!submitted && step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                        >
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 1 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5 leading-snug">
                                Was planst du?
                            </h3>
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
                            <button
                                onClick={() => canNextStep1 && setStep(2)}
                                disabled={!canNextStep1}
                                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]"
                            >
                                Weiter <ChevronRight size={16} />
                            </button>
                        </motion.div>
                    )}

                    {/* Step 2 – Budget */}
                    {!submitted && step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                        >
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 2 von 3</p>
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
                                    onClick={() => canNextStep2 && setStep(3)}
                                    disabled={!canNextStep2}
                                    className="flex-[2] flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold text-sm transition-[background-color]"
                                >
                                    Weiter <ChevronRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3 – Kontakt */}
                    {!submitted && step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                        >
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Schritt 3 von 3</p>
                            <h3 className="text-white font-bold text-lg mb-5 leading-snug">
                                Wie kann ich dich erreichen?
                            </h3>
                            <div className="space-y-3 mb-5">
                                <input
                                    type="text"
                                    placeholder="Dein Name"
                                    value={form.name}
                                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-accent transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="E-Mail oder WhatsApp-Nummer"
                                    value={form.contact}
                                    onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
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
                                        <><Send size={15} /> Anfrage senden</>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Success */}
                    {submitted && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35 }}
                            className="text-center py-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-5">
                                <Sparkles size={28} className="text-accent" />
                            </div>
                            <h3 className="text-white font-extrabold text-xl mb-2">Anfrage erhalten!</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Danke, {form.name.split(" ")[0]}! Ich melde mich innerhalb von 24 Stunden bei dir.
                            </p>
                            <a
                                href={PHONE_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-[background-color]"
                            >
                                Direkt Termin buchen <ArrowRight size={15} />
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
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="bg-slate-900 py-3 px-6 text-white fixed top-0 w-full z-50 border-b border-white/10"
                style={{ willChange: "transform" }}
            >
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

            {/* Hero Section */}
            <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10 w-full">
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-slate-300 text-sm font-bold mb-8 border border-white/10">
                                <MapPin size={14} className="text-accent" /> Webdesign Leichlingen
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
                                Professionelles <span className="text-accent">Webdesign</span> für Leichlingen.
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-medium">
                                Ich entwickle für Unternehmen in Leichlingen und Umgebung hochperformante Websites, die bei Google gefunden werden und aus Besuchern echte Kunden machen – mit 5 Jahren Erfahrung und Fokus auf die KI-Zukunft.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-6">
                                {["100% PageSpeed", "Mobile-First", "DSGVO-konform"].map((badge) => (
                                    <div key={badge} className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                                        <CheckCircle2 size={16} className="text-accent" />
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Interactive Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <HeroForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content + Sticky Sidebar */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-[1fr,360px] gap-12 items-start">

                    {/* LEFT: Content */}
                    <div className="space-y-14">

                        {/* Intro */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Webdesign in Leichlingen – lokal verwurzelt, digital führend.
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Warum in die Ferne schweifen? Als Webdesigner mit Fokus auf die Rheinland-Region kenne ich die lokalen Besonderheiten und weiß, worauf es für Unternehmen zwischen Leverkusen, Solingen und Burscheid ankommt. Kein anonymes Agentur-Paket, sondern persönliche Zusammenarbeit auf Augenhöhe.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Ich entwickle Websites, die nicht nur gut aussehen, sondern messbare Ergebnisse liefern: mehr Sichtbarkeit bei Google, mehr Anfragen, mehr Wachstum – direkt aus deiner Region.
                            </p>
                        </section>

                        {/* Methoden */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Meine Methoden
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Ich setze auf einen klaren Prozess: Zuerst verstehe ich dein Business, deine Zielgruppe und deine Ziele. Daraus entwickle ich ein individuelles Konzept – ohne Templates, ohne Kompromisse.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Technisch arbeite ich mit modernsten Frameworks und optimiere jede Seite konsequent für Geschwindigkeit, Mobilgeräte und Suchmaschinen. Das Ergebnis: eine Website, die bei Google gefunden wird und Besucher in Kunden verwandelt.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Discovery & Strategie", desc: "Zielgruppe, Wettbewerb und Positionierung analysieren." },
                                    { title: "Design & Prototyping", desc: "Modernes, markentreues Design ohne Standard-Templates." },
                                    { title: "Technische Umsetzung", desc: "Schnell, sicher und skalierbar – mit modernsten Technologien." },
                                    { title: "SEO & Launch", desc: "Optimiert von Anfang an – für Google und KI-Systeme." },
                                ].map((m) => (
                                    <div key={m.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-accent/30 hover:shadow-md transition-[border-color,box-shadow]">
                                        <p className="font-bold text-slate-900 text-sm mb-1">{m.title}</p>
                                        <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Für wen */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Für wen ist mein Webdesign in Leichlingen geeignet?
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Mein Angebot richtet sich an Selbstständige und kleine bis mittlere Unternehmen, die online professionell auftreten und planbar neue Kunden gewinnen wollen.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Handwerksbetriebe & Dienstleister in Leichlingen und Umgebung",
                                    "Coaches, Berater & Freiberufler",
                                    "Lokale Einzelhändler & Gastronomiebetriebe",
                                    "Kanzleien, Arztpraxen & Therapeuten",
                                    "Start-ups & wachsende Unternehmen im Rheinland",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Komplettpaket */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                Dein Komplettpaket für digitales Wachstum.
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Jedes Projekt für Webdesign in Leichlingen wird individuell nach deinen Anforderungen gebaut – für maximale Performance und Ergebnisse.
                            </p>
                            <div className="space-y-5">
                                {[
                                    { n: "01", title: "Individuelles High-End Design", body: "Vergiss Standard-Templates. Du erhältst ein Design, das exakt auf deine Marke und deine Zielgruppe zugeschnitten ist. Mein Webdesign in Leichlingen sorgt dafür, dass du dich optisch von der Konkurrenz abhebst und einen bleibenden ersten Eindruck hinterlässt." },
                                    { n: "02", title: "Konsequente Mobile-First Optimierung", body: "Da die meisten Nutzer in der Region mobil nach Dienstleistern suchen, wird dein Webdesign in Leichlingen konsequent für Smartphones optimiert. Perfekte Darstellung, intuitive Bedienung und blitzschnelle Ladezeiten auf jedem Endgerät sind garantiert." },
                                    { n: "03", title: "Strategisches SEO-Fundament", body: "Schon während der Entwicklung integriere ich die wichtigsten Faktoren für dein Google-Ranking. Damit dein Webdesign in Leichlingen auch gefunden wird, optimiere ich Meta-Tags, die Seitenstruktur und sorge für eine saubere technische Basis." },
                                    { n: "04", title: "Zukunftssichere KI-Architektur (GEO)", body: "Ich bereite dich auf die neue Ära der Suche vor. Dein Webdesign in Leichlingen wird so strukturiert, dass KI-Systeme wie ChatGPT oder Google Gemini deine Inhalte verstehen und dich als Experten in der Region empfehlen können." },
                                    { n: "05", title: "Conversion-Optimierte Kontaktwege", body: "Besucher sollen zu Kunden werden. Wir integrieren klare Handlungsaufforderungen (CTAs) und nutzerfreundliche Formulare. So macht mein Webdesign in Leichlingen die Kontaktaufnahme für deine Kunden so einfach wie möglich." },
                                    { n: "06", title: "DSGVO-Sicherheit & Performance", body: "Du erhältst eine rechtssichere Website inklusive Cookie-Banner, lokaler Fonts und SSL-Verschlüsselung. Kombiniert mit High-Speed-Hosting sorgt mein Webdesign in Leichlingen für Sicherheit und eine Performance, die keine Wünsche offen lässt." },
                                ].map((item) => (
                                    <div key={item.n} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-accent/30 hover:shadow-md transition-[border-color,box-shadow]">
                                        <div className="flex items-start gap-4">
                                            <span className="text-accent font-display font-extrabold text-lg shrink-0 mt-0.5">{item.n}</span>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</p>
                                                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Ablauf */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-4">
                                In 3 Schritten zur neuen Website
                            </h2>
                            <div className="w-12 h-1 bg-accent rounded-full mb-8" />
                            <div className="space-y-6">
                                {[
                                    { n: "01", t: "Kostenloses Erstgespräch", d: "Wir klären dein Ziel, deine Zielgruppe und den Umfang deines Projekts – unverbindlich und kostenlos." },
                                    { n: "02", t: "Design & Umsetzung", d: "Ich entwickle deine individuelle Website und halte dich während des gesamten Prozesses auf dem Laufenden." },
                                    { n: "03", t: "Live & gefunden", d: "Nach deiner Freigabe geht die Seite online – SEO-optimiert, schnell und bereit, Kunden zu gewinnen." },
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
                                Dein kostenloses Erstgespräch wartet.
                            </h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                                30 Minuten, kein Verkaufsdruck – nur echte Antworten auf deine Fragen.
                            </p>
                            <a
                                href={PHONE_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-xl px-5 py-3.5 font-bold text-sm transition-[background-color] w-full mb-3"
                            >
                                Termin buchen <ArrowRight size={16} />
                            </a>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center justify-center gap-2 border border-white/20 hover:border-accent text-white rounded-xl px-5 py-3 font-semibold text-sm transition-colors w-full"
                            >
                                <MessageCircle size={16} /> WhatsApp schreiben
                            </a>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: "5+", label: "Jahre Erfahrung" },
                                    { value: "< 2W", label: "Bis zur fertigen Seite" },
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
            <section className="py-20 px-6 bg-slate-900 mx-4 mb-10 rounded-[3rem] text-center shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
                    Bereit für deine neue <span className="text-accent">Website?</span>
                </h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
                    Lass uns klären, wie wir deine Online-Präsenz in Leichlingen auf das nächste Level bringen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={PHONE_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-14 text-base font-bold transition-[background-color] shadow-xl shadow-accent/30"
                    >
                        Termin buchen – kostenlos <ArrowRight className="ml-2" size={18} />
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-accent text-white rounded-full px-10 h-14 text-base font-semibold transition-colors"
                    >
                        <MessageCircle size={18} /> WhatsApp
                    </a>
                </div>
                <p className="text-slate-500 text-sm mt-5 flex items-center justify-center gap-2">
                    <Clock size={14} /> Antwort in &lt; 2 Stunden
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
