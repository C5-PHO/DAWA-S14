import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { personalInfo, projects } from '@/lib/data';

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="w-full">
      <section className="hero border-b border-slate-700 bg-slate-900 text-slate-100">
        <div aria-hidden="true" className="hero-code">
          <code>
            <span><b>import</b>{' type { Metadata } '}<b>from</b>{' ' }<i>&apos;next&apos;</i>;</span>
            <span><b>export function</b>{' generateMetadata() {'}</span>
            <span>{'  '}<b>return</b>{' { title: '}<i>&apos;Piero HO&apos;</i>{' };'}</span>
            <span>{'}'}</span>
            <span className="hero-code-gap"><b>const</b>{' featured = projects.filter('}</span>
            <span>{'  (project) => project.featured,'}</span>
            <span>{');'}</span>
          </code>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:py-24">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{personalInfo.name}</h1>
            <p className="mt-4 text-xl font-medium text-teal-200">{personalInfo.title}</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">{personalInfo.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-md bg-teal-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-100">
                Ver proyectos
              </Link>
              <Link href="/contact" className="rounded-md border border-slate-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-200 hover:bg-slate-800">
                Contacto
              </Link>
            </div>
          </div>
          <Link
            href="/projects/nexomark-ia"
            className="hero-project group rounded-md border border-slate-600 bg-slate-950/50 p-5 transition-colors hover:border-teal-300"
          >
            <div className="flex items-center gap-4">
              <Image src="/projects/nexomark.png" alt="" width={56} height={56} className="rounded-lg" />
              <div>
                <p className="text-xs font-medium text-teal-200">Proyecto actual · En desarrollo</p>
                <p className="mt-1 text-lg font-semibold text-white">NexoMark IA</p>
              </div>
              <span aria-hidden="true" className="ml-auto text-xl text-teal-200 motion-safe:transition-transform motion-safe:group-hover:translate-x-1">→</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">Generación de anuncios con IA y aprobación de campañas entre agencia y cliente.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proyectos destacados</h2>
          <Link href="/projects" className="text-sm font-semibold text-teal-800 hover:underline">
            Ver todos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </div>
  );
}
