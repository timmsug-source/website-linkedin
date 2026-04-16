"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Layout,
  Cpu,
  MessageSquare,
  Mail,
  UserPlus,
  ArrowRight,
} from "lucide-react";

const technicalServices = [
  {
    id: "landingpage-erstellung",
    title: "Landingpage Erstellung",
    description:
      "Hochkonvertierende Seiten, die deine LinkedIn-Besucher in qualifizierte Leads verwandeln – mit 100% PageSpeed und SEO-Grundoptimierung.",
    icon: Layout,
    color: "bg-blue-50 text-blue-600",
    keyword: "Landingpage Fitness Coach erstellen lassen",
  },
  {
    id: "automatisierungen",
    title: "Automatisierungen",
    description:
      "Verbinde deine Tools (Zapier, Make) zu einem nahtlosen System, das im Hintergrund für dich arbeitet – spare mindestens 10h pro Woche.",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600",
    keyword: "Automatisierung Fitness Coach",
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp & E-Mail Marketing",
    description:
      "Direkte Kommunikation mit deinen Kunden für maximale Bindung – automatisierte Sequenzen, die Leads in Buchungen verwandeln.",
    icon: Mail,
    color: "bg-green-50 text-green-600",
    keyword: "WhatsApp Marketing Fitness Coach",
  },
];

const optimizationServices = [
  {
    id: "ki-chatbot",
    title: "KI-Chatbots",
    description:
      "Intelligente Assistenten, die Fragen beantworten, Termine buchen und Leads qualifizieren – während du schläfst oder coachst.",
    icon: MessageSquare,
    color: "bg-orange-50 text-orange-600",
    keyword: "KI Chatbot Fitness Coach",
  },
  {
    id: "automatisiertes-onboarding",
    title: "Automatisiertes Onboarding",
    description:
      "Ein nahtloses Erlebnis für deine neuen Kunden ab der ersten Sekunde – Verträge, Zugang, Begrüßung. Vollautomatisch.",
    icon: UserPlus,
    color: "bg-accent/10 text-accent",
    keyword: "Onboarding automatisieren Coach",
  },
];

interface ServiceCardProps {
  service: (typeof technicalServices)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/leistungen/${service.id}`}
        className="group block h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-[1.5rem] p-8"
        aria-label={`Mehr über ${service.title} erfahren`}
      >
        <div
          className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
          aria-hidden="true"
        >
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>
        <div className="flex items-center text-accent font-bold text-sm gap-1 group-hover:gap-2 transition-all">
          Mehr erfahren <ArrowRight size={16} />
        </div>
      </Link>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="leistungen"
      className="py-24 px-6 bg-slate-50/50"
      aria-label="Leistungen für Fitness- und Ernährungscoaches"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="text-center mb-20"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Meine Leistungen
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Dienstleistungen für dein{" "}
            <span className="text-accent">Wachstum</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Von der technischen Basis bis zur KI-gestützten Kundenbetreuung –
            Full-Service aus einer Hand für Fitness- und Ernährungscoaches.
          </p>
        </motion.div>

        {/* Technische Dienstleistungen */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-grow bg-slate-200" aria-hidden="true" />
            <h3 className="text-xl font-bold text-slate-900 whitespace-nowrap px-2">
              Technische Dienstleistungen
            </h3>
            <div className="h-px flex-grow bg-slate-200" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Optimierung der Kundenbetreuung */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-grow bg-slate-200" aria-hidden="true" />
            <h3 className="text-xl font-bold text-slate-900 whitespace-nowrap px-2">
              Optimierung der Kundenbetreuung
            </h3>
            <div className="h-px flex-grow bg-slate-200" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {optimizationServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
