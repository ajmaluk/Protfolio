import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Applebot",
          "Applebot-Extended",
          "Cohere-ai",
          "OAI-SearchBot",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://ajmal.uthakkan.in/sitemap.xml",
  };
}