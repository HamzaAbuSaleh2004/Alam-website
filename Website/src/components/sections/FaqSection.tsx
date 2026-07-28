"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useI18n } from "@/app/providers";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function FaqSection() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>("allCategory");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { key: "allCategory", label: t.faq.allCategory },
    { key: "generalCategory", label: t.faq.generalCategory },
    { key: "orderingCategory", label: t.faq.orderingCategory },
    { key: "deliveryCategory", label: t.faq.deliveryCategory },
  ];

  const filteredItems = t.faq.items.filter((item) => {
    return activeCategory === "allCategory" || item.cat === activeCategory;
  });

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="faq" className="bg-surface relative overflow-hidden border-t border-border">
      <Container>
        <div className="mb-10 text-center max-w-2xl mx-auto flex flex-col items-center">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl text-heading">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-fg-muted text-base leading-relaxed">
            {t.faq.lead}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setOpenIndex(0);
                }}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-brand-600 text-white shadow-sm"
                    : "border border-border bg-bg text-fg-muted hover:border-brand-300 hover:text-heading"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto max-w-3xl flex flex-col gap-3">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-brand-500/50 bg-bg shadow-sm"
                      : "border-border bg-surface hover:border-border/80"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left rtl:text-right"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-heading">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-xs text-fg-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-primary-strong" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/60 px-5 pb-5 pt-3 text-sm text-fg-muted leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
