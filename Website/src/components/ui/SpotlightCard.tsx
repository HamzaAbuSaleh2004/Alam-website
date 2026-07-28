"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_20px_50px_-24px_rgba(0,141,210,0.45)] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(var(--glow-primary),0.13), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
