"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useI18n } from "@/app/providers";
import { categoryName, Product } from "@/lib/data";
import { Close } from "@/components/ui/icons";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: (p: Product) => void;
}

export function QuickViewModal({
  product,
  isOpen,
  onClose,
  onOpenInquiry,
}: QuickViewModalProps) {
  const { t, locale } = useI18n();

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl z-10 md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted hover:text-heading transition-colors rtl:right-auto rtl:left-5"
            aria-label="Close"
          >
            <Close className="text-base" />
          </button>

          <div className="flex flex-col gap-5">
            {/* Header info */}
            <div>
              <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-mono font-medium text-brand-600 dark:bg-brand-950/50 dark:text-primary-strong">
                {categoryName(product.categoryId, locale)}
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-heading">
                {product.name[locale]}
              </h3>
              <div className="mt-1 font-mono text-xs text-fg-muted">
                SKU: <span className="font-semibold text-heading">{product.sku}</span>
              </div>
            </div>

            <p className="text-sm text-fg leading-relaxed">
              {product.blurb[locale]}
            </p>

            {/* Product details grid */}
            <div className="grid gap-3 rounded-2xl border border-border bg-bg p-4 sm:grid-cols-2 text-xs">
              <div>
                <span className="text-fg-muted block mb-0.5">{t.quickView.storage}:</span>
                <span className="font-medium text-heading">15°C – 25°C Controlled Room Temp</span>
              </div>
              <div>
                <span className="text-fg-muted block mb-0.5">{t.quickView.manufacturer}:</span>
                <span className="font-medium text-heading">Jordan / MoH Registered Partner</span>
              </div>
              <div>
                <span className="text-fg-muted block mb-0.5">{t.quickView.license}:</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">✓ JFDA Approved & Certified</span>
              </div>
              <div>
                <span className="text-fg-muted block mb-0.5">Fulfillment Status:</span>
                <span className="font-medium text-heading">In Stock · Ready for Dispatch</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border">
              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="text-xs font-medium text-primary-strong hover:underline"
              >
                {t.quickView.fullDetailsBtn} →
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium text-fg-muted hover:text-heading transition-colors"
                >
                  {t.quickView.closeBtn}
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry(product);
                  }}
                  className="rounded-full bg-brand-600 px-5 py-2 text-xs font-medium text-white shadow-md hover:bg-brand-700 transition-colors"
                >
                  {t.quickView.inquireBtn}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
