"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersFinePointer } from "@/hooks/use-media-query";

export function Cursor() {
  const finePointer = usePrefersFinePointer();
  const reducedMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [seen, setSeen] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!finePointer || reducedMotion) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setSeen(true);
    };
    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(
        Boolean(
          target?.closest?.("a, button, [role='button'], [data-cursor='hover']"),
        ),
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [finePointer, reducedMotion, x, y]);

  if (!finePointer || reducedMotion || !seen) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]">
      <motion.div
        className="absolute size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ left: x, top: y }}
      />
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70"
        style={{ left: ringX, top: ringY }}
        animate={{
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          scale: pressed ? 0.75 : 1,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 20, mass: 0.8 }}
      />
    </div>
  );
}