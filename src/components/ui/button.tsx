import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonBase = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  trailing?: ReactNode;
  leading?: ReactNode;
  children?: ReactNode;
};

type ButtonAsLink = ButtonBase & {
  href: string;
} & Omit<React.ComponentProps<"a">, "href" | "children" | keyof ButtonBase>;

type ButtonAsButton = ButtonBase & {
  href?: never;
} & Omit<React.ComponentProps<"button">, "type" | "children" | keyof ButtonBase>;

export type ButtonProps = {
  children: ReactNode;
} & (ButtonAsLink | ButtonAsButton);

function classes({ variant, size }: ButtonBase) {
  return cn(
    "group/btn relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 will-change-transform",
    {
      primary: "bg-accent text-accent-ink hover:shadow-[0_16px_40px_-16px_var(--accent)]",
      outline: "border border-line-strong text-foreground hover:border-accent hover:text-accent",
      ghost: "text-muted hover:bg-accent-soft hover:text-foreground",
    }[variant ?? "primary"],
    {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-8 text-[0.95rem]",
    }[size ?? "md"],
  );
}

export function Button(props: ButtonProps) {
  const { variant, size, className, trailing, leading, children, ...rest } = props;
  const cnx = cn(classes({ variant, size }), className);
  const label = typeof children === "string" ? children : undefined;

  if ("href" in rest && rest.href !== undefined) {
    const { href, target, rel, ...anchorRest } = rest;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={cnx} aria-label={label} {...anchorRest}>
          {leading}
          {children}
          {trailing}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        className={cnx}
        aria-label={label}
        {...anchorRest}
      >
        {leading}
        {children}
        {trailing}
      </a>
    );
  }

  const buttonRest = rest as Omit<React.ComponentProps<"button">, keyof ButtonBase>;

  return (
    <button type="button" className={cnx} aria-label={label} {...buttonRest}>
      {leading}
      {children}
      {trailing}
    </button>
  );
}