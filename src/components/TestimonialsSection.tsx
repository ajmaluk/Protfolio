"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return null;
  // Disabled
  // eslint-disable-next-line @typescript-eslint/no-unreachable-code
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const pad = (n: number) => String(n).padStart(2, "0");

  const handleClick = (idx: number) => {
    setActiveIndex(idx);
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="home__testi-wrap">
      <section className="home__testi">
        <div className="container">
          <h2 className="home__testi-title">
            <span className="heading h2 upper fw-bold home__testi-title-row">
              What people say
            </span>
            <span className="home__testi-title-last-row">
              <span className="heading h2 upper fw-bold">About me</span>
              <span className="home__testi-title-dot">.</span>
            </span>
            <div className="home__testi-title-meta">
              <span className="home__testi-pagination">
                <span className="cl-txt-title">{pad(activeIndex + 1)}</span>
                <span className="cl-txt-disable"> / {pad(testimonials.length)}</span>
              </span>
              <span className="fs-20 fw-reg home__testi-title-label">(Testimonials)</span>
            </div>
          </h2>

          <div className="home__testi-listing">
            {testimonials.map((t, idx) => {
              const isExpanded = expanded === idx;
              return (
                <div key={t.id || t.index} className="home__testi-item-wrap">
                  <span className="home__testi-item-line" />
                  <div
                    className={cn("home__testi-item", idx === activeIndex && "active", isExpanded && "is-open")}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => handleClick(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleClick(idx);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`Read ${t.name}'s testimonial`}
                    data-cursor-text={isExpanded ? "Close" : "Read"}
                  >
                    <div className="home__testi-item-inner">
                      <p className="home__testi-item-order heading">{pad(t.index)}.</p>
                      <div className="home__testi-item-info">
                        <p className="home__testi-item-name">{t.name}</p>
                        <p className="home__testi-item-position">{t.position}</p>
                      </div>
                      <div className="home__testi-item-quote-col">
                        <div className={cn("home__testi-item-quote-wrap", !isExpanded && "is-clamped")}>
                          {t.content.split("\n\n").map((paragraph, pIdx) => (
                            <p key={pIdx} className="home__testi-item-quote">{paragraph}</p>
                          ))}
                        </div>
                        <button
                          type="button"
                          className={cn("home__testi-item-toggle", isExpanded && "is-open")}
                          onClick={(e) => { e.stopPropagation(); handleClick(idx); }}
                          data-cursor-text={isExpanded ? "Close" : "Read"}
                        >
                          <span className="home__testi-item-toggle-text">
                            {isExpanded ? "Show less" : "Read more"}
                          </span>
                          <span className="home__testi-item-toggle-arrow" aria-hidden="true">
                            {isExpanded ? "↑" : "→"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <span className="home__testi-item-line" />
          </div>
        </div>
      </section>
    </div>
  );
}
