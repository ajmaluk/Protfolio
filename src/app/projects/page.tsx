import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";
import { getAllProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects by Ajmal U K | Software & AI Portfolio",
  description:
    "Explore software projects built by Muhammed Ajmal U K (Ajmal U K / Uthakkan) — ToolPix AI, KallanCop Game, DVMA Dementia Assistant, and Explore Together.",
  keywords: [
    "Ajmal U K Projects",
    "Ajmal UK",
    "Muhammed Ajmal U K Projects",
    "Ajmal Uthakkan Software",
    "Uthakkan Projects",
    "ToolPix AI",
    "KallanCop Play Store",
    "Dementia Virtual Memory Assistant",
    "Explore Together Flutter App",
  ],
  alternates: {
    canonical: "https://ajmal.uthakkan.in/projects",
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
    title: "Projects by Ajmal U K | Software & AI Portfolio",
    description:
      "Explore software projects built by Muhammed Ajmal U K (Ajmal U K / Uthakkan) — ToolPix AI, KallanCop Game, DVMA Dementia Assistant, and Explore Together.",
    url: "https://ajmal.uthakkan.in/projects",
    type: "website",
    images: [{ url: "https://ajmal.uthakkan.in/seo/og-image.jpg", width: 1200, height: 630, alt: "Muhammed Ajmal U K (Ajmal U K) Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Ajmal U K | Software & AI Portfolio",
    description:
      "Explore software projects built by Muhammed Ajmal U K (Ajmal U K / Uthakkan).",
    images: ["https://ajmal.uthakkan.in/seo/og-image.jpg"],
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

  const allProjects = getAllProjects();
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Projects by Muhammed Ajmal U K",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: allProjects.length,
    itemListElement: allProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ajmal.uthakkan.in/projects/${project.slug}`,
      name: project.name,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main id="main-content" className="page transition-fade" data-namespace="projects" data-infinite tabIndex={-1}>
        <h1 className="visually-hidden">Software Projects &amp; Case Studies by Muhammed Ajmal U K</h1>
        <ProjectsSection isProjectsPage={true} />
        <FooterSection />
      </main>
    </div>
  );
}