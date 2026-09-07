"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  const [firstName, lastName] = site.name.split(" ");

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!root.current) return;

    const ctx = gsap.context(() => {
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "out-expo" } });

      tl.fromTo(
        "[data-hero-orb]",
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" },
      )
        .fromTo(
          "[data-hero-eyebrow]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=1.1",
        )
        .fromTo(
          "[data-hero-line]",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, stagger: 0.14 },
          "-=0.5",
        )
        .fromTo(
          "[data-hero-copy]",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.8",
        );

      gsap.to("[data-hero-title]", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to("[data-hero-orb]", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-dvh flex-col overflow-hidden border-b border-line"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
        <div
          data-hero-orb
          className="absolute -top-40 right-[8%] size-[30rem] rounded-full bg-accent blur-[170px] opacity-35 dark:opacity-25"
        />
        <div
          data-hero-orb
          className="absolute -bottom-52 -left-24 size-[28rem] rounded-full bg-accent-bright blur-[170px] opacity-20 dark:opacity-15"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-32 pb-12 sm:px-8 lg:px-10">
        <p
          data-hero-eyebrow
          className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted"
        >
          <span className="inline-flex items-center gap-2 text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            {site.available ? "Available for work" : "Open to opportunities"}
          </span>
          <span className="hidden h-px w-8 bg-line-strong sm:block" aria-hidden="true" />
          <span className="hidden sm:inline">{site.heroRole}</span>
          <span className="hidden h-px w-8 bg-line-strong md:block" aria-hidden="true" />
          <span className="hidden md:inline">Portfolio &#xB7; {new Date().getFullYear()}</span>
        </p>

        <h1
          data-hero-title
          className="mt-7 font-display text-[clamp(3.4rem,12vw,9.5rem)] font-semibold uppercase leading-[0.9] tracking-tight"
        >
          <span className="block overflow-hidden pb-1">
            <span data-hero-line className="block">
              {firstName}
            </span>
          </span>
          <span className="block overflow-hidden pb-2">
            <span data-hero-line className="block">
              {lastName}
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-end">
          <div className="max-w-md">
            <p
              data-hero-copy
              className="font-display text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl"
            >
              {site.heroRole}
            </p>
            <p data-hero-copy className="mt-3 text-base leading-relaxed text-muted md:text-lg">
              {site.tagline}
            </p>
          </div>

          <div data-hero-copy className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="#work" variant="primary" size="lg" trailing={<ArrowDown className="size-4" strokeWidth={2} />}>
              View work
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              trailing={<ArrowUpRight className="size-4" strokeWidth={2} />}
            >
              Get in touch
            </Button>
          </div>
        </div>

        <div
          data-hero-copy
          className="mt-10 flex flex-wrap gap-2 lg:max-w-xl"
          aria-label="Key skills"
        >
          {site.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-line bg-background/50 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted backdrop-blur-sm"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="mt-14 flex items-end justify-between border-t border-line pt-6 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-faint">
          <p>{site.location}</p>
          <div className="hidden h-12 w-px overflow-hidden bg-line-strong min-[420px]:block" aria-hidden="true">
            <span className="hero-scroll-dot block h-full w-full bg-accent" />
          </div>
          <p className="hidden text-right min-[420px]:block">
            21.1458&#176; N &#183; 79.0882&#176; E
          </p>
        </div>
      </div>
    </section>
  );
}