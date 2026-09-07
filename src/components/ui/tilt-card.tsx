"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: string;
};

export function TiltCard({
  children,
  className,
  intensity = 7,
  glare,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });

  const glareBackground = useMotionTemplate`radial-gradient(600px circle at ${px}% ${py}%, ${glare ?? "rgb(214 255 63 / 0.12)"}, transparent 55%)`;

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    rotateX.set((0.5 - y) * intensity);
    rotateY.set((x - 0.5) * intensity);
  };

  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={
          {
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          } as CSSProperties
        }
        className={cn("relative", className)}
      >
        {children}
        {glare ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
            style={{ background: glareBackground }}
          />
        ) : null}
      </motion.div>
    </div>
  );
}