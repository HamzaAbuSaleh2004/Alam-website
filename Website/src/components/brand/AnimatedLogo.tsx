import type { CSSProperties } from "react";

/**
 * Aalam brand mark — PLACEHOLDER.
 * A "pulse ring": a cyan ring with a lime heartbeat spike, echoing the
 * medical identity. Swap this SVG for the real vector logo when supplied.
 *
 * `animate` self-draws the strokes (used large in the hero); otherwise the
 * mark renders fully drawn (used small in the navbar/footer).
 */
export function AnimatedLogo({
  size = 48,
  animate = false,
  className = "",
}: {
  size?: number;
  animate?: boolean;
  className?: string;
}) {
  const ring: CSSProperties = {
    strokeDasharray: 1,
    strokeDashoffset: animate ? 1 : 0,
    animation: animate ? "draw-stroke 1.5s ease-out forwards" : undefined,
    ["--dash" as string]: 1,
  };
  const pulse: CSSProperties = {
    strokeDasharray: 1,
    strokeDashoffset: animate ? 1 : 0,
    animation: animate ? "draw-stroke 1.1s ease-out 0.7s forwards" : undefined,
    ["--dash" as string]: 1,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label="Aalam Drug Store"
      className={className}
    >
      <circle
        cx="60"
        cy="60"
        r="44"
        pathLength={1}
        stroke="var(--primary)"
        strokeWidth="7"
        strokeLinecap="round"
        style={ring}
      />
      <path
        d="M24 62 H46 L54 38 L66 84 L74 62 H96"
        pathLength={1}
        stroke="var(--accent-strong)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={pulse}
      />
    </svg>
  );
}
