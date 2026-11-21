import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-slate-300 sm:px-8">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <div className="flex gap-5">
          <a href={personalInfo.github} className="font-medium text-teal-200 hover:underline">GitHub</a>
          <Link href="/contact" className="font-medium text-teal-200 hover:underline">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
