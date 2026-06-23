import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Notes on what I&apos;m learning and building.
      </p>

      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h2>
                <time className="shrink-0 text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-2 text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                <span className="text-xs text-muted-foreground">
                  · {post.readingTime}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
