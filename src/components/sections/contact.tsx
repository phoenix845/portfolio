"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

function LocalTime() {
  const [now, setNow] = useState<string>("--:--:--");

  useEffect(() => {
    const update = () =>
      setNow(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: site.timezone,
        }).format(new Date()),
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span>{now}</span>;
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -bottom-64 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-accent blur-[200px] opacity-10" />
      </div>

      <Container className="relative">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={
            <>
              Need someone who gets{" "}
              <span className="text-accent">value from data</span>?
            </>
          }
        />

        <div className="flex flex-col gap-14">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <Magnetic strength={0.25}>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-auto max-w-full min-h-16 flex-wrap items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-center font-display text-base font-semibold text-accent-ink transition-all duration-300 hover:bg-accent-bright md:h-[4.5rem] md:px-14 md:text-xl"
                >
                  {site.email}
                  <ArrowUpRight className="size-5" strokeWidth={2} />
                </a>
              </Magnetic>

              <div className="flex flex-col gap-1.5 font-mono text-xs uppercase tracking-widest text-muted">
                <p className="flex items-center gap-2">
                  <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                  Open to freelance &amp; full-time
                </p>
                <p>
                  Local time &#183; <LocalTime />
                </p>
                <a href={site.phoneHref} className="transition-colors hover:text-accent">
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col border-t border-line">
            {site.socials.map((social, i) => (
              <Reveal key={social.label} delay={i * 0.05}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors hover:bg-accent-soft/40 md:py-7"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:text-4xl">
                      {social.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="hidden font-mono text-xs uppercase tracking-widest text-muted md:inline">
                      {social.handle}
                    </span>
                    <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}