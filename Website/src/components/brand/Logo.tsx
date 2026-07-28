/**
 * Alalam Drug Store brand mark — extracted from the official animated logo
 * (transparent PNG in public/brand/). Works on light and dark surfaces.
 * If a proper vector (SVG) is supplied later, swap the <img> source here.
 */
export function Logo({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-mark.png"
      alt="Alalam Drug Store"
      style={{ height: size, width: "auto" }}
      className={className}
      draggable={false}
    />
  );
}
