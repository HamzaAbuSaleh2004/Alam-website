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
                <SpotlightCard className="h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-[color-mix(in_srgb,var(--primary)_18%,transparent)] dark:text-primary-strong">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-heading">{it.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{it.d}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
