"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

const MotionLink = motion.create(Link);

type Variant = "primary" | "secondary";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_14px_34px_-14px_rgba(0,141,210,0.7)] hover:bg-brand-700",
  secondary:
    "border border-border bg-transparent text-heading hover:bg-surface-2",
};

export function MagneticButton({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const cls = `${base} ${variants[variant]} ${className}`;
  const isInternal = href?.startsWith("/");

  if (href && isInternal) {
    return (
      <MotionLink
        ref={ref as never}
        href={href}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ x: sx, y: sy }}
        className={cls}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        ref={ref as never}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ x: sx, y: sy }}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as never}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cls}
    >
      {children}
    </motion.button>
  );
}
