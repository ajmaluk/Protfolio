import type { Metadata } from "next";
import { FooterSection } from "@/components/FooterSection";
import { getAllPosts } from "@/data/blog";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Articles | Ajmal U K (Muhammed Ajmal)",
  description:
    "Articles and insights by Muhammed Ajmal U K (Ajmal U K / Uthakkan) on AI development, SEO growth, Flutter apps, and building real products.",
  keywords: [
    "Ajmal U K Blog",
    "Ajmal UK",
    "Muhammed Ajmal U K Articles",
    "Uthakkan Blog",
    "ToolPix SEO Case Study",
    "Flutter Development Blog",
    "AI Developer Blog Kerala",
  ],
  alternates: {
    canonical: "https://ajmal.uthakkan.in/blog",
    types: {
      "application/rss+xml": [
        {
          url: "https://ajmal.uthakkan.in/feed.xml",
          title: "Muhammed Ajmal U K — Blog RSS Feed",
        },
      ],
    },
  },
  openGraph: {
    title: "Blog & Articles | Ajmal U K (Muhammed Ajmal)",
    description:
      "Articles on AI development, SEO growth, Flutter apps, and building real products by Muhammed Ajmal U K.",
    url: "https://ajmal.uthakkan.in/blog",
    type: "website",
    images: [
      {
        url: "https://ajmal.uthakkan.in/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Ajmal U K (Ajmal U K) Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Articles | Ajmal U K (Muhammed Ajmal)",
    description:
      "Articles on AI development, SEO growth, Flutter apps, and building real products.",
    images: ["https://ajmal.uthakkan.in/seo/og-image.jpg"],
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ajmal.uthakkan.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://ajmal.uthakkan.in/blog",
      },
    ],
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ajmal.uthakkan.in/blog",
    name: "Blog by Muhammed Ajmal U K",
    description:
      "Articles on AI development, SEO growth, Flutter mobile apps, and building real products by Muhammed Ajmal U K (Ajmal U K / Uthakkan).",
    author: { "@id": "https://ajmal.uthakkan.in/#person" },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog posts by Muhammed Ajmal U K",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: allPosts.length,
    itemListElement: allPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ajmal.uthakkan.in/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main id="main-content" tabIndex={-1} className="blog-page">
        {/* Clean Standardized Hero matching site aesthetic */}
        <section className="about__hero" style={{ paddingBottom: "3rem" }}>
          <div className="container">
            <div className="about__hero-content">
              <p className="about__hero-label fs-14 upper fw-med">Blog</p>
              <h1
                className="about__hero-title heading display-2 upper fw-bold cl-txt-title"
                style={{ marginBottom: "1.6rem" }}
              >
                Writing &amp; <span className="cl-txt-orange">Insights</span>
              </h1>
              <p className="about__hero-intro heading h6 cl-txt-sub" style={{ maxWidth: "68rem" }}>
                Articles on AI development, SEO growth, Flutter mobile apps, and lessons from building real products.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="blog-content-section" style={{ paddingTop: "1rem" }}>
          <div className="container">
            <BlogGrid posts={allPosts} />
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
