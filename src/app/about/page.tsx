import type { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

const skills = [
  'JavaScript/TypeScript',
  'React & Next.js',
  'Node.js & Express',
  'PostgreSQL & MongoDB',
  'Tailwind CSS',
  'Git & GitHub',
  'Docker',
  'AWS',
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Sobre Mí</h1>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 280px, (min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">¡Hola! Soy {personalInfo.name}</h2>
            <div className="space-y-4 text-gray-700">
              <p>Soy un desarrollador full stack apasionado por crear experiencias web excepcionales. Me especializo en construir aplicaciones modernas y escalables.</p>
              <p>Mi enfoque está en escribir código limpio, mantenible y eficiente, aplicando buenas prácticas para entregar productos de alta calidad.</p>
              <p>Cuando no estoy programando, me gusta contribuir a proyectos de código abierto, escribir artículos técnicos y aprender nuevas tecnologías.</p>
            </div>
          </div>
        </div>
        <section>
          <h2 className="mb-6 text-3xl font-bold">Habilidades Técnicas</h2>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill) => (
              <li key={skill} className="rounded-lg bg-white p-4 text-center font-semibold text-gray-800 shadow-md">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
