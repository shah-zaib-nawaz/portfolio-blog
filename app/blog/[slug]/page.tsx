import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { 
      title: "Post Not Found | Shahzaib Nawaz" 
    };
  }

  const { title, description, date } = post.frontmatter;

  return {
    title: `${title} | Shahzaib Nawaz`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// 2. Build-time Static Route Pre-rendering
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// 3. Page Component Layout
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          {frontmatter.title}
        </h1>
        
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <time>
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">•</span>
          <span>{readingTime}</span>
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}