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

  return {
    title: `${project.name} | Ajmal U K`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Ajmal U K`,
      description: project.summary,
      type: "article",
      images: [{ url: project.cover, alt: `${project.name} cover` }],
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

  return (
    <div className="wrapper">
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