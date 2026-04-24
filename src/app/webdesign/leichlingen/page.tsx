"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, ChevronRight, Send, Sparkles, ArrowRight, Zap, TrendingUp, Users2, ShieldCheck, Clock, Star } from "lucide-react";
import { PHONE_URL } from "@/lib/utils";
import Image from "next/image";
import { ProblemSection, SolutionSection, AboutSection, StepsSection, PortfolioSection, CTASection, FAQSection } from "@/components/lp/LeichlingenSections";

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
            {/* Glow effect behind form */}
            <div className="absolute -inset-10 bg-accent/20 blur-[100px] rounded-full opacity-30 animate-pulse" />
            
            <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                {!submitted && (
                    <div className="flex gap-2 mb-8">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? "bg-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-white/10"}`} />
                        ))}
                    </div>
                )}
                <AnimatePresence mode="wait">
                    {!submitted && step === 1 && (
                        <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                            <h3 className="text-white font-display font-bold text-2xl mb-6">Was planst du?</h3>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {projectTypes.map((pt) => (
                                    <button key={pt.id} onClick={() => setForm(f => ({ ...f, projectType: pt.id }))}
                                        className={`flex flex-col items-center gap-2 px-4 py-6 rounded-2xl border-2 transition-all duration-300 ${form.projectType === pt.id ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10"}`}>
                                        <span className="text-3xl mb-1">{pt.emoji}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest">{pt.label}</span>
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => form.projectType && setStep(2)} disabled={!form.projectType}
                                className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-2xl py-5 font-black text-lg transition-all hover:scale-[1.02]">
                                Weiter <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    )}
                    {!submitted && step === 2 && (
                        <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                            <h3 className="text-white font-display font-bold text-2xl mb-6">Dein Budgetbereich?</h3>
                            <div className="space-y-3 mb-8">
                                {budgets.map((b) => (
                                    <button key={b.id} onClick={() => setForm(f => ({ ...f, budget: b.id }))}
                                        className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${form.budget === b.id ? "bg-accent border-accent text-white" : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"}`}>
                                        <span className="font-bold">{b.label}</span>
                                        {form.budget === b.id && <Sparkles size={18} className="text-white" />}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setStep(1)} className="flex-1 bg-white/5 hover:bg-white/10 text-white rounded-2xl py-5 font-bold transition-all">Zurück</button>
                                <button onClick={() => form.budget && setStep(3)} disabled={!form.budget}
                                    className="flex-[2] flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 disabled:opacity-30 text-white rounded-2xl py-5 font-black text-lg transition-all hover:scale-[1.02]">
                                    Weiter <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {!submitted && step === 3 && (
                        <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                            <h3 className="text-white font-display font-bold text-2xl mb-6">Fast fertig...</h3>
                            <div className="space-y-4 mb-8">
                                <div className="relative">
                                    <input type="text" placeholder="Dein Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-5 text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-all" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="E-Mail oder Telefon" value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-5 text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-all" />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setStep(2)} className="flex-1 bg-white/5 hover:bg-white/10 text-white rounded-2xl py-5 font-bold transition-all">Zurück</button>
                                <button onClick={handleSubmit} disabled={!form.name.trim() || !form.contact.trim() || loading}
                                    className="flex-[2] flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 disabled:opacity-30 text-white rounded-2xl py-5 font-black text-lg transition-all hover:scale-[1.02]">
                                    {loading ? <span className="animate-pulse">Wird gesendet...</span> : <><Send size={20} /> Projekt anfragen</>}
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {submitted && (
                        <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                            <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                <Sparkles size={36} className="text-accent" />
                            </div>
                            <h3 className="text-white font-display font-black text-3xl mb-4">Anfrage gesendet!</h3>
                            <p className="text-slate-400 leading-relaxed mb-8">Vielen Dank, {form.name.split(" ")[0]}. Ich melde mich innerhalb von 24 Stunden bei dir.</p>
                            <a href={PHONE_URL} className="inline-flex items-center gap-3 bg-white text-slate-900 rounded-2xl px-8 py-4 font-black transition-all hover:bg-slate-100">
                                <Zap size={18} className="text-accent" /> Direkt anrufen
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
        <main className="min-h-screen bg-white overflow-x-hidden selection:bg-accent selection:text-white">

            {/* Premium Navigation Header */}
            <header className="fixed top-0 left-0 w-full z-[100] p-6 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-950/40 backdrop-blur-2xl border border-white/10 rounded-3xl px-8 py-4 pointer-events-auto shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                            <Zap size={22} className="text-white" />
                        </div>
                        <span className="text-white font-display font-black text-xl tracking-tight">TIMM<span className="text-accent">SCHURIG.</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <span className="text-white/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <MapPin size={14} className="text-accent" /> Leichlingen & Region
                        </span>
                        <a href={PHONE_URL} className="bg-white text-slate-950 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-accent hover:text-white transition-all shadow-xl">
                            Kostenloses Gespräch
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-[110vh] flex items-center pt-24 lg:pt-0 bg-slate-950 overflow-hidden">
                {/* Background Graphics */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-accent/20 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 lg:gap-24 items-center">
                        <div className="max-w-2xl">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-bold uppercase tracking-widest mb-10"
                            >
                                <Sparkles size={16} /> Webdesign für Gewinner
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.05] mb-8 tracking-tight"
                            >
                                Deine Website als <span className="text-accent relative inline-block">automatisierte<br/>
                                <span className="relative z-10">Kundenmaschine.</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent/20 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="transparent" /></svg>
                                </span>
                            </motion.h1>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed mb-12 font-medium"
                            >
                                <p>
                                    Ich entwickle für dich maßgeschneiderte High-End-Websites, die auf einem durchdachten Funnel-System basieren. Mein Ziel ist es, deine Marke in Leichlingen und dem Rheinisch-Bergischen Kreis unangefochten an die Spitze zu bringen.
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-8 items-center"
                            >
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden shadow-xl">
                                            <Image src={`/images/mockup_fitness_german_${i}_1776344459402.png`} alt="Client" width={48} height={48} className="object-cover h-full" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-accent text-accent" />)}
                                    </div>
                                    <p className="text-white font-bold text-sm tracking-tight">Regionale Marktführer vertrauen mir</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        >
                            <HeroForm />
                        </motion.div>
                    </div>
                </div>

                {/* Floating graphic element: The "Customer Machine" visualization */}
                <div className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] opacity-20 pointer-events-none hidden xl:block">
                    <Image 
                        src="/automated_customer_machine_visual_1777039488620.png" 
                        alt="Customer Machine Visualization" 
                        width={600} 
                        height={600} 
                        className="animate-pulse-slow"
                    />
                </div>
            </section>

            {/* Core Sections */}
            <ProblemSection />
            <SolutionSection />
            <AboutSection />
            <StepsSection />
            <PortfolioSection />
            <CTASection />
            <FAQSection />

            {/* Unified Footer */}
            <footer className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                                    <Zap size={22} className="text-white" />
                                </div>
                                <span className="text-white font-display font-black text-2xl tracking-tight">TIMM<span className="text-accent">SCHURIG.</span></span>
                            </div>
                            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                                High-Performance Webdesign & lokale SEO-Strategien für ambitionierte Unternehmen in Leichlingen und Umgebung.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-start md:justify-end">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-2">Erreichbar unter</p>
                                <a href={PHONE_URL} className="text-white font-black text-xl hover:text-accent transition-colors">0151 40339008</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <p className="text-slate-600 text-sm font-medium">
                            © {new Date().getFullYear()} Timm Schurig. Alle Rechte vorbehalten.
                        </p>
                        <div className="flex gap-8">
                            <a href="/impressum" className="text-slate-600 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Impressum</a>
                            <a href="/datenschutz" className="text-slate-600 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Datenschutz</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
