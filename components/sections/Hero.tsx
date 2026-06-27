"use client";

import Image from "next/image";
import { ArrowRight, Download, MousePointer2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cvPath, heroBadges, heroStats, profile } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-foreground/75 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            {profile.role} · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="max-w-4xl text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
          >
            Construyo software {" "}
            <span className="text-gradient">Fullstack y experiencias VR</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-foreground/70"
          >
            Soy {profile.shortName}, {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-semibold text-foreground/70 backdrop-blur-xl"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.36 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#proyectos">
              Ver proyectos
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Button>

            <Button href={cvPath} download variant="secondary">
              Descargar CV
              <Download className="ml-2 inline h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.44 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass rounded-3xl p-4 text-center card-hover">
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-foreground/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-[0.92] w-full max-w-[500px]"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/35 via-secondary/20 to-accent/30 blur-2xl" />

          <div className="glass relative h-full overflow-hidden rounded-[3rem] p-5 shadow-glow">
            <div className="relative h-full overflow-hidden rounded-[2.45rem] border border-border bg-background/45">
              <Image
                src="/images/profile.jpg"
                alt={`Foto de perfil de ${profile.shortName}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border border-white/15 bg-background/70 p-5 backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
                  Mi portfolio 
                </p>
                <h2 className="mt-2 text-2xl font-black">{profile.name}</h2>

              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-3 top-16 hidden rounded-2xl px-4 py-3 shadow-soft sm:block"
          >
            <p className="text-sm font-black">Unity + C#</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-3 bottom-24 hidden rounded-2xl px-4 py-3 shadow-soft sm:block"
          >
            <p className="text-sm font-black">Node.js + APIs</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold text-foreground/60 backdrop-blur-xl md:flex"
      >
        <MousePointer2 className="h-4 w-4" />
        Desliza para explorar
      </motion.a>
    </section>
  );
}
