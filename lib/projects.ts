export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;        // path in /public, e.g. "/projects/app.png"
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio & Blog",
    description:
      "This very site — built with Next.js, Tailwind v4, and MDX.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/portfolio1.jpg",
    liveUrl: "https://your-site.com",
    repoUrl: "https://github.com/shah-zaib-nawaz",
  },
  {
    title: "Notes App",
    description: "A Notes App Built with Nextjs, Tailwind, Server Action",
    tags: ["React", "Node.js"],
    image: "/projects/portfolio2.jpg",
    repoUrl: "https://github.com/shah-zaib-nawaz",
  },
];
