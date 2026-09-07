"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useLenis } from "@/components/layout/smooth-scroll";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["work", "experience", "credentials", "skills", "about", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();
  const lenis = useLenis();

  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const sections = SECTION_IDS.map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    const lenisInstance = lenis.current;
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      lenisInstance?.stop();
    } else {
      document.documentElement.style.overflow = "";
      lenisInstance?.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
      lenisInstance?.start();
    };
  }, [menuOpen, lenis]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Main navigation"
          className="flex h-16 items-center justify-between px-5 sm:px-8 lg:px-10"
        >
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="group flex items-baseline gap-0.5 font-display text-lg font-semibold tracking-tight"
          >
            {site.initials}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => {
              const active = onHome && activeId === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300",
                    active ? "text-accent" : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={site.resumeUrl}
              download="Gaurav-Kakde-Resume.pdf"
              className="group hidden h-10 items-center gap-1.5 rounded-full bg-accent px-5 font-medium text-sm text-accent-ink transition-all duration-300 hover:bg-accent-bright sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid size-10 place-items-center rounded-full border border-line text-foreground transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={1.75} />
              ) : (
                <Menu className="size-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[70] flex flex-col bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-lg font-semibold tracking-tight">
                {site.initials}
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-line"
              >
                <X className="size-5" strokeWidth={1.75} />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col justify-center gap-1 px-8"
            >
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-baseline gap-4 py-3"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.42 }}
              className="px-8 pb-2"
            >
              <a
                href={site.resumeUrl}
                download="Gaurav-Kakde-Resume.pdf"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-accent font-medium text-sm text-accent-ink transition-colors duration-300 hover:bg-accent-bright"
              >
                Download résumé
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between border-t border-line px-8 py-6"
            >
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-xs uppercase tracking-widest text-muted"
              >
                {site.email}
              </a>
              <div className="flex gap-4">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] uppercase tracking-widest text-muted underline-offset-4 hover:text-foreground hover:underline"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}