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

const statsData = [
  "8 years of experience",
  "senior designer",
  "Over 100 customers",
  "Product Design",
  "Brand design & Strategy",
  "Visual design",
];

const introMainText = "Financial services should be intuitive, accessible, and empowering. I use human-centered design to create solutions that resonate with customers.By applying design thinking, branding, and strategic planning, I've helped banks, fintechs, and crypto businesses improve customer experience, increase engagement, and drive growth.My goal is to create financial experiences that are not only efficient but also enjoyable. I believe finance should be a positive force in people's lives.";

export function IntroSection() {
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
              <a href="mailto:hello@valentincheval.design" className="home__intro-company">
                <div className="home__intro-company-secret">
                  <div className="fs-16 fw-med cl-txt-title">Your logo here</div>
                </div>
              </a>
            </div>
          </div>

          <div className="home__intro-main">
            <div className="heading h4 home__intro-main-txt">
              {introMainText}
            </div>
            <a href="/about" className="btn-circle arrow-hover home__intro-btn">
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
            </a>
          </div>

          <div className="home__intro-portrait">
            <img
              src="/images/portrait.jpg"
              alt="Valentin Cheval"
              width={183}
              height={244}
              className="img"
              loading="lazy"
            />
          </div>

          <div className="home__intro-awards" style={{ "--itemLength": 4 } as React.CSSProperties}>
            <h3 className="heading h4 cl-txt-title upper home__intro-awards-title">Awards</h3>
            <div className="home__intro-awards-listing">
              {awardsData.map((award, index) => (
                <div key={award.name} className="home__intro-award">
                  <span className="home__intro-award-line" />
                  <div className="home__intro-award-inner">
                    <p className="home__intro-award-name">{award.name}</p>
                    <p className="home__intro-award-year">{award.year}</p>
                    <p className="home__intro-award-category">{award.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home__intro-service-wrap">
          <div className="home__intro-service">
            {/* Black Marquee: scrolls right (reverse) */}
            <div className="home__intro-service-marquee-wrap black">
              <div className="marquee">
                <div 
                  className="marquee-inner" 
                  style={{ display: "flex", animation: "marquee-reverse 20s linear infinite" }}
                >
                  <div className="marquee-inner-item">
                    <div className="home__intro-service-marquee">
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">8 years of experience</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">senior designer</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Over 100 customers</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-inner-item">
                    <div className="home__intro-service-marquee">
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">8 years of experience</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">senior designer</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Over 100 customers</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="marquee-inner-item">
                    <div className="home__intro-service-marquee">
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Product Design</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Brand design &amp; Strategy</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Visual design</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-inner-item">
                    <div className="home__intro-service-marquee">
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Product Design</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Brand design &amp; Strategy</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                      <div className="home__intro-service-marquee-item">
                        <h3 className="fw-semi heading h3 upper">Visual design</h3>
                        <div className="ic ic-32 anim-rot">
                          <img src="/images/asterisk.svg" alt="asterisk" className="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home__intro-service-blur">
            <div className="home__intro-service-blur-inner">
              <img
                src="/images/intro-service-blur.png"
                alt="a orange blur"
                width={1400}
                height={1400}
                className="img img-fit"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" style={{ overflow: "hidden" }}>
        <div
          className="marquee-inner"
          style={{ display: "flex", animation: "marquee 20s linear infinite" }}
        >
          <div
            className="marquee-inner-item"
            style={{ width: "max-content", display: "flex", flex: "none" }}
          >
            {statsData.map((item) => (
              <h3 key={item} className="fw-semi heading h3 upper">{item}</h3>
            ))}
          </div>
          <div
            className="marquee-inner-item"
            style={{ width: "max-content", display: "flex", flex: "none" }}
          >
            {statsData.map((item) => (
              <h3 key={item} className="fw-semi heading h3 upper">{item}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
