import type { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: personalInfo.description,
};

const topics = ['Next.js y React', 'TypeScript', 'Tailwind CSS', 'SEO técnico', 'Integración de APIs'];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="border-b border-slate-200 pb-7 text-4xl font-semibold tracking-tight sm:text-5xl">Sobre mí</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_19rem]">
        <div className="max-w-xl space-y-4 text-lg leading-8 text-slate-600">
          <p>Soy {personalInfo.name}, estudiante de Tecsup. En este portafolio reúno proyectos académicos de desarrollo web e integración de sistemas.</p>
          <p>Uno de ellos es <Link href="/projects/nexomark-ia" className="font-semibold text-teal-800 underline underline-offset-4">NexoMark IA</Link>, un proyecto en equipo que reúne la generación de contenido publicitario y la aprobación de campañas en un mismo flujo.</p>
        </div>
        <section className="rounded-md border border-slate-300 bg-slate-50 p-6">
          <h2 className="text-base font-semibold">Tecnologías y temas</h2>
          <ul className="mt-3 divide-y divide-slate-200 text-sm text-slate-700">
            {topics.map((topic) => <li key={topic} className="py-3">{topic}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
}
