"use client";

import { useI18n } from "@/app/providers";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { trustIcons } from "@/components/ui/icons";

export function TrustSection() {
  const { t } = useI18n();
  return (
    <Section id="why">
      <Container>
        <SectionHeading eyebrow={t.trust.eyebrow} title={t.trust.title} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((it, i) => {
            const Icon = trustIcons[it.k as keyof typeof trustIcons];
            return (
              <Reveal key={it.k} delay={i * 0.08}>
                <SpotlightCard className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-brand-50 to-brand-100/80 text-brand-600 shadow-xs dark:from-brand-950/60 dark:to-brand-900/40 dark:text-primary-strong group-hover:scale-105 transition-transform duration-300">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-heading group-hover:text-brand-600 transition-colors">
                    {it.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {it.d}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
