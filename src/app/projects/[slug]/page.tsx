import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectSlugs,
  getNextProject,
  getPrevProject,
} from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectNav } from "@/components/projects/ProjectNav";
import { FooterSection } from "@/components/FooterSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.name} | Muhammed Ajmal U K | Uthakkan`;
  const description = `${project.name}: ${project.summary} Built by Muhammed Ajmal U K (Ajmal U K / Uthakkan).`;

  return {
    title,
    description,
    keywords: [
      project.name,
      `${project.name} Muhammed Ajmal U K`,
      `${project.name} Ajmal U K`,
      `${project.name} Uthakkan`,
      ...project.services,
    ],
    authors: [{ name: "Muhammed Ajmal U K", url: "https://ajmal.uthakkan.in" }],
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://ajmal.uthakkan.in/projects/${project.slug}`,
      images: [{ url: project.cover, alt: `${project.name} preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.cover],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const nextProject = getNextProject(slug);
  const prevProject = getPrevProject(slug);
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);

  const coverUrl = project.cover.startsWith("http")
    ? project.cover
    : `https://ajmal.uthakkan.in${project.cover}`;

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
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `https://ajmal.uthakkan.in/projects/${project.slug}`,
      },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://ajmal.uthakkan.in/projects/${project.slug}#softwareapplication`,
    name: project.name,
    description: project.description,
    applicationCategory: project.category,
    operatingSystem: "Web, Android, iOS",
    datePublished: project.publishedAt,
    dateModified: project.publishedAt,
    author: {
      "@type": "Person",
      "@id": "https://ajmal.uthakkan.in/#person",
      name: "Muhammed Ajmal U K",
      alternateName: ["Ajmal U K", "Ajmal Uthakkan", "Ajmal", "Uthakkan", "ajmaluk"],
      url: "https://ajmal.uthakkan.in",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    screenshot: project.gallery.length > 0
      ? project.gallery.map((g) => g.src.startsWith("http") ? g.src : `https://ajmal.uthakkan.in${g.src}`)
      : coverUrl,
    image: coverUrl,
    url: `https://ajmal.uthakkan.in/projects/${project.slug}`,
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.name,
    description: project.summary,
    author: { "@id": "https://ajmal.uthakkan.in/#person" },
    datePublished: project.publishedAt,
    dateModified: project.publishedAt,
    image: coverUrl,
    url: `https://ajmal.uthakkan.in/projects/${project.slug}`,
    keywords: [project.name, ...project.services].join(", "),
  };

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="projects-detail">
        <ProjectHero project={project} />

        <div className="container projects-detail__body">
          <div className="projects-detail__grid grid">
            <div className="projects-detail__main">
              <ProjectContent blocks={project.content} />
            </div>

            <aside className="projects-detail__sidebar">
              <ProjectMeta project={project} />
            </aside>
          </div>

          {project.gallery.length > 0 && (
            <div className="projects-detail__gallery-wrap">
              <ProjectGallery images={project.gallery} projectName={project.name} />
            </div>
          )}
        </div>

        <ProjectNav
          next={nextProject}
          prev={prevProject}
          count={allProjects.length}
          currentIndex={currentIndex}
        />
        <FooterSection />
      </main>
    </div>
  );
}