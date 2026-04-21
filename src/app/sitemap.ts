import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/leistungen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    "webdesign",
    "automatisierungen",
    "seo-geo",
  ].map((id) => ({
    url: `${SITE_URL}/leistungen/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const cityRoutes: MetadataRoute.Sitemap = [
    "langenfeld",
    "haan",
    "leichlingen",
  ].map((city) => ({
    url: `${SITE_URL}/webdesign/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = [
    "linkedin-fuer-fitness-coaches",
    "landingpage-leads-verliert",
    "whatsapp-coaching-funnel",
    "ki-chatbot-personal-trainer",
    "automatisiertes-onboarding-coach",
    "email-funnel-fitness-coaches",
    "linkedin-organisch-kunden",
    "was-kostet-marketing-fitness-coaches",
  ].map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
