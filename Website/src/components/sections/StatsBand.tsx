"use client";

import { useI18n } from "@/app/providers";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { PulseLine } from "@/components/brand/PulseLine";

export function StatsBand() {
  const { t } = useI18n();
  return (
    <Section className="py-0!">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 md:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 opacity-60">
            <PulseLine />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.items.map((s, i) => (
              <Reveal key={i} delay={i * 0.08} className="text-center">
                <div className="font-mono text-4xl font-semibold text-heading md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-fg-muted">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
