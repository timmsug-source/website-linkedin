"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceInfo({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Features Grid */}
      <section
        className="py-24 px-6 bg-slate-50"
        aria-label={`${service.title} – Was du bekommst`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Leistungsumfang
            </p>
            <h2 className="text-4xl font-display font-extrabold text-slate-900">
              Was du bekommst
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Kein Standard-Paket – alles wird individuell auf dein
              Coaching-Business zugeschnitten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-24 px-6 bg-white"
        aria-label={`Häufige Fragen zu ${service.title}`}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-display font-extrabold text-slate-900">
              Häufige Fragen zu{" "}
              <span className="text-accent">{service.title}</span>
            </h2>
          </motion.div>

          <div className="space-y-4" role="list">
            {service.faq.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-6 text-left"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-${i}`}
                >
                  <span className="font-bold text-slate-900 pr-4">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-accent transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 px-6 pb-6 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section
          className="py-20 px-6 bg-white border-t border-slate-100"
          aria-label="Weitere Leistungen"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-12 text-center">
              Ergänzende Leistungen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.relatedServices.map((rel, i) => (
                <Link
                  key={i}
                  href={`/leistungen/${rel.id}`}
                  className="group bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <Image
                      src={`/images/services/${rel.id}.png`}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
                      {rel.teaser}
                    </p>
                    <div className="flex items-center text-accent text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                      Mehr erfahren <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
