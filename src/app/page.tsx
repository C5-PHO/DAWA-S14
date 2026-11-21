import Image from 'next/image';
import Link from 'next/link';
import { personalInfo, projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-20 text-center">
        <div className="relative mx-auto mb-6 size-32">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            fill
            preload
            sizes="128px"
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">{personalInfo.name}</h1>
        <p className="mb-6 text-xl text-gray-600 md:text-2xl">{personalInfo.title}</p>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">{personalInfo.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects" className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            Ver Proyectos
          </Link>
          <Link href="/about" className="rounded-lg bg-gray-200 px-6 py-3 text-gray-800 transition hover:bg-gray-300">
            Sobre Mí
          </Link>
        </div>
      </section>
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold">Proyectos Destacados</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </div>
  );
}
