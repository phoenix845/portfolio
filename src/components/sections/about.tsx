"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { site, summaryStats } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const NOW_ITEMS = [
  "Engineering ETL workflows at Springer Capital",
  "Sharpening Power BI + DAX dashboard skills",
  "Training models with scikit-learn & applying DSA",
];

export function About() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!root.current || reduce) return;

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>("[data-counter]");
      counters.forEach((el) => {
        const target = Number(el.dataset.counter ?? 0);
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = String(Math.round(state.value));
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={root}
      className="relative scroll-mt-24 border-b border-line py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              From messy data to{" "}
              <span className="text-accent">confident decisions</span>.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-10">
            <Reveal>
              <p className="max-w-lg text-lg leading-relaxed text-foreground/90 md:text-xl">
                {site.about}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-accent pl-6 font-display text-2xl font-medium leading-snug tracking-tight text-muted md:text-[1.65rem]">
                &ldquo;Good analytics doesn&apos;t just tell you what
                happened. It tells you what to do next.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-line bg-surface p-7">
                <p className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Now &#183; {new Date().getFullYear()}
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  {NOW_ITEMS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                      <span className="mt-2 size-1 shrink-0 rounded bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {summaryStats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.1 + i * 0.05} className="bg-surface">
                  <div className="flex h-full flex-col gap-2 bg-surface p-7">
                    <span className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                      <span data-counter={stat.value}>0</span>
                      <span className="text-accent">{stat.suffix}</span>
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                      {stat.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}