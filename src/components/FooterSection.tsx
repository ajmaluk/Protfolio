"use client"

export function FooterSection() {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="container grid">
          <div className="footer__info">
            <div className="footer__info-item">
              <p className="fw-med footer__label">Socials</p>
              <div className="footer__socials-listing">
                <a href="https://linkedin.com/in/valentinchevaldesign" className="fw-med txt-link hover-un footer__link" target="_blank" rel="noopener noreferrer" aria-label="Visit Valentin Cheval's LinkedIn profile">LinkedIn</a>
                <a href="https://dribbble.com/ValentinChevalDesign" className="fw-med txt-link hover-un footer__link" target="_blank" rel="noopener noreferrer" aria-label="Visit Valentin Cheval's Dribbble profile">Dribbble</a>
                <a href="https://x.com/valentin_cheval" className="fw-med txt-link hover-un footer__link" target="_blank" rel="noopener noreferrer" aria-label="Visit Valentin Cheval on Twitter/X">Twitter/X</a>
              </div>
            </div>
            <div className="footer__info-item">
              <p className="fw-med footer__label">Contact me</p>
              <div className="footer__socials-listing">
                <a href="mailto:hello@valentincheval.design" className="fw-med txt-link hover-un footer__link" aria-label="Email Valentin Cheval">Email</a>
                <a href="https://wa.me/84822235564" className="fw-med txt-link hover-un footer__link" target="_blank" rel="noopener noreferrer" aria-label="Contact Valentin Cheval on WhatsApp">WhatsApp</a>
                <a href="https://t.me/84822235564" className="fw-med txt-link hover-un footer__link" target="_blank" rel="noopener noreferrer" aria-label="Contact Valentin Cheval on Telegram">Telegram</a>
              </div>
            </div>
          </div>

          <div className="footer__cta">
            <div className="line" />
            <p className="fw-med footer__cta-label">Got a project in mind?</p>
            <a
              href="mailto:hello@valentincheval.design"
              className="fs-24 fw-reg footer__cta-title txt-link hover-un"
              aria-label="Email Valentin Cheval to start a project"
            >
              Let&apos;s make something happen together
            </a>
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
            <div className="footer__main-image-inner">
              <img
                src="/images/footer-blend-light.png"
                alt="Valentin Cheval portrait"
                width={1080}
                height={1350}
                loading="lazy"
                className="footer__main-image-img"
              />
            </div>
          </div>

          <div className="footer__marquee-wrap" data-cursor-text="Hello">
            <div className="footer__marquee-inner">
              <div className="marquee">
                <div className="marquee-inner" style={{ display: "flex", animation: "marquee 20s linear infinite" }}>
                  {[0, 1].map((i) => (
                    <div key={i} className="marquee-inner-item">
                      <h2 className="heading h2 footer__marquee">
                        <a
                          href="mailto:hello@valentincheval.design"
                          className="footer__marquee-link"
                          aria-label="Email Valentin Cheval"
                        >
                          hello<span className="cl-txt-orange">@</span>valentincheval.design
                        </a>
                        <a
                          href="mailto:hello@valentincheval.design"
                          className="footer__marquee-link"
                          aria-hidden="true"
                          tabIndex={-1}
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
        </div>

        <div className="footer__bg">
          <img src="/images/footer-bg-gr2.png" alt="" aria-hidden="true" className="footer__bg-img" />
        </div>
      </div>
    </div>
  )
}
