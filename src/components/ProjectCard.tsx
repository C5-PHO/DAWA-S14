import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';

import TechnologyBadge from './TechnologyBadge';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-md border border-slate-300 bg-slate-50 transition-colors hover:border-teal-700"
    >
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={project.imageFit === 'contain' ? 'object-contain p-5' : 'object-cover motion-safe:transition-transform motion-safe:group-hover:scale-105'}
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold group-hover:text-teal-800">{project.title}</h3>
        <p className="mb-4 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
}
