"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { categoryName, type Product } from "@/lib/data";
import { ArrowRight } from "@/components/ui/icons";

const gradients: Record<string, string> = {
  pharma: "from-brand-500 to-brand-700",
  supplies: "from-brand-400 to-brand-600",
  cosmetics: "from-lime-500 to-brand-500",
  vitamins: "from-lime-400 to-lime-600",
  baby: "from-brand-300 to-lime-500",
};

export function ProductDetailView({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { t, locale } = useI18n();
  const g = gradients[product.categoryId] ?? "from-brand-500 to-brand-700";
  const initials = product.name.en
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <>
      <Section className="pt-32! md:pt-36!">
        <Container>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-primary-strong"
          >
            <ArrowRight className="text-base ltr:rotate-180 rtl:rotate-0" />
            {t.products.back}
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <div
                className={`relative flex h-72 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br md:h-80 ${g}`}
              >
                <span className="font-mono text-6xl font-semibold text-white/95">
                  {initials}
                </span>
                <span className="absolute bottom-4 font-mono text-xs text-white/80 ltr:right-5 rtl:left-5">
                  {product.sku}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary-strong">
                {categoryName(product.categoryId, locale)}
              </span>
              <h1 className="text-balance text-3xl font-semibold md:text-4xl">
                {product.name[locale]}
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-fg-muted">
                  {t.products.sku}: {product.sku}
                </span>
                <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-fg-muted">
                  {t.products.category}: {categoryName(product.categoryId, locale)}
                </span>
              </div>
              <p className="text-lg leading-relaxed text-fg-muted">
                {product.blurb[locale]}
              </p>
              <div className="hairline my-2" />
              <p className="text-sm text-fg-muted">{t.products.viewNote}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="pt-0!">
          <Container>
            <h2 className="mb-8 text-xl font-semibold text-heading">
              {t.products.relatedTitle}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaSection />
    </>
  );
}
