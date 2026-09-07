"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

let currentTheme: Theme = "dark";
let listeners: Array<() => void> = [];

function resolveTheme(): Theme {
  if (typeof window === "undefined") return currentTheme;
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return currentTheme;
  }
}

function getSnapshot(): Theme {
  currentTheme = resolveTheme();
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return currentTheme;
}

function hydrateDocument(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function applyTheme(theme: Theme) {
  currentTheme = theme;
  hydrateDocument(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* private mode */
  }
  listeners.forEach((listener) => listener());
}

function subscribe(onStoreChange: () => void) {
  listeners.push(onStoreChange);

  const onSystemChange = () => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      /* private mode */
    }
    if (stored === "light" || stored === "dark") return;
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    listeners.forEach((listener) => listener());
  };

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", onSystemChange);

  return () => {
    mql.removeEventListener("change", onSystemChange);
    listeners = listeners.filter((listener) => listener !== onStoreChange);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}