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

      {/* 4. CTA */}
      <ServiceCTA service={service} />

      {/* 5. ALLGEMEINE INFOS */}
      <ServiceInfo service={service} />
    </>
  );
}
