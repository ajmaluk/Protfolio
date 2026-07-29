import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer | Uthakkan",
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
  openGraph: {
    title: "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer | Uthakkan",
    description:
      "Muhammed Ajmal U K (Ajmal U K / Uthakkan) is an MCA student at College of Engineering Trivandrum & Full-Stack AI Developer.",
    url: "https://ajmal.uthakkan.in/",
    type: "website",
    images: [{ url: "/images/portrait.jpg", alt: "Muhammed Ajmal U K" }],
  },
};

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammed Ajmal U K Portfolio",
    alternateName: [
      "Ajmal U K Portfolio",
      "Ajmal Uthakkan Portfolio",
      "ajmal.uthakkan.in",
      "Uthakkan Portfolio",
    ],
    url: "https://ajmal.uthakkan.in/",
    author: {
      "@type": "Person",
      name: "Muhammed Ajmal U K",
      alternateName: ["Ajmal U K", "Ajmal Uthakkan", "Ajmal", "Uthakkan", "ajmaluk"],
    },
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="page">
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </div>
  );
}
