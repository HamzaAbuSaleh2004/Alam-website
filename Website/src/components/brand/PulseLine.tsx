/** Clean minimalist horizontal divider line. */
export function PulseLine({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`w-full py-1 ${className}`}>
      <div className="h-[1px] w-full bg-linear-to-r from-transparent via-border to-transparent opacity-80" />
    </div>
  );
}
