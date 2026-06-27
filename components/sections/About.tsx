"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Section } from "@/components/ui/Section";

const aboutCards = [
  {
    title: "Perfil profesional",
    description:
      "Experiencia en implementación de soluciones tecnológicas, optimización de sistemas y diseño de aplicaciones personalizadas con enfoque en funcionalidad, calidad y escalabilidad.",
    icon: Briefcase
  },
  {
    title: "Formación",
    description:
      "Ingeniero de Software por la Universidad Técnica de Ambato, con trayectoria académica orientada a desarrollo web, innovación tecnológica y soluciones aplicadas.",
    icon: GraduationCap
  },
  {
    title: "Ubicación",
    description:
      "Ubicado en Ambato, Ecuador. Disponible para colaboración remota y proyectos globales en ingeniería Full Stack, desarrollo de APIs y soluciones de Realidad Virtual.",
    icon: MapPin
  }
];

export function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Software intuitivo, escalable y funcional."
      description={profile.headline}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7 }}
          className="glass card-hover relative overflow-hidden rounded-[2rem] p-7 sm:p-9"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-primary">
              {profile.role}
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              {profile.name}
            </h3>
            <p className="mt-5 text-pretty leading-8 text-foreground/70">
              {profile.summary}
            </p>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-foreground/70">
              <span className="rounded-2xl border border-border bg-background/55 px-4 py-3">
                Especialidad: Full Stack & VR
              </span>
              <span className="rounded-2xl border border-border bg-background/55 px-4 py-3">
                Enfoque: UX, Escalabilidad y Calidad
              </span>
              <span className="rounded-2xl border border-border bg-background/55 px-4 py-3">
                Idiomas: Español (Nativo) · Inglés intermedio
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="glass card-hover rounded-[2rem] p-6"
              >
                <div className="flex gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">{card.title}</h3>
                    <p className="mt-3 leading-7 text-foreground/65">{card.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
