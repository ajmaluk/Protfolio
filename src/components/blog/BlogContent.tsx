import Image from "next/image";
import type { ContentBlock } from "@/data/projects";

interface BlogContentProps {
  blocks: ContentBlock[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function BlogContent({ blocks }: BlogContentProps) {
  return (
    <div className="blog-article-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className={`blog-article__paragraph ${
                  i === 0 ? "blog-article__paragraph--lead" : ""
                }`}
              >
                {block.text}
              </p>
            );

          case "heading": {
            const headingId = slugify(block.text);
            return (
              <div key={i} className="blog-article__heading-wrap">
                <h2
                  id={headingId}
                  className="heading h3 fw-bold blog-article__heading cl-txt-title"
                >
                  <span className="blog-article__heading-accent">#</span>
                  {block.text}
                </h2>
              </div>
            );
          }

          case "quote":
            return (
              <blockquote key={i} className="blog-article__quote">
                <div className="blog-article__quote-icon" aria-hidden="true">
                  &ldquo;
                </div>
                <p className="blog-article__quote-text">{block.text}</p>
                {block.author && (
                  <cite className="blog-article__quote-author">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );

          case "image":
            return (
              <figure key={i} className="blog-article__figure">
                <div className="blog-article__figure-img-wrap">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="blog-article__figure-img"
                  />
                </div>
                {block.caption && (
                  <figcaption className="blog-article__figure-caption">
                    <span className="blog-article__figure-caption-dot" />
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "list":
            return (
              <div key={i} className="blog-article__list-card">
                <ul className="blog-article__list" role="list">
                  {block.items.map((item, j) => (
                    <li key={j} className="blog-article__list-item">
                      <span className="blog-article__list-check" aria-hidden="true">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8.5L6.5 12L13 4"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="blog-article__list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
