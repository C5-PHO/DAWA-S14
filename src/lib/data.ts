import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'nexomark-ia',
    title: 'NexoMark IA',
    description: 'Proyecto en equipo para agencias de marketing. Genera textos e imágenes para campañas y organiza la revisión y aprobación entre el equipo de marketing y el cliente.',
    image: '/projects/nexomark.png',
    imageFit: 'contain',
    technologies: ['React', 'Flutter', 'Django REST Framework', 'Spring Boot', 'PostgreSQL', 'n8n', 'Gemini'],
    featured: true,
  },
  {
    slug: 'nexora',
    title: 'Nexora',
    description: 'Proyecto en equipo con un panel web de administración y una aplicación Android para trabajar con campañas y productos. Integra servicios Django y Spring Boot mediante JWT.',
    image: '/projects/nexora.png',
    imageFit: 'contain',
    technologies: ['React', 'Kotlin', 'Jetpack Compose', 'Django', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/Tecsupsoft/2026-1-4c24-pi-5b',
    featured: true,
  },
  {
    slug: 'biblioteca-api',
    title: 'API de Biblioteca',
    description: 'API para administrar libros y autores, consultar sus relaciones y guardar los cambios en PostgreSQL.',
    image: '/projects/biblioteca.png',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase'],
    githubUrl: 'https://github.com/C5-PHO/DAWA-S12',
    featured: false,
  },
  {
    slug: 'next-auth-app',
    title: 'Next Auth App',
    description: 'Aplicación de autenticación con Google, GitHub y credenciales. Usa sesiones JWT e incluye bloqueo temporal tras varios intentos fallidos.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=960&auto=format&fit=crop&q=80',
    technologies: ['Next.js', 'TypeScript', 'NextAuth', 'OAuth', 'JWT'],
    githubUrl: 'https://github.com/C5-PHO/DAWA-S13',
    featured: false,
  },
  {
    slug: 'aula-cupertino',
    title: 'Aula Cupertino',
    description: 'Aplicación móvil de práctica para registrar, buscar y editar alumnos. Usa componentes Cupertino y mantiene los datos en memoria durante la sesión.',
    image: '/projects/aula-cupertino.png',
    imageFit: 'contain',
    technologies: ['Flutter', 'Dart', 'Cupertino'],
    githubUrl: 'https://github.com/C5-PHO/AMM-S11-S12',
    featured: false,
  },
  {
    slug: 'project-desk',
    title: 'Project Desk',
    description: 'Panel para organizar proyectos, miembros y tareas, con calendario y componentes reutilizables de shadcn/ui.',
    image: '/projects/project-desk.png',
    technologies: ['Next.js', 'TypeScript', 'shadcn/ui', 'Tailwind CSS'],
    githubUrl: 'https://github.com/C5-PHO/DAWA-S11',
    featured: false,
  },
  {
    slug: 'rm-field-archive',
    title: 'R/M Field Archive',
    description: 'Archivo de personajes con filtros interactivos, fichas prerenderizadas y revalidación incremental. Incluye una Pokédex que consume una segunda API.',
    image: '/projects/field-archive.svg',
    imageFit: 'contain',
    technologies: ['Next.js', 'TypeScript', 'SSG', 'ISR'],
    githubUrl: 'https://github.com/C5-PHO/DAWA-S10',
    featured: false,
  },
];


const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const productionUrl = productionHost ? `https://${productionHost}` : 'https://tuportafolio.com';

export const personalInfo = {
  name: 'Piero HO',
  title: 'Desarrollo de aplicaciones web',
  description: 'Estudiante de Tecsup. Comparto proyectos de desarrollo web y prácticas de optimización y SEO con Next.js.',
  github: 'https://github.com/Piero-HO',
  siteUrl: new URL(process.env.SITE_URL || productionUrl).origin,
};
