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
                  href="https://in.linkedin.com/in/ajmaluk"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Muhammed Ajmal U K's LinkedIn profile"
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
                  href="https://github.com/ajmaluk"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Muhammed Ajmal U K's GitHub profile"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">GitHub</span>
                </a>
                <a
                  href="https://instagram.com/ajmaluk.me"
                  className="fw-med txt-link hover-un footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Muhammed Ajmal U K on Instagram"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">Instagram</span>
                </a>
              </div>
            </div>

            <div className="footer__info-item">
              <p className="fw-med footer__label">Contact me</p>
              <div className="footer__socials-listing">
                <a
                  href="mailto:ajmaluk.me@gmail.com"
                  className="fw-med txt-link hover-un footer__link"
                  aria-label="Email Muhammed Ajmal U K"
                >
                  <span className="footer__link-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <span className="footer__link-text">ajmaluk.me@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer__cta">
            <div className="line" />
            <p className="fw-med footer__cta-label">Looking for an AI / Full-Stack Developer?</p>
            <a
              href="mailto:ajmaluk.me@gmail.com"
              className="fs-24 fw-reg footer__cta-title txt-link hover-un"
              aria-label="Email Muhammed Ajmal U K to connect"
            >
              Let&apos;s build something impactful together
            </a>
          </div>

          <h3 className="footer__title-wrap">
            <div className="footer__title-gradient-mb" />
            <div className="heading h4 fw-reg footer__title">
              <div>
                <span>Driven by a passion to build smart, useful, and accessible digital products.</span>
                <span className="footer__title-second">
                  <br />
                  <br />
                  Combining modern full-stack web development, AI integration, and user-centered design to create solutions that solve real-world problems.
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
                alt="Muhammed Ajmal U K portrait"
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
                        href="mailto:ajmaluk.me@gmail.com"
                        className="footer__marquee-link"
                        aria-label="Email Muhammed Ajmal U K"
                      >
                        ajmaluk.me<span className="cl-txt-orange">@</span>gmail.com
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
