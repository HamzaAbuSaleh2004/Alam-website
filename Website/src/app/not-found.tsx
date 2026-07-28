"use client";

import { useI18n } from "@/app/providers";
import { Logo } from "@/components/brand/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight } from "@/components/ui/icons";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center gap-6 px-6 text-center">
      <Logo size={72} />
      <div className="font-mono text-6xl font-semibold text-heading">404</div>
      <p className="max-w-md text-fg-muted">
        {t.meta.dir === "rtl"
          ? "الصفحة غير موجودة."
          : "We couldn't find that page."}
      </p>
      <MagneticButton href="/">
        {t.nav.home}
        <ArrowRight className="text-base rtl:-scale-x-100" />
      </MagneticButton>
    </section>
  );
}
