"use client";

import { motion } from "framer-motion";
import { Layout, MessageCircle, Mail, MessageSquare, UserPlus, ArrowRight, ArrowDown } from "lucide-react";

const flowSteps = [
    {
        id: "landingpage",
        title: "1. Landingpage",
        description: "Generiert hochqualifizierte Leads aus deinem LinkedIn-Content.",
        action: "Lead trägt sich ein",
        icon: Layout,
        color: "bg-blue-500",
    },
    {
        id: "whatsapp",
        title: "2. WhatsApp Marketing",
        description: "Sofortige, persönliche Kontaktaufnahme direkt auf dem Smartphone des Leads.",
        action: "Lead wird qualifiziert",
        icon: MessageCircle,
        color: "bg-green-500",
    },
    {
        id: "email",
        title: "3. E-Mail Nurturing",
        description: "Vertrauensaufbau durch automatisierte Mehrwert-E-Mails über Wochen.",
        action: "Lead baut Vertrauen auf",
        icon: Mail,
        color: "bg-indigo-500",
    },
    {
        id: "chatbot",
        title: "4. KI-Chatbot",
        description: "Beantwortet aufkommende Fragen 24/7 und vereinbart eigenständig Termine.",
        action: "Lead bucht Termin",
        icon: MessageSquare,
        color: "bg-orange-500",
    },
    {
        id: "onboarding",
        title: "5. Onboarding",
        description: "Nach dem Abschluss startet ein nahtloses, begeisterndes Kundenerlebnis.",
        action: "Lead wird zum Fan",
        icon: UserPlus,
        color: "bg-teal-500",
    },
];

export function ServiceFlow() {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden" aria-label="So funktioniert die Kundengewinnung">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4"
                    >
                        Das System
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6"
                    >
                        So greifen die Leistungen ineinander
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Die einzelnen Leistungen sind nicht nur isolierte Tools, sondern ergeben zusammen eine
                        vollautomatisierte Maschine zur Kundengewinnung – von LinkedIn bis zum erfolgreichen Abschluss.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Desktop connecting line */}
                    <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-1 bg-slate-200" aria-hidden="true">
                        <motion.div
                            className="h-full bg-accent"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-4">
                        {flowSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.id} className="flex flex-col lg:items-center relative w-full lg:w-1/5 group">

                                    {/* Mobile connecting line */}
                                    {index !== flowSteps.length - 1 && (
                                        <div className="lg:hidden absolute left-10 top-20 bottom-[-2rem] w-[2px] bg-slate-200" aria-hidden="true">
                                            <motion.div
                                                className="w-full bg-accent"
                                                initial={{ height: "0%" }}
                                                whileInView={{ height: "100%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                                            />
                                        </div>
                                    )}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex lg:flex-col gap-6 lg:gap-4 items-start lg:items-center"
                                    >
                                        {/* Icon Circle */}
                                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${step.color} shadow-${step.color.replace('bg-', '')}/30`}>
                                            <Icon size={32} />
                                        </div>

                                        {/* Content */}
                                        <div className="lg:text-center mt-2 lg:mt-4">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                            <p className="text-sm text-slate-600 mb-4">{step.description}</p>

                                            <div className="inline-flex items-center text-xs font-bold text-accent/80 bg-accent/5 px-3 py-1.5 rounded-full">
                                                {step.action}
                                                <ArrowRight size={12} className="ml-1 hidden lg:block" />
                                                <ArrowDown size={12} className="ml-1 lg:hidden" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
