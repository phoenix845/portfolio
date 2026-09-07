export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] bg-noise opacity-[0.05] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-screen"
    />
  );
}