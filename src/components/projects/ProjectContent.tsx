import Image from "next/image";
import type { ContentBlock } from "@/data/projects";

interface ProjectContentProps {
  blocks: ContentBlock[];
}

export function ProjectContent({ blocks }: ProjectContentProps) {
  return (
    <div className="projects-detail__content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="projects-detail__paragraph">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="heading h4 upper fw-bold projects-detail__heading cl-txt-title">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote key={i} className="projects-detail__quote">
                <p className="projects-detail__quote-text">&ldquo;{block.text}&rdquo;</p>
                {block.author && (
                  <cite className="projects-detail__quote-author">— {block.author}</cite>
                )}
              </blockquote>
            );
          case "image":
            return (
              <figure key={i} className="projects-detail__figure">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="projects-detail__figure-img"
                />
                {block.caption && (
                  <figcaption className="projects-detail__figure-caption">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "list":
            return (
              <ul key={i} className="projects-detail__list" role="list">
                {block.items.map((item, j) => (
                  <li key={j} className="projects-detail__list-item">
                    <span className="projects-detail__list-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}