import { cn } from "@/lib/utils";

type ChipProps = React.ComponentPropsWithoutRef<"span">;

export function Chip({ className, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
}