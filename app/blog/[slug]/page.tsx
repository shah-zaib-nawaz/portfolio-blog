import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";

// Pre-render every post at build time.
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Destructure readingTime alongside frontmatter and content
  const { frontmatter, content, readingTime } = post;

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          {frontmatter.title}
        </h1>
        
        {/* Container for date and reading time */}
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