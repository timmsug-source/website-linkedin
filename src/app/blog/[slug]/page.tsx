import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, ChevronRight } from "lucide-react";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";

// ISR: alle 60 Sekunden neu prüfen → neue Posts erscheinen ohne Redeploy
export const revalidate = 60;

// Slugs für statische Generierung aus Supabase laden
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

  if (!post) {
    return buildMetadata({ title: "Artikel nicht gefunden" });
  }

  return buildMetadata({
    title: `${post.title} | Timm Schurig`,
    description: post.excerpt,
    keywords: [post.keyword, "Fitness Coach Marketing", "LinkedIn", "Timm Schurig"],
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.created_at,
      authors: ["Timm Schurig"],
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
  ]);

  if (!post) notFound();

  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Timm Schurig",
    },
    datePublished: post.created_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-10" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li><ChevronRight size={14} className="text-slate-300" /></li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              </li>
              <li><ChevronRight size={14} className="text-slate-300" /></li>
              <li className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex shrink-0 items-center justify-center text-slate-500 font-bold">
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
                  <Calendar size={16} className="text-slate-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-slate-400" />
                  {post.read_time}
                </span>
              </div>
            </div>

            {/* Header Image */}
            {post.header_image && (
              <div className="mt-10 mb-2 relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
                <Image
                  src={post.header_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div
              className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed
                [&_h2]:text-3xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-6
                [&_h3]:text-2xl [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4
                [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-slate-900 [&_h4]:mt-8 [&_h4]:mb-3
                [&_p]:mb-6
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3 [&_ul_li]:pl-2
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-3
                [&_a]:text-accent [&_a]:underline [&_a:hover]:opacity-80
                [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-700 [&_blockquote]:bg-slate-50 [&_blockquote]:py-3 [&_blockquote]:pr-4 [&_blockquote]:rounded-r-xl [&_blockquote]:mb-8"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content_top }} />

              {post.content_image && (
                <div className="my-12 relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl shadow-slate-100">
                  <Image
                    src={post.content_image}
                    alt={`Illustration zu ${post.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}

              <div dangerouslySetInnerHTML={{ __html: post.content_bottom }} />
            </div>

            {/* Footer */}
            <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-slate-100">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-accent font-medium transition-colors mb-16"
              >
                <ArrowLeft size={18} />
                Zurück zur Übersicht
              </Link>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="pt-12 border-t border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Weiterführende Artikel</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-accent/20 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-md mb-3 inline-block">
                            {related.category}
                          </span>
                          <h3 className="font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors text-sm leading-snug">
                            {related.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-xs font-bold text-slate-500 gap-1 group-hover:text-accent transition-colors mt-4 border-t border-slate-200 pt-4">
                          Weiterlesen <ArrowRight size={12} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      <CTA />
    </>
  );
}
