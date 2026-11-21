import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
    images: [projects[0].image],
  },
};

export default function ProjectsPage() {
  return (
    <div className="projects-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Mis Proyectos</h1>
        <p className="mb-12 text-lg text-gray-600">Proyectos académicos de desarrollo web, integración y autenticación.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </div>
  );
}
