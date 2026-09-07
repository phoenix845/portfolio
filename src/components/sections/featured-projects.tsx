import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProjects() {
  const visible = projects.filter(
    (project) => project.featured && project.slug !== "credora-decision-tree",
  );

  const githubUrl = site.socials.find((social) => social.label === "GitHub")?.href;

  return (
    <section
      id="work"
      className="relative scroll-mt-24 border-b border-line py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-1/4 size-[30rem] rounded-full bg-accent blur-[200px] opacity-10" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Projects"
            title={
              <>
                Real problems,{" "}
                <span className="text-accent">real repos.</span>
              </>
            }
            description="Six end-to-end builds — ETL, ML dashboards, EDA and a multi-agent AI platform — every one with source code you can open right now."
            className="mb-0"
          />
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-12 inline-flex shrink-0 items-center gap-2 self-start font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent md:mb-16 lg:self-end"
            >
              All work on GitHub
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : null}
        </div>
      </Container>

      <Container>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      <Container className="mt-24">
        <p className="mb-6 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted">
          <span className="text-accent">Idx</span>
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          Repository index
        </p>
        <div className="flex flex-col">
          {visible.map((project) => (
            <a
              key={project.slug}
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors first:border-t hover:bg-accent-soft/40 md:py-7"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="font-mono text-xs text-accent">{project.index}</span>
                <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:text-4xl">
                  {project.title}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden font-mono text-xs uppercase tracking-widest text-muted sm:inline">
                  {project.year}
                </span>
                <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}