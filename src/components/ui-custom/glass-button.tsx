import type { ReactNode } from "react";
import styles from "./glass-button.module.css";

interface GlassButtonProps {
  href: string;
  children: ReactNode;
  variant?: "accent" | "neutral";
  className?: string;
}

export function GlassButton({
  href,
  children,
  variant = "neutral",
  className = "",
}: GlassButtonProps) {
  const variantClass =
    variant === "accent"
      ? "border-accent/40 bg-accent/15 text-accent hover:bg-accent/25 hover:border-accent/70 hover:shadow-[0_0_16px_var(--accent-subtle)]"
      : "border-border/60 bg-bg-secondary/40 text-text-primary hover:bg-bg-secondary/60 hover:border-accent/50 hover:shadow-[0_0_16px_var(--accent-subtle)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 font-body text-xs font-medium backdrop-blur-md transition-all duration-300 active:scale-95 ${variantClass} ${className}`}
    >
      {children}
    </a>
  );
}
