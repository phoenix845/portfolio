import type { Project } from "@/lib/projects";

function generateWave(seed: number, count: number, base: number, range: number) {
  return Array.from({ length: count }, (_, i) => {
    const v = (seed * (i * 31 + 7)) % 97;
    return base + (v / 97) * range;
  });
}

function toPoints(values: number[], width: number, height: number) {
  return values
    .map((v, i) => `${(i / (values.length - 1)) * width},${height - v * height}`)
    .join(" ");
}

function CoverChart({ kind, accent }: { kind: string; accent: string }) {
  if (kind === "bars") {
    const bars = [0.42, 0.58, 0.34, 0.72, 0.5, 0.82, 0.46, 0.66, 0.38, 0.9, 0.56, 0.44, 0.76, 0.52, 0.62, 0.7];
    return (
      <svg className="absolute inset-0 size-full" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={18 + i * 23}
            y={262 - h * 210}
            width={11}
            height={h * 210}
            rx={2}
            fill={accent}
            opacity={i === 9 ? 0.28 : 0.14 - (i % 3) * 0.03}
          />
        ))}
        <rect x={18 + 9 * 23} y={262 - 0.9 * 210} width={11} height={0.9 * 210} rx={2} fill={accent} opacity={0.65} />
        <line x1="14" y1="262" x2="386" y2="262" stroke={accent} strokeOpacity="0.25" strokeWidth="1.5" />
      </svg>
    );
  }

  const wave = generateWave(kind === "area" ? 13 : 29, 42, 0.35, 0.55);
  if (kind === "area") {
    return (
      <svg className="absolute inset-0 size-full" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        <polygon
          points={`0,300 ${toPoints(wave, 400, 220)},300`}
          fill={accent}
          opacity="0.18"
        />
        <polyline points={toPoints(wave, 400, 220)} fill="none" stroke={accent} strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="absolute inset-0 size-full" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
      <polyline points={toPoints(wave, 400, 220)} fill="none" stroke={accent} strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {[0, 90, 180, 270, 360].map((x) => (
        <circle key={x} cx={x} cy={220 - wave[Math.floor((x / 400) * 41)] * 220} r="3" fill={accent} />
      ))}
    </svg>
  );
}

export function ProjectCover({ project }: { project: Project }) {
  const { cover, accent, gradient, index } = project;
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover/tilt:scale-[1.06]" style={{ background: gradient }} />
      <div className="absolute inset-0 opacity-30 dark:opacity-40" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgb(255 255 255 / 0.05) 0 1px, transparent 1px 36px), repeating-linear-gradient(90deg, rgb(0 0 0 / 0.25) 0 1px, transparent 1px 36px)" }} />

      <CoverChart kind={cover.kind} accent={accent} />

      <div className="absolute inset-0 p-5 md:p-6">
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/70 backdrop-blur-sm">
            {project.stack[0]} / {String(project.stack.length).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-background/60 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-foreground/80 backdrop-blur-sm">
            GitHub
            <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-6 md:bottom-6">
          <div>
            <p className="font-display text-[2.6rem] font-semibold leading-none tracking-tight text-foreground md:text-6xl">
              {cover.headline}
            </p>
            <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted">
              {cover.sub}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-faint">
            {index}
          </span>
        </div>
      </div>
    </div>
  );
}