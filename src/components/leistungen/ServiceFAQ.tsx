"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Ich bin absoluter Anfänger und habe noch keine Leads oder Reichweite.",
        answer: "In diesem Fall ist eine **Landingpage** der wichtigste erste Schritt. Du brauchst eine professionelle Anlaufstelle, auf die du Profilbesucher leiten kannst. In Kombination mit einem einfachen **E-Mail-Follow-Up** baust du dir sofort eine erste Basis auf, mit der du Anfragen generierst."
    },
    {
        question: "Mein LinkedIn-Content läuft gut, aber kaum jemand bucht ein Erstgespräch.",
        answer: "Wenn die Sichtbarkeit da ist, aber die Conversion fehlt, verlierst du Interessenten auf dem Weg. Hier hilft **WhatsApp-Marketing** oder ein **KI-Chatbot**. Mit diesen Tools holst du die Leute direkt in der Konversation ab, beantwortest Einwände automatisiert und senkst die Hürde für eine Buchung massiv."
    },
    {
        question: "Ich ertrinke in DM-Anfragen auf Social Media und verbringe Stunden mit Chats.",
        answer: "Die perfekte Lösung für dich ist ein **KI-Chatbot** gekoppelt mit **Automatisierungen**. Der Chatbot kann 80% der Standardfragen (Preise, Ablauf, Voraussetzung) klären und qualifizierte Leads direkt in deinen Terminkalender leiten. Die Automatisierung trägt die Daten anschließend fehlerfrei in dein CRM ein."
    },
    {
        question: "Ich schließe gut ab, aber das Client-Onboarding frisst all meine Zeit.",
        answer: "Dein Engpass ist im Backend. Das Modul **Automatisiertes Onboarding** ist genau dafür gemacht. Anstatt Verträge manuell zu senden, Rechnungen zu schreiben und Google-Drive ordner anzulegen, passiert das durch eine Automatisierung. Dein neuer Kunde erhält sofort ein hochprofessionelles Erlebnis, während du Stunden sparst."
    },
    {
        question: "Ich möchte das Maximum herausholen und das komplette System.",
        answer: "In einem kostenlosen Strategiegespräch entwerfen wir eine **All-in-One Lösung**, die alle Stationen (Landingpage → Leads → Nurturing via E-Mail & WhatsApp → AI-Chatbot Qualifizierung → Auto-Onboarding) nahtlos miteinander verbindet. Damit hast du eine unschlagbare, conversion-optimierte Maschine."
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
                        Finde dein Setup
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6"
                    >
                        Welche Leistungen passen zu mir?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Jedes Coaching-Business steht an einem anderen Punkt. Finde heraus, welche
                        Systeme deinen aktuellen Engpass am besten lösen.
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
