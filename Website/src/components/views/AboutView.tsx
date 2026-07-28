"use client";

import { useI18n } from "@/app/providers";
import { PageHeader } from "@/components/site/PageHeader";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaSection } from "@/components/sections/CtaSection";

export function AboutView() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <>
      <PageHeader eyebrow={a.eyebrow} title={a.title} lead={a.body} />

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { label: a.missionTitle, text: a.mission },
              { label: a.visionTitle, text: a.vision },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-primary-strong">
                    {c.label}
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-fg">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading eyebrow={a.eyebrow} title={a.valuesTitle} />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {a.values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <SpotlightCard className="h-full p-7">
                  <span className="font-mono text-sm text-primary-strong">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-heading">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{v.d}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-border bg-linear-to-br from-brand-50 to-transparent p-8 dark:from-[color-mix(in_srgb,var(--primary)_12%,transparent)]">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-primary-strong">
                {a.complianceTitle}
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-fg">
                {a.compliance}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <StatsBand />
      <CtaSection />
    </>
  );
}
