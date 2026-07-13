import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-200 whitespace-nowrap",
        size === "md" ? "text-sm px-5 py-2.5" : "text-base px-6 py-3.5",
        variant === "primary" &&
          "bg-signal text-ink hover:bg-signal-bright active:scale-[0.98]",
        variant === "secondary" &&
          "border border-border-strong text-paper hover:border-signal hover:text-signal-bright",
        variant === "ghost" &&
          "text-paper-dim hover:text-paper",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
