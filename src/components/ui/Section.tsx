import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
  divider = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-section", divider && "hairline", className)}
    >
      {children}
    </section>
  );
}
