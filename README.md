# Portfolio

An award-minded portfolio built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, GSAP and Framer Motion.

## Features

- **Design system** — token-driven light/dark themes (class-based dark mode, no flash-of-wrong-theme), Space Grotesk + Inter + Geist Mono via `next/font`
- **Motion** — GSAP ScrollTrigger timelines (hero intro, counters, timeline rail, parallax), Framer Motion reveals and micro-interactions, custom cursor
- **Page transitions** — curtain wipe + progress bar on route change, native View Transition morph from project cards to case-study heroes
- **Smooth scrolling** — Lenis integrated with GSAP's ticker and ScrollTrigger
- **SEO** — metadata API, JSON-LD Person schema, sitemap, robots, generated OG image, static project pages with canonical URLs
- **Performance** — static generation, CSS-art visuals (no image payloads), self-hosted fonts, reduced-motion support end to end

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Commands

| Command                | Description                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Start the dev server            |
| `npm run build`        | Production build                |
| `npm run start`        | Serve the production build      |
| `npm run lint`         | ESLint                          |
| `npm run typecheck`    | TypeScript (`tsc --noEmit`)     |

## Structure

```
src/
├─ app/
│  ├─ layout.tsx          # Root layout: providers, fonts, metadata, JSON-LD
│  ├─ page.tsx            # Home (single-page sections)
│  ├─ globals.css         # Tailwind v4 theme tokens + custom utilities
│  ├─ projects/[slug]/    # Case-study pages (static, per-project metadata)
│  ├─ sitemap.ts          # robots.ts · manifest.ts · opengraph-image.tsx
│  └─ not-found.tsx       # error.tsx
├─ components/
│  ├─ ui/                 # Container, Button, Chip, Reveal, Magnetic, TiltCard, Marquee, SectionHeading
│  ├─ layout/             # Navbar, Footer, ThemeProvider, SmoothScroll, PageTransition, Cursor, NoiseOverlay
│  ├─ sections/           # Hero, About, Experience, FeaturedProjects, Skills, Contact
│  └─ projects/           # ProjectCard
├─ hooks/
│  └─ use-media-query.ts
└─ lib/
   ├─ site.ts             # 👈 your identity, links, email, URL
   ├─ projects.ts         # 👈 project content
   ├─ experience.ts       # 👈 work history
   ├─ skills.ts
   ├─ gsap.ts             # GSAP + ScrollTrigger registration & shared easing
   └─ utils.ts
```

## Personalize

1. **Identity** — edit `src/lib/site.ts` (name, email, URL, socials, tagline).
2. **Content** — swap the data in `src/lib/projects.ts`, `src/lib/experience.ts`, `src/lib/skills.ts`.
3. **Site URL / metadata** — set `NEXT_PUBLIC_SITE_URL` (falls back to `src/lib/site.ts`).
4. **Resume** — drop a PDF at `public/resume.pdf` and restore the Download link in `src/components/sections/about.tsx`.

## Notes on the stack

- Next.js 16 with Turbopack; async `params` in dynamic routes; `params`/`searchParams` are Promises.
- Tailwind CSS v4 uses `@theme inline` tokens in `globals.css` and a `@custom-variant` for class-based dark mode.
- React 19's native `<ViewTransition>` powers the shared-element morph; it degrades gracefully where unsupported.