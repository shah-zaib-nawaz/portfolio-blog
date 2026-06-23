import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
};

// Read one post: returns its frontmatter and raw MDX body.
export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content, // raw MDX body string
  };
}

// List all slugs (used by generateStaticParams tomorrow).
export function getAllPostSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
