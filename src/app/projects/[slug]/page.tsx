import type { Metadata } from "next";
import { ViewTransition } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProject, getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  return (
    <main id="main" className="flex flex-col">
      <Container className="pt-28 md:pt-36">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to work
        </Link>

        <header className="mt-12 md:mt-16">
          <p className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted">
            <span className="text-accent">{project.index}</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            <span>{project.year} &#183; Case study</span>
          </p>
          <h1 className="mt-7 font-display text-[clamp(2.6rem,8vw,6.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            {project.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {project.tagline}
          </p>
        </header>
      </Container>

      <Container className="mt-12 md:mt-16">
        <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] border border-line shadow-lift md:aspect-[16/7]">
            <div className="absolute inset-0" style={{ background: project.gradient }} />
            <div
              className="absolute inset-0 opacity-25 mix-blend-overlay dark:opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgb(0 0 0 / 0.5) 0 1px, transparent 1px 14px)",
              }}
            />
            <span className="absolute left-6 top-6 font-mono text-xs uppercase tracking-[0.25em] text-foreground/70">
              {site.initials} / {project.index}
            </span>
          </div>
        </ViewTransition>
      </Container>

      <Container className="mt-12 md:mt-20">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <aside className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-faint">Year</p>
              <p className="mt-2 font-mono text-sm text-foreground">{project.year}</p>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-faint">Role</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {project.role.map((role) => (
                  <li key={role} className="font-mono text-sm text-foreground/85">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-faint">Stack</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wide text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {project.source && (
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-faint">Source</p>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link mt-2 inline-flex items-center gap-1.5 font-mono text-sm text-foreground transition-colors hover:text-accent"
                >
                  GitHub
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            )}
          </aside>

          <div className="flex max-w-3xl flex-col gap-12">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Overview
              </h2>
              <div className="mt-5 flex flex-col gap-5">
                {project.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-foreground/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="approach-heading">
              <h2 id="approach-heading" className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Approach
              </h2>
              <ol className="mt-5 flex flex-col gap-6">
                {project.approach.map((step, i) => (
                  <li key={step.slice(0, 24)} className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="mt-1 font-display text-2xl font-semibold text-outline-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-relaxed text-foreground/85">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="impact-heading">
              <h2 id="impact-heading" className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Impact
              </h2>
              <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                {project.outcomes.map((outcome) => (
                  <div key={outcome.label} className="bg-surface p-6 md:p-7">
                    <p className="font-display text-4xl font-semibold tracking-tight text-accent md:text-5xl">
                      {outcome.value}
                    </p>
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                      {outcome.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>

      <Container className="mt-20 md:mt-28">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-between gap-6 border-t border-line pt-8"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-faint">
              Up next
            </p>
            <p className="mt-3 font-display text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-5xl">
              {next.title}
            </p>
          </div>
          <span className="grid size-14 shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink md:size-20">
            <ArrowUpRight className="size-6 md:size-8" strokeWidth={1.75} />
          </span>
        </Link>
      </Container>
    </main>
  );
}