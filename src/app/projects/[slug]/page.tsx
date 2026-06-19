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
    title: `${project.name} | Valentin Cheval`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Valentin Cheval`,
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

  const nextProject = getNextProject(slug);
  const prevProject = getPrevProject(slug);
  const allProjects = getAllProjects();

  return (
    <article className="projects-detail">
      <ProjectHero project={project} />

      <div className="container projects-detail__body grid">
        <div className="projects-detail__main">
          <header className="projects-detail__intro">
            <p className="projects-detail__intro-label">{project.category}</p>
            <h1 className="heading display-1 upper fw-bold projects-detail__intro-title cl-txt-title">
              {project.name}
            </h1>
            <p className="projects-detail__intro-summary">{project.summary}</p>
          </header>

          <ProjectContent blocks={project.content} />

          {project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} projectName={project.name} />
          )}
        </div>

        <aside className="projects-detail__sidebar">
          <ProjectMeta project={project} />
        </aside>
      </div>

      <ProjectNav
        next={nextProject}
        prev={prevProject}
        count={allProjects.length}
      />
    </article>
  );
}