"use client";

import {
  motion,
  useAnimationControls,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const cover: Transition = {
  duration: 0.5,
  ease: [0.76, 0, 0.24, 1],
};
const reveal: Transition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

function Curtain() {
  const topControls = useAnimationControls();
  const bottomControls = useAnimationControls();
  const labelControls = useAnimationControls();

  useEffect(() => {
    const run = async () => {
      await Promise.all([
        topControls.start({ y: "0%" }, { ...cover }),
        bottomControls.start({ y: "0%" }, { ...cover }),
        labelControls.start(
          { opacity: 1, y: 0 },
          { duration: 0.3, delay: 0.2, ease: "easeOut" },
        ),
      ]);

      await new Promise((resolve) => setTimeout(resolve, 120));

      await Promise.all([
        topControls.start({ y: "-100%" }, { ...reveal, delay: 0.05 }),
        bottomControls.start({ y: "100%" }, { ...reveal, delay: 0.05 }),
        labelControls.start({ opacity: 0, y: -16 }, { duration: 0.3 }),
      ]);
    };

    run();
  }, [topControls, bottomControls, labelControls]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] flex flex-col"
      aria-hidden="true"
    >
      <motion.div
        className="h-1/2 w-full border-b border-line bg-surface"
        initial={{ y: "-100%" }}
        animate={topControls}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="relative h-1/2 w-full bg-surface"
        initial={{ y: "100%" }}
        animate={bottomControls}
        style={{ willChange: "transform" }}
      >
        <motion.span
          className="absolute left-1/2 top-3 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={labelControls}
        >
          Portfolio &#xB7; 2026
        </motion.span>
      </motion.div>
    </div>
  );
}

function ProgressBar({ runId }: { runId: number }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (runId === 0) return;
    controls.start({
      scaleX: 1,
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    });
  }, [runId, controls]);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[85] h-[2px] origin-left bg-accent"
      initial={{ scaleX: 0 }}
      animate={controls}
      aria-hidden="true"
    />
  );
}

export function PageTransition() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const firstRender = useRef(true);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setRunId((id) => id + 1);
  }, [pathname]);

  if (reducedMotion) return null;

  return (
    <>
      <ProgressBar runId={runId} />
      {runId > 0 ? <Curtain key={runId} /> : null}
    </>
  );
}