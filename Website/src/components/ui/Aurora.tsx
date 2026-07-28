import type { CSSProperties } from "react";

/** Soft "medical" aurora — brand-cyan and lime glows. Purely decorative. */
export function Aurora({ className = "" }: { className?: string }) {
  const blobs: CSSProperties[] = [
    {
      width: 540,
      height: 540,
      top: "-16%",
      insetInlineStart: "-8%",
      background: "radial-gradient(circle, rgba(var(--glow-primary),0.55), transparent 62%)",
      animationDelay: "0s",
    },
    {
      width: 460,
      height: 460,
      top: "-6%",
      insetInlineEnd: "-6%",
      background: "radial-gradient(circle, rgba(var(--glow-accent),0.4), transparent 62%)",
      animationDelay: "-6s",
    },
    {
      width: 420,
      height: 420,
      bottom: "-22%",
      insetInlineStart: "32%",
      background: "radial-gradient(circle, rgba(var(--glow-primary),0.32), transparent 60%)",
      animationDelay: "-11s",
    },
  ];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {blobs.map((style, i) => (
        <span key={i} className="aurora-blob" style={style} />
      ))}
    </div>
  );
}
