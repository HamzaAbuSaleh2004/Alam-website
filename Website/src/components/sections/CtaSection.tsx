"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Whatsapp } from "@/components/ui/icons";

export function CtaSection() {
  const { t } = useI18n();
  const wa = `https://wa.me/${t.contact.phone.replace(/[^\d]/g, "")}`;

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand-500 to-brand-700 px-8 py-16 text-center md:px-12 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <h2 className="text-balance text-3xl font-semibold text-white md:text-[2.6rem]">
                {t.contact.title}
              </h2>
              <p className="text-lg leading-relaxed text-white/85">
                {t.contact.lead}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  {t.nav.cta}
                  <ArrowRight className="text-base rtl:-scale-x-100" />
                </Link>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Whatsapp className="text-base" />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
