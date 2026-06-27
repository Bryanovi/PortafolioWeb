"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

function ContactImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7 }}
      className="glass card-hover relative min-h-[520px] overflow-hidden rounded-[2.5rem] p-7 sm:p-9"
    >
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute inset-0 grid-mask opacity-20" />

      <div className="relative flex h-full min-h-[450px] flex-col justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">
            Contacto directo
          </p>
          <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Conectemos y construyamos algo funcional.
          </h3>
        </div>

        <div className="relative mx-auto mt-8 aspect-square w-full max-w-[320px]">
          <Image
            src="/images/contact-character.png"
            alt="Ilustración de contacto"
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <div className="mt-8 grid gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-2xl border border-border bg-background/55 px-4 py-3 text-sm font-semibold text-foreground/70 transition hover:border-primary/60 hover:text-foreground"
          >
            <span className="text-primary">Email: </span>
            {profile.email}
          </a>

          <a
            href="tel:+593959564825"
            className="rounded-2xl border border-border bg-background/55 px-4 py-3 text-sm font-semibold text-foreground/70 transition hover:border-primary/60 hover:text-foreground"
          >
            <span className="text-primary">Teléfono: </span>
            {profile.phone}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3500);
  };

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="¿Tienes una idea o proyecto? Hablemos."
      description="Puedes escribirme para colaborar en software, interfaces, backend o experiencias inmersivas."
      className="pb-28"
    >
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <ContactImage />

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-[2.5rem] p-7 shadow-soft sm:p-9"
        >
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-3xl border border-border bg-background/55 p-5 transition hover:border-primary/60"
            >
              <Mail className="h-6 w-6 text-primary" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-foreground/45">
                Email
              </p>
              <p className="mt-1 break-all text-sm font-bold">{profile.email}</p>
            </a>

            <a
              href="tel:+593959564825"
              className="rounded-3xl border border-border bg-background/55 p-5 transition hover:border-primary/60"
            >
              <Phone className="h-6 w-6 text-primary" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-foreground/45">
                Teléfono
              </p>
              <p className="mt-1 text-sm font-bold">{profile.phone}</p>
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-foreground/70">Nombre</span>
              <input
                required
                name="name"
                placeholder="Tu nombre"
                className="focus-ring rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-primary"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-foreground/70">Email</span>
              <input
                required
                name="email"
                type="email"
                placeholder="tu@email.com"
                className="focus-ring rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-primary"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-bold text-foreground/70">Mensaje</span>
            <textarea
              required
              name="message"
              rows={8}
              placeholder="Cuéntame sobre tu proyecto..."
              className="focus-ring resize-none rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition placeholder:text-foreground/35 focus:border-primary"
            />
          </label>

          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button type="submit">
              Enviar mensaje
              <Send className="ml-2 inline h-4 w-4" />
            </Button>

            {sent && (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                Mensaje listo para conectar con tu backend.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
