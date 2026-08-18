import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Muhammed Ajmal U K (Ajmal U K / Uthakkan) — Full-Stack AI Developer from Kerala, India. Available for freelance projects, internships, and collaborations. Email ajmaluk.me@gmail.com.",
  keywords: [
    "Contact Ajmal U K",
    "Muhammed Ajmal U K Contact",
    "Hire AI Developer Kerala",
    "Freelance Full-Stack Developer India",
    "Uthakkan Contact",
  ],
  alternates: {
    canonical: "https://ajmal.uthakkan.in/contact",
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
    title: "Contact | Muhammed Ajmal U K | Uthakkan",
    description:
      "Get in touch with Muhammed Ajmal U K — Full-Stack AI Developer from Kerala, India. Open for freelance projects, internships, and collaborations.",
    url: "https://ajmal.uthakkan.in/contact",
    type: "website",
    images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630, alt: "Contact Muhammed Ajmal U K" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Muhammed Ajmal U K | Uthakkan",
    description:
      "Get in touch with Muhammed Ajmal U K — Full-Stack AI Developer from Kerala, India.",
    images: ["/seo/og-image.jpg"],
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ajmal.uthakkan.in/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://ajmal.uthakkan.in/contact" },
    ],
  };

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://ajmal.uthakkan.in/contact",
    name: "Contact Muhammed Ajmal U K",
    description:
      "Contact page of Muhammed Ajmal U K (Ajmal U K / Uthakkan), Full-Stack AI Developer from Kannur, Kerala, India.",
    url: "https://ajmal.uthakkan.in/contact",
    mainEntity: { "@id": "https://ajmal.uthakkan.in/#person" },
  };

  const channels = [
    {
      label: "Email",
      value: "ajmaluk.me@gmail.com",
      href: "mailto:ajmaluk.me@gmail.com",
      note: "Best for project inquiries, internships, and collaborations — I usually reply within a day.",
    },
    {
      label: "Phone / WhatsApp",
      value: "+91 85471 97122",
      href: "tel:+918547197122",
      note: "For quick questions or scheduling a call (IST, UTC+5:30).",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ajmaluk",
      href: "https://in.linkedin.com/in/ajmaluk",
      external: true,
      note: "Professional profile — experience, education, and certifications.",
    },
    {
      label: "GitHub",
      value: "github.com/ajmaluk",
      href: "https://github.com/ajmaluk",
      external: true,
      note: "Open-source work and project code.",
    },
    {
      label: "Instagram",
      value: "instagram.com/ajmaluk.me",
      href: "https://instagram.com/ajmaluk.me",
      external: true,
      note: "Behind-the-scenes of projects and dev life.",
    },
  ];

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <main id="main-content" tabIndex={-1}>
        <section className="about__hero">
          <div className="container">
            <div className="about__hero-content">
              <p className="about__hero-label fs-14 upper fw-med">Contact</p>
              <h1 className="about__hero-title heading display-1 upper fw-bold cl-txt-title" style={{ marginBottom: "1.6rem" }}>
                Let&apos;s Build <span className="cl-txt-orange">Together</span>
              </h1>
              <p className="about__hero-intro heading h5 cl-txt-sub">
                I&apos;m Muhammed Ajmal U K, a Full-Stack AI Developer from Kannur, Kerala. Open to freelance projects, internships, and product collaborations — tell me what you&apos;re building and I&apos;ll tell you how I can help.
              </p>
            </div>
          </div>
        </section>

        <section className="about__skills" style={{ paddingTop: "2rem" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", maxWidth: "90rem", margin: "0 auto" }}>
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="about__skill-card"
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2.4rem",
                    padding: "2rem",
                    textDecoration: "none",
                    flexWrap: "wrap",
                  }}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={`Contact via ${channel.label}: ${channel.value}`}
                >
                  <div style={{ flex: "0 0 180px" }}>
                    <p className="cl-txt-orange fs-12 fw-med upper" style={{ marginBottom: "0.4rem" }}>
                      {channel.label}
                    </p>
                    <p className="heading h5 fw-bold cl-txt-title" style={{ lineHeight: 1.3 }}>
                      {channel.value}
                    </p>
                  </div>
                  <p className="cl-txt-sub fs-14" style={{ flex: 1, minWidth: "240px", lineHeight: 1.7 }}>
                    {channel.note}
                  </p>
                  <span className="cl-txt-orange fs-14 fw-med" aria-hidden="true">
                    {channel.external ? "Visit ↗" : "Reach out →"}
                  </span>
                </a>
              ))}
            </div>

            <div style={{ maxWidth: "90rem", margin: "3.2rem auto 0", borderTop: "1px solid var(--cl-dm-border)", paddingTop: "2.4rem" }}>
              <h2 className="heading h4 fw-bold cl-txt-title upper" style={{ marginBottom: "1.2rem" }}>
                Based in Kannur, Kerala
              </h2>
              <p className="cl-txt-sub fs-14" style={{ lineHeight: 1.8, maxWidth: "64rem" }}>
                Currently pursuing MCA at College of Engineering Trivandrum (CET). I work remotely with clients and teams across India and worldwide — comfortable with async communication and IST-friendly call times. For a full overview of my work, see my{" "}
                <Link href="/projects" className="cl-txt-orange fw-med">projects</Link> or read about my process on the{" "}
                <Link href="/blog" className="cl-txt-orange fw-med">blog</Link>.
              </p>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </div>
  );
}
