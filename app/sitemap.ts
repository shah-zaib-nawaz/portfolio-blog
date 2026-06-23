import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://portfolio-blog-szn.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/blog", "/contact"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const postRoutes = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
