"use client";

import { RotateCw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Something went wrong</p>
      <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-6xl">
        This one slipped through.
      </h1>
      <p className="mt-5 max-w-md text-muted">
        An unexpected error occurred while rendering this page. Please try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-accent-ink transition-colors hover:bg-accent-bright"
      >
        <RotateCw className="size-4 transition-transform duration-500 group-hover:rotate-180" />
        Try again
      </button>
    </main>
  );
}