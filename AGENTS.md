# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
# AI Agent Guidelines: Portfolio & Blog Feature Specification

You are assisting in building a modern, high-performance **Portfolio + Blog** site. This document serves as your system prompt override, technical specification, and feature checklist. Adhere to these constraints strictly.

---

## 🛠️ Technical Stack & Constraints

* **Framework:** Next.js 16+ (**App Router** layout).
    * *Rule:* Never create a `pages/` directory. 
    * *Rule:* Never use `next/router`. Always use `next/navigation`.
    * *Async Parameters:* `params` and `searchParams` are Promises. You **must unwrap them** using `async/await` before accessing properties (e.g., `const { slug } = await params;`).
* **Routing Architecture:** * Custom global middleware/routing overrides must use `proxy.ts` instead of `middleware.ts` if proxy routing is required.
* **Styling:** Tailwind CSS v4.
    * *Rule:* Do not look for or create a `tailwind.config.js`. 
    * *Rule:* All design tokens, custom colors, and theme extensions must be declared via the `@theme` directive using the new config-light approach inside `app/globals.css` via `@import`.
* **UI Components:** shadcn/ui.
    * *Rule:* Component source files live in `@/components/ui/`. You are authorized to modify their raw code directly to fit the design system.
* **Theme Management:** `next-themes` utilizing Tailwind v4's native `dark:` modifier class.

---

## 🎨 Architectural & Performance Rules

1.  **Server-First Mentality:** All components are Server Components by default. Do not add `"use client"` unless micro-interactivity (state, hooks, event listeners) explicitly demands it. Isolate client logic into small leaf components.
2.  **Asset Optimization:** Standard HTML `<img>` tags are strictly forbidden. Use Next.js `<Image />` with explicit aspect ratios (`width`, `height`), lazy loading, and descriptive `alt` text.
3.  **Static Generation (SSG):** The blog engine must be entirely static. Use `generateStaticParams()` on dynamic routes to pre-render markdown articles at build time.

---

## 📋 Feature Checklist & Implementation Goals

### 🏗️ Global Core System
* [ ] **Project Base Boilerplate:** Scaffold clean directory structure using TypeScript, Tailwind v4 (`@import`), and Turbopack.
* [ ] **Global App Routing UI:** Establish custom, streamable global files: `not-found.tsx`, `loading.tsx` skeletons, and robust `error.tsx` boundaries.
* [ ] **Persistent Global Shell:** Build a persistent shared Navbar (using `<Link>`) and Footer wrapper in the root `layout.tsx`.
* [ ] **Design System & Theme Switcher:** Configure Tailwind v4 tokens (colors, fluid typography, spacing) and implement a global system/dark/light mode toggle with `next-themes`.

### 👤 Portfolio & Interface Components
* [ ] **High-Impact Hero Section:** Build a polished, fully responsive landing hero with smooth layout transitions and clean spacing.
* [ ] **Technical Profile & Bio:** Implement a concise about/bio section displaying tech stacks and skill grids.
* [ ] **Performance-Optimized Projects Grid:** Build a responsive display card layout for showcases, using Next-optimized lazy-loaded images with exact width/height ratios.
* [ ] **Static Routing Pages:** Fully design and route pages for `/about`, `/projects`, and `/contact`.

### 📝 Static MDX Blog Engine
* [ ] **MDX Infrastructure:** Integrate an MDX processing engine (`@next/mdx` or `next-mdx-remote`) to parse raw filesystem `.mdx` files.
* [ ] **Frontmatter Metadata Parsing:** Configure parsing for article metadata parameters (title, publication date, description, tags).
* [ ] **Dynamic Article Routes:** Create the dynamic `/blog/[slug]` route structure with promise unwrapping for incoming route params.
* [ ] **Blog Index Listing:** Build a chronologically sorted grid view displaying all written posts with tag filters.
* [ ] **Compile-Time Static Rendering (SSG):** Wire up `generateStaticParams` inside the dynamic blog route to pre-render all markdown posts at build time for zero server overhead.

### 🚀 Production Polish & SEO
* [ ] **Technical SEO Metadata:** Implement the Next.js Metadata API to pass per-page titles, descriptions, Open Graph (OG) tags, and Twitter cards.
* [ ] **Search Crawl Config:** Setup dynamic script generation for `sitemap.ts` and `robots.ts`.
* [ ] **Accessibility & Semantics:** Perform an a11y audit to verify correct semantic HTML markup and image alt attributes.
* [ ] **Vercel Deployment Readiness:** Clean up configuration bundles, verify environment variables, and optimize final build output settings.