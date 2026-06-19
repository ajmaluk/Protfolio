"use client";

import { useEffect, useState } from "react";

const WORDS = ["Banking", "Crypto", "Fintech", "Web3"];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home__hero-wrap">
      <section className="home__hero">
        <div className="home__hero-main">
          <div className="container grid calc-h">
            <div className="home__hero-scope-wrap">
              <ul className="home__hero-scope">
                <span className="line" />
                <li>Website Design</li>
                <li>Product Design</li>
                <li>Branding &amp; Strategy</li>
                <span className="line" />
              </ul>
              <a
                href="mailto:hello@valentincheval.design"
                className="arrow-hover home__hero-scope-cta"
              >
                <span className="txt-link">How can I help?</span>
                <div className="ic-arr-wrap ic-20" style={{ "--size": 1.6 } as React.CSSProperties}>
                  <div className="arr-main ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                    <svg width="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                  </div>
                  <div className="arr-clone ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                    <svg width="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <div className="home__hero-intro-wrap">
              <div className="cl-txt-sub home__hero-intro">
                I&apos;m an award winning product designer specialized in financial products. I work for Fintech, Banking, Crypto &amp; Web3
              </div>
              <span className="line" />
              <div className="home__hero-awards">
                <div className="ic home__hero-award">
                  <img src="/images/red-dot-white.svg" alt="award logo" width={44} height={44} />
                </div>
                <div className="ic home__hero-award">
                  <img src="/images/uxdesign-white.svg" alt="award logo" width={44} height={48} />
                </div>
                <div className="ic home__hero-award">
                  <img src="/images/dfa-white.svg" alt="award logo" width={44} height={37} />
                </div>
              </div>
            </div>

            <div className="home__hero-title-wrap">
              <div className="home__hero-greating-wrap">
                <div className="home__hero-greating-inner">
                  <p className="home__hero-greating">Hi there! this is</p>
                  <p className="heading h5 fw-med home__hero-name">
                    <span className="cl-txt-title">Valentin</span>
                    <span>Cheval</span>
                  </p>
                </div>
              </div>
              <h1 className="heading h1 fw-bold fix-font upper home__hero-title">
                <div className="home__hero-title-txt">Design</div>
                <div className="home__hero-title-txt hidden-mb">for finance</div>
                <div className="home__hero-title-txt only-mb">for</div>
                <div className="home__hero-title-txt only-mb">finance</div>
                <div className="cl-txt-orange home__hero-title-slide">
                  <div className="home__hero-title-slide-inner">
                    <div className="grid-1-1 slide-txt-wrap" style={{ width: "max-content" }}>
                      {WORDS.map((word, index) => {
                        const diff = index - currentIndex
                        const isActive = index === currentIndex
                        let rotateX = -91
                        let translateY = 19
                        let translateZ = -19
                        if (diff === 0) {
                          rotateX = 0
                          translateY = 0
                          translateZ = 0
                        } else if (diff === 1 || diff === -3) {
                          rotateX = 91
                          translateY = -19
                          translateZ = 19
                        }
                        return (
                          <div
                            key={word}
                            className="slide-txt-item heading upper"
                            style={{
                              fontSize: "var(--fs-h1)",
                              fontWeight: 700,
                              lineHeight: "var(--lh-h1)",
                              color: "var(--cl-orange)",
                              transition: "transform 0.6s cubic-bezier(.33,1,.68,1), opacity 0.6s cubic-bezier(.33,1,.68,1)",
                              transform: `rotateX(${rotateX}deg) translate3d(0, ${translateY}px, ${translateZ}px)`,
                              opacity: isActive ? 1 : 0,
                              visibility: isActive ? "inherit" : "hidden",
                            }}
                          >
                            {word}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </h1>
              <span className="home__hero-scrolldown cl-txt-sub">(Scroll down)</span>
            </div>
          </div>
        </div>

        <div className="home__hero-bg">
          <div className="home__hero-bg-main">
            <div className="home__hero-bg-main-wrap">
              <div className="home__hero-bg-main-inner-bg">
                <img
                  src="/images/home-hero-bg.jpg"
                  alt="a man"
                />
              </div>
              <div className="home__hero-bg-main-inner-man" data-canvas-wrap>
                <div className="home__hero-bg-main-inner-man-ratio" />
                <div className="home__hero-bg-main-inner placeholder">
                  <img
                    src="/images/home-hero-trans.png"
                    alt="a man"
                  />
                </div>
              </div>
            </div>
            <div className="home__hero-gradient-mb" />
          </div>
        </div>
      </section>
    </div>
  );
}
