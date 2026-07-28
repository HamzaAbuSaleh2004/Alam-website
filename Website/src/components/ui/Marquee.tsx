import type { ReactNode } from "react";

/** Seamless infinite marquee. Children are duplicated for a -50% loop. */
export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className="marquee-track gap-4 md:gap-6">
        <div className="flex shrink-0 gap-4 md:gap-6">{children}</div>
        <div className="flex shrink-0 gap-4 md:gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
