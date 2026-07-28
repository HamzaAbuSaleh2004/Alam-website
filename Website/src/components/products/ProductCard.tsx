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

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onInquire?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onInquire }: ProductCardProps) {
  const { locale } = useI18n();
  const g = gradients[product.categoryId] ?? "from-brand-500 to-brand-700";
  const initials = product.name.en
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <SpotlightCard className="h-full flex flex-col justify-between group">
      <Link href={`/products/${product.slug}`} className="block">
        <div
          className={`relative flex h-36 items-center justify-center bg-linear-to-br ${g}`}
        >
          <span className="font-mono text-3xl font-semibold text-white/95 transition-transform duration-300 group-hover:scale-110">
            {initials}
          </span>
          <span className="absolute bottom-2 font-mono text-[0.6rem] text-white/80 ltr:right-3 rtl:left-3">
            {product.sku}
          </span>
        </div>
        <div className="p-5 pb-3">
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-primary-strong">
            {categoryName(product.categoryId, locale)}
          </div>
          <h3 className="mt-1.5 text-base font-semibold text-heading group-hover:text-brand-600 transition-colors">
            {product.name[locale]}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-fg-muted">
            {product.blurb[locale]}
          </p>
        </div>
      </Link>

      <div className="px-5 pb-5 pt-1 flex items-center justify-between gap-2 border-t border-border/40 mt-auto">
        {onQuickView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-fg-muted hover:border-brand-500 hover:text-heading transition-all"
          >
            Quick View
          </button>
        )}
        {onInquire ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              onInquire(product);
            }}
            className="rounded-full bg-brand-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-xs hover:bg-brand-700 transition-colors"
          >
            Inquire
          </button>
        ) : (
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-medium text-primary-strong hover:underline"
          >
            Details →
          </Link>
        )}
      </div>
    </SpotlightCard>
  );
}
