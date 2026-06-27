import { ArrowUpRight, Download, Mail } from "lucide-react";
import { cvPath, navItems, profile, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="#inicio" className="text-2xl font-black tracking-tight">
              Bryan<span className="text-gradient">Oviedo</span>
            </a>
            <p className="mt-4 max-w-md leading-7 text-foreground/60">
              {profile.role} enfocado en desarrollo web, backend, realidad virtual y soluciones digitales escalables.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-bold text-foreground/70 transition hover:border-primary/60 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-foreground/45">
              Navegación
            </h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-foreground/62 transition hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-foreground/45">
              Enlaces
            </h3>
            <div className="mt-5 grid gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/62 transition hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-foreground/45">
              Recursos
            </h3>
            <div className="mt-5 grid gap-3">
              <a
                href={cvPath}
                download
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/62 transition hover:text-primary"
              >
                Descargar CV
                <Download className="h-3.5 w-3.5" />
              </a>
              <a
                href="#inicio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/62 transition hover:text-primary"
              >
                Volver arriba
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm font-medium text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.shortName}. Todos los derechos reservados.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
