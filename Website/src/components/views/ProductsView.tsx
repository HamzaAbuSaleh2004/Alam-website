"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { useI18n } from "@/app/providers";
import { PageHeader } from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/primitives";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { InquiryModal } from "@/components/ui/InquiryModal";
import { categories, categoryName, products, Product } from "@/lib/data";
import { Search } from "@/components/ui/icons";

function chip(active: boolean) {
  return `rounded-full px-4 py-2 text-sm font-medium transition-all ${
    active
      ? "bg-brand-600 text-white shadow-sm"
      : "border border-border text-fg-muted hover:border-brand-400 hover:text-heading"
  }`;
}

export function ProductsView() {
  const { t, locale } = useI18n();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  // Modal States
  const [selectedQuickView, setSelectedQuickView] = useState<Product | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Product | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    categories.forEach((c) => {
      counts[c.id] = products.filter((p) => p.categoryId === c.id).length;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = !cat || p.categoryId === cat;
      const matchQ =
        !s ||
        p.name.en.toLowerCase().includes(s) ||
        p.name.ar.includes(q.trim()) ||
        p.sku.toLowerCase().includes(s) ||
        categoryName(p.categoryId, locale).toLowerCase().includes(s);
      return matchCat && matchQ;
    });
  }, [q, cat, locale]);

  const hasActiveFilter = Boolean(q || cat);

  return (
    <>
      <PageHeader
        eyebrow={t.products.eyebrow}
        title={t.products.title}
        lead={t.products.lead}
      />

      <Section className="pt-6!">
        <Container>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative max-w-md flex-1 min-w-[260px]">
                <Search className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-base text-fg-muted ltr:left-4 rtl:right-4" />
                <input
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={t.products.search}
                  aria-label={t.products.search}
                  className="w-full rounded-full border border-border bg-surface py-3 text-sm outline-none transition-colors focus:border-brand-400 ltr:pl-11 ltr:pr-4 rtl:pr-11 rtl:pl-4"
                />
              </div>

              {hasActiveFilter && (
                <button
                  onClick={() => {
                    setQ("");
                    setCat(null);
                  }}
                  className="rounded-full border border-dashed border-border px-4 py-2.5 text-xs font-medium text-fg-muted hover:text-heading hover:border-brand-400 transition-colors"
                >
                  Reset Filters ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button className={chip(cat === null)} onClick={() => setCat(null)}>
                {t.products.all} ({categoryCounts.all})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={chip(cat === c.id)}
                  onClick={() => setCat(c.id)}
                >
                  {c.name[locale]} ({categoryCounts[c.id] || 0})
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-fg-muted">
              <span className="font-mono">
                {filtered.length}{" "}
                {filtered.length === 1
                  ? t.products.resultsOne
                  : t.products.resultsMany}
              </span>
              <span>{t.products.viewNote}</span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-12 text-center text-fg-muted">
              {t.products.empty}
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProductCard
                      product={p}
                      onQuickView={(prod) => setSelectedQuickView(prod)}
                      onInquire={(prod) => setSelectedInquiry(prod)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </Container>
      </Section>

      {/* Modals */}
      <QuickViewModal
        product={selectedQuickView}
        isOpen={Boolean(selectedQuickView)}
        onClose={() => setSelectedQuickView(null)}
        onOpenInquiry={(prod) => {
          setSelectedQuickView(null);
          setSelectedInquiry(prod);
        }}
      />

      <InquiryModal
        product={selectedInquiry}
        isOpen={Boolean(selectedInquiry)}
        onClose={() => setSelectedInquiry(null)}
      />

      <CtaSection />
    </>
  );
}
