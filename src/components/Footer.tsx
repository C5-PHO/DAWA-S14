import { personalInfo } from '@/lib/data';

const linkClass = 'text-gray-400 transition hover:text-white';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className={linkClass}>Email</a>
        </div>
      </div>
    </footer>
  );
}
