"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Clock, MessageCircle, Phone } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";

const vorteile = [
    "Individuelle Gestaltung garantiert",
    "Live- und Abnahme-Tests inklusive",
    "Integriert in alle gängigen CMS",
    "Optimiert für alle Endgeräte",
    "Mobile-First & PageSpeed 100",
    "DSGVO-konforme Umsetzung",
];

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
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full h-16 px-10 text-lg font-bold transition-[background-color] shadow-xl shadow-accent/40"
                                >
                                    Kostenlos besprechen <ArrowRight size={22} />
                                </a>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center justify-center gap-2 h-16 px-8 rounded-full border border-white/20 text-white text-sm font-bold hover:border-accent transition-colors"
                                >
                                    WhatsApp schreiben
                                </a>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-6">
                                {["100% PageSpeed", "Mobile-First", "DSGVO-konform"].map((badge) => (
                                    <div key={badge} className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                                        <CheckCircle2 size={16} className="text-accent" />
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-[3rem] opacity-30" />
                            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-12 shadow-2xl">
                                <div className="mb-8">
                                    <div className="flex mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="text-amber-400" />)}
                                    </div>
                                    <p className="text-white text-lg font-semibold italic leading-relaxed">
                                        "Timm hat unsere Website komplett neu aufgestellt. Seit dem Launch kommen monatlich 3–5 neue Anfragen über Google."
                                    </p>
                                    <p className="text-slate-400 text-sm mt-3 font-medium">— Handwerksbetrieb, Leichlingen</p>
                                </div>
                                <div className="space-y-4 border-t border-white/10 pt-8">
                                    {["Live in max. 2 Wochen", "Individuelles Design", "SEO-Grundoptimierung", "Persönliche Betreuung"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/20">
                                                <CheckCircle2 size={14} className="text-accent" />
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
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

                        {/* Vorteile Card */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-slate-900 text-base mb-5">
                                Deine Vorteile
                            </h3>
                            <div className="space-y-3">
                                {vorteile.map((v) => (
                                    <div key={v} className="flex items-start gap-3">
                                        <CheckCircle2 size={17} className="text-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm leading-snug">{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-slate-900 rounded-2xl p-6">
                            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Bereit zu starten?</p>
                            <h3 className="font-extrabold text-white text-lg mb-3 leading-snug">
                                Dein kostenloses Erstgespräch wartet.
                            </h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                                30 Minuten, kein Verkaufsdruck – nur echte Antworten auf deine Fragen.
                            </p>
                            <a
                                href={CALENDLY_URL}
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

                        {/* Stats Card */}
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
                        href={CALENDLY_URL}
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

            {/* Footer */}
            <footer className="py-10 text-center border-t border-slate-100">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                    © {new Date().getFullYear()} Timm Schurig · <a href="/impressum" className="hover:text-accent">Impressum</a> · <a href="/datenschutz" className="hover:text-accent">Datenschutz</a>
                </p>
            </footer>
        </main>
    );
}
