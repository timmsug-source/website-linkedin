"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Cpu, Search, ArrowRight } from "lucide-react";

const services = [
  {
    id: "webdesign",
    title: "Webdesign",
    description:
      "Individuelle Websites und Landingpages, die Besucher in Kunden verwandeln. 100 % PageSpeed, Mobile-First und maximal conversion-optimiert.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
    keyword: "Website erstellen lassen",
  },
  {
    id: "automatisierungen",
    title: "Automatisierungen",
    description:
      "Verbinde deine Tools zu einem nahtlosen System mit Zapier, Make & Co. Spare 10+ Stunden pro Woche durch intelligente Workflow-Automatisierung.",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600",
    keyword: "Business Automatisierung",
  },
  {
    id: "seo-geo",
    title: "SEO & GEO",
    description:
      "Werde bei Google gefunden und von KI-Suchen empfohlen. Lokale SEO, technische Optimierung und Generative Engine Optimization für die Zukunft.",
    icon: Search,
    color: "bg-green-50 text-green-600",
    keyword: "SEO Agentur lokal",
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ willChange: "opacity" }}
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
      aria-label="Leistungen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="text-center mb-20"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Meine Leistungen
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Alles aus einer Hand für{" "}
            <span className="text-accent">dein Wachstum</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Webdesign, Automatisierungen und SEO – aufeinander abgestimmt für maximale Wirkung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
