"use client";

import { useI18n } from "@/app/providers";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesSection() {
  const { t } = useI18n();
  return (
    <Section id="services" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          lead={t.services.lead}
        />
        <Reveal className="mt-12">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 shadow-sm">
            {t.services.items.map((it, i) => (
              <div
                key={i}
                className="group flex h-full gap-5 bg-bg p-8 transition-all duration-300 hover:bg-surface hover:shadow-inner"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-mono text-xs font-semibold text-brand-600 dark:bg-brand-950/60 dark:text-primary-strong group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-heading group-hover:text-brand-600 transition-colors">
                    {it.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {it.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
