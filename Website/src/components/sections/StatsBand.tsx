"use client";

import { useI18n } from "@/app/providers";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { PulseLine } from "@/components/brand/PulseLine";

export function StatsBand() {
  const { t } = useI18n();
  return (
    <Section className="py-6!">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-10 shadow-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0">
            <PulseLine />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.items.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-bg/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-bg hover:shadow-md">
                  <div className="font-mono text-4xl font-semibold tracking-tight text-heading md:text-5xl group-hover:text-brand-600 transition-colors">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs font-medium text-fg-muted uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
