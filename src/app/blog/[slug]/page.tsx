import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";
import { CTA } from "@/components/home/CTA";

// Generate static routes for all blog posts at build time
export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata dynamically per post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return buildMetadata({
            title: "Artikel nicht gefunden",
        });
    }

    return buildMetadata({
        title: `${post.title} | Timm Schurig`,
        description: post.excerpt,
        keywords: [post.keyword, "Fitness Coach Marketing", "LinkedIn", "Timm Schurig"],
        alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
        openGraph: {
            type: "article",
            url: `${SITE_URL}/blog/${post.slug}`,
            publishedTime: post.date, // Note: For real SEO you'd format this as ISO 8601
            authors: ["Timm Schurig"],
        },
    });
}

// We need an async component for dynamic routes since Next.js 15
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // Schema markup specific to an individual blog post
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
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`, // Placeholder
            },
        },
        datePublished: post.date, // Should idealy be ISO format
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

            {/* Article Hero */}
            <article className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="mb-10" aria-label="Breadcrumb">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                            <li>
                                <Link href="/" className="hover:text-accent transition-colors flex items-center">
                                    Home
                                </Link>
                            </li>
                            <li><ChevronRight size={14} className="text-slate-300" /></li>
                            <li>
                                <Link href="/blog" className="hover:text-accent transition-colors">
                                    Blog
                                </Link>
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
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex flex-shrink-0 items-center justify-center text-slate-500 font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 flex items-center gap-1">
                                        <User size={14} className="text-accent" /> {post.author}
                                    </p>
                                    <p className="text-xs text-slate-500">Experte für Kundengewinnung</p>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

                            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={16} className="text-slate-400" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={16} className="text-slate-400" />
                                    {post.readTime}
                                </span>
                            </div>
                        </div>

                        {/* Header Image */}
                        <div className="mt-10 mb-2 relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
                            <Image
                                src={post.headerImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 800px"
                                priority
                            />
                        </div>
                    </header>

                    {/* Content Body */}
                    {/* Custom styles simulating standard prose layout since Tailwind Typography isn't installed */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div
                            className="max-w-3xl mx-auto custom-prose text-lg text-slate-600 leading-relaxed
                [&>h2]:text-3xl [&>h2]:font-display [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6
                [&>h3]:text-2xl [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-10 [&>h3]:mb-4
                [&>h4]:text-xl [&>h4]:font-bold [&>h4]:text-slate-900 [&>h4]:mt-8 [&>h4]:mb-3
                [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:space-y-3 [&>ul>li]:pl-2
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol]:space-y-3
                [&>a]:text-accent [&>a]:underline [&>a:hover]:text-accent-dark
                [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-slate-700 [&>blockquote]:bg-slate-50 [&>blockquote]:py-3 [&>blockquote]:pr-4 [&>blockquote]:rounded-r-xl [&>blockquote]:mb-8
              "
                        >
                            <div dangerouslySetInnerHTML={{ __html: post.contentTop }} />

                            {/* Content Image rendering in the middle of text */}
                            <div className="my-12 relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl shadow-slate-100">
                                <Image
                                    src={post.contentImage}
                                    alt={`Illustration zu ${post.title}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: post.contentBottom }} />
                        </div>

                        {/* Tags / Footer of Article */}
                        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-slate-100">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-slate-500 hover:text-accent font-medium transition-colors mb-16"
                            >
                                <ArrowLeft size={18} />
                                Zurück zur Übersicht
                            </Link>

                            {/* Related internal guides */}
                            <div className="pt-12 border-t border-slate-200">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Weiterführende Ratgeber</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {blogPosts
                                        .filter((p) => p.slug !== post.slug)
                                        .slice(0, 3)
                                        .map((relatedPost) => (
                                            <Link
                                                key={relatedPost.slug}
                                                href={`/blog/${relatedPost.slug}`}
                                                className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-accent/20 transition-all flex flex-col justify-between"
                                            >
                                                <div>
                                                    <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-md mb-3 inline-block">
                                                        {relatedPost.category}
                                                    </span>
                                                    <h4 className="font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors text-sm leading-snug">
                                                        {relatedPost.title}
                                                    </h4>
                                                </div>
                                                <div className="flex items-center text-xs font-bold text-slate-500 gap-1 group-hover:text-accent transition-colors mt-4 border-t border-slate-200 pt-4">
                                                    Weiterlesen <ArrowRight size={12} />
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Conversion Section */}
            <CTA />
        </>
    );
}
