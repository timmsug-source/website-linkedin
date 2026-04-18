import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion"; // server component – nur für static markup nötig
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Zap,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";
import { serviceData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProblem } from "@/components/service/ServiceProblem";
import { ServiceSolution } from "@/components/service/ServiceSolution";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceInfo } from "@/components/service/ServiceInfo";
import { ServiceFlow } from "@/components/leistungen/ServiceFlow";
import { WebdesignReasons } from "@/components/service/WebdesignReasons";
import { WebdesignAbout } from "@/components/service/WebdesignAbout";
import { AutomatisierungenProcess } from "@/components/service/AutomatisierungenProcess";
import { SeoGeoReasons } from "@/components/service/SeoGeoReasons";
import { WebdesignCities } from "@/components/service/WebdesignCities";
import { SeoGeoProcess } from "@/components/service/SeoGeoProcess";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return Object.keys(serviceData).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = serviceData[id];
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.keyword, ...(service.additionalKeywords ?? [])],
    alternates: { canonical: `${SITE_URL}/leistungen/${id}` },
    openGraph: {
      url: `${SITE_URL}/leistungen/${id}`,
      title: service.metaTitle,
      description: service.metaDescription,
    },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = serviceData[id];
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.metaDescription,
        url: `${SITE_URL}/leistungen/${id}`,
        provider: { "@type": "Person", name: "Timm Schurig", url: SITE_URL },
        areaServed: "DE, AT, CH",
        audience: {
          "@type": "Audience",
          audienceType: "Fitness- und Ernährungscoaches",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Leistungen",
            item: `${SITE_URL}/leistungen`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${SITE_URL}/leistungen/${id}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-0 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-accent transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-900 font-medium" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 1. HERO */}
      <ServiceHero service={service} />

      {/* 2. PROBLEM */}
      <ServiceProblem service={service} />

      {/* 3. LÖSUNG */}
      <ServiceSolution service={service} />

      {/* 4. ABLAUF (nur Webdesign) */}
      {id === "webdesign" && <ServiceFlow />}

      {/* 4b. PROZESS (nur Automatisierungen) */}
      {id === "automatisierungen" && <AutomatisierungenProcess />}

      {/* 4c. PROZESS (nur SEO-GEO) */}
      {id === "seo-geo" && <SeoGeoProcess />}

      {/* 4d. RISIKEN (nur SEO-GEO) */}
      {id === "seo-geo" && <SeoGeoReasons />}

      {/* 5. RISIKEN (nur Webdesign) */}
      {id === "webdesign" && <WebdesignReasons />}

      {/* 6. CTA + ÜBER MICH (nur Webdesign) */}
      {id === "webdesign" ? (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 rounded-2xl px-8 py-6">
              <p className="text-white font-bold text-lg text-center sm:text-left">
                Bereit für deine neue Website?{" "}
                <span className="text-accent">Lass uns sprechen.</span>
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-7 py-3 font-bold text-sm whitespace-nowrap transition-[background-color] shadow-lg shadow-accent/20 shrink-0"
              >
                Kostenloses Erstgespräch
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      ) : (
        <ServiceCTA service={service} />
      )}

      {/* 7. ÜBER MICH */}
      {(id === "webdesign" || id === "automatisierungen" || id === "seo-geo") && <WebdesignAbout />}

      {/* 8. STÄDTE (nur Webdesign) */}
      {id === "webdesign" && <WebdesignCities />}

      {/* 9. ALLGEMEINE INFOS */}
      <ServiceInfo service={service} hideFeatures={id === "webdesign" || id === "automatisierungen" || id === "seo-geo"} hideRelated={id === "webdesign"} />
    </>
  );
}
