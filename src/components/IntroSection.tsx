"use client";

const companies = [
  { src: "/images/liquid.svg", alt: "Liquid" },
  { src: "/images/gotyme-bank.svg", alt: "GoTyme Bank" },
  { src: "/images/european-commission.svg", alt: "European Commission" },
  { src: "/images/bitcoin.svg", alt: "Bitcoin" },
  { src: "/images/defichan.svg", alt: "DefiChan" },
  { src: "/images/bitmex.svg", alt: "BitMEX" },
  { src: "/images/birthday-research.svg", alt: "Birthday Research" },
  { src: "/images/babylons.svg", alt: "Babylons" },
  { src: "/images/diag.svg", alt: "Diag" },
];

const awardsData = [
  {
    src: "/images/red-dot.svg",
    width: 105,
    height: 105,
    name: "Red Dot Award",
    year: "2023",
    category: "GoTyme",
    logoMbSrc: "/images/red-dot.svg",
  },
  {
    src: "/images/uxdesign.svg",
    width: 96,
    height: 105,
    name: "UX Design Award",
    year: "2023",
    category: "GoTyme",
    logoMbSrc: "/images/uxdesign.svg",
  },
  {
    src: "/images/dfa.svg",
    width: 122,
    height: 105,
    name: "Design For Asia",
    year: "2023",
    category: "GoTyme",
    logoMbSrc: "/images/dfa.svg",
  },
  {
    src: "/images/creativepool.svg",
    width: 43,
    height: 31,
    name: "Creativepool Design Award",
    year: "2023",
    category: "GoTyme",
    logoMbSrc: "/images/creativepool.svg",
  },
];

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const introMainText = "Financial services should be intuitive, accessible, and empowering. I use human-centered design to create solutions that resonate with customers. By applying design thinking, branding, and strategic planning, I've helped banks, fintechs, and crypto businesses improve customer experience, increase engagement, and drive growth. My goal is to create financial experiences that are not only efficient but also enjoyable. I believe finance should be a positive force in people's lives.";

