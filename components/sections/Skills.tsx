"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillGroups, type TechAsset } from "@/lib/data";
import { Section } from "@/components/ui/Section";

function SkillIcon({ tech, index }: { tech: TechAsset; index: number }) {
  const initials = tech.name
    .split(/\s|\.|\//)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      className="group relative"
    >
      <div className="glass card-hover flex min-h-36 flex-col items-center justify-center gap-4 rounded-[2rem] p-5 text-center sm:min-h-40">
        <div className="grid h-20 w-20 place-items-center rounded-[1.65rem] border border-border bg-background/65 p-4 shadow-soft transition group-hover:scale-110 sm:h-24 sm:w-24">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-full w-full object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              const fallback = event.currentTarget.nextElementSibling;
              if (fallback instanceof HTMLElement) {
                fallback.style.display = "grid";
              }
            }}
          />
          <span className="hidden h-full w-full place-items-center rounded-2xl bg-primary/10 text-lg font-black text-primary">
            {initials}
          </span>
        </div>

        <p className="text-sm font-black text-foreground/80 sm:text-base">
          {tech.name}
        </p>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? skillGroups.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === skillGroups.length - 1 ? 0 : current + 1
    );
  };

  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Stack técnico organizado por áreas."
      description="Usa las flechas para navegar entre lenguajes, backend, frontend, bases de datos y herramientas."
    >
      <div className="glass overflow-hidden rounded-[2.5rem] p-5 shadow-soft sm:p-8">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={previous}
            aria-label="Ver categoría anterior"
            className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-border bg-background/70 transition hover:border-primary/60 hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                Categoría {String(activeIndex + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
                {activeGroup.title}
              </h3>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={next}
            aria-label="Ver categoría siguiente"
            className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-border bg-background/70 transition hover:border-primary/60 hover:text-primary sm:order-none"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {activeGroup.items.map((tech, index) => (
              <SkillIcon key={`${activeGroup.title}-${tech.name}`} tech={tech} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-2">
          {skillGroups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${group.title}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-10 bg-primary"
                  : "w-2.5 bg-foreground/20 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
