"use client";

import { Container, Eyebrow } from "@/components/ui/primitives";
import { Aurora } from "@/components/ui/Aurora";
import { PulseLine } from "@/components/brand/PulseLine";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-36 md:pt-40">
      <Aurora className="opacity-70" />
      <div className="grid-dots pointer-events-none absolute inset-0 -z-10" />
      <Container>
        <div className="flex max-w-3xl flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance text-4xl font-semibold md:text-5xl">{title}</h1>
          {lead ? (
            <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">{lead}</p>
          ) : null}
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0">
        <PulseLine />
      </div>
    </section>
  );
}
