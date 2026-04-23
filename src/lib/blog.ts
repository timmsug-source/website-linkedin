import { supabase } from "./supabase";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  read_time: string;
  featured: boolean;
  keyword: string;
  header_image: string;
  content_image: string;
  content_top: string;
  content_bottom: string;
  published: boolean;
  created_at: string;
}

/** Alle veröffentlichten Posts (für Blog-Übersicht) */
export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error (getAllPosts):", error.message);
    return [];
  }
  return data ?? [];
}

/** Einzelnen Post per Slug (für Detail-Seite) */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Supabase error (getPostBySlug):", error.message);
    return null;
  }
  return data;
}

/** Alle Slugs – für generateStaticParams */
export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  if (error) {
    console.error("Supabase error (getAllSlugs):", error.message);
    return [];
  }
  return (data ?? []).map((p) => p.slug);
}
