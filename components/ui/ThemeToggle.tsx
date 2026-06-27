"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="focus-ring relative flex h-11 w-20 items-center rounded-full border border-border bg-card/70 p-1 backdrop-blur-xl transition hover:border-primary/60"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="absolute h-9 w-9 rounded-full bg-foreground shadow-soft"
        animate={{ x: isDark ? 36 : 0 }}
      />

      <span className="relative z-10 grid h-9 w-9 place-items-center">
        <Sun className="h-4 w-4 text-background" />
      </span>

      <span className="relative z-10 grid h-9 w-9 place-items-center">
        <Moon className="h-4 w-4 text-background" />
      </span>
    </button>
  );
}