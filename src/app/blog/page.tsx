import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE_URL } from "@/lib/utils";
import { getAllPosts } from "@/lib/blog";

// ISR: Seite alle 60 Sekunden neu generieren → neue Posts erscheinen ohne Redeploy
export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Blog – Tipps zu LinkedIn, Automatisierung & KI für Fitness-Coaches",
  description:
    "Strategien, Tipps und Ratgeber für Fitness- und Ernährungscoaches: LinkedIn-Kundengewinnung, Automatisierung, KI-Chatbots, WhatsApp Marketing und mehr.",
  keywords: [
    "Wie gewinne ich Kunden als Fitness Coach",
    "LinkedIn Tipps für Fitness Coaches",
    "WhatsApp im Coaching nutzen",
    "Chatbot für Fitnesstrainer",
    "E-Mail Funnel für Coaches",
    "automatisiertes Onboarding",
    "LinkedIn organisch Kunden gewinnen",
    "Ernährungscoach Marketing Strategie",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { url: `${SITE_URL}/blog` },
});

const categories = [
  "Alle Themen",
  "SEO",
  "Webdesign",
  "News",
];

const internalGuides = [
  {
    title: "Der ultimative Automatisierungs-Guide für Coaches",
    href: "/leistungen/automatisierungen",
  },
  {
    title: "KI-Chatbot Setup: Alles was du wissen musst",
    href: "/leistungen/ki-chatbot",
  },
  {
    title: "LinkedIn Lead-Gen: Von der Anfrage zum Abschluss",
    href: "/fuer-fitness-coaches",
  },
];

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Timm Schurig Blog – Fitness Coach Marketing",
    url: `${SITE_URL}/blog`,
    description:
      "Strategien und Tipps für Fitness- und Ernährungscoaches zu LinkedIn-Kundengewinnung, Automatisierung und KI",
    author: {
      "@type": "Person",
      name: "Timm Schurig",
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-slate-500">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-900 font-medium" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>
            <h1 className="text-5xl font-display font-extrabold text-slate-900 mb-4">
              Insights & <span className="text-accent">Ratgeber</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Praxisnahe Tipps und Strategien zu LinkedIn, Automatisierung und
              KI für Fitness- und Ernährungscoaches im DACH-Raum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3" aria-label="Blog-Navigation">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                    Kategorien
                  </h2>
                  <nav>
                    <ul className="flex flex-col gap-2">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <button className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-accent transition-all text-left">
                            <Tag size={14} className="mr-2 shrink-0" aria-hidden="true" />
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Kostenloses Erstgespräch
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Lass uns in 30 Minuten deine individuelle Strategie besprechen.
                  </p>
                  <a
                    href={PHONE_URL}
                    className="block w-full bg-accent hover:bg-accent/90 text-white text-center rounded-xl px-4 py-3 text-sm font-bold transition-all"
                  >
                    Termin buchen
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              {posts.length === 0 ? (
                <p className="text-slate-500 text-lg">Noch keine Beiträge vorhanden.</p>
              ) : (
                <>
                  {/* Featured Posts */}
                  {featuredPosts.length > 0 && (
                    <section aria-label="Empfohlene Artikel">
                      <h2 className="sr-only">Empfohlene Artikel</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {featuredPosts.map((post) => (
                          <article
                            key={post.slug}
                            className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all"
                          >
                            <div className="p-8">
                              <div className="flex items-center gap-2 mb-4">
                                <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">
                                  {post.category}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">
                                  {post.read_time} Lesezeit
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors leading-tight">
                                {post.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                  <Calendar size={12} aria-hidden="true" />
                                  {post.date}
                                </div>
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="inline-flex items-center gap-1 text-accent font-bold text-sm hover:gap-2 transition-all"
                                  aria-label={`${post.title} weiterlesen`}
                                >
                                  Lesen <ArrowRight size={14} />
                                </Link>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Regular Posts */}
                  {regularPosts.length > 0 && (
                    <section aria-label="Alle Artikel">
                      <h2 className="text-xl font-bold text-slate-900 mb-6">
                        Alle Artikel
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {regularPosts.map((post) => (
                          <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl hover:border-accent/20 transition-all overflow-hidden h-full"
                          >
                            <article className="flex flex-col h-full">
                              <div className="relative w-full h-48 bg-slate-100 overflow-hidden shrink-0">
                                {post.header_image ? (
                                  <Image
                                    src={post.header_image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                    <span className="text-4xl font-black text-slate-300">TS</span>
                                  </div>
                                )}
                              </div>
                              <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                                    {post.category}
                                  </span>
                                  <span className="text-xs text-slate-400 font-medium">
                                    {post.read_time} Lesezeit
                                  </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors leading-snug line-clamp-3">
                                  {post.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                                  {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                    <Calendar size={14} aria-hidden="true" />
                                    {post.date}
                                  </div>
                                  <div className="inline-flex items-center gap-1 text-accent font-bold text-sm group-hover:gap-2 transition-all">
                                    Lesen <ArrowRight size={14} />
                                  </div>
                                </div>
                              </div>
                            </article>
                          </Link>
                        ))}
                      </div>
                    </section>
                  )}
                </>
              )}

              {/* Internal Guides */}
              <section className="mt-16 pt-16 border-t border-slate-100" aria-label="Weitere Ratgeber">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  Weiterführende Ratgeber
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {internalGuides.map((guide, index) => (
                    <Link
                      key={index}
                      href={guide.href}
                      className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-accent/20 transition-all"
                    >
                      <h3 className="font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors text-sm leading-snug">
                        {guide.title}
                      </h3>
                      <div className="flex items-center text-xs font-bold text-accent uppercase tracking-widest gap-1">
                        Jetzt lesen <ArrowRight size={12} />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
