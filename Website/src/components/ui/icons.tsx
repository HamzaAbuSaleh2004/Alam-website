import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function Sun(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
    </svg>
  );
}
export function Moon(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
export function Menu(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
export function Close(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
export function Globe(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}
export function Phone(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M6.5 3.5 9 4l1 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1 .5 2.5a2 2 0 0 1-2 2.3A16 16 0 0 1 3.7 5.5a2 2 0 0 1 2.3-2Z" />
    </svg>
  );
}
export function Mail(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function MapPin(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
export function Clock(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
export function Whatsapp(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.6-.6-2.9-1.3-4.8-4.2-4.9-4.4-.2-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.5.7c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.8-.2 1.5Z" />
    </svg>
  );
}
export function Search(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}
export function Check(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
export function Shield(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
export function Truck(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}
export function Thermometer(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z" />
      <path d="M12 9v6" />
    </svg>
  );
}
export function Layers(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}
export function Send(p: P) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}

export const trustIcons = { licensed: Shield, coverage: Truck, handling: Thermometer, range: Layers };
