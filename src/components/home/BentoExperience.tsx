"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Search,
  TrendingUp,
  Settings,
  Puzzle,
  MousePointer2,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

function BentoCard({
  title,
  subtitle,
  description,
  icon,
  className,
  children,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5",
        className
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        {icon && (
          <div className="mb-4 text-accent" aria-hidden="true">
            {icon}
          </div>
        )}
        {subtitle && (
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
            {subtitle}
          </p>
        )}
        <h3 className="mb-3 font-display text-xl font-bold text-slate-900">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        {children}
      </div>
      <div
        className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/5 blur-3xl transition-all group-hover:bg-accent/10"
        aria-hidden="true"
      />
    </motion.div>
  );
}

export function BentoExperience() {
  return (
    <section
      className="bg-slate-50 py-24 px-6"
      aria-label="Die Timm Schurig Experience – Leistungsmerkmale"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Die Timm Schurig Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
            Ergebnisse, die für sich sprechen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[20rem]">
          {/* Card 1: Full Service */}
          <BentoCard
            title="Full Service. Von A bis Z."
            description="Strategie, Design, Automatisierung & Marketing — Ein Ansprechpartner, ein reibungsloser Ablauf für dein Business."
            className="md:col-span-2 md:row-span-1"
          >
            <div className="mt-6 flex flex-wrap gap-2">
              {["Strategie", "Design", "Automatisierung", "WhatsApp"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[10px] font-bold text-slate-500"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <MousePointer2
              className="absolute bottom-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors"
              size={60}
              aria-hidden="true"
            />
          </BentoCard>

          {/* Card 2: Speed */}
          <BentoCard
            title="Blitzschnelle Ladezeiten."
            description="Weil niemand wartet. Optimiert auf maximale Core Web Vitals Performance."
            className="md:col-span-1 md:row-span-1"
          >
            <div className="mt-auto pt-4">
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3">
                <span className="text-[10px] font-bold text-slate-400">
                  PageSpeed Score
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-accent">
                  100% <Zap size={10} fill="currentColor" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-accent"
                  aria-label="PageSpeed 100%"
                />
              </div>
            </div>
          </BentoCard>

          {/* Card 3: DSGVO */}
          <BentoCard
            title="DSGVO-konform."
            description="Datenschutz nach höchsten deutschen Standards – rechtssicher für den DACH-Raum."
            icon={<ShieldCheck size={28} />}
            className="md:col-span-1 md:row-span-1"
          />

          {/* Card 4: SEO */}
          <BentoCard
            title="OnPage SEO ready."
            description="Von Tag eins an sichtbar in Google – mit technischer SEO-Exzellenz und strukturierten Daten."
            icon={<Search size={28} />}
            className="md:col-span-1 md:row-span-1"
          />

          {/* Card 5: Unique Concept */}
          <BentoCard
            title="Ein Konzept so einzigartig wie deine Marke."
            description="Keine 08/15 Templates. Jedes Projekt wird individuell für dein Coaching-Business entwickelt."
            className="md:col-span-2 md:row-span-2"
          >
            <div className="relative mt-8 flex flex-1 items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/50 h-32">
              <span
                className="font-display text-[80px] font-bold text-slate-200/50 select-none"
                aria-hidden="true"
              >
                Aa
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-32 w-32 rounded-full border-2 border-accent/20"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute bottom-4 left-6 flex gap-3" aria-hidden="true">
                <div className="h-3 w-3 rounded-full bg-accent" />
                <div className="h-3 w-3 rounded-full bg-slate-200" />
                <div className="h-3 w-3 rounded-full bg-slate-200" />
              </div>
            </div>
          </BentoCard>

          {/* Card 6: Growth */}
          <BentoCard
            title="Gebaut zum Wachsen."
            description="Skalierbare Systeme, die mit deinem Business wachsen – von 5 auf 50 Kunden ohne Mehraufwand."
            icon={<TrendingUp size={28} />}
            className="md:col-span-1 md:row-span-1"
          />

          {/* Card 7: Easy Edit */}
          <BentoCard
            title="Einfach zu verwalten."
            description="Volle Kontrolle über deine Inhalte – ohne Technik-Kenntnisse. Ich liefere schlüsselfertig."
            icon={<Settings size={28} />}
            className="md:col-span-1 md:row-span-1"
          />

          {/* Card 8: Integrated */}
          <BentoCard
            title="Perfekt integriert."
            description="Zapier, Make, CRM, WhatsApp, E-Mail – alles verbunden zu einem reibungslosen System."
            className="md:col-span-2 md:row-span-1"
          >
            <div className="mt-auto flex items-center justify-around p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex flex-col items-center gap-2">
                <Puzzle size={24} className="text-slate-400" aria-hidden="true" />
                <span className="text-[10px] font-bold text-slate-400">Tools</span>
              </div>
              <div className="h-8 w-px bg-slate-200" aria-hidden="true" />
              <div className="flex flex-col items-center gap-2">
                <Zap size={24} className="text-accent" aria-hidden="true" />
                <span className="text-[10px] font-bold text-accent">Automate</span>
              </div>
              <div className="h-8 w-px bg-slate-200" aria-hidden="true" />
              <div className="flex flex-col items-center gap-2">
                <BarChart3 size={24} className="text-slate-400" aria-hidden="true" />
                <span className="text-[10px] font-bold text-slate-400">CRM</span>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
