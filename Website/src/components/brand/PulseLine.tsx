const PATH = "M0 30 H520 L545 30 L560 10 L580 50 L600 30 L625 30 H1200";

/** Decorative EKG/heartbeat divider — the recurring brand motif. */
export function PulseLine({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        width="100%"
        height="36"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="alalam-pulse" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--primary)" stopOpacity="0.12" />
            <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.7" />
            <stop offset="1" stopColor="var(--accent-strong)" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          d={PATH}
          stroke="url(#alalam-pulse)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={PATH}
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: "4 18", animation: "pulse-travel 2.6s linear infinite" }}
        />
      </svg>
    </div>
  );
}
