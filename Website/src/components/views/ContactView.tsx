"use client";

import { useState } from "react";
import { useI18n } from "@/app/providers";
import { PageHeader } from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { Check, Clock, MapPin, Phone, Send, Whatsapp } from "@/components/ui/icons";

type Status = "idle" | "sending" | "sent";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactView() {
  const { t } = useI18n();
  const c = t.contact;
  const wa = `https://wa.me/${c.phone.replace(/[^\d]/g, "")}`;

  const [subject, setSubject] = useState<string>("general");
  const [form, setForm] = useState({ name: "", org: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof Errors]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = c.errorRequired;
    if (!emailRe.test(form.email.trim())) next.email = c.errorEmail;
    if (!form.message.trim()) next.message = c.errorRequired;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 850);
  }

  function reset() {
    setForm({ name: "", org: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  }

  const details = [
    { Icon: MapPin, label: c.addressLabel, value: c.address, href: undefined as string | undefined },
    { Icon: Phone, label: c.phoneLabel, value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    { Icon: Clock, label: c.hoursLabel, value: c.hours, href: undefined },
  ];

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <Section className="pt-6!">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-sm">
                {status === "sent" ? (
                  <div className="flex flex-col items-start gap-4 py-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                      <Check className="text-2xl" />
                    </span>
                    <h2 className="text-2xl font-semibold text-heading">{c.sentTitle}</h2>
                    <p className="text-sm leading-relaxed text-fg-muted">{c.sentBody}</p>
                    <button
                      onClick={reset}
                      className="mt-4 rounded-full bg-brand-600 px-6 py-2.5 text-xs font-medium text-white shadow-xs hover:bg-brand-700 transition-colors"
                    >
                      {c.reset}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate className="flex flex-col gap-5">
                    {/* Subject Pill Selector */}
                    {c.subjects && (
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-medium text-fg-muted">
                          {c.subjectsLabel}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {c.subjects.map((sub) => (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => setSubject(sub.id)}
                              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                                subject === sub.id
                                  ? "bg-brand-600 text-white shadow-xs"
                                  : "border border-border bg-bg text-fg-muted hover:text-heading"
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <Field
                      id="name"
                      label={c.nameLabel}
                      placeholder={c.namePh}
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      error={errors.name}
                    />
                    <Field
                      id="org"
                      label={c.orgLabel}
                      placeholder={c.orgPh}
                      value={form.org}
                      onChange={(v) => update("org", v)}
                    />
                    <Field
                      id="email"
                      type="email"
                      label={c.emailLabel}
                      placeholder={c.emailPh}
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      error={errors.email}
                    />
                    <Field
                      id="message"
                      label={c.messageLabel}
                      placeholder={c.messagePh}
                      value={form.message}
                      onChange={(v) => update("message", v)}
                      error={errors.message}
                      textarea
                      maxLength={500}
                    />
                    <div className="pt-1">
                      <MagneticButton type="submit">
                        {status === "sending" ? c.sending : c.submit}
                        {status === "sending" ? null : <Send className="text-base" />}
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Details & Map */}
            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-sm">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-primary-strong">
                  {c.detailsTitle}
                </h2>
                <ul className="mt-5 flex flex-col gap-5">
                  {details.map(({ Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-[color-mix(in_srgb,var(--primary)_18%,transparent)] dark:text-primary-strong">
                        <Icon className="text-base" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-fg-muted">{label}</span>
                        {href ? (
                          <a
                            href={href}
                            dir="ltr"
                            className="text-sm font-medium text-fg transition-colors hover:text-primary-strong"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-fg">{value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <Whatsapp className="text-base" />
                  {c.whatsapp}
                </a>
              </div>

              {/* Interactive Map */}
              <GoogleMap />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
  maxLength,
}: {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
  maxLength?: number;
}) {
  const base =
    "w-full rounded-xl border bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-muted/70 focus:border-brand-400";
  const border = error ? "border-red-500" : "border-border";
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-heading">
          {label}
        </label>
        {textarea && maxLength && (
          <span className="text-[0.7rem] text-fg-muted">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          maxLength={maxLength}
          value={value}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} ${border} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} ${border}`}
        />
      )}
      {error ? (
        <span id={`${id}-err`} className="text-xs text-red-500">
          {error}
        </span>
      ) : null}
    </div>
  );
}
