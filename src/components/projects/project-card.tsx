"use client";

import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { ProjectCover } from "@/components/projects/project-cover";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — open repository on GitHub`}
      className="group/tilt block focus-visible:outline-accent focus-visible:rounded-2xl"
    >
      <TiltCard intensity={4} glare={project.accent} className="group/tilt">
        <div className="overflow-hidden rounded-[1.25rem] border border-line shadow-sm">
          <ProjectCover project={project} />
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover/tilt:text-accent md:text-[1.7rem]">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {project.tagline}
            </p>
          </div>
          <span className="mt-2 shrink-0 font-mono text-[0.65rem] uppercase tracking-widest text-faint">
            {project.year}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 group-hover/tilt:text-accent">
          View repository
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/tilt:translate-x-0.5 group-hover/tilt:-translate-y-0.5" />
        </div>
        <div className="mt-3 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover/tilt:scale-x-100" />
      </TiltCard>
    </a>
  );
}