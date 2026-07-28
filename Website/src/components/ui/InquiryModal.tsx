"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useI18n } from "@/app/providers";
import { categoryName, Product } from "@/lib/data";
import { Close } from "@/components/ui/icons";

interface InquiryModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ product, isOpen, onClose }: InquiryModalProps) {
  const { t, locale } = useI18n();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 800);
  };

  const handleReset = () => {
    setSent(false);
    onClose();
  };

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

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl z-10 md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted hover:text-heading transition-colors rtl:right-auto rtl:left-5"
            aria-label="Close"
          >
            <Close className="text-base" />
          </button>

          {!sent ? (
            <>
              <div className="mb-6">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-mono font-medium text-brand-600 dark:bg-brand-950/50 dark:text-primary-strong">
                  {t.inquiry.productLabel}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-heading">
                  {t.inquiry.title}
                </h3>
                <p className="mt-1 text-xs text-fg-muted">
                  {t.inquiry.lead}
                </p>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-bg p-3.5 text-xs">
                  <div>
                    <div className="font-medium text-heading text-sm">{product.name[locale]}</div>
                    <div className="text-fg-muted">{categoryName(product.categoryId, locale)}</div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-primary-strong">
                    SKU: {product.sku}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-sm">
                <div>
                  <label className="block mb-1 text-xs font-medium text-fg-muted">
                    {t.inquiry.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Ahmad Mansour"
                    className="w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-heading placeholder:text-fg-muted focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-xs font-medium text-fg-muted">
                      {t.inquiry.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@pharmacy.com"
                      className="w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-heading placeholder:text-fg-muted focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs font-medium text-fg-muted">
                      {t.inquiry.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+962 79 123 4567"
                      className="w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-heading placeholder:text-fg-muted focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium text-fg-muted">
                    {t.inquiry.orgLabel}
                  </label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="e.g. Al-Farabi Pharmacy"
                    className="w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-heading placeholder:text-fg-muted focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium text-fg-muted">
                    {t.inquiry.messageLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Please send pricing sheet for batch order of 100 units."
                    className="w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-heading placeholder:text-fg-muted focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div className="mt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-border px-4 py-2 text-xs font-medium text-fg-muted hover:text-heading transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-brand-600 px-6 py-2.5 text-xs font-medium text-white shadow-md hover:bg-brand-700 transition-colors disabled:opacity-50"
                  >
                    {submitting ? t.inquiry.sendingBtn : t.inquiry.submitBtn}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-heading">
                {t.inquiry.successTitle}
              </h3>
              <p className="mt-2 text-xs text-fg-muted leading-relaxed">
                {t.inquiry.successBody}
              </p>
              <div className="mt-6">
                <button
                  onClick={handleReset}
                  className="rounded-full bg-brand-600 px-6 py-2.5 text-xs font-medium text-white shadow-md hover:bg-brand-700 transition-colors"
                >
                  {t.inquiry.closeBtn}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
