"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Clock,
    ShieldCheck,
    Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Nachhaltige Sichtbarkeit",
        description: "Wer nicht bei Google gefunden wird, verliert täglich Kunden. Mit SEO und GEO investierst du in eine Sichtbarkeit, die dauerhaft Früchte trägt.",
        icon: <TrendingUp className="w-6 h-6" />,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        title: "Zeit ist dein wertvollstes Gut",
        description: "Jede Stunde, die du nicht mit Admin-Aufgaben verbringst, kannst du in deine Kunden investieren. Automatisierung macht das möglich.",
        icon: <Clock className="w-6 h-6" />,
        iconColor: "text-purple-500",
        bgColor: "bg-purple-50",
    },
    {
        title: "Vertrauen auf den ersten Klick",
        description: "Eine professionelle Website entscheidet in Sekunden über 'Anfrage stellen' oder 'Zurück zur Suche'. Premium Design ist kein Luxus, sondern Investition.",
        icon: <ShieldCheck className="w-6 h-6" />,
        iconColor: "text-emerald-500",
        bgColor: "bg-emerald-50",
    },
    {
        title: "Die richtigen Kunden ansprechen",
        description: "Mit gezielter SEO-Strategie und optimierten Inhalten sprichst du genau die Menschen an, die dein Angebot wirklich suchen.",
        icon: <Target className="w-6 h-6" />,
        iconColor: "text-orange-500",
        bgColor: "bg-orange-50",
    },
];

export function TechFoundation() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0, margin: "-50px" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-tight mb-6"
                        >
                            Warum ganzheitliches Digital-<br />
                            <span className="text-accent underline decoration-accent/20 underline-offset-8">Marketing</span> entscheidend ist.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 mb-12 max-w-2xl"
                        >
                            Eine schöne Website alleine reicht nicht. Erst das Zusammenspiel aus Design, SEO und smarten Automatisierungen macht deinen Online-Auftritt zur Wachstumsmaschine.
                        </motion.p>

                        <div className="grid sm:grid-cols-1 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                                        feature.bgColor,
                                        feature.iconColor
                                    )}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Graphic */}
                    <div className="flex-1 relative w-full max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, amount: 0, margin: "-50px" }}
                            className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12 relative z-10"
                        >
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                <span className="ml-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest">Website Performance</span>
                            </div>

                            <div className="flex items-end gap-3 h-48 mb-12 px-4">
                                {[35, 55, 45, 90, 65, 80].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        viewport={{ once: true, amount: 0, margin: "-50px" }}
                                        transition={{ delay: i * 0.1, duration: 1 }}
                                        className={cn(
                                            "flex-1 rounded-t-xl relative group",
                                            i === 3 ? "bg-accent/20" : "bg-slate-100"
                                        )}
                                    >
                                        {i === 3 && (
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-accent border border-accent/10">
                                                <TrendingUp size={20} />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0, margin: "-50px" }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                                >
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">PageSpeed</p>
                                    <p className="text-3xl font-extrabold text-slate-900">100</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0, margin: "-50px" }}
                                    transition={{ delay: 0.7 }}
                                    className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100"
                                >
                                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-2">Google Rank</p>
                                    <p className="text-3xl font-extrabold text-emerald-700">Top 3</p>
                                </motion.div>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-5 overflow-hidden relative">
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                        <TrendingUp size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</p>
                                        <p className="text-white font-bold">Sichtbarkeit optimiert</p>
                                    </div>
                                </div>
                                <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true, amount: 0, margin: "-50px" }}
                                        transition={{ duration: 2, delay: 0.8 }}
                                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Background decorative elements */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
