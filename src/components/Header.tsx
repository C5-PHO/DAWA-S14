import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav aria-label="Principal" className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="text-2xl font-bold">{personalInfo.name}</Link>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-gray-700 transition hover:text-blue-600">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
