"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Search, MapPin, Star, Clock, Rocket, ShieldCheck, TrendingDown, SmartphoneNfc, Navigation, MousePointerClick, Users, AlertTriangle } from "lucide-react";
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
                                Ich entwickle für Unternehmen in Langenfeld und Umgebung hochperformante Websites, die bei Google gefunden werden und aus Besuchern echte Kunden machen – mit 5 Jahren Erfahrung und Fokus auf die KI-Zukunft.
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

            {/* Local Partner */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">
                        {/* Left: Headline + accent line */}
                        <div>
                            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
                                Lokaler Experte
                            </p>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 leading-tight">
                                Dein Partner für digitales Wachstum direkt vor Ort.
                            </h2>
                            <div className="mt-6 w-16 h-1 rounded-full bg-accent" />
                        </div>

                        {/* Right: Text */}
                        <div className="space-y-5 text-slate-600 leading-relaxed text-base">
                            <p>
                                Warum in die Ferne schweifen? Für erstklassiges Webdesign musst du Langenfeld nicht verlassen. Als lokaler Experte kenne ich den Markt im Rheinland und weiß, worauf es für Unternehmen zwischen Köln und Düsseldorf ankommt.
                            </p>
                            <p>
                                Ich biete dir kein Standard-Design von der Stange, sondern maßgeschneiderte Lösungen, die genau auf deine Zielgruppe zugeschnitten sind. Egal ob du ein Handwerksbetrieb in Immigrath, eine Kanzlei im Zentrum oder ein Start-up im Gewerbepark Fuhrkamp bist – ich sorge dafür, dass deine digitale Präsenz so professionell ist wie deine Arbeit selbst.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why invisible */}
            <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                            <AlertTriangle size={15} className="text-red-400" />
                            <span className="text-red-400 font-bold text-xs uppercase tracking-widest">Das Problem</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-5">
                            Warum viele Unternehmen in Langenfeld{" "}
                            <span className="text-red-500">online unsichtbar</span> bleiben.
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Eine veraltete Website ist teurer als eine neue – sie kostet dich jeden Tag potenzielle Kunden direkt vor deiner Haustür.
                        </p>
                    </div>

                    {/* Cards grid – 2 cols top, then 3 bottom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        {[
                            {
                                icon: TrendingDown,
                                title: "Regionale Konkurrenz zieht an dir vorbei",
                                body: "Während du auf deine handwerkliche oder beratende Qualität setzt, investieren Mitbewerber gezielt in ein modernes Webdesign für ihr Unternehmen in Langenfeld. Wenn Kunden bei Google nach deiner Dienstleistung suchen und dich nicht auf Seite 1 finden, existierst du für sie schlichtweg nicht.",
                            },
                            {
                                icon: SmartphoneNfc,
                                title: "Kein Vertrauen durch \"Digitalen Stillstand\"",
                                body: "Kunden aus der Region suchen Sicherheit. Eine Website, die nicht mobil optimiert ist oder aussieht wie aus dem Jahr 2010, strahlt Unzuverlässigkeit aus. Der erste Eindruck entscheidet innerhalb von Sekunden, ob ein Langenfelder bei dir anruft oder zum nächsten Anbieter klickt.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-red-500/30 transition-[border-color]">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center mb-4">
                                        <Icon size={20} className="text-red-400" />
                                    </div>
                                    <h3 className="font-bold text-white text-base mb-3 leading-snug">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            {
                                icon: Navigation,
                                title: "Die \"Google Maps\"-Falle",
                                body: "Du hast ein tolles Geschäft oder Büro in Langenfeld, aber in der lokalen Suche (Local Pack) tauchen nur andere auf? Ohne gezielte lokale Optimierung wirst du selbst in deiner direkten Nachbarschaft übersehen, während Kunden buchstäblich an deiner Tür vorbeilaufen.",
                            },
                            {
                                icon: MousePointerClick,
                                title: "Anfragen, die im Sande verlaufen",
                                body: "Deine aktuelle Website ist vielleicht online, aber sie arbeitet nicht für dich. Fehlende klare Handlungsaufforderungen (CTAs) und komplizierte Kontaktwege führen dazu, dass Interessenten abbrechen, bevor sie dich überhaupt erreichen.",
                            },
                            {
                                icon: Users,
                                title: "Abhängigkeit von Empfehlungen",
                                body: "Sich nur auf Mundpropaganda in Langenfeld zu verlassen, ist riskant. Ein moderner Webauftritt macht dich unabhängig und sorgt für einen konstanten Strom an Neukunden, auch wenn das persönliche Netzwerk gerade einmal keine Leads liefert.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-red-500/30 transition-[border-color]">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center mb-4">
                                        <Icon size={20} className="text-red-400" />
                                    </div>
                                    <h3 className="font-bold text-white text-base mb-3 leading-snug">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
                        <div>
                            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Die Lösung</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight">
                                Deine Website als Motor für{" "}
                                <span className="text-accent">regionales Wachstum.</span>
                            </h2>
                            <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                                Mit einem maßgeschneiderten Webdesign in Langenfeld verwandelst du digitale Hürden in echte Wettbewerbsvorteile.
                            </p>
                        </div>
                        <div className="space-y-5 text-slate-600 leading-relaxed lg:pt-12">
                            <p>
                                Schluss mit digitalen Kompromissen. Während herkömmliche Websites oft nur wie eine statische Visitenkarte wirken, entwickle ich für dich eine Lösung, die aktiv für dein Business arbeitet. Wir kombinieren modernes Design mit lokaler SEO-Power und zukunftssicherer Technik.
                            </p>
                            <p>
                                Das Ziel ist ein Webdesign für Langenfelder Unternehmen, das nicht nur durch Ästhetik überzeugt, sondern deine Expertise widerspiegelt und Besucher gezielt zur Kontaktaufnahme führt. So wirst du zur ersten Anlaufstelle in deiner Branche – direkt hier in der Region und darüber hinaus.
                            </p>
                        </div>
                    </div>

                    {/* 6-card grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                n: "01",
                                title: "Sichtbarkeit direkt vor Ort",
                                body: "Durch gezielte lokale Optimierung sorge ich dafür, dass dein Webdesign in Langenfeld und Umgebung ganz oben in den Suchergebnissen erscheint. Du wirst genau dann gefunden, wenn Kunden in deiner Nähe nach deiner Dienstleistung suchen.",
                                gradient: "from-accent/20 to-accent/5",
                            },
                            {
                                n: "02",
                                title: "Vertrauen ab der ersten Sekunde",
                                body: "Ein modernes und professionelles Erscheinungsbild sorgt für sofortige Glaubwürdigkeit. Ich gestalte ein Webdesign aus Langenfeld, das deine Qualität unterstreicht und dafür sorgt, dass Interessenten sich bei dir sicher fühlen.",
                                gradient: "from-blue-500/20 to-blue-500/5",
                            },
                            {
                                n: "03",
                                title: "Optimiert für alle Endgeräte",
                                body: "Da über 70 % der regionalen Suchanfragen über das Smartphone kommen, ist ein konsequentes Mobile-First Webdesign für Langenfeld bei mir Standard. Deine Seite lädt blitzschnell und sieht auf jedem Gerät perfekt aus.",
                                gradient: "from-purple-500/20 to-purple-500/5",
                            },
                            {
                                n: "04",
                                title: "Automatisierte Kundengewinnung",
                                body: "Deine Website wird zu deinem besten Mitarbeiter. Durch intelligente Kontaktformulare und klare Call-to-Actions sorgt mein Webdesign in Langenfeld dafür, dass aus anonymen Besuchern planbare Kundenanfragen werden.",
                                gradient: "from-amber-500/20 to-amber-500/5",
                            },
                            {
                                n: "05",
                                title: "Vorsprung durch KI-Ready Technik",
                                body: "Ich bereite dein Webdesign in Langenfeld auf die Zukunft vor. Deine Inhalte werden so strukturiert, dass sie nicht nur von Google, sondern auch von modernen KI-Systemen als Top-Empfehlung in der Region ausgespielt werden.",
                                gradient: "from-cyan-500/20 to-cyan-500/5",
                            },
                            {
                                n: "06",
                                title: "Rundum-Sorglos-Betreuung",
                                body: "Du konzentrierst dich auf dein Kerngeschäft, ich kümmere mich um den Rest. Als dein Partner für Webdesign direkt in Langenfeld übernehme ich die Wartung, Sicherheit und laufende Updates, damit dein System immer auf dem neuesten Stand bleibt.",
                                gradient: "from-rose-500/20 to-rose-500/5",
                            },
                        ].map((item) => (
                            <div
                                key={item.n}
                                className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-7 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300"
                            >
                                {/* Hover gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />

                                <div className="relative z-10">
                                    {/* Number */}
                                    <span className="block font-display font-extrabold text-5xl text-slate-200 group-hover:text-accent/20 leading-none mb-4 transition-colors duration-300 select-none">
                                        {item.n}
                                    </span>
                                    <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
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
                    viewport={{ once: true, amount: 0, margin: "-50px" }}
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
