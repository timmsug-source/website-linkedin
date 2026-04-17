"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Search, MapPin, Star, Clock, Rocket, ShieldCheck } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";

const features = [
    { icon: Globe, title: "Premium Webdesign", desc: "Individuelles Design – kein Template, kein Baukasten. Deine Website, wie du sie wirklich willst." },
    { icon: Search, title: "SEO-optimiert", desc: "Von Anfang an für Google optimiert. Top-Rankings in Langenfeld und Umgebung." },
    { icon: Rocket, title: "Blitzschnell live", desc: "Vom Erstgespräch bis zur fertigen Seite vergehen in der Regel weniger als 2 Wochen." },
    { icon: ShieldCheck, title: "DSGVO-konform", desc: "Datenschutz, Impressum und Cookie-Management – alles rechtssicher von Anfang an." },
];

const steps = [
    { n: "01", t: "Kostenloses Gespräch", d: "Wir klären dein Ziel und deine Zielgruppe." },
    { n: "02", t: "Design & Umsetzung", d: "Wir bauen deine Website – individuell und modern." },
    { n: "03", t: "Live & gefunden", d: "Deine Website geht online – bei Google sichtbar." },
];

export default function WebdesignLangenfeld() {
    return (
        <main className="min-h-screen bg-white pb-20 overflow-x-hidden">
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
                        Webdesign für Unternehmen in Langenfeld & Umgebung
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

                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-slate-300 text-sm font-bold mb-8 border border-white/10">
                                <MapPin size={14} className="text-accent" /> Webdesign Langenfeld
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
                                Professionelles <span className="text-accent">Webdesign</span> für Langenfeld.
                            </h1>

                            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-medium">
                                Individuelle Websites für Unternehmen in Langenfeld, Monheim, Düsseldorf und Umgebung – die bei Google gefunden werden und wirklich Kunden bringen.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full h-16 px-10 text-lg font-bold transition-all shadow-xl shadow-accent/40"
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

                        {/* Right: Card */}
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
                                    <p className="text-slate-400 text-sm mt-3 font-medium">— Handwerksbetrieb, Langenfeld</p>
                                </div>

                                <div className="space-y-4 border-t border-white/10 pt-8">
                                    {[
                                        "Live in max. 2 Wochen",
                                        "Individuelles Design",
                                        "SEO-Grundoptimierung",
                                        "Persönliche Betreuung",
                                    ].map((item, i) => (
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

            {/* Features */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
                            Was deine neue Website beinhaltet
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Kein Baukasten. Kein Template. Eine Website, die wirklich zu dir passt.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: i * 0.05 }}
                                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:border-accent/30 transition-all group"
                            >
                                <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 my-10 overflow-hidden relative shadow-2xl">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">In 3 Schritten zur neuen Website</h2>
                        <p className="text-slate-400">Schnell, transparent und ohne Stress.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-accent text-white font-display font-black text-2xl flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                                    {step.n}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.t}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
                        Bereit für deine neue <span className="text-accent">Website?</span>
                    </h2>
                    <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
                        Lass uns in einem kostenlosen Erstgespräch klären, wie wir deine Online-Präsenz in Langenfeld auf das nächste Level bringen.
                    </p>
                    <div className="flex flex-col gap-4 items-center">
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-12 h-16 text-xl font-bold w-full max-w-md shadow-2xl shadow-accent/30 transition-all hover:scale-[1.02]"
                        >
                            Termin buchen – kostenlos
                            <ArrowRight className="ml-2" size={22} />
                        </a>
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                            <Clock size={16} /> Antwort in &lt; 2 Stunden
                        </div>
                    </div>
                </motion.div>
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
