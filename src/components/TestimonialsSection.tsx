"use client";

import { useState } from "react";

const testimonials = [
  { index: 1, name: "Long (Peter) Tran", position: "Motion & Interaction Designer - Specialising in the UI/UX industry", image: "/images/testimonial-1.jpeg", content: "As a motion designer, I've worked with many product designers over the years. Valentin stands out for his meticulous attention to detail and user-centric approach. His designs are not just beautiful but functionally superior." },
  { index: 2, name: "Chris Azzopardi", position: "Chief Product Officer", image: "/images/testimonial-2.jpeg", content: "Valentin brings a rare combination of strategic thinking and pixel-perfect execution. He understands how design connects to business outcomes." },
  { index: 3, name: "Silvano D'Orazio", position: "Group Head of User Experience and Brand", image: "/images/testimonial-3.jpg", content: "Working with Valentin was a pleasure. His deep understanding of financial products and user experience design made him an invaluable asset to our team." },
  { index: 4, name: "Charles Mandin", position: "Senior PMO @ Nethermind", image: "/images/testimonial-4.jpeg", content: "Valentin's ability to navigate complex financial product spaces while maintaining design excellence is remarkable." },
  { index: 5, name: "Hai Van Tran", position: "Product Designer Lead", image: "/images/testimonial-5.jpeg", content: "Valentin is a talented designer who consistently delivers high-quality work. His expertise in fintech and web3 is exceptional." },
  { index: 6, name: "Andrew Michael Todd", position: "Head Of Marketing and Growth at Bitcoin.com", image: "/images/testimonial-6.jpeg", content: "Valentin's work on our brand strategy was transformative. He has a gift for translating complex product requirements into elegant design solutions." },
  { index: 7, name: "Jay Mehta", position: "Marketing & Content Strategy Lead | Web3, DeFi, iGaming | Ex-Bitcoin.com, FinTech Advisor", image: "/images/testimonial-7.jpeg", content: "Exceptional product designer with deep domain expertise in financial services. Valentin's strategic approach to design thinking sets him apart." },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="home__testi">
      <div className="container">
        <h2 className="home__testi-title grid">
          <span className="heading h2 upper">What</span>
          <span className="heading h2 upper">people say</span>
          <span className="heading h2 upper">About <span className="cl-txt-title">me</span></span>
          <span className="fs-20 fw-reg home__testi-title-label">(Testimonials)</span>
        </h2>

        <div className="home__testi-pagination" style={{ display: "flex", gap: 0, alignItems: "baseline" }}>
          <span className="cl-txt-title home__testi-pagination-txt">{pad(activeIndex + 1)}</span>
          <span className="cl-txt-desc"> / 07</span>
        </div>

        <div className="home__testi-list" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          {testimonials.map((t, i) => (
            <div
              key={t.index}
              className="home__testi-item"
              style={{ display: "grid", gap: "1.6rem" }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="home__testi-item-image-wrap">
                <img
                  src={t.image}
                  alt={t.name}
                  className="home__testi-item-image"
                  style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              <h4 className="heading h4 cl-txt-disable">{pad(t.index)}.</h4>
              <p className="fs-24 fw-med cl-txt-title">{t.name}</p>
              <p className="cl-txt-sub home__testi-item-position">{t.position}</p>
              <button
                type="button"
                className="home__testi-item-toggle enable"
                onClick={() => toggleExpand(t.index)}
              >
                <span className="fw-med txt-link">Read more</span>
              </button>
              {t.content && expandedItems.has(t.index) && (
                <div className="home__testi-item-content">
                  <p className="cl-txt-sub fs-16">{t.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
