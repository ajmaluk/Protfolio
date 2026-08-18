"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)));
    return ["All", ...cats];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="blog-index">
      {/* Category Filter Pills & Search Bar */}
      <div className="blog-index__controls">
        <div className="blog-index__filters" role="tablist" aria-label="Filter blog by category">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? posts.length
                : posts.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`blog-index__filter-btn ${
                  isActive ? "blog-index__filter-btn--active" : ""
                }`}
              >
                <span>{cat}</span>
                <span className="blog-index__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="blog-index__search-wrap">
          <svg
            className="blog-index__search-icon"
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14L11.1 11.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="blog-index__search-input"
            aria-label="Search articles"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="blog-index__search-clear"
              aria-label="Clear search query"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Results summary when filtered */}
      {(selectedCategory !== "All" || searchQuery) && (
        <div className="blog-index__result-summary">
          <span>
            Showing <strong>{filteredPosts.length}</strong> of {posts.length} articles
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="blog-index__reset-btn"
          >
            Reset filter
          </button>
        </div>
      )}

      {/* Responsive Grid: 4 on large, 3 on desktop, 2 on mobile */}
      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card__link"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="blog-card__media">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="blog-card__img"
                    loading="lazy"
                  />
                  <div className="blog-card__badges">
                    <span className="blog-card__badge-cat">{post.category}</span>
                    <span className="blog-card__badge-time">{post.readingTime}</span>
                  </div>
                </div>

                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <time dateTime={post.publishedAt} className="blog-card__date">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h2 className="blog-card__title">
                    {post.title}
                  </h2>

                  <p className="blog-card__desc">
                    {post.description}
                  </p>

                  <div className="blog-card__footer">
                    <span className="blog-card__read-more">
                      Read article
                      <svg
                        className="blog-card__arrow"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="blog-grid__empty">
          <p className="blog-grid__empty-title">No articles found</p>
          <p className="blog-grid__empty-desc">
            Try adjusting your search query or filter to find what you are looking for.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="blog-index__filter-btn blog-index__filter-btn--active"
            style={{ marginTop: "1.6rem" }}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
