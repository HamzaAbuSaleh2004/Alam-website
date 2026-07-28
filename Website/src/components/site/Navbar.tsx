"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useI18n } from "@/app/providers";
import { Logo } from "@/components/brand/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Close, Globe, Menu, Moon, Sun } from "@/components/ui/icons";

const routes = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/partners", key: "partners" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const { t, toggleLocale, theme, toggleTheme } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-6 md:h-[72px] md:px-10">
          <Link href="/" className="flex items-center gap-2.5" aria-label={t.brand.name}>
            <Logo size={34} />
            <span className="flex flex-col leading-none">
              <span className="text-[0.95rem] font-semibold text-heading">
                {t.brand.name}
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-fg-muted">
                Drug Store
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive(r.href)
                    ? "text-heading"
                    : "text-fg-muted hover:text-primary-strong"
                }`}
              >
                {t.nav[r.key]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLocale}
              className="flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium text-fg-muted transition-colors hover:text-primary-strong"
              aria-label="Switch language"
            >
              <Globe className="text-sm" />
              {t.meta.switchTo}
            </button>
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-primary-strong"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="text-base" /> : <Moon className="text-base" />}
            </button>
            <div className="hidden md:block">
              <MagneticButton href="/contact" className="px-5! py-2.5!">
                {t.nav.cta}
                <ArrowRight className="text-base rtl:-scale-x-100" />
              </MagneticButton>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-heading md:hidden"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <Close className="text-lg" /> : <Menu className="text-lg" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-bg px-6 pb-6 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {routes.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className={`rounded-xl px-4 py-3 text-base ${
                    isActive(r.href)
                      ? "bg-surface-2 text-heading"
                      : "text-fg-muted"
                  }`}
                >
                  {t.nav[r.key]}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-medium text-white"
              >
                {t.nav.cta}
                <ArrowRight className="text-base rtl:-scale-x-100" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
