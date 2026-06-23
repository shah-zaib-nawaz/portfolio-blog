import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: string; // Surfaced for blog index listings
};

/**
 * List all slugs (used by generateStaticParams and collection fetchers).
 */
export function getAllPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Read one post: returns its frontmatter, raw MDX body, and estimated reading time.
 */
export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  // Calculate reading time stats based on the raw markdown content
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content, // raw MDX body string
    readingTime: stats.text, // e.g., "5 min read"
  };
}

/**
 * Read every post's frontmatter and reading metadata, sorted newest-first.
 * Perfect for rendering your blog index/list page.
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();

  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      
      return { 
        slug, 
        ...post.frontmatter,
        readingTime: post.readingTime, // Passed down from getPostBySlug
      };
    })
    .filter((post): post is PostMeta => post !== null);

  // Sort by date, newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}