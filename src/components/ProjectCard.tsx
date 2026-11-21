import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';

const badgeClass = 'rounded bg-gray-100 px-2 py-1 text-xs text-gray-700';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className={badgeClass}>{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className={badgeClass}>+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
