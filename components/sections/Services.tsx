"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export function Services() {
  return (
    <Section
      id="servicios"
      eyebrow="Servicios"
      title="Soluciones digitales con diseño, código y movimiento."
      description="Desde una landing page profesional hasta una interfaz animada y responsive lista para producción."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.65, delay: index * 0.07 }}
              className="glass card-hover group relative overflow-hidden rounded-[2rem] p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 transition group-hover:opacity-100" />

              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:rotate-6 group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-foreground/65">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}