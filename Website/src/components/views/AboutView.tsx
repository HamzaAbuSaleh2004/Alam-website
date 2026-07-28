"use client";

import { useI18n } from "@/app/providers";
import { PageHeader } from "@/components/site/PageHeader";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaSection } from "@/components/sections/CtaSection";
import { Check } from "@/components/ui/icons";

export function AboutView() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <>
      <PageHeader eyebrow={a.eyebrow} title={a.title} lead={a.body} />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: a.missionTitle, text: a.mission, badge: "🎯 Mission" },
              { label: a.visionTitle, text: a.vision, badge: "👁️ Vision" },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-border bg-surface p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-brand-50 px-3.5 py-1 font-mono text-xs font-semibold text-brand-600 dark:bg-brand-950/60 dark:text-primary-strong">
                      {c.badge}
                    </span>
                    <span className="font-mono text-xs text-fg-muted">Alalam Standard</span>
                  </div>
                  <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-primary-strong">
                    {c.label}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-heading group-hover:text-brand-600 transition-colors">
                    {c.text}
                  </p>
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
                <SpotlightCard className="group h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 font-mono text-xs font-semibold text-brand-600 dark:bg-brand-950/60 dark:text-primary-strong group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-heading group-hover:text-brand-600 transition-colors">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {v.d}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-brand-50/80 via-surface to-brand-100/30 p-8 md:p-10 shadow-sm dark:from-brand-950/40 dark:via-surface dark:to-brand-900/20">
              <div className="flex items-center gap-3">
                <Check className="text-2xl text-emerald-600 dark:text-emerald-400" />
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-strong">
                  {a.complianceTitle}
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-heading">
                {a.compliance}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 font-mono text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                  ✓ Jordan Ministry of Health (MoH) Registered
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 font-mono text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                  ✓ JFDA Compliant & Certified
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <StatsBand />
      <CtaSection />
    </>
  );
}
