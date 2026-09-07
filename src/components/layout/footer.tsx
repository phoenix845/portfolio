"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/layout/smooth-scroll";
import { site } from "@/lib/site";

export function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-10 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                Resume
              </p>
              <a
                href={site.resumeUrl}
                download="Gaurav-Kakde-Resume.pdf"
                className="mt-3 inline-block font-display text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent md:text-5xl"
              >
                Download résumé
              </a>
              <p className="mt-4 text-sm text-muted">
                {site.location} &#xB7; {site.role}
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <div className="flex gap-6">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
                  >
                    {social.label}
                    <span className="mt-1 block h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group grid size-14 place-items-center rounded-full border border-line transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                <ArrowUp
                  className="size-5 transition-transform duration-300 group-hover:-translate-y-1"
                  strokeWidth={1.75}
                />
              </button>
            </div>
          </div>

          <div
            className="pointer-events-none mt-16 select-none text-center font-display text-[clamp(4rem,18vw,15rem)] font-semibold uppercase leading-none tracking-tight text-outline"
            aria-hidden="true"
          >
            {site.initials}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center font-mono text-[0.65rem] uppercase tracking-widest text-faint sm:flex-row sm:text-left">
            <p>
              &#169; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}