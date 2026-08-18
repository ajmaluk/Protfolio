"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface AboutFAQProps {
  faqs: FAQItem[];
}

export function AboutFAQ({ faqs }: AboutFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="about-faq-section" aria-labelledby="faq-title">
      <div className="container">
        {/* Section Header styled like Testimonials / Portfolio sections */}
        <div className="about-faq__header">
          <div className="about-faq__title-wrap">
            <span className="about-faq__label fs-14 upper fw-med">
              FAQ &bull; Common Questions
            </span>
            <h2 id="faq-title" className="about-faq__title heading display-2 upper fw-bold cl-txt-title">
              Frequently Asked <span className="cl-txt-orange">Questions.</span>
            </h2>
          </div>
          <div className="about-faq__counter">
            <span className="about-faq__counter-num cl-txt-orange">
              {String(faqs.length).padStart(2, "0")}
            </span>
            <span className="about-faq__counter-label cl-txt-desc">Questions</span>
          </div>
        </div>

        {/* Listing styled matching the Testimonial List layout */}
        <div className="about-faq__list" role="region" aria-label="FAQ Accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const formattedNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={faq.q}
                className={`about-faq__item ${isOpen ? "about-faq__item--open" : ""}`}
              >
                <div className="about-faq__item-line" aria-hidden="true" />
                <button
                  type="button"
                  className="about-faq__trigger"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="about-faq__order" aria-hidden="true">
                    {formattedNumber}
                  </span>
                  <span className="about-faq__question heading h4 fw-bold cl-txt-title">
                    {faq.q}
                  </span>
                  <span className="about-faq__toggle-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`about-faq__arrow ${isOpen ? "about-faq__arrow--rotated" : ""}`}
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`about-faq__answer-wrap ${isOpen ? "about-faq__answer-wrap--open" : ""}`}
                >
                  <div className="about-faq__answer-inner">
                    <p className="about-faq__answer-text cl-txt-sub">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="about-faq__item-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
