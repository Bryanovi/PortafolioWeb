"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10", className)}
    >
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              {eyebrow}
            </p>
          )}

          {title && (
            <h2 className="text-balance text-3xl font-black tracking-tight sm:text-5xl">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-5 text-pretty text-base leading-8 text-foreground/70 sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      )}

      {children}
    </section>
  );
}