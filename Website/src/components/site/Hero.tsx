"use client";

import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "@/app/providers";
import { HeroVideo } from "@/components/site/HeroVideo";
import { PulseLine } from "@/components/brand/PulseLine";
import { Aurora } from "@/components/ui/Aurora";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Check } from "@/components/ui/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  const chips = [t.trust.items[0].t, t.trust.items[1].t, t.trust.items[2].t];

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center">
      <Aurora />
      <div className="grid-dots pointer-events-none absolute inset-0 -z-10" />

      {/* HERO CENTREPIECE — the real animated brand logo (intro → settle) */}
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex w-full justify-center"
      >
        <HeroVideo />
      </motion.div>

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        className="flex max-w-3xl flex-col items-center gap-6"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] px-4 py-1.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-primary-strong backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {t.hero.eyebrow}
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold leading-[1.05] md:text-6xl"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl"
        >
          {t.hero.lead}
        </motion.p>

        <motion.div variants={item} className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/contact">
            {t.hero.primary}
            <ArrowRight className="text-base rtl:-scale-x-100" />
          </MagneticButton>
          <MagneticButton href="/products" variant="secondary">
            {t.hero.secondary}
          </MagneticButton>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-fg-muted"
        >
          {chips.map((c) => (
            <li key={c} className="inline-flex items-center gap-1.5">
              <Check className="text-base text-accent-strong" />
              {c}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0">
        <PulseLine />
      </div>

      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-fg-muted"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            {t.hero.scroll}
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}
