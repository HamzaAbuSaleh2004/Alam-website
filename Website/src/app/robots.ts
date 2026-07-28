import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Explicitly welcome general and AI crawlers so the company is discoverable and
// answerable by assistants like ChatGPT, Perplexity, Gemini and Claude.
export const dynamic = "force-static";

const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-User",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
