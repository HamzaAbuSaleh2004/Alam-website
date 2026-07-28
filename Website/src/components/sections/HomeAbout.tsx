"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { Container, Section, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/brand/Logo";
import { PulseLine } from "@/components/brand/PulseLine";
import { ArrowRight, Check } from "@/components/ui/icons";

export function HomeAbout() {
  const { t } = useI18n();
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className="text-balance text-3xl font-semibold md:text-[2.5rem]">
              {t.about.title}
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-fg-muted">
              {t.about.body}
            </p>
            <ul className="mt-1 flex flex-col gap-3">
              {t.about.values.map((v) => (
                <li key={v.t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-strong">
                    <Check className="text-sm" />
                  </span>
                  <span className="text-sm text-fg">
                    <span className="font-semibold text-heading">{v.t}.</span>{" "}
                    {v.d}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary-strong transition-colors hover:text-brand-700"
            >
              {t.about.eyebrow}
              <ArrowRight className="text-base rtl:-scale-x-100" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-10">
              <div className="flex items-center gap-4">
                <Logo size={64} />
                <div>
                  <div className="text-lg font-semibold text-heading">
                    {t.brand.name}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-fg-muted">
                    {t.about.complianceTitle}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-fg-muted">
                {t.about.compliance}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["MoH", "JFDA"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border bg-bg px-3 py-1 font-mono text-xs font-medium text-primary-strong"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <PulseLine />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
