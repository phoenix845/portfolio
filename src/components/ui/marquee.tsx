"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  variant?: "display" | "chip";
  speed?: number;
  reversed?: boolean;
  className?: string;
  separator?: string;
};

export function Marquee({
  items,
  variant = "chip",
  speed = 26,
  reversed = false,
  className,
  separator = "✦",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const from = reversed ? -50 : 0;
    const to = reversed ? 0 : -50;

    const ctx = gsap.context(() => {
      gsap.fromTo(track, { xPercent: from }, { xPercent: to, ease: "none", duration: speed, repeat: -1 });
    }, track);

    const onVisibility = () => {
      if (document.hidden) gsap.globalTimeline.pause();
      else gsap.globalTimeline.resume();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      ctx.revert();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reversed, speed]);

  const Row = (
    <div className="flex w-max shrink-0 items-center" aria-hidden="true">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          {variant === "display" ? (
            <span className="px-8 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold uppercase leading-none tracking-tight text-outline">
              {item}
            </span>
          ) : (
            <span className="flex items-center gap-3 px-4">
              <span className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-muted">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent" />
            </span>
          )}
          <span className="px-2 text-sm text-accent" aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative flex w-full overflow-hidden", className)} dir="ltr">
      <div ref={trackRef} className="flex w-max">
        {Row}
        {Row}
      </div>
    </div>
  );
}