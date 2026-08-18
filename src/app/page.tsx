import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Ajmal U K (Muhammed Ajmal) | Full-Stack AI Developer & Software Engineer | Uthakkan",
  description:
    "Official portfolio of Muhammed Ajmal U K (Ajmal U K / Uthakkan) — MCA Student at College of Engineering Trivandrum (CET), Full-Stack AI Developer & Software Engineer from Kerala, India. Creator of ToolPix, KallanCop, DVMA, and Explore Together.",
  keywords: [
    "Ajmal U K",
    "Ajmal UK",
    "Muhammed Ajmal U K",
    "Ajmal",
    "Uthakkan",
    "ajmal uthakkan",
    "ajmaluk",
    "ajmal.uthakkan.in",
    "Ajmal U K Portfolio",
    "Ajmal UK Developer",
    "Muhammed Ajmal",
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
    title: "Ajmal U K (Muhammed Ajmal) | Full-Stack AI Developer & Software Engineer",
    description:
      "Muhammed Ajmal U K (Ajmal U K / Uthakkan) is an MCA student at College of Engineering Trivandrum & Full-Stack AI Developer from Kerala, India.",
    url: "https://ajmal.uthakkan.in/",
    type: "profile",
    images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630, alt: "Muhammed Ajmal U K (Ajmal U K)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajmal U K (Muhammed Ajmal) | Full-Stack AI Developer & Software Engineer",
    description:
      "Official portfolio of Muhammed Ajmal U K (Ajmal U K / Uthakkan) — MCA Student at CET & Full-Stack AI Developer from Kerala, India.",
    images: ["/seo/og-image.jpg"],
    creator: "@ajmaluk",
    site: "@ajmaluk",
  },
};

export default function Home() {
  return (
    <div className="wrapper">
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </div>
  );
}
