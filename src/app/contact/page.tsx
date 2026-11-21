import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

const description = `Contacta a ${personalInfo.name} por correo o LinkedIn.`;

export const metadata: Metadata = {
  title: 'Contacto',
  description,
  openGraph: { title: 'Contacto', description, url: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold">Contacto</h1>
        <p className="mb-8 text-lg text-gray-700">
          Si tienes una consulta o quieres conversar sobre un proyecto, puedes escribirme por correo o LinkedIn.
        </p>
        <ul className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
          <li>
            <a href={`mailto:${personalInfo.email}`} className="font-medium text-blue-700 hover:underline">
              {personalInfo.email}
            </a>
          </li>
          <li>
            <a href={personalInfo.linkedin} className="font-medium text-blue-700 hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
