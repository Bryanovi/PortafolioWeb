"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { certificates, type Certificate } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const openCertificate = (certificate: Certificate) => {
    setActiveCertificate(certificate);
    setIsFlipped(false);
  };

  const closeCertificate = () => {
    setActiveCertificate(null);
    setIsFlipped(false);
  };

  useEffect(() => {
    if (!activeCertificate) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCertificate();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCertificate]);

  return (
    <Section
      id="certificados"
      eyebrow="Certificados"
      title="Certificados y participación académica"
      description="Haz click en cualquier certificado para verlo en pantalla completa. Dentro del modal puedes girar la tarjeta y revisar la descripción completa."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((certificate, index) => (
          <motion.button
            key={certificate.title}
            type="button"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
            onClick={() => openCertificate(certificate)}
            className="focus-ring group text-left"
            aria-label={`Abrir certificado ${certificate.title}`}
          >
            <div className="glass card-hover overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[1018/781] overflow-hidden rounded-[1.45rem] border border-border bg-background/70">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-contain p-2 transition duration-700 group-hover:scale-[1.025]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    const fallback = event.currentTarget.nextElementSibling;
                    if (fallback instanceof HTMLElement) {
                      fallback.classList.remove("hidden");
                    }
                  }}
                />

                <div className="hidden h-full w-full place-items-center bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25 p-6 text-center">
                  <div>
                    <p className="text-4xl font-black text-gradient">CERT</p>
                    <p className="mt-4 text-sm font-bold text-foreground/70">
                      {certificate.title}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              <div className="px-2 pb-1 pt-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                  Ver certificado
                </p>
                <h3 className="mt-2 text-base font-black leading-tight">
                  {certificate.title}
                </h3>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/88 px-4 py-5 backdrop-blur-2xl sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Información del certificado ${activeCertificate.title}`}
              initial={{ opacity: 0, y: 34, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative h-[min(90vh,820px)] w-full max-w-6xl [perspective:1800px]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeCertificate}
                className="focus-ring absolute -top-3 right-0 z-20 grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:border-primary/60 hover:text-primary sm:-right-3"
                aria-label="Cerrar modal de certificado"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className="relative h-full w-full rounded-[2rem] transition duration-700 [transform-style:preserve-3d]"
                style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                <div className="glass absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] p-4 shadow-glow [backface-visibility:hidden] sm:p-5">
                  <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">
                        Certificado
                      </p>
                      <h3 className="mt-2 text-xl font-black leading-tight sm:text-2xl">
                        {activeCertificate.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsFlipped(true)}
                      className="focus-ring rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-black text-foreground/75 transition hover:border-primary/60 hover:text-primary"
                    >
                      Ver descripción
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    className="focus-ring mt-4 grid min-h-0 flex-1 place-items-center overflow-hidden rounded-[1.5rem] border border-border bg-background/60 p-3"
                    aria-label="Girar certificado para ver descripción"
                  >
                    <img
                      src={activeCertificate.image}
                      alt={activeCertificate.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </button>

                  <p className="pt-3 text-center text-xs font-semibold text-foreground/45">
                    Click sobre la imagen para girar y leer la descripción completa.
                  </p>
                </div>

                <div className="glass absolute inset-0 overflow-hidden rounded-[2rem] p-5 shadow-glow [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">
                          {activeCertificate.period}
                        </p>
                        <h3 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
                          {activeCertificate.title}
                        </h3>
                        <p className="mt-3 text-sm font-semibold text-foreground/55 sm:text-base">
                          {activeCertificate.issuer}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsFlipped(false)}
                        className="focus-ring shrink-0 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-black text-foreground/75 transition hover:border-primary/60 hover:text-primary"
                      >
                        Ver certificado
                      </button>
                    </div>

                    <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-1">
                      <p className="max-w-4xl text-base leading-8 text-foreground/75 sm:text-lg">
                        {activeCertificate.description}
                      </p>

                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {activeCertificate.details.map((detail) => (
                          <div
                            key={detail}
                            className="rounded-3xl border border-border bg-background/55 p-5"
                          >
                            <div className="mb-4 h-2 w-12 rounded-full bg-primary" />
                            <p className="text-sm leading-7 text-foreground/70 sm:text-base">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="pt-5 text-xs font-black uppercase tracking-[0.22em] text-foreground/40">
                      Presiona Escape o la X para cerrar.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
