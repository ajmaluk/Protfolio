"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
}

interface BlogTOCProps {
  items: TOCItem[];
  readingTime?: string;
}

export function BlogTOC({ items, readingTime }: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const headingElements = items
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      const scrollPos = window.scrollY + 180;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPos) {
          setActiveId(items[i].id);
          return;
        }
      }
      if (items[0]) {
        setActiveId(items[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <div className="blog-toc__header">
        <p className="blog-toc__title">
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2.5 4H13.5M2.5 8H13.5M2.5 12H9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Table of Contents
        </p>
        {readingTime && (
          <span className="blog-toc__reading-time">{readingTime}</span>
        )}
      </div>

      <ul className="blog-toc__list" role="list">
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          const formattedIndex = String(index + 1).padStart(2, "0");
          return (
            <li key={item.id} className="blog-toc__item">
              <a
                href={`#${item.id}`}
                className={`blog-toc__link ${
                  isActive ? "blog-toc__link--active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    const top =
                      target.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: "smooth" });
                    history.pushState(null, "", `#${item.id}`);
                  }
                }}
              >
                <span className="blog-toc__number">{formattedIndex}</span>
                <span className="blog-toc__text">{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
