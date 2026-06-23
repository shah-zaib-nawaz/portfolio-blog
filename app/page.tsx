import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function HomePage() {
  // Grab only the 3 most recent posts for the homepage teaser
  const latestPosts = getAllPosts().slice(0, 3);

  const highlights = [
    { title: "Frontend", body: "React, Next.js, TypeScript, Tailwind." },
    { title: "Design", body: "Responsive, accessible, dark-mode-ready UI." },
    { title: "Shipping", body: "From idea to deployed on Vercel." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-wide text-primary">
            Hi, I'm Shahzaib Nawaz
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            I build fast, accessible web apps with Next.js.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm a front-end developer focused on clean, performant interfaces.
            Currently learning in public and open to new opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/projects">View my work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="font-display">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {item.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold">
            Latest posts
          </h2>
          <Link href="/blog" className="text-sm text-primary hover:underline">
            View all →
          </Link>
        </div>
        
        <div className="mt-6 space-y-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b pb-6 last:border-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <time className="shrink-0 text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}