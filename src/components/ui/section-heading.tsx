import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Container className={className}>
      <div
        className={cn(
          "mb-12 md:mb-16",
          align === "center" && "flex flex-col items-center text-center",
        )}
      >
        <Reveal>
          <p
            className={cn(
              "flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted",
              align === "center" && "justify-center",
            )}
          >
            <span className="text-accent">{index}</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            <span>{eyebrow}</span>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.04] tracking-tight text-balance">
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={0.16}>
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </Container>
  );
}