export function IntroSection() {
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);
  const [isAwardsHovered, setIsAwardsHovered] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const serviceWrapRef = useRef<HTMLDivElement>(null);
  const awardsVisualRef = useRef<HTMLDivElement>(null);
  const awardsListingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visualElement = awardsVisualRef.current;
    const textElement = textRef.current;
    const serviceWrap = serviceWrapRef.current;
    const listing = awardsListingRef.current;

    const words = textElement ? textElement.querySelectorAll<HTMLSpanElement>(".reveal-word") : [];
    const awardItems = listing ? listing.querySelectorAll<HTMLElement>(".home__intro-award") : [];
    const totalWords = words.length;

    let vh = typeof window !== "undefined" ? window.innerHeight : 800;
    let visualTop = 0, visualHeight = 0;
    let textTop = 0, textHeight = 0;
    let serviceTop = 0, serviceHeight = 0;
    let awardTops: number[] = [];

    function updateOffsets() {
      vh = window.innerHeight;
      const scrollY = window.scrollY;

      if (visualElement) {
        const r = visualElement.getBoundingClientRect();
        visualTop = scrollY + r.top;
        visualHeight = r.height;
      }
      if (textElement) {
        const r = textElement.getBoundingClientRect();
        textTop = scrollY + r.top;
        textHeight = r.height;
      }
      if (serviceWrap) {
        const r = serviceWrap.getBoundingClientRect();
        serviceTop = scrollY + r.top;
        serviceHeight = r.height;
      }
      if (awardItems.length > 0) {
        awardTops = Array.from(awardItems).map(item => scrollY + item.getBoundingClientRect().top);
      }
    }

    updateOffsets();
    window.addEventListener("resize", updateOffsets, { passive: true });

    const handleScroll = () => {
      const scrollY = (window as unknown as Record<string, unknown>).__lenis
        ? ((window as unknown as Record<string, unknown>).__lenis as { scroll: number }).scroll
        : window.scrollY;

      // 1. Visual sphere scale
      if (visualElement) {
        const current = vh - (visualTop - scrollY);
        const total = vh + visualHeight;
        const progress = Math.max(0, Math.min(1, current / total));
        const scale = 0.5 + progress * 1.0;
        visualElement.style.setProperty("--awards-scale", scale.toString());
      }

      // 2. Text word reveal
      if (words.length > 0) {
        const revealStart = vh * 0.22;
        const revealDistance = Math.max(textHeight * 0.68, vh * 0.34);
        const currentTextTop = textTop - scrollY;
        const progress = Math.max(0, Math.min(1, (revealStart - currentTextTop) / revealDistance));

        words.forEach((word, i) => {
          const normalizedProgress = i / totalWords;
          const distance = Math.abs(progress - normalizedProgress);
          const opacity = Math.max(0.15, Math.min(1, 1 - distance * 4.8));
          word.style.opacity = opacity.toString();
        });
      }

      // 3. Service marquee scale and translate
      if (serviceWrap) {
        const current = vh - (serviceTop - scrollY);
        const total = vh + serviceHeight;
        const progress = Math.max(0, Math.min(1, current / total));
        const diff = Math.abs(progress - 0.5);
        const scale = 1.15 - diff * 0.4;
        const translateXOrange = (progress - 0.5) * -200;
        const translateXBlack = (progress - 0.5) * 200;

        serviceWrap.style.setProperty("--service-scale", scale.toString());
        serviceWrap.style.setProperty("--service-trans-orange", `${translateXOrange}px`);
        serviceWrap.style.setProperty("--service-trans-black", `${translateXBlack}px`);
      }

      // 4. Awards list reveal
      if (awardItems.length > 0) {
        const revealStart = vh * 0.85;
        const revealEnd = vh * 0.15;
        const total = revealStart - revealEnd;

        awardItems.forEach((item, idx) => {
          const itemTop = awardTops[idx] || (scrollY + item.getBoundingClientRect().top);
          const current = revealStart - (itemTop - scrollY);
          const progress = Math.max(0, Math.min(1, current / total));
          const eased = 1 - Math.pow(1 - progress, 1.5);
          item.style.opacity = eased.toString();
          item.style.transform = `translateY(${30 * (1 - eased)}px)`;
        });
      }
    };

    const lenis = (window as unknown as Record<string, unknown>).__lenis as { on: (e: string, fn: () => void) => void; off: (e: string, fn: () => void) => void } | undefined;
    if (lenis) {
      lenis.on("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateOffsets);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const words = introMainText.match(/\S+/g) ?? [];

  return (
    <div className="home__intro-wrap">
      <section className="home__intro">
        <div className="container grid">
          <div className="home__intro-companies">
            <div className="line" />
            <h4 className="heading h5 cl-txt-title home__intro-companies-title">
              Industry leaders I worked for
            </h4>
            <div className="home__intro-companies-listing">
              {companies.map((company) => (
                <div key={company.alt} className="home__intro-company">
                  <div className="ic home__intro-company-ic">
                    <img src={company.src} alt={company.alt} className="img img-fit" loading="lazy" />
                  </div>
                </div>
              ))}
              <a href="mailto:hello@valentincheval.design" className="home__intro-company" data-cursor-text="Hello">
                <div className="home__intro-company-secret">
                  <div className="fs-16 fw-med cl-txt-title">Your logo here</div>
                </div>
              </a>
            </div>
          </div>

          <div className="home__intro-main">
            <div
              ref={textRef}
              className="heading h4 home__intro-main-txt"
            >
              <span className="home__intro-main-label">(Intro)</span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className="reveal-word"
                >
                  {word}{" "}
                </span>
              ))}
            </div>
            <Link href="/about" transitionTypes={['page-transition']} className="btn-circle arrow-hover home__intro-btn">
              <div className="ic-arr-wrap" style={{ "--size": 3.2 } as React.CSSProperties}>
                <div className="arr-main ic" style={{ "--size": 3.2 } as React.CSSProperties}>
                  <svg width="100%" viewBox="0 0 20 20" fill="none">
                    <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </div>
                <div className="arr-clone ic" style={{ "--size": 3.2 } as React.CSSProperties}>
                  <svg width="100%" viewBox="0 0 20 20" fill="none">
                    <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </div>
              </div>
              <svg className="btn-circle-svg" width="100%" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="49" stroke="white" strokeOpacity=".1" strokeWidth="2" />
              </svg>
            </Link>
          </div>

          {/* Awards Visual display in the middle column */}
          <div ref={awardsVisualRef} className={`home__intro-awards-visual ${(isAwardsHovered || activeAwardIndex > 0) ? "visible" : "visible"}`}>
            <div className="awards-visual-inner">
              <img
                src={activeAwardIndex === 0 ? "/images/awards-sphere.png" : awardsData[activeAwardIndex].src}
                alt={activeAwardIndex === 0 ? "" : awardsData[activeAwardIndex].name}
                aria-hidden={activeAwardIndex === 0}
                className="awards-visual-img"
              />
            </div>
          </div>

          <div
            className="home__intro-awards"
            style={{ "--itemLength": 4 } as React.CSSProperties}
            onMouseEnter={() => setIsAwardsHovered(true)}
            onMouseLeave={() => setIsAwardsHovered(false)}
          >
            <h3 className="heading h4 cl-txt-title upper home__intro-awards-title">Awards</h3>
            <div ref={awardsListingRef} className="home__intro-awards-listing">
              {awardsData.map((award, index) => (
                <div
                  key={award.name}
                  className={`home__intro-award ${index === activeAwardIndex ? "active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${award.name}`}
                  aria-pressed={index === activeAwardIndex}
                  onMouseEnter={() => setActiveAwardIndex(index)}
                  onFocus={() => setActiveAwardIndex(index)}
                  onClick={() => setActiveAwardIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveAwardIndex(index);
                    }
                  }}
                >
                  <span className="home__intro-award-line" />
                  <div className="home__intro-award-inner">
                    <div className="home__intro-award-text">
                      <p className="home__intro-award-year">
                        {award.year}
                        {index === activeAwardIndex && <span className="home__intro-award-dot" />}
                      </p>
                      <p className="home__intro-award-name">{award.name}</p>
                      <p className="home__intro-award-category">{award.category}</p>
                    </div>
                    <div className="home__intro-award-logo-mb">
                      <img src={award.logoMbSrc} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={serviceWrapRef} className="home__intro-service-wrap">
          <div className="home__intro-service">
            {/* Black Marquee: scrolls right (reverse) */}
            <div className="home__intro-service-marquee-wrap black">
              <div className="marquee">
                <div
                  className="marquee-inner"
                  style={{ display: "flex", animation: "marquee-reverse 20s linear infinite" }}
                >
                  {[0, 1].map((dupIdx) => (
                    <div key={dupIdx} className="marquee-inner-item" aria-hidden={dupIdx === 1}>
                      <div className="home__intro-service-marquee">
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">8 years of experience</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <img src="/images/asterisk.svg" alt="" className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">senior designer</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <img src="/images/asterisk.svg" alt="" className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Over 100 customers</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <img src="/images/asterisk.svg" alt="" className="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Orange Marquee: scrolls left (normal) */}
            <div className="home__intro-service-marquee-wrap orange">
              <div className="marquee">
                <div
                  className="marquee-inner"
                  style={{ display: "flex", animation: "marquee 20s linear infinite" }}
                >
                  {[0, 1].map((dupIdx) => (
                    <div key={dupIdx} className="marquee-inner-item" aria-hidden={dupIdx === 1}>
                      <div className="home__intro-service-marquee">
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Product Design</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <img src="/images/asterisk.svg" alt="" className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Brand design &amp; Strategy</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <img src="/images/asterisk.svg" alt="" className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Visual design</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <img src="/images/asterisk.svg" alt="" className="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="home__intro-service-blur">
            <div className="home__intro-service-blur-inner">
              <img
                src="/images/intro-service-blur.png"
                alt=""
                aria-hidden="true"
                width={1400}
                height={1400}
                className="img img-fit"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
