"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Homepage hero media — the animated brand logo.
 * The white background is keyed out (transparent WebM + transparent poster), so
 * the logo animation blends straight into the page — no card, no video chrome.
 * Plays on load, then auto-replays every 15s. Reduced-motion shows the poster.
 */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce) return;
    const v = ref.current;
    if (!v) return;

    const restart = () => {
      try {
        v.currentTime = 0;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {
        /* ignore */
      }
    };

    const id = window.setInterval(restart, 15000);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative flex w-full max-w-[600px] items-center justify-center">
      {/* soft brand glow — gives the mark presence without a hard container */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--glow-primary),0.22),transparent_68%)] blur-2xl"
      />
      {reduce ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/hero/logo-poster-alpha.png"
          alt="Alalam Drug Store — مستودع العلم للأدوية"
          className="pointer-events-none block w-full select-none"
          draggable={false}
        />
      ) : (
        <video
          ref={ref}
          className="pointer-events-none block w-full select-none"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/hero/logo-poster-alpha.png"
          aria-label="Alalam Drug Store animated logo"
          tabIndex={-1}
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload noplaybackrate nofullscreen"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* transparent VP8 alpha WebM first (Chrome/Edge/Firefox), opaque MP4 fallback */}
          <source src="/hero/logo-animation-alpha.webm" type="video/webm" />
          <source src="/hero/logo-animation.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
