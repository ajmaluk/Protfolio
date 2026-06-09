"use client"

export function FooterSection() {
  return (
    <div className="home-footer-hero">
      <div className="home-footer-hero-empty-block" />
      <div className="home-footer-hero-wrap grid-1-1">
        <section className="home__hero-clone-wrap">
          <div className="home__hero-clone">
            <div className="home__hero-clone-main">
              <div className="container grid calc-h">
                <div className="home__hero-clone-scope-wrap">
                  <ul className="home__hero-clone-scope">
                    <span className="line" />
                    <li>Website Design</li>
                    <li>Product Design</li>
                    <li>Branding &amp; Strategy</li>
                    <span className="line" />
                  </ul>
                  <div className="home__hero-clone-scope-cta-wrap split-line unset-margin">
                    <a href="mailto:hello@valentincheval.design" className="arrow-hover home__hero-clone-scope-cta">
                      <span className="txt-link">How can I help?</span>
                      <div className="ic-arr-wrap ic-20" style={{ "--size": "1.6" } as React.CSSProperties}>
                        <div className="arr-main ic" style={{ "--size": "1.6" } as React.CSSProperties}>
                          <svg width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                            <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                          </svg>
                        </div>
                        <div className="arr-clone ic" style={{ "--size": "1.6" } as React.CSSProperties}>
                          <svg width="100%" viewBox="0 0 20 20" fill="none">
                            <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                            <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="home__hero-clone-intro-wrap">
                  <p className="cl-txt-sub home__hero-clone-intro">I&apos;m an award winning product designer specialized in financial products. I work for Fintech, Banking, Crypto &amp; Web3</p>
                  <span className="line" />
                  <div className="home__hero-clone-awards">
                    <div className="ic home__hero-clone-award">
                      <img src="/images/red-dot-white.svg" width={44} height={44} alt="award logo" />
                    </div>
                    <div className="ic home__hero-clone-award">
                      <img src="/images/uxdesign-white.svg" width={44} height={48} alt="award logo" />
                    </div>
                    <div className="ic home__hero-clone-award">
                      <img src="/images/dfa-white.svg" width={44} height={37} alt="award logo" />
                    </div>
                  </div>
                </div>

                <div className="home__hero-clone-title-wrap">
                  <div className="home__hero-clone-greating-wrap">
                    <p className="home__hero-clone-greating">Hi there! this is</p>
                    <p className="heading h5 fw-med home__hero-clone-name">
                      <span className="cl-txt-title">Valentin</span>
                      <span>Cheval</span>
                    </p>
                  </div>
                  <div className="heading h1 fw-bold fix-font upper home__hero-clone-title">
                    <div className="home__hero-clone-title-txt">Design</div>
                    <div className="home__hero-clone-title-txt">for finance</div>
                    <div className="cl-txt-orange home__hero-clone-title-slide">
                      <div className="home__hero-clone-title-slide-inner">Banking/Crypto/Fintech/Web3</div>
                    </div>
                  </div>
                  <span className="home__hero-clone-scrolldown cl-txt-sub">(Scroll down)</span>
                </div>
              </div>
            </div>

            <div className="home__hero-clone-bg grid-1-1">
              <div className="home__hero-clone-bg-main">
                <div className="home__hero-clone-bg-main-inner" data-canvas-wrap>
                  <div className="home__hero-clone-bg-main-ratio" />
                  <div className="home__hero-clone-bg-main-inner placeholder">
                    <img src="/images/home-hero-trans.png" alt="a man" />
                  </div>
                </div>
                <div className="home__hero-clone-gradient-mb" />
              </div>
              <div className="home__hero-clone-bg-under">
                <img src="/images/home-hero-bg.jpg" alt="a man" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-wrap">
        <div className="footer">
          <div className="container grid">
            <div className="footer__info">
              <div className="footer__info-item">
                <p className="fw-med footer__label">Socials</p>
                <div className="footer__socials-listing">
                  <a href="https://linkedin.com/in/valentinchevaldesign" className="fw-med txt-link hover-un cl-txt-orange footer__link" target="_blank">LinkedIn</a>
                  <a href="https://dribbble.com/ValentinChevalDesign" className="fw-med txt-link hover-un cl-txt-orange footer__link" target="_blank">Dribbble</a>
                  <a href="https://x.com/valentin_cheval" className="fw-med txt-link hover-un cl-txt-orange footer__link" target="_blank">Twitter/X</a>
                </div>
              </div>
              <div className="footer__info-item">
                <p className="fw-med footer__label">Contact me</p>
                <div className="footer__socials-listing">
                  <a href="mailto:hello@valentincheval.design" className="fw-med txt-link hover-un cl-txt-orange footer__link" target="_blank">Email</a>
                  <a href="https://wa.me/84822235564" className="fw-med txt-link hover-un cl-txt-orange footer__link" target="_blank">WhatsApp</a>
                  <a href="https://t.me/84822235564" className="fw-med txt-link hover-un cl-txt-orange footer__link" target="_blank">Telegram</a>
                </div>
              </div>
            </div>

            <div className="footer__cta">
              <div className="line" />
              <p className="fw-med footer__cta-label">Got a project in mind?</p>
              <h4 className="fs-24 fw-reg footer__cta-title">Let&apos;s make something happen together</h4>
            </div>

            <h3 className="footer__title-wrap">
              <div className="footer__title-gradient-mb" />
              <div className="heading h4 fw-reg footer__title">
                <div>
                  As a designer and Rotarian, I believe in service above self. <br />
                  <br />
                  Being a designer is about serving user needs. It&apos;s dedicating yourself to finding the right balance between user needs and business goals.
                </div>
              </div>
            </h3>

            <div className="footer__main-image">
              <div className="footer__main-image-empty-block" />
              <div className="footer__main-image-inner grid-1-1">
                <img src="/images/footer-blend-dark.png" alt="a main" className="footer__main-image-img ver-dark" />
                <img src="/images/footer-blend-light.png" alt="a main" className="footer__main-image-img ver-light" />
              </div>
            </div>

            <div className="footer__marquee-wrap" data-cursor-text="Hello">
              <div className="footer__marquee-inner">
                <div className="marquee">
                  <div className="marquee-inner" style={{ display: "flex", animation: "marquee 20s linear infinite" }}>
                    <div className="marquee-inner-item" style={{ width: "max-content", display: "flex", flex: "none" }}>
                      <h2 className="heading h2 footer__marquee">
                        <a href="mailto:hello@valentincheval.design" className="footer__marquee-link">hello<span className="cl-txt-orange">@</span>valentincheval.design</a>
                        <a href="mailto:hello@valentincheval.design" className="footer__marquee-link">hello<span className="cl-txt-orange">@</span>valentincheval.design</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bg">
            <img src="/images/footer-bg-gr2.png" alt="a gradient dark orange" />
          </div>
        </div>
      </footer>
    </div>
  )
}
