"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { Logo } from "@/components/brand/Logo";
import { PulseLine } from "@/components/brand/PulseLine";
import { Clock, MapPin, Phone } from "@/components/ui/icons";

const routes = [
  { href: "/about", key: "about" as const },
  { href: "/products", key: "products" as const },
  { href: "/contact", key: "contact" as const },
];

export function Footer() {
  const { t } = useI18n();
  const year = 2026; // static to avoid hydration/build-time drift

  return (
    <footer className="relative mt-8 border-t border-border bg-surface">
      <PulseLine className="opacity-70" />
      <div className="mx-auto max-w-[1180px] px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="text-base font-semibold text-heading">
                {t.brand.name}
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              {t.footer.blurb}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg-muted">
              {t.footer.nav}
            </h3>
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-sm text-fg transition-colors hover:text-primary-strong"
              >
                {t.nav[r.key]}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg-muted">
              {t.footer.contact}
            </h3>
            <span className="flex items-start gap-2.5 text-sm text-fg">
              <MapPin className="mt-0.5 text-base text-primary-strong" />
              {t.contact.address}
            </span>
            <a
              href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 text-sm text-fg transition-colors hover:text-primary-strong"
            >
              <Phone className="text-base text-primary-strong" />
              <span dir="ltr">{t.contact.phone}</span>
            </a>
            <span className="flex items-center gap-2.5 text-sm text-fg">
              <Clock className="text-base text-primary-strong" />
              {t.contact.hours}
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-fg-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {t.brand.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
