import type { Metadata } from "next";
import Image from "next/image";
import { FooterSection } from "@/components/FooterSection";
import { AboutProjectsSlider } from "@/components/AboutProjectsSlider";
import { AboutFAQ } from "@/components/AboutFAQ";

export const metadata: Metadata = {
  title: "About Ajmal U K | Muhammed Ajmal U K (Uthakkan) - Full-Stack AI Developer",
  description:
    "Learn about Muhammed Ajmal U K (Ajmal U K / Uthakkan) — MCA student at College of Engineering Trivandrum (CET), Full-Stack AI Developer, certifications, technical stack, and software projects.",
  keywords: [
    "Ajmal U K",
    "Ajmal UK",
    "About Ajmal U K",
    "Muhammed Ajmal U K",
    "Ajmal U K Profile",
    "Ajmal Uthakkan Bio",
    "Uthakkan Profile",
    "Uthakkan",
    "Ajmal MCA Student CET",
    "Full-Stack AI Developer Kerala",
    "Software Engineer Kerala India",
  ],
  alternates: {
    canonical: "https://ajmal.uthakkan.in/about",
    types: {
      "application/rss+xml": [
        {
          url: "https://ajmal.uthakkan.in/feed.xml",
          title: "Muhammed Ajmal U K — Blog RSS Feed",
        },
      ],
    },
  },
  openGraph: {
    title: "About Ajmal U K | Muhammed Ajmal U K (Uthakkan) - Full-Stack AI Developer",
    description:
      "Learn about Muhammed Ajmal U K (Ajmal U K / Uthakkan) — MCA student at CET & Full-Stack AI Developer.",
    type: "profile",
    url: "https://ajmal.uthakkan.in/about",
    images: [{ url: "https://ajmal.uthakkan.in/seo/og-image.jpg", width: 1200, height: 630, alt: "Muhammed Ajmal U K (Ajmal U K)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ajmal U K | Muhammed Ajmal U K (Uthakkan) - Full-Stack AI Developer",
    description:
      "Muhammed Ajmal U K (Ajmal U K / Uthakkan) — MCA Student at CET & Full-Stack AI Developer.",
    images: ["https://ajmal.uthakkan.in/seo/og-image.jpg"],
  },
};

const education = [
  {
    period: "2025 — 2027",
    degree: "Master of Computer Applications (MCA)",
    institution: "College of Engineering, Trivandrum (CET)",
    score: "90.9%",
    details:
      "APJ Abdul Kalam Technological University (KTU) – Specialization in Advanced Computer Applications, AI Systems, Full-Stack Web Architecture, and Software Engineering (90.9%).",
  },
  {
    period: "2022 — 2025",
    degree: "Bachelor of Computer Science (B.Sc)",
    institution: "Mahatma Gandhi College, Iritty (MGC)",
    score: "89.7%",
    details:
      "Kannur University – Specialization in Computer Science, Data Structures, Object-Oriented Programming, Database Management (SQL), and Web Technologies (89.7%).",
  },
  {
    period: "2020 — 2022",
    degree: "Higher Secondary Education (HSC)",
    institution: "GHSS Ulikkal",
    score: "90.8%",
    details:
      "Kerala Board of Public Examination – Higher Secondary Education with specialization in Computer Science & Science streams (90.8%).",
  },
];

const certifications = [
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM / Coursera",
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM / Coursera",
  },
  {
    title: "Prompt Engineering with GitHub Copilot",
    issuer: "Microsoft",
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
  },
  {
    title: "Deloitte Data Analytics Virtual Experience",
    issuer: "Deloitte / Forage",
  },
  {
    title: "Discover the Art of Prompting",
    issuer: "Coursera",
  },
  {
    title: "Maximize Productivity with AI Tools",
    issuer: "Coursera",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
  },
];

const achievements = [
  {
    title: "Built ToolPix AI Platform",
    detail: "Reached 600K+ organic Google Search clicks and 14M+ search impressions through target AI SEO and high-performance Flask tools.",
  },
  {
    title: "Published KallanCop Mobile Game",
    detail: "Published on Google Play Store, managing end-to-end product development, offline Wi-Fi/Hotspot multiplayer mechanics, testing, and distribution.",
  },
  {
    title: "Google Cloud Arcade Champion Tier",
    detail: "Achieved top Champion Tier by completing advanced Google Cloud infrastructure, AI, and DevOps labs.",
  },
];

const skills = [
  "Python & Flask",
  "JavaScript & Node.js",
  "React & Next.js",
  "Flutter & Mobile",
  "Firebase & Supabase",
  "MongoDB & MySQL",
  "Gemini API & LLMs",
  "AI Agents & Prompt Eng.",
  "Full-Stack Web Dev",
  "SEO & Web Deployment",
  "Git & Cloud Hosting",
  "REST APIs & WebSockets",
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Software Development",
  "Product Thinking",
  "Leadership",
  "Self-Learning",
  "Adaptability",
  "Time Management",
];

const services = [
  {
    title: "AI-Powered Web Applications",
    detail:
      "Full-stack web platforms with LLM and AI API integrations — from intelligent tools like ToolPix (600K+ organic search clicks) to AI-assisted workflows using Gemini, OpenAI, and custom agents.",
  },
  {
    title: "Mobile App Development (Flutter)",
    detail:
      "Cross-platform Android & iOS apps built with Flutter and Firebase — including published Play Store products like KallanCop and healthcare-focused apps like DVMA Dementia Assistant.",
  },
  {
    title: "Full-Stack Web Development",
    detail:
      "Production-ready websites and web apps using Next.js, React, Flask, and Node.js — with clean architecture, REST APIs, WebSockets, and database design (MongoDB, MySQL, Supabase).",
  },
  {
    title: "AI Agents & LLM Integrations",
    detail:
      "Prompt engineering, AI agent design, and LLM API integrations that add real intelligence to products — chat assistants, content generation, and automated decision support.",
  },
  {
    title: "SEO & Performance Optimization",
    detail:
      "Technical SEO, structured data, Core Web Vitals, and deployment optimization. ToolPix reached 14M+ search impressions through targeted AI SEO and high-performance tooling.",
  },
  {
    title: "UI/UX & Product Design",
    detail:
      "User-centered interface design that balances aesthetics with accessibility — turning complex features into simple, intuitive digital experiences.",
  },
];

const faqs = [
  {
    q: "Who is Muhammed Ajmal U K?",
    a: "Muhammed Ajmal U K (also known as Ajmal U K, ajmaluk, or Uthakkan) is an MCA student at College of Engineering Trivandrum (CET) and a Full-Stack AI Developer from Kannur, Kerala, India. He builds production-ready AI tools, web applications, and mobile apps, and is the creator of ToolPix AI, KallanCop, DVMA Dementia Assistant, CodePix, Climbo, and Explore Together.",
  },
  {
    q: "What technologies does Ajmal U K work with?",
    a: "Python, Flask, JavaScript, TypeScript, React, Next.js, Flutter, Firebase, Supabase, MongoDB, MySQL, Gemini API, and various LLM/AI integrations. He works across the full stack — from cloud deployment and backend APIs to mobile apps and frontend interfaces.",
  },
  {
    q: "What projects has Ajmal U K built?",
    a: "His notable projects include ToolPix AI (an AI tools platform with 600K+ organic search clicks and 14M+ impressions), KallanCop (an offline multiplayer game published on the Google Play Store), DVMA (a dementia care assistant app using Gemini AI), CodePix (a gamified coding education platform), Climbo (a browser physics racing game), and Explore Together (a travel matchmaking app).",
  },
  {
    q: "Where does Ajmal U K study?",
    a: "He is pursuing a Master of Computer Applications (MCA) at College of Engineering Trivandrum (CET), APJ Abdul Kalam Technological University, scoring 90.9%. He completed his B.Sc Computer Science at Mahatma Gandhi College, Iritty (89.7%) and Higher Secondary at GHSS Ulikkal (90.8%).",
  },
  {
    q: "How can I contact or hire Muhammed Ajmal U K?",
    a: "You can reach him at ajmaluk.me@gmail.com, connect on LinkedIn (linkedin.com/in/ajmaluk), or view his code on GitHub (github.com/ajmaluk). His resume is available for download on this website.",
  },
];

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ajmal.uthakkan.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://ajmal.uthakkan.in/about",
      },
    ],
  };

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://ajmal.uthakkan.in/about",
    name: "About Muhammed Ajmal U K",
    description:
      "Learn about Muhammed Ajmal U K (Ajmal U K / Uthakkan) — MCA student at College of Engineering Trivandrum (CET), Full-Stack AI Developer, certifications, technical stack, and software projects.",
    mainEntity: { "@id": "https://ajmal.uthakkan.in/#person" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".about__hero-intro", ".about__bio-text"],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="about__hero">
          <div className="container">
            <div className="about__hero-content">
              <p className="about__hero-label fs-14 upper fw-med">About Me</p>
              <h1 className="about__hero-title heading display-1 upper fw-bold cl-txt-title" style={{ marginBottom: "1.6rem" }}>
                Muhammed <span className="cl-txt-orange">Ajmal U K</span>
              </h1>
              <p className="heading h4 upper fw-med cl-txt-sub" style={{ marginBottom: "3.2rem" }}>
                AI &amp; Full-Stack Developer
              </p>
              <p className="about__hero-intro heading h5 cl-txt-sub">
                Hi! I&apos;m <strong className="cl-txt-title">Muhammed Ajmal U K</strong>, an MCA student and Software Engineer from Kerala, India. I specialize in building production-ready AI tools, full-stack web applications, mobile apps, and scalable digital products.
              </p>
              <div style={{ marginTop: "2.4rem" }}>
                <a
                  href="/resume.pdf"
                  download="Muhammed_Ajmal_UK_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__cta-btn"
                  style={{ display: "inline-flex" }}
                >
                  <span className="about__cta-btn-text">Download Resume (PDF)</span>
                  <span className="about__cta-btn-arrow ic-20">
                    <svg width="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3.75V13.125" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" />
                      <path d="M5.625 9.375L10 13.75L14.375 9.375" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M3.75 16.25H16.25" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="about__bio">
          <div className="container grid">
            <div className="about__bio-visual">
              <div className="about__bio-image-wrap">
                <Image
                  src="/images/portrait.webp"
                  alt="Muhammed Ajmal U K portrait"
                  width={600}
                  height={800}
                  className="about__bio-image"
                  priority
                />
              </div>
            </div>
            <div className="about__bio-content">
              <h2 className="heading h4 upper fw-bold cl-txt-title">Career Objective &amp; Profile Summary</h2>
              <div className="line about__bio-line" />
              <p className="about__bio-text cl-txt-sub">
                MCA student and Software Engineer passionate about designing and developing AI-powered applications and full-stack software solutions. Experienced in building production-ready web and mobile applications using Python, Flutter, Flask, Firebase, REST APIs, and LLM integrations. Strong interest in AI agents, cloud technologies, and developing innovative software products with real-world impact.
              </p>
              <p className="about__bio-text cl-txt-sub">
                From publishing privacy-first offline multiplayer games on the Google Play Store (KallanCop) to building high-traffic AI productivity platforms reaching 600K+ search clicks (ToolPix) and cognitive-support healthcare mobile apps (DVMA), I continuously focus on hands-on software development, scalable engineering, and user-centered product craft.
              </p>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="about__skills" style={{ borderTop: "1px solid var(--cl-dm-border)", paddingTop: "6rem" }}>
          <div className="container">
            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable">
              What I Do
            </h2>
            <div className="about__skills-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              {services.map((service) => (
                <div key={service.title} className="about__skill-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.8rem" }}>
                  <span className="heading h5 fw-bold cl-txt-title">{service.title}</span>
                  <p className="cl-txt-sub fs-14" style={{ lineHeight: 1.6 }}>{service.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="about__experience">
          <div className="container">
            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable">
              Education &amp; Qualifications
            </h2>
            <div className="about__timeline">
              {education.map((item) => (
                <div key={item.period + item.degree} className="about__timeline-item">
                  <div className="about__timeline-dot" />
                  <div className="about__timeline-content">
                    <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap", marginBottom: "0.8rem" }}>
                      <span className="about__timeline-period cl-txt-orange fs-14 fw-med upper">
                        {item.period}
                      </span>
                      {item.score && (
                        <span className="about__project-card-badge" style={{ position: "static", transform: "none" }}>
                          {item.score}
                        </span>
                      )}
                    </div>
                    <h3 className="about__timeline-title heading h4 fw-bold cl-txt-title">
                      {item.degree}
                    </h3>
                    <span className="about__timeline-company cl-txt-desc fs-20 fw-med">
                      {item.institution}
                    </span>
                    <p className="about__timeline-desc cl-txt-sub">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Swipable Projects Section */}
        <AboutProjectsSlider />

        {/* Certifications Section */}
        <section className="about__skills" style={{ borderTop: "1px solid var(--cl-dm-border)", paddingTop: "6rem" }}>
          <div className="container">
            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable">
              Certifications &amp; Credentials
            </h2>
            <div className="about__skills-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {certifications.map((cert) => (
                <div key={cert.title} className="about__skill-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.6rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <div className="about__skill-dot" />
                    <span className="cl-txt-orange fs-12 fw-med upper">{cert.issuer}</span>
                  </div>
                  <span className="heading h5 fw-med cl-txt-title" style={{ fontSize: "1.5rem", lineHeight: "1.3" }}>
                    {cert.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className="about__experience" style={{ paddingTop: "6rem" }}>
          <div className="container">
            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable">
              Key Achievements
            </h2>
            <div className="about__timeline">
              {achievements.map((ach) => (
                <div key={ach.title} className="about__timeline-item">
                  <div className="about__timeline-dot" />
                  <div className="about__timeline-content">
                    <h3 className="about__timeline-title heading h4 fw-bold cl-txt-title" style={{ marginBottom: "0.6rem" }}>
                      {ach.title}
                    </h3>
                    <p className="about__timeline-desc cl-txt-sub">{ach.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="about__skills" style={{ paddingTop: "6rem" }}>
          <div className="container">
            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable">
              Technical Skills &amp; Stack
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

            <h2 className="about__section-label heading h5 upper fw-med cl-txt-disable" style={{ marginTop: "4.8rem" }}>
              Soft Skills &amp; Languages
            </h2>
            <div className="about__skills-grid">
              {softSkills.map((ss) => (
                <div key={ss} className="about__skill-card">
                  <div className="about__skill-dot" style={{ backgroundColor: "var(--cl-txt-desc)" }} />
                  <span className="about__skill-name heading h5 fw-med cl-txt-title">
                    {ss}
                  </span>
                </div>
              ))}
              <div className="about__skill-card">
                <div className="about__skill-dot" style={{ backgroundColor: "#2ec4b6" }} />
                <span className="about__skill-name heading h5 fw-med cl-txt-title">
                  Malayalam (Native)
                </span>
              </div>
              <div className="about__skill-card">
                <div className="about__skill-dot" style={{ backgroundColor: "#2ec4b6" }} />
                <span className="about__skill-name heading h5 fw-med cl-txt-title">
                  English (Professional)
                </span>
              </div>
              <div className="about__skill-card">
                <div className="about__skill-dot" style={{ backgroundColor: "#2ec4b6" }} />
                <span className="about__skill-name heading h5 fw-med cl-txt-title">
                  Hindi (Conversational)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <AboutFAQ faqs={faqs} />

        {/* CTA Section */}
        <section className="about__cta">
          <div className="container">
            <div className="about__cta-card">
              <h2 className="about__cta-title heading display-2 upper fw-bold cl-txt-title">
                Let&apos;s <span className="cl-txt-orange">connect</span>
              </h2>
              <p className="about__cta-text cl-txt-sub heading h5">
                Looking for a dedicated AI &amp; Full-Stack Developer for your team or campus placement? Download my resume or send a message!
              </p>
              <div className="about__cta-actions" style={{ flexWrap: "wrap" }}>
                <a
                  href="/resume.pdf"
                  download="Muhammed_Ajmal_UK_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__cta-btn"
                >
                  <span className="about__cta-btn-text">Download Resume (PDF)</span>
                  <span className="about__cta-btn-arrow ic-20">
                    <svg width="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3.75V13.125" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" />
                      <path d="M5.625 9.375L10 13.75L14.375 9.375" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M3.75 16.25H16.25" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" />
                    </svg>
                  </span>
                </a>
                <a
                  href="mailto:ajmaluk.me@gmail.com"
                  className="about__cta-btn"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "var(--cl-dm-border)" }}
                >
                  <span className="about__cta-btn-text">Email Me</span>
                  <span className="about__cta-btn-arrow ic-20">
                    <svg width="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </div>
  );
}
