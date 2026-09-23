import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function InteractiveHoverButton({ children, className, href, ...props }) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-[var(--border)] bg-[var(--ink)] p-2 px-6 text-center font-semibold text-[var(--bg)] transition-[transform,opacity] duration-150 ease-[ease] hover:-translate-y-px hover:opacity-[.92]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[var(--accent)] transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[var(--bg)] opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="size-4" />
      </div>
    </Component>
  );
}
