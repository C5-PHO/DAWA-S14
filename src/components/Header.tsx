import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import HeaderLinks from './HeaderLinks';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-900 bg-slate-950 text-slate-100">
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 pt-3.5 pb-2 sm:px-8 sm:pt-4 sm:pb-[9px]">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">{personalInfo.name}</Link>
        <HeaderLinks />
      </nav>
    </header>
  );
}
