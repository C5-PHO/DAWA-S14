import type { Metadata } from 'next';
import { siGithub } from 'simple-icons';
import { personalInfo } from '@/lib/data';

const description = `Consulta el perfil de GitHub de ${personalInfo.name}.`;

export const metadata: Metadata = {
  title: 'Contacto',
  description,
  openGraph: { title: 'Contacto', description, url: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="border-b border-slate-200 pb-7 text-4xl font-semibold tracking-tight sm:text-5xl">Contacto</h1>
      <div className="mt-8 max-w-lg">
        <p className="leading-7 text-slate-600">Puedes encontrar mi perfil y mis repositorios en GitHub.</p>
        <a href={personalInfo.github} className="mt-5 flex items-center justify-between gap-3 rounded-md border border-slate-300 bg-slate-50 p-5 text-sm font-semibold transition hover:border-teal-700">
          <span className="inline-flex flex-wrap items-center gap-2">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-teal-800">
              <path fill="currentColor" d={siGithub.path} />
            </svg>
            GitHub <span className="font-normal text-slate-600">@Piero-HO</span>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
