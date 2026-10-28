import { getAllPosts } from "@/data/blog";

export const dynamic = "force-static";

const BASE_URL = "https://ajmal.uthakkan.in";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const posts = getAllPosts();
  const buildDate = new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      const imageUrl = post.image.startsWith("http")
        ? post.image
        : `${BASE_URL}${post.image}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
      <author>ajmaluk.me@gmail.com (Muhammed Ajmal U K - Ajmal UK Developer)</author>
      <enclosure url="${escapeXml(imageUrl)}" type="image/webp" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Muhammed Ajmal U K (Ajmal UK Developer) — Blog | UTHAKKAN</title>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Articles by Muhammed Ajmal U K (Ajmal UK Developer / UTHAKKAN) on AI development, ToolPix SEO growth, Flutter mobile apps, and building real products.</description>
    <language>en-in</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <image>
      <url>${BASE_URL}/seo/og-image.jpg</url>
      <title>Muhammed Ajmal U K — Blog</title>
      <link>${BASE_URL}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
