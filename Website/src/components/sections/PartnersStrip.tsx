"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { Container, Section, Eyebrow } from "@/components/ui/primitives";
import { Marquee } from "@/components/ui/Marquee";
import { partners } from "@/lib/data";
import { ArrowRight } from "@/components/ui/icons";

export function PartnerChip({ monogram, name }: { monogram: string; name: string }) {
  return (
    <div className="flex h-16 w-44 shrink-0 items-center gap-3 rounded-xl border border-border bg-surface px-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 font-mono text-xs font-semibold text-brand-600 dark:bg-[color-mix(in_srgb,var(--primary)_18%,transparent)] dark:text-primary-strong">
        {monogram}
      </span>
      <span className="text-sm font-medium text-fg">{name}</span>
    </div>
  );
}

export function PartnersStrip() {
  const { t } = useI18n();
  return (
    <Section id="partners" className="bg-surface">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Eyebrow>{t.partners.eyebrow}</Eyebrow>
            <h2 className="max-w-xl text-2xl font-semibold md:text-3xl">
              {t.partners.title}
            </h2>
          </div>
        </div>
      </Container>
      <Marquee>
        {partners.map((p) => (
          <PartnerChip key={p.name} monogram={p.monogram} name={p.name} />
        ))}
      </Marquee>
    </Section>
  );
}
