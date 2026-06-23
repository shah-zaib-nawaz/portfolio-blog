import { Badge } from "@/components/ui/badge";

const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "PostgreSQL",
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about me, my background, and the tools I use.",
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                About me
            </h1>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                    I'm a developer who enjoys turning ideas into clean, usable interfaces.
                    I started my journey by exploring how websites are built and found my way
                    into web development because I wanted to create real-world digital
                    experiences that are fast, modern, and user-friendly.
                </p>

                <p>
                    These days I'm focused on building with the modern React and Next.js
                    stack, and I care a lot about performance, accessibility, clean UI,
                    and writing code I'd be happy to maintain six months later.
                </p>

                <p>
                    When I'm not coding, you'll find me learning new technologies,
                    experimenting with new ideas, and improving my development skills.
                    I'm currently open to freelance projects, collaborations, and opportunities
                    where I can build impactful products.
                </p>
            </div>

            <h2 className="mt-12 font-display text-2xl font-semibold">
                Skills &amp; tools
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
