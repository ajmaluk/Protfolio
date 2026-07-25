interface FooterSectionProps {
  showCharacter?: boolean;
}

export function FooterSection({ showCharacter = true }: FooterSectionProps) {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="container grid">
          <div className="footer__info">
            <div className="footer__info-item">
              <p className="fw-med footer__label">Socials</p>
              <div className="footer__socials-listing">
                <a
                  href="https://linkedin.com/in/valentinchevaldesign"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Ajmal U K's LinkedIn profile"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">LinkedIn</span>
                </a>
                <a
                  href="https://dribbble.com/ValentinChevalDesign"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Ajmal U K's Dribbble profile"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
                      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
                      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">Dribbble</span>
                </a>
                <a
                  href="https://x.com/valentin_cheval"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Ajmal U K on Twitter/X"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">Twitter/X</span>
                </a>
              </div>
            </div>

            <div className="footer__info-item">
              <p className="fw-med footer__label">Contact me</p>
              <div className="footer__socials-listing">
                <a
                  href="mailto:hello@valentincheval.design"
                  className="fw-med txt-link hover-un footer__link"
                  aria-label="Email Ajmal U K"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">Email</span>
                </a>
                <a
                  href="https://wa.me/84822235564"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Ajmal U K on WhatsApp"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">WhatsApp</span>
                </a>
                <a
                  href="https://t.me/84822235564"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Ajmal U K on Telegram"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">Telegram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer__cta">
            <div className="line" />
            <p className="fw-med footer__cta-label">Got a project in mind?</p>
            <a
              href="mailto:hello@valentincheval.design"
              className="fs-24 fw-reg footer__cta-title txt-link hover-un"
              aria-label="Email Ajmal U K to start a project"
            >
              Let&apos;s make something happen together
            </a>
          </div>

          <h3 className="footer__title-wrap">
            <div className="footer__title-gradient-mb" />
            <div className="heading h4 fw-reg footer__title">
              <div>
                <span>As a designer and Rotarian, I believe in service above self.</span>
                <span className="footer__title-second">
                  <br />
                  <br />
                  Being a designer is about serving user needs. It&apos;s dedicating yourself to finding the right balance between user needs and business goals.
                </span>
              </div>
            </div>
          </h3>

        </div>

        {showCharacter && (
          <div className="footer__main-image">
            <div className="footer__main-image-inner">
              <img
                src="/images/footer-blend-light.png"
                alt="Ajmal U K portrait"
                width={1080}
                height={1350}
                loading="lazy"
                className="footer__main-image-img"
              />
            </div>
          </div>
        )}

        <div className="footer__marquee-wrap" data-cursor-text="Hello">
          <div className="footer__marquee-inner">
            <div className="marquee">
              <div className="marquee-inner" style={{ display: "flex", animation: "marquee 25s linear infinite" }}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="marquee-inner-item">
                    <h2 className="heading h2 footer__marquee">
                      <a
                        href="mailto:hello@valentincheval.design"
                        className="footer__marquee-link"
                        aria-label="Email Ajmal U K"
                      >
                        hello<span className="cl-txt-orange">@</span>valentincheval.design
                      </a>
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bg">
          <img src="/images/footer-bg-gr2.png" alt="" aria-hidden="true" className="footer__bg-img" />
        </div>
      </div>
    </div>
  )
}
