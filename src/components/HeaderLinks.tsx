'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/contact', label: 'Contacto' },
];

export default function HeaderLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
      {links.map(({ href, label }) => {
        const isCurrentPage = pathname === href;
        const isActive = isCurrentPage || (href !== '/' && pathname.startsWith(`${href}/`));

        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isCurrentPage ? 'page' : isActive ? 'location' : undefined}
              className={`inline-block border-b-2 pb-1 text-sm font-medium transition-colors hover:text-teal-200 ${
                isActive ? 'border-teal-300 text-teal-200' : 'border-transparent text-slate-200'
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
