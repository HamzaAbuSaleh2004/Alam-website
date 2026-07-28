"use client";

import { useState } from "react";
import { useI18n } from "@/app/providers";

export function GoogleMap() {
  const { t } = useI18n();
  const [mapType, setMapType] = useState<"map" | "sat">("map");

  // Amman, Rabieh location coordinates iframe
  const mapSrc =
    mapType === "map"
      ? "https://maps.google.com/maps?q=Amman,Jordan,Khalil%20Dabbas%20St%2010&t=&z=15&ie=UTF8&iwloc=&output=embed"
      : "https://maps.google.com/maps?q=Amman,Jordan,Khalil%20Dabbas%20St%2010&t=k&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-md">
      {/* Map Controls Header */}
      <div className="flex items-center justify-between border-b border-border bg-bg/80 px-5 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-heading">
            Aalam Headquarters · Amman, Jordan
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface p-1 text-[0.7rem] font-medium">
          <button
            onClick={() => setMapType("map")}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              mapType === "map"
                ? "bg-brand-600 text-white"
                : "text-fg-muted hover:text-heading"
            }`}
          >
            Map
          </button>
          <button
            onClick={() => setMapType("sat")}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              mapType === "sat"
                ? "bg-brand-600 text-white"
                : "text-fg-muted hover:text-heading"
            }`}
          >
            Satellite
          </button>
        </div>
      </div>

      {/* Embedded Iframe Map */}
      <div className="relative h-64 w-full md:h-80">
        <iframe
          title="Aalam Drug Store Location"
          src={mapSrc}
          className="h-full w-full border-0 grayscale-[20%] contrast-[105%] transition-all dark:invert-[90%] dark:hue-rotate-180"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Footer Link Bar */}
      <div className="flex items-center justify-between border-t border-border bg-surface px-5 py-3 text-xs">
        <span className="text-fg-muted">{t.contact.address}</span>
        <a
          href="https://maps.google.com/?q=Khalil+Dabbas+St.+10,+Amman,+Jordan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-strong hover:underline"
        >
          {t.contact.mapNote} ↗
        </a>
      </div>
    </div>
  );
}
