"use client";

import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { projects, type TechAsset } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

function TechIcon({ tech }: { tech: TechAsset }) {
  const initials = tech.name
    .split(/\s|\.|-|\//)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <span
      className="group relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/65 p-2 transition hover:-translate-y-1 hover:border-primary/60"
      title={tech.name}
      aria-label={tech.name}
    >
      <img
        src={tech.icon}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;

          if (fallback instanceof HTMLElement) {
            fallback.style.display = "grid";
          }
        }}
      />
      <span className="hidden h-full w-full place-items-center rounded-xl bg-primary/10 text-xs font-black text-primary">
        {initials}
      </span>
    </span>
  );
}

function ProjectImage({
  src,
  title,
  index
}: {
  src: string;
  title: string;
  index: number;
}) {
  return (
    <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/25">
      <img
        src={src}
        alt={`Imagen del proyecto ${title}`}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;

          if (fallback instanceof HTMLElement) {
            fallback.style.display = "flex";
          }
        }}
      />

      <div className="hidden absolute inset-0 flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="grid h-20 w-20 place-items-center rounded-[1.75rem] border border-white/20 bg-background/65 shadow-soft backdrop-blur-xl">
          <span className="text-3xl font-black text-gradient">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="max-w-xs text-sm font-bold leading-6 text-foreground/70">
          Agrega la imagen del proyecto en public/images/projects/ para reemplazar este placeholder.
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
      <div className="absolute inset-0 grid-mask opacity-20" />

      <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-background/70 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary backdrop-blur-xl">
        Proyecto {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title="Proyectos desarrollados en web, mobile, backend y realidad virtual."
      description="Una selección de trabajos académicos, profesionales y especializados aplicados a gestión, educación, salud e innovación tecnológica."
    >
      <div className="grid gap-7">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            className="glass card-hover group overflow-hidden rounded-[2.5rem]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <ProjectImage
                src={project.image}
                title={project.title}
                index={index}
              />

              <div className="p-7 sm:p-9">
                <div className="mb-5 flex flex-wrap gap-3 text-sm font-bold text-foreground/60">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/55 px-4 py-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {project.role}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/55 px-4 py-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {project.period}
                  </span>
                </div>

                <p className="text-sm font-bold text-primary">
                  {project.place}
                </p>

                <p className="mt-5 leading-8 text-foreground/70">
                  {project.summary}
                </p>

                <div className="mt-7">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-foreground/45">
                    Participación
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {project.participation.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-2xl border border-border bg-background/45 p-4 text-sm leading-6 text-foreground/70"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-foreground/45">
                    Tecnologías
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <TechIcon key={`${project.title}-${tech.name}`} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="py-2.5"
                  >
                    Ver Repositorio
                    <ArrowUpRight className="ml-2 inline h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
