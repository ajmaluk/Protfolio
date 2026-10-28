import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Ajmal UK Developer | Muhammed Ajmal U K (UTHAKKAN) — Full-Stack AI Engineer",
  description:
    "Official portfolio of Ajmal UK Developer (Muhammed Ajmal U.K.) — creator of Ajmal U.K. ToolPix AI, KallanCop, and DVMA. Building production-ready AI tools, web architectures, and mobile software under the UTHAKKAN brand.",
  keywords: [
    "Ajmal UK Developer",
    "Ajmal U.K. ToolPix",
    "Ajmal UK ToolPix",
    "Muhammed Ajmal U.K. software",
    "Muhammed Ajmal UK software",
    "UTHAKKAN",
    "Uthakkan",
    "Ajmal Uthakkan",
    "Muhammed Ajmal U K",
    "Ajmal U K",
    "Ajmal UK",
    "Ajmal",
    "ajmal uthakkan",
    "ajmaluk",
    "ajmal.uthakkan.in",
    "Ajmal U K Portfolio",
    "Muhammed Ajmal",
    "AI Developer",
    "Full-Stack AI Developer Kerala",
    "Software Engineer Kerala India",
    "MCA Student CET",
    "ToolPix AI",
    "KallanCop Game",
    "DVMA Dementia Care",
  ],
  alternates: {
    canonical: "https://ajmal.uthakkan.in/",
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
    title: "Ajmal UK Developer | Muhammed Ajmal U K (UTHAKKAN) — Full-Stack AI Engineer",
    description:
      "Muhammed Ajmal U K (known online as Ajmal UK Developer / Ajmal U.K. ToolPix / UTHAKKAN) is an MCA scholar at CET & Full-Stack AI Developer from Kerala, India.",
    url: "https://ajmal.uthakkan.in/",
    type: "profile",
    images: [{ url: "https://ajmal.uthakkan.in/seo/og-image.jpg", width: 1200, height: 630, alt: "Ajmal UK Developer (Muhammed Ajmal U K) - UTHAKKAN" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajmal UK Developer | Muhammed Ajmal U K (UTHAKKAN) — Full-Stack AI Engineer",
    description:
      "Official portfolio of Ajmal UK Developer (Muhammed Ajmal U.K. software engineer / UTHAKKAN) — MCA Student at CET & Full-Stack AI Developer.",
    images: ["https://ajmal.uthakkan.in/seo/og-image.jpg"],
    creator: "@ajmaluk",
    site: "@ajmaluk",
  },
};

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Muhammed Ajmal U K (Ajmal UK Developer)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammed Ajmal U K (professionally known as Ajmal UK Developer) is an MCA postgraduate scholar at College of Engineering Trivandrum (CET) and a Full-Stack AI Developer from Kannur, Kerala, India. He builds production-ready AI tools, full-stack web applications, and mobile apps under his brand UTHAKKAN.",
      },
    },
    {
      "@type": "Question",
      name: "What is UTHAKKAN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UTHAKKAN (linkedin.com/company/uthakkan) is the unique brand identity and software studio founded by Muhammed Ajmal U K. It serves as his primary brand footprint for publishing AI tools, mobile applications, and web platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ajmal U.K. ToolPix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajmal U.K. ToolPix is an AI-powered creative image utility suite built by Muhammed Ajmal U K. Powered by Python and Flask, it grew organically through technical SEO to over 600,000 search clicks and 14+ million Google search impressions.",
      },
    },
    {
      "@type": "Question",
      name: "What software has Muhammed Ajmal U.K. built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muhammed Ajmal U.K. software includes ToolPix AI (AI utility suite), KallanCop (offline multiplayer mobile game published on the Google Play Store), DVMA Dementia Assistant (Gemini AI mobile application), CodePix (gamified code education), Climbo (browser physics racing game), and Explore Together.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Ajmal UK Developer work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He specializes in Python, Flask, FastAPI, JavaScript, TypeScript, React, Next.js, Flutter, Firebase, Supabase, Google Gemini API, LLM integrations, AI agents, and technical SEO.",
      },
    },
  ],
};

const homeWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ajmal.uthakkan.in/#webpage",
  url: "https://ajmal.uthakkan.in/",
  name: "Ajmal UK Developer | Muhammed Ajmal U K (UTHAKKAN) — Full-Stack AI Engineer",
  description:
    "Official portfolio of Ajmal UK Developer (Muhammed Ajmal U.K.) — creator of Ajmal U.K. ToolPix AI, KallanCop, and DVMA. Building production-ready AI tools, web architectures, and mobile software under the UTHAKKAN brand.",
  isPartOf: { "@id": "https://ajmal.uthakkan.in/#website" },
  about: { "@id": "https://ajmal.uthakkan.in/#person" },
  primaryImageOfPage: "https://ajmal.uthakkan.in/seo/og-image.jpg",
  inLanguage: "en-IN",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".home__hero-intro", ".home__intro-main-txt"],
  },
};

export default function Home() {
  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPageJsonLd) }}
      />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </div>
  );
}
