import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary-strong">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start"
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`text-balance text-3xl font-semibold md:text-[2.6rem] ${
          isCenter ? "max-w-2xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">{lead}</p>
      ) : null}
    </div>
  );
}
