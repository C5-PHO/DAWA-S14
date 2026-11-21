import TechnologyBadge from '@/components/TechnologyBadge';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  const { title, description, image } = project;
  return {
    title,
    description,
    openGraph: { title, description, images: [image], type: 'article' },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <Link href="/projects" className="mb-6 inline-block text-teal-800 hover:underline">
        ← Volver a Proyectos
      </Link>
      <article>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-md bg-slate-900 sm:h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            preload
            sizes="(min-width: 1280px) 1200px, 100vw"
            className={project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}
          />
        </div>
        <p className="mb-6 text-lg text-gray-700">{project.description}</p>
        <section className="mb-6">
          <h2 className="mb-3 text-2xl font-bold">Tecnologías Utilizadas</h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech}><TechnologyBadge name={tech} /></li>
            ))}
          </ul>
        </section>
        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-teal-800 px-6 py-3 text-white transition hover:bg-teal-900">
              Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-slate-800 px-6 py-3 text-white transition hover:bg-gray-900">
              Ver Código
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
