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
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {t.services.items.map((it, i) => (
              <div
                key={i}
                className="group flex h-full gap-5 bg-bg p-7 transition-colors duration-300 hover:bg-surface-2"
              >
                <span className="font-mono text-sm text-primary-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-heading">{it.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
