import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:scale-[1.03] hover:shadow-glow",
  secondary:
    "border border-border bg-card/70 text-foreground backdrop-blur-xl hover:border-primary/60 hover:bg-primary/10",
  ghost:
    "text-foreground/80 hover:bg-muted/70 hover:text-foreground"
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps | AnchorProps) {
  const { children, variant = "primary", className, ...rest } = props;

  const classes = cn(
    "focus-ring group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
    variantClasses[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <span className="absolute inset-0 -translate-x-full shimmer opacity-0 transition group-hover:translate-x-full group-hover:opacity-100" />
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span className="absolute inset-0 -translate-x-full shimmer opacity-0 transition group-hover:translate-x-full group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}