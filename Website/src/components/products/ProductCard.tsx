"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { categoryName, type Product } from "@/lib/data";

const gradients: Record<string, string> = {
  pharma: "from-brand-500 to-brand-700",
  supplies: "from-brand-400 to-brand-600",
  cosmetics: "from-lime-500 to-brand-500",
  vitamins: "from-lime-400 to-lime-600",
  baby: "from-brand-300 to-lime-500",
};

export function ProductCard({ product }: { product: Product }) {
  const { locale } = useI18n();
  const g = gradients[product.categoryId] ?? "from-brand-500 to-brand-700";
  const initials = product.name.en
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <Link href={`/products/${product.slug}`} className="block h-full">
      <SpotlightCard className="h-full">
        <div
          className={`relative flex h-36 items-center justify-center bg-linear-to-br ${g}`}
        >
          <span className="font-mono text-3xl font-semibold text-white/95">
            {initials}
          </span>
          <span className="absolute bottom-2 font-mono text-[0.6rem] text-white/80 ltr:right-3 rtl:left-3">
            {product.sku}
          </span>
        </div>
        <div className="p-5">
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-primary-strong">
            {categoryName(product.categoryId, locale)}
          </div>
          <h3 className="mt-1.5 text-base font-semibold text-heading">
            {product.name[locale]}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-fg-muted">
            {product.blurb[locale]}
          </p>
        </div>
      </SpotlightCard>
    </Link>
  );
}
