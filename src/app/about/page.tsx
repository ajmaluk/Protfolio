import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "About | Valentin Cheval",
  description:
    "I'm an award-winning product designer specialized in financial products. Over 8 years of experience designing for fintech, banking, crypto, and Web3.",
  openGraph: {
    title: "About | Valentin Cheval",
    description:
      "I'm an award-winning product designer specialized in financial products. Over 8 years of experience designing for fintech, banking, crypto, and Web3.",
    type: "profile",
    url: "https://valentincheval.design/about",
    images: [{ url: "/images/portrait.jpg", alt: "Valentin Cheval portrait" }],
  },
};

const experience = [
  {
    period: "2022 — Present",
    title: "Head of Design",
    company: "BitMEX",
    description:
      "Leading design across the entire platform, from brand strategy to product UI. Repositioning one of the largest crypto derivatives exchanges for a new generation of retail traders.",
  },
  {
    period: "2021 — 2022",
    title: "Lead Product Designer",
    company: "Tyme Bank",
    description:
      "Designed the bank's first retail investment product suite from concept through launch. Built a cohesive design system and contributed to brand evolution for one of Africa's fastest digital banks.",
  },
  {
    period: "2020 — 2021",
    title: "Lead Product Designer",
    company: "DefiChain",
    description:
      "First product designer for the DefiMetachain ecosystem. Designed DefiScan explorer from internal tool to public-facing product, shipping in 14 weeks.",
  },
  {
    period: "2018 — 2020",
    title: "Senior Product Designer",
    company: "Various Fintechs",
    description:
      "Designed financial products across lending, payments, and wealth management platforms. Developed expertise in UX research, design systems, and user-centered design methodologies.",
  },
];

const skills = [
  "Product Design",
  "Brand Strategy",
  "UX Research",
  "Design Systems",
  "Visual Design",
  "User Testing",
  "Prototyping",
  "Art Direction",
  "Design Leadership",
  "Interaction Design",
];

export default function AboutPage() {
  return (
    <div className="wrapper">
      <main>
        {/* Hero Section */}
        <section className="about__hero">
          <div className="container grid">
            <div className="about__hero-content">
              <p className="about__hero-label cl-txt-disable fs-14 upper fw-med">About</p>
              <h1 className="about__hero-title heading display-1 upper fw-bold cl-txt-title">
                Designer &amp; <span className="cl-txt-orange">strategist</span>
              </h1>
              <p className="about__hero-intro heading h5 cl-txt-sub">
                I help financial brands design products that people love to use. With over 8 years
                of experience across fintech, banking, crypto, and Web3, I bring human-centered
                design to complex financial ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="about__bio">
          <div className="container grid">
            <div className="about__bio-visual">
              <div className="about__bio-image-wrap">
                <img
                  src="/images/portrait.jpg"
                  alt="Valentin Cheval portrait"
                  width={600}
                  height={750}
                  className="about__bio-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about__bio-content">
              <h2 className="heading h4 upper fw-bold cl-txt-title">My approach</h2>
              <div className="line about__bio-line" />
              <p className="about__bio-text cl-txt-sub">
                I believe financial services should be intuitive, accessible, and empowering. My
                work sits at the intersection of design thinking, brand strategy, and product
                execution — turning complex financial systems into clear, human experiences.
              </p>
              <p className="about__bio-text cl-txt-sub">
                As a Rotarian, I believe in service above self. Being a designer is about serving
                user needs — finding the right balance between what people want and what the
                business needs to deliver. Every product I ship is built on user research, validated
                through testing, and refined through craft.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="about__experience">
          <div className="container">
            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable">
              Experience
            </h2>
            <div className="about__timeline">
              {experience.map((item, index) => (
                <div key={index} className="about__timeline-item">
                  <div className="about__timeline-dot" />
                  <div className="about__timeline-content">
                    <span className="about__timeline-period cl-txt-orange fs-14 fw-med upper">
                      {item.period}
                    </span>
                    <h3 className="about__timeline-title heading h4 fw-bold cl-txt-title">
                      {item.title}
                    </h3>
                    <span className="about__timeline-company cl-txt-desc fs-20 fw-med">
                      {item.company}
                    </span>
                    <p className="about__timeline-desc cl-txt-sub">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="about__skills">
          <div className="container">
            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable">
              Expertise
            </h2>
            <div className="about__skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="about__skill-card">
                  <div className="about__skill-dot" />
                  <span className="about__skill-name heading h5 fw-med cl-txt-title">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about__cta">
          <div className="container">
            <div className="about__cta-card">
              <h2 className="about__cta-title heading display-2 upper fw-bold cl-txt-title">
                Let&apos;s work <span className="cl-txt-orange">together</span>
              </h2>
              <p className="about__cta-text cl-txt-sub heading h5">
                Got a project in mind? I&apos;d love to hear about it.
              </p>
              <div className="about__cta-actions">
                <a
                  href="mailto:hello@valentincheval.design"
                  className="about__cta-btn"
                >
                  <span className="about__cta-btn-text">Get in touch</span>
                  <span className="about__cta-btn-arrow ic-20">
                    <svg width="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                  </span>
                </a>
                <Link
                  href="/projects"
                  transitionTypes={['page-transition']}
                  className="about__cta-link cl-txt-orange txt-link hover-un"
                >
                  View my work
                </Link>
              </div>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </div>
  );
}
