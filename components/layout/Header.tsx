"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navItems, cvPath } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300",
          scrolled ? "glass shadow-soft" : "border-transparent bg-transparent"
        )}
      >
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-sm font-black text-background shadow-glow">
            BO
          </span>
          <span className="hidden text-sm font-black tracking-tight sm:block">
            Bryan<span className="text-gradient">Oviedo</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted/70 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href={cvPath} download variant="secondary" className="px-5 py-2.5">
            CV
            <Download className="ml-2 inline h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Abrir menú"
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-border bg-card/70 backdrop-blur-xl"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -14 }}
          className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-4 shadow-soft lg:hidden"
        >
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/75 transition hover:bg-muted/70 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <a
              href={cvPath}
              download
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-black text-primary"
            >
              Descargar CV
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
