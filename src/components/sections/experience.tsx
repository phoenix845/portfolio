"use client";

import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { experience } from "@/lib/experience";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  const root = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!root.current || !railRef.current || reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={root}
      className="relative scroll-mt-24 border-b border-line py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've worked."
        />

        <div className="relative">
          <div
            className="absolute bottom-2 left-[5px] top-2 w-px bg-line"
            aria-hidden="true"
          >
            <div
              ref={railRef}
              className="absolute inset-x-0 top-0 h-full origin-top bg-accent"
            />
          </div>

          <ol className="relative flex flex-col">
            {experience.map((entry, i) => (
              <li key={`${entry.company}-${entry.period}`} className="relative pl-8 md:pl-12">
                <span
                  className="absolute left-0 top-8 size-2.5 rounded-full border border-line-strong bg-background"
                  aria-hidden="true"
                >
                  <span
                    className={cn(
                      "absolute inset-[3px] rounded-full",
                      entry.current ? "bg-accent" : "bg-transparent",
                    )}
                  />
                </span>

                <Reveal delay={i * 0.04}>
                  <article className="group border-b border-line py-8 transition-colors md:py-10">
                    <div className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
                      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
                        <span className="md:hidden">Period</span>
                        <span>{entry.period}</span>
                        {entry.current ? (
                          <span className="rounded-full border border-accent/50 px-2 py-0.5 text-[0.6rem] text-accent">
                            Current
                          </span>
                        ) : null}
                      </div>

                      <div className="flex max-w-2xl flex-col gap-4">
                        <header>
                          <h3 className="font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-2xl">
                            {entry.role}
                          </h3>
                          <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-muted">
                            {entry.company} &#183; {entry.location}
                          </p>
                        </header>
                        <p className="text-sm leading-relaxed text-muted md:text-[0.95rem]">
                          {entry.summary}
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {entry.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                              <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        {entry.certificate ? (
                          <a
                            href={entry.certificate.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                          >
                            {entry.certificate.label}
                            <ArrowUpRight className="size-3.5" strokeWidth={2} />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}