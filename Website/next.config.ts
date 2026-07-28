import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no server logic) → export plain HTML/CSS/JS.
  // No server = no cold start, deployable to any static host (Cloudflare Pages,
  // Netlify, GitHub Pages) and still works on Vercel.
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
