import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Software Projects & Case Studies | Muhammed Ajmal U K | Uthakkan",
  description:
    "Explore software projects built by Muhammed Ajmal U K (Ajmal U K / Uthakkan) — ToolPix AI, KallanCop Game, DVMA Dementia Assistant, and Explore Together.",
  keywords: [
    "Muhammed Ajmal U K Projects",
    "Ajmal U K Projects",
    "Ajmal Uthakkan Software",
    "Uthakkan Projects",
    "ToolPix AI",
    "KallanCop Play Store",
    "Dementia Virtual Memory Assistant",
    "Explore Together Flutter App",
  ],
  openGraph: {
    title: "Software Projects & Case Studies | Muhammed Ajmal U K | Uthakkan",
    description:
      "Explore software projects built by Muhammed Ajmal U K (Ajmal U K / Uthakkan) — ToolPix AI, KallanCop Game, DVMA Dementia Assistant, and Explore Together.",
    url: "https://ajmal.uthakkan.in/projects",
    type: "website",
    images: [{ url: "/images/portrait.jpg", alt: "Muhammed Ajmal U K Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Projects | Muhammed Ajmal U K | Uthakkan",
    description:
      "Explore software projects built by Muhammed Ajmal U K (Ajmal U K / Uthakkan).",
    images: ["/images/portrait.jpg"],
  },
};

export default function ProjectsPage() {
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
        name: "Projects",
        item: "https://ajmal.uthakkan.in/projects",
      },
    ],
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ajmal.uthakkan.in/projects",
    name: "Software Projects by Muhammed Ajmal U K",
    description:
      "Explore software projects built by Muhammed Ajmal U K (Ajmal U K / Uthakkan) — ToolPix AI, KallanCop Game, DVMA Dementia Assistant, and Explore Together.",
    author: { "@id": "https://ajmal.uthakkan.in/#person" },
  };

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <main id="swup" className="page transition-fade" data-namespace="projects" data-infinite>
        <ProjectsSection isProjectsPage={true} />
        <FooterSection />
      </main>
    </div>
  );
}