import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/data/blog";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogReadingProgress } from "@/components/blog/BlogReadingProgress";
import { BlogShare } from "@/components/blog/BlogShare";
import { BlogTOC } from "@/components/blog/BlogTOC";
import { BlogReactions } from "@/components/blog/BlogReactions";
import { FooterSection } from "@/components/FooterSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.title;
  const canonical = `https://ajmal.uthakkan.in/blog/${post.slug}`;

  return {
    title,
    description: post.description,
    keywords: [post.title, ...post.tags, "Muhammed Ajmal U K", "Ajmal U K", "Uthakkan"],
    authors: [{ name: "Muhammed Ajmal U K", url: "https://ajmal.uthakkan.in" }],
    alternates: {
      canonical,
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
      title,
      description: post.description,
      type: "article",
      url: canonical,
      publishedTime: post.publishedAt,
      authors: ["Muhammed Ajmal U K"],
      tags: post.tags,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[(currentIndex + 1) % allPosts.length];
  const prevPost = allPosts[(currentIndex - 1 + allPosts.length) % allPosts.length];

  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://ajmal.uthakkan.in${post.image}`;

  const currentUrl = `https://ajmal.uthakkan.in/blog/${post.slug}`;

  // Extract headings for Table of Contents
  const tocItems = post.content
    .filter((b): b is { type: "heading"; text: string } => b.type === "heading" && "text" in b)
    .map((b) => ({
      text: b.text,
      id: b.text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim(),
    }));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ajmal.uthakkan.in/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://ajmal.uthakkan.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: currentUrl },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${currentUrl}#article`,
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      "@id": "https://ajmal.uthakkan.in/#person",
      name: "Muhammed Ajmal U K",
      url: "https://ajmal.uthakkan.in",
    },
    publisher: { "@id": "https://ajmal.uthakkan.in/#organization" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
  };

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="wrapper">
      <BlogReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="blog-post-page" id="main-content" tabIndex={-1}>
        {/* Article Hero */}
        <header className="blog-article-hero">
          <div className="blog-article-hero__bg-wrap">
            <Image
              src={post.image}
              alt={post.title}
              width={1920}
              height={1080}
              className="blog-article-hero__bg-img"
              priority
            />
            <div className="blog-article-hero__overlay" aria-hidden="true" />
          </div>

          <div className="container blog-article-hero__container">
            {/* Top Navigation */}
            <div className="blog-article-hero__nav">
              <Link href="/blog" className="blog-article-hero__back-link">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M13 8H3M3 8L7.5 3.5M3 8L7.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Back to all articles</span>
              </Link>

              <div className="blog-article-hero__share-desktop">
                <BlogShare url={currentUrl} title={post.title} />
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="blog-article-hero__content">
              <div className="blog-article-hero__badges">
                <span className="blog-article-hero__cat-badge">{post.category}</span>
                <span className="blog-article-hero__time-badge">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4.5V8L10.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {post.readingTime}
                </span>
                <time dateTime={post.publishedAt} className="blog-article-hero__date-badge">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 6.5H14M5 1.5V3.5M11 1.5V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {formattedDate}
                </time>
              </div>

              <h1 className="blog-article-hero__title heading fw-bold cl-txt-title">
                {post.title}
              </h1>

              <p className="blog-article-hero__subtitle">
                {post.description}
              </p>

              {/* Author Strip */}
              <div className="blog-article-hero__author-strip">
                <div className="blog-article-hero__author-avatar">
                  <Image
                    src="/images/portrait.webp"
                    alt="Muhammed Ajmal U K"
                    width={48}
                    height={48}
                    className="blog-article-hero__author-img"
                  />
                </div>
                <div className="blog-article-hero__author-info">
                  <span className="blog-article-hero__author-name">Muhammed Ajmal U K</span>
                  <span className="blog-article-hero__author-role">
                    Full-Stack AI Developer &bull; MCA at CET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Article Body & Sticky Sidebar */}
        <section className="blog-article-body">
          <div className="container">
            <div className="blog-article-layout">
              {/* Main Content Column */}
              <div className="blog-article-main">
                <BlogContent blocks={post.content} />

                {/* Article Tags */}
                <div className="blog-article-tags">
                  <span className="blog-article-tags__label">Tags:</span>
                  <div className="blog-article-tags__list">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-article-tags__pill">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile Share Widget */}
                <div className="blog-article-share-mobile">
                  <BlogShare url={currentUrl} title={post.title} />
                </div>

                {/* Interactive Reactions */}
                <BlogReactions slug={post.slug} />

                {/* Author Bio Box */}
                <div className="blog-author-card">
                  <div className="blog-author-card__avatar-wrap">
                    <Image
                      src="/images/portrait.webp"
                      alt="Muhammed Ajmal U K"
                      width={80}
                      height={80}
                      className="blog-author-card__avatar"
                    />
                  </div>
                  <div className="blog-author-card__content">
                    <span className="blog-author-card__written-by">Written by</span>
                    <h3 className="blog-author-card__name heading h5 fw-bold cl-txt-title">
                      Muhammed Ajmal U K
                    </h3>
                    <p className="blog-author-card__bio">
                      MCA student at College of Engineering Trivandrum (CET) and Full-Stack AI Developer from Kerala, India. Creator of ToolPix AI, KallanCop, and DVMA.
                    </p>
                    <div className="blog-author-card__links">
                      <a
                        href="https://github.com/ajmaluk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-author-card__link"
                      >
                        GitHub
                      </a>
                      <span className="blog-author-card__dot">&bull;</span>
                      <a
                        href="https://www.linkedin.com/in/ajmaluk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-author-card__link"
                      >
                        LinkedIn
                      </a>
                      <span className="blog-author-card__dot">&bull;</span>
                      <Link href="/about" className="blog-author-card__link">
                        About Ajmal
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Next / Prev Navigation Cards */}
                <nav className="blog-article-nav" aria-label="Article navigation">
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="blog-article-nav__card blog-article-nav__card--prev"
                  >
                    <span className="blog-article-nav__direction">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M13 8H3M3 8L7.5 3.5M3 8L7.5 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Previous article
                    </span>
                    <span className="blog-article-nav__title heading fw-bold">
                      {prevPost.title}
                    </span>
                  </Link>

                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="blog-article-nav__card blog-article-nav__card--next"
                  >
                    <span className="blog-article-nav__direction">
                      Next article
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="blog-article-nav__title heading fw-bold">
                      {nextPost.title}
                    </span>
                  </Link>
                </nav>
              </div>

              {/* Sidebar Column */}
              <aside className="blog-article-sidebar">
                <div className="blog-article-sidebar__sticky">
                  {tocItems.length > 0 && (
                    <BlogTOC items={tocItems} readingTime={post.readingTime} />
                  )}

                  {/* Sidebar Metadata Box */}
                  <div className="blog-sidebar-box">
                    <h4 className="blog-sidebar-box__title">Article Overview</h4>
                    <dl className="blog-sidebar-box__list">
                      <div className="blog-sidebar-box__row">
                        <dt className="blog-sidebar-box__label">Published</dt>
                        <dd className="blog-sidebar-box__value">{formattedDate}</dd>
                      </div>
                      <div className="blog-sidebar-box__row">
                        <dt className="blog-sidebar-box__label">Read Time</dt>
                        <dd className="blog-sidebar-box__value">{post.readingTime}</dd>
                      </div>
                      <div className="blog-sidebar-box__row">
                        <dt className="blog-sidebar-box__label">Category</dt>
                        <dd className="blog-sidebar-box__value cl-txt-orange">{post.category}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Sidebar Share Card */}
                  <div className="blog-sidebar-box">
                    <BlogShare url={currentUrl} title={post.title} />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* More Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="blog-related-section">
            <div className="container">
              <div className="blog-related__header">
                <div>
                  <span className="blog-hero__pill">
                    <span className="blog-hero__pill-dot" />
                    Keep Reading
                  </span>
                  <h2 className="heading h3 fw-bold cl-txt-title" style={{ marginTop: "1.2rem" }}>
                    More From the <span className="cl-txt-orange">Blog</span>
                  </h2>
                </div>
                <Link href="/blog" className="blog-related__all-link">
                  View all articles &rarr;
                </Link>
              </div>

              <div className="blog-grid" style={{ marginTop: "3.2rem" }}>
                {relatedPosts.map((rPost) => (
                  <article key={rPost.slug} className="blog-card">
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="blog-card__link"
                      aria-label={`Read article: ${rPost.title}`}
                    >
                      <div className="blog-card__media">
                        <Image
                          src={rPost.image}
                          alt={rPost.title}
                          fill
                          sizes="(max-width: 767px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          className="blog-card__img"
                          loading="lazy"
                        />
                        <div className="blog-card__badges">
                          <span className="blog-card__badge-cat">{rPost.category}</span>
                          <span className="blog-card__badge-time">{rPost.readingTime}</span>
                        </div>
                      </div>
                      <div className="blog-card__body">
                        <div className="blog-card__meta">
                          <time dateTime={rPost.publishedAt} className="blog-card__date">
                            {new Date(rPost.publishedAt).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        <h3 className="blog-card__title">{rPost.title}</h3>
                        <p className="blog-card__desc">{rPost.description}</p>
                        <div className="blog-card__footer">
                          <span className="blog-card__read-more">
                            Read article
                            <svg className="blog-card__arrow" width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <FooterSection />
      </main>
    </div>
  );
}
