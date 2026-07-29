import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSection } from "@/components/FooterSection";
import { AboutProjectsSlider } from "@/components/AboutProjectsSlider";

export const metadata: Metadata = {
  title: "About | Muhammed Ajmal U K",
  description:
    "Muhammed Ajmal U K is an MCA student, AI enthusiast, and full-stack developer from Kerala, India. Focused on building real-world digital products, AI tools, web apps, and mobile applications.",
  openGraph: {
    title: "About | Muhammed Ajmal U K",
    description:
      "Muhammed Ajmal U K is an MCA student, AI enthusiast, and full-stack developer from Kerala, India. Focused on building real-world digital products, AI tools, web apps, and mobile applications.",
    type: "profile",
    url: "https://ajmal.uthakkan.in/about",
    images: [{ url: "/images/portrait.jpg", alt: "Muhammed Ajmal U K" }],
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

const skills = [
  "Python & Flask",
  "JavaScript & Node.js",
  "React & Next.js",
  "Flutter & Mobile",
  "Firebase & Supabase",
  "MongoDB & MySQL",
  "AI API Integration",
  "AI Agents & Prompt Eng.",
  "Full-Stack Web Dev",
  "SEO & Web Deployment",
  "UI/UX Improvement",
  "Automation & Tools",
];

export default function AboutPage() {
  return (
    <div className="wrapper">
      <main>
        {/* Hero Section */}
        <section className="about__hero">
          <div className="container">
            <div className="about__hero-content">
              <p className="about__hero-label fs-14 upper fw-med">About Me</p>
              <h1 className="about__hero-title heading display-1 upper fw-bold cl-txt-title">
                AI &amp; <span className="cl-txt-orange">Full-Stack</span> Developer
              </h1>
              <p className="about__hero-intro heading h5 cl-txt-sub">
                Hi! I&apos;m <strong className="cl-txt-title">Muhammed Ajmal U K</strong>, an MCA student and aspiring software engineer from Kerala, India. I specialize in building production-ready AI tools, full-stack web applications, mobile apps, and developer platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="about__bio">
          <div className="container grid">
            <div className="about__bio-visual">
              <div className="about__bio-image-wrap">
                <Image
                  src="/images/portrait.jpg"
                  alt="Muhammed Ajmal U K portrait"
                  width={600}
                  height={750}
                  className="about__bio-image"
                  priority
                />
              </div>
            </div>
            <div className="about__bio-content">
              <h2 className="heading h4 upper fw-bold cl-txt-title">Career Objective</h2>
              <div className="line about__bio-line" />
              <p className="about__bio-text cl-txt-sub">
                My career goal is to build high-performance, production-ready software products and grow as an AI/Full-Stack Developer and tech innovator. I am passionate about creating practical tools that solve real-world problems through clean code, modern web architectures, and smart AI integrations.
              </p>
              <p className="about__bio-text cl-txt-sub">
                From publishing games on the Google Play Store (KallanCop) to building high-traffic AI productivity platforms (ToolPix) and cross-platform mobile travel apps (Explore Together), I continuously focus on hands-on software development, scalable engineering, and user-centered product craft.
              </p>
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

        {/* Skills Section */}
        <section className="about__skills">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="about__cta">
          <div className="container">
            <div className="about__cta-card">
              <h2 className="about__cta-title heading display-2 upper fw-bold cl-txt-title">
                Let&apos;s <span className="cl-txt-orange">connect</span>
              </h2>
              <p className="about__cta-text cl-txt-sub heading h5">
                Looking for a dedicated AI &amp; Full-Stack Developer for your team or campus placement? Let&apos;s talk!
              </p>
              <div className="about__cta-actions">
                <a
                  href="mailto:ajmaluk.me@gmail.com"
                  className="about__cta-btn"
                >
                  <span className="about__cta-btn-text">Contact me</span>
                  <span className="about__cta-btn-arrow ic-20">
                    <svg width="100%" viewBox="0 0 20 20" fill="none">
                      <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                  </span>
                </a>
                <Link
                  href="/projects"
                  className="about__cta-link cl-txt-orange txt-link hover-un"
                >
                  Explore my projects
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
