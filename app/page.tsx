import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";



export default function HomePage() {

  const highlights = [
    { title: "Frontend", body: "React, Next.js, TypeScript, Tailwind." },
    { title: "Design", body: "Responsive, accessible, dark-mode-ready UI." },
    { title: "Shipping", body: "From idea to deployed on Vercel." },
  ];
  return (
    <>
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
    </>
  );
}



