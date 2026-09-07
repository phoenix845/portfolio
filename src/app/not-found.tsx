import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Error 404</p>
      <h1 className="mt-6 font-display text-[clamp(5rem,20vw,14rem)] font-semibold uppercase leading-none tracking-tight text-outline">
        404
      </h1>
      <p className="mt-6 max-w-md text-muted">
        The page you&apos;re looking for has moved, been renamed, or never existed in
        this multiverse.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-accent-ink transition-colors hover:bg-accent-bright"
      >
        <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back home
      </Link>
    </main>
  );
}