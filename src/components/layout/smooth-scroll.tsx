"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { lenisStore } from "@/lib/lenis-store";

const lenisContext = createContext<{ current: Lenis | null }>(lenisStore);

export function useLenis() {
  return useContext(lenisContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      anchors: { offset: 0 },
    });

    const previous = lenisStore.current;
    lenisStore.current = lenis;

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      lenisStore.current = previous;
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <lenisContext.Provider value={lenisStore}>{children}</lenisContext.Provider>;
}