import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  Clock,
  ChevronRight,
  BookOpen,
  Phone,
} from "lucide-react";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE_URL, PHONE } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";

export const revalidate = 60;

// ─── Heading helpers ─────────────────────────────────────────────────────────

function toId(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractHeadings(html: string): { id: string; text: string; level: number }[] {
  const matches = [...html.matchAll(/<h([23])[^>]*>(.*?)<\/h\1>/gi)];
  return matches.map(([, level, inner]) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    return { id: toId(text), text, level: parseInt(level) };
  });
}

function addHeadingIds(html: string): string {
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (_, level, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    return `<h${level}${attrs} id="${toId(text)}">${inner}</h${level}>`;
  });
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Artikel nicht gefunden" });

  return buildMetadata({
    title: `${post.title} | Timm Schurig`,
    description: post.excerpt,
    keywords: [post.keyword, "Webdesign", "SEO", "Timm Schurig"],
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.created_at,
      authors: ["Timm Schurig"],
    },
  });
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPostBySlug(slug), getAllPosts()]);
  if (!post) notFound();

  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Headings aus beiden Content-Blöcken extrahieren + IDs einbauen
  const allHtml = (post.content_top ?? "") + (post.content_bottom ?? "");
  const headings = extractHeadings(allHtml);
  const contentTopWithIds = addHeadingIds(post.content_top ?? "");
  const contentBottomWithIds = addHeadingIds(post.content_bottom ?? "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author, url: SITE_URL },
    publisher: { "@type": "Organization", name: "Timm Schurig" },
    datePublished: post.created_at,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumbs */}
          <nav className="mb-10" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><ChevronRight size={14} className="text-slate-300" /></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><ChevronRight size={14} className="text-slate-300" /></li>
              <li className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Header (full width) */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.08] mb-8 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex shrink-0 items-center justify-center text-slate-600 font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <User size={14} className="text-accent" /> {post.author}
                  </p>
                  <p className="text-xs text-slate-500">Webdesign & Digital-Stratege</p>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-slate-400" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-slate-400" /> {post.read_time}
                </span>
              </div>
            </div>

            {post.header_image && (
              <div className="mt-10 relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
                <Image
                  src={post.header_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
              </div>
            )}
          </header>

          {/* ── TOC Mobile (nur auf kleinen Screens) ── */}
          {headings.length > 0 && (
            <div className="lg:hidden bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
              <div className="flex items-center gap-2 mb-5">
                <BookOpen size={16} className="text-accent shrink-0" />
                <span className="font-bold text-slate-900 text-sm uppercase tracking-widest">
                  Inhaltsverzeichnis
                </span>
              </div>
              <nav aria-label="Inhaltsverzeichnis Mobile">
                <ol className="space-y-2">
                  {headings.map((h, i) => (
                    <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                      <a
                        href={`#${h.id}`}
                        className={`flex items-start gap-2 text-sm leading-snug transition-colors hover:text-accent group ${
                          h.level === 2 ? "text-slate-700 font-semibold" : "text-slate-500 font-medium"
                        }`}
                      >
                        <span className="text-accent/60 font-bold shrink-0 text-xs mt-0.5 group-hover:text-accent transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          )}

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* ── Left: Article content ── */}
            <article className="lg:col-span-8">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div
                  className="text-lg text-slate-600 leading-relaxed
                    [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:scroll-mt-28
                    [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-9 [&_h3]:mb-4 [&_h3]:scroll-mt-28
                    [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-slate-900 [&_h4]:mt-8 [&_h4]:mb-3 [&_h4]:scroll-mt-28
                    [&_p]:mb-6
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3 [&_ul_li]:pl-2
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-3
                    [&_a]:text-accent [&_a]:underline [&_a:hover]:opacity-80
                    [&_strong]:text-slate-900
                    [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-700 [&_blockquote]:bg-slate-50 [&_blockquote]:py-3 [&_blockquote]:pr-4 [&_blockquote]:rounded-r-xl [&_blockquote]:mb-8"
                >
                  <div dangerouslySetInnerHTML={{ __html: contentTopWithIds }} />

                  {post.content_image && (
                    <div className="my-12 relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl shadow-slate-100">
                      <Image
                        src={post.content_image}
                        alt={`Illustration zu ${post.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                  )}

                  <div dangerouslySetInnerHTML={{ __html: contentBottomWithIds }} />
                </div>

                {/* Back link */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-accent font-medium transition-colors"
                  >
                    <ArrowLeft size={18} /> Zurück zur Übersicht
                  </Link>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Weiterführende Artikel</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-md mb-3 inline-block">
                            {related.category}
                          </span>
                          <h3 className="font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors text-sm leading-snug">
                            {related.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-xs font-bold text-slate-400 gap-1 group-hover:text-accent transition-colors mt-4 border-t border-slate-100 pt-4">
                          Weiterlesen <ArrowRight size={12} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* ── Right: Sticky sidebar ── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">

                {/* Inhaltsverzeichnis (nur Desktop) */}
                {headings.length > 0 && (
                  <div className="hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                      <BookOpen size={16} className="text-accent shrink-0" />
                      <span className="font-bold text-slate-900 text-sm uppercase tracking-widest">
                        Inhaltsverzeichnis
                      </span>
                    </div>
                    <nav aria-label="Inhaltsverzeichnis">
                      <ol className="space-y-2">
                        {headings.map((h, i) => (
                          <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                            <a
                              href={`#${h.id}`}
                              className={`flex items-start gap-2 text-sm leading-snug transition-colors hover:text-accent group ${
                                h.level === 2
                                  ? "text-slate-700 font-semibold"
                                  : "text-slate-500 font-medium"
                              }`}
                            >
                              <span className="text-accent/60 font-bold shrink-0 text-xs mt-0.5 group-hover:text-accent transition-colors">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">
                    Kostenloses Gespräch
                  </p>
                  <h3 className="font-bold text-lg leading-snug mb-3">
                    Bereit für deine eigene Website?
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    Ich berate dich kostenlos und zeige dir, was für dein Unternehmen möglich ist.
                  </p>
                  <a
                    href={PHONE_URL}
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-xl px-5 py-3 font-bold text-sm transition-[background-color] w-full"
                  >
                    <Phone size={15} /> {PHONE}
                  </a>
                </div>

                {/* Post info */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Kategorie</span>
                    <span className="font-semibold text-slate-900 bg-accent/10 text-accent px-2 py-0.5 rounded-md text-xs">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Lesezeit</span>
                    <span className="font-semibold text-slate-900">{post.read_time}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Veröffentlicht</span>
                    <span className="font-semibold text-slate-900">{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Abschnitte</span>
                    <span className="font-semibold text-slate-900">{headings.length}</span>
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
