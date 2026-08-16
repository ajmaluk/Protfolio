import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  description:
    "Official website of Muhammed Ajmal U K (Ajmal U K / Uthakkan). MCA Student at CET, AI Developer & Software Engineer. Explore projects ToolPix, KallanCop, DVMA, and Explore Together.",
  keywords: [
    "Muhammed Ajmal U K",
    "Ajmal U K",
    "Ajmal",
    "Uthakkan",
    "ajmal uthakkan",
    "ajmaluk",
    "ajmal.uthakkan.in",
    "Full-Stack AI Developer",
    "MCA Student CET",
  ],
  alternates: {
    canonical: "https://ajmal.uthakkan.in/",
  },
  openGraph: {
    title: "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer | Uthakkan",
    description:
      "Muhammed Ajmal U K (Ajmal U K / Uthakkan) is an MCA student at College of Engineering Trivandrum & Full-Stack AI Developer.",
    url: "https://ajmal.uthakkan.in/",
    type: "website",
    images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630, alt: "Muhammed Ajmal U K" }],
  },
};

export default function Home() {
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
    ],
  };

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="page" id="main-content" tabIndex={-1}>
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </div>
  );
}
