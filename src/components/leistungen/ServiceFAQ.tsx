"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: 'Was bedeutet \u201eSEO f\u00fcr KI-Suchen\u201c und warum brauche ich das?',
        answer: "Klassisches SEO optimiert für Google-Ergebnislisten. Ich gehe einen Schritt weiter: Ich sorge dafür, dass deine Inhalte von KI-Systemen wie **ChatGPT**, **Perplexity** und **Google Gemini** verstanden und als Quelle empfohlen werden. So wirst du auch dort gefunden, wo Nutzer heute direkte Antworten suchen, statt nur Links zu klicken."
    },
    {
        question: "Wie viel Zeit spare ich durch eure Automatisierungen wirklich?",
        answer: "Im Durchschnitt sparen meine Kunden durch die Verknüpfung von Tools (via **Zapier** oder **Make**) mindestens **10 Stunden pro Woche**. Wir automatisieren mühsame manuelle Aufgaben wie die Datenübertragung ins CRM, das Versenden von Follow-up-E-Mails oder die Terminbuchung, damit du dich auf dein Kerngeschäft konzentrieren kannst."
    },
    {
        question: "Garantierst du einen 100% PageSpeed Score?",
        answer: "Ja, bei meinen Webdesign-Projekten ist maximale Performance der Standard. Durch sauberen Code und modernste Optimierungstechniken erreiche ich Top-Werte bei den **Google Core Web Vitals**. Eine schnelle Seite ist nicht nur besser für die Nutzererfahrung, sondern auch ein entscheidender Ranking-Faktor für Google."
    },
    {
        question: "Sind die von euch erstellten Websites DSGVO-konform?",
        answer: "Absolut. Von der Cookie-Einwilligung über die Einbindung von **Google Fonts** (lokal statt über US-Server) bis hin zur sicheren CRM-Anbindung: Alle technischen Aspekte werden nach aktuellen Datenschutzstandards umgesetzt, damit du rechtlich auf der sicheren Seite bist."
    },
    {
        question: "Wer kümmert sich nach dem Launch um die Wartung und Aktualität?",
        answer: "Nach dem Livegang fängt die Arbeit oft erst richtig an. Damit du dich voll auf dein Kerngeschäft konzentrieren kannst, übernehme ich die technische Betreuung. Ich sorge für regelmäßige **Sicherheits-Updates**, überwache die Performance und passe deine Seite laufend an neue SEO- und KI-Standards an. So bleibt deine Website dauerhaft dein stärkster Mitarbeiter, ohne dass du dich selbst um technische Details kümmern musst."
    }
];

export function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 bg-slate-50" aria-label="Welche Leistung passt zu mir?">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0, margin: "-50px" }}
                        className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4"
                    >
                        FAQ
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6"
                    >
                        Deine Fragen,{" "}
                        <span className="text-accent">klare Antworten.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Alles Wichtige rund um Webdesign, Automatisierungen und SEO – direkt und ohne Umwege beantwortet.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "border rounded-3xl overflow-hidden transition-all duration-300",
                                    isOpen
                                        ? "bg-white border-accent/30 shadow-md"
                                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-6"
                                    aria-expanded={isOpen}
                                >
                                    <span className={cn(
                                        "font-bold text-lg leading-tight transition-colors",
                                        isOpen ? "text-slate-900" : "text-slate-700"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border",
                                        isOpen
                                            ? "bg-accent/10 border-accent/20 text-accent rotate-180"
                                            : "bg-slate-100 border-slate-200 text-slate-400"
                                    )}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-8 text-slate-600 leading-relaxed relative">
                                                {/* Render simple markdown bold */}
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
