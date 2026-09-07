"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const reducedMotion = useReducedMotion();

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    el.style.translate = `${relX * strength}px ${relY * strength}px`;
  };

  const onPointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    el.style.translate = "0px 0px";
  };

  return (
    <div
      className={className}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        display: "inline-block",
        transition: "translate 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "translate",
      }}
    >
      {children}
    </div>
  );
}