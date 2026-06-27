"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section
      id="testimonios"
      eyebrow="Confianza"
      title="Detalles que hacen que una web se sienta profesional."
      description="Comentarios de referencia para mostrar cómo puede percibirse una experiencia digital bien ejecutada."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="glass card-hover rounded-[2rem] p-7"
          >
            <div className="mb-5 flex gap-1 text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <p className="leading-7 text-foreground/70">“{testimonial.comment}”</p>

            <div className="mt-7 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-black text-white">
                {testimonial.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <h3 className="font-black">{testimonial.name}</h3>
                <p className="text-sm font-medium text-foreground/55">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}