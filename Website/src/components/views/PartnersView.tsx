"use client";

import { useI18n } from "@/app/providers";
import { PageHeader } from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { partners } from "@/lib/data";

export function PartnersView() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t.partners.eyebrow}
        title={t.partners.title}
        lead={t.partners.lead}
      />

      <Section className="!pt-6">
        <Container>
          <p className="font-mono text-xs text-fg-muted">{t.partners.note}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <SpotlightCard className="flex h-full flex-col items-center gap-4 p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 font-mono text-lg font-semibold text-white">
                    {p.monogram}
                  </div>
                  <div className="text-base font-semibold text-heading">{p.name}</div>
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-fg-muted">
                    {t.partners.eyebrow}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
