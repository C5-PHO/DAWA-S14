import {
  siDart, siDjango, siFlutter, siJetpackcompose, siJsonwebtokens, siKotlin, siN8n,
  siNextdotjs, siPostgresql, siPrisma, siReact, siShadcnui, siSpringboot,
  siSupabase, siTailwindcss, siTypescript,
} from 'simple-icons';

const logos: Record<string, { path: string } | undefined> = {
  React: siReact,
  Flutter: siFlutter,
  Django: siDjango,
  'Django REST Framework': siDjango,
  'Spring Boot': siSpringboot,
  PostgreSQL: siPostgresql,
  n8n: siN8n,
  Kotlin: siKotlin,
  'Jetpack Compose': siJetpackcompose,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  Prisma: siPrisma,
  Supabase: siSupabase,
  JWT: siJsonwebtokens,
  Dart: siDart,
  'shadcn/ui': siShadcnui,
  'Tailwind CSS': siTailwindcss,
};

const symbols: Record<string, string | undefined> = {
  Gemini: 'M12 2c0 6-4 10-10 10 6 0 10 4 10 10 0-6 4-10 10-10C16 12 12 8 12 2Z',
  NextAuth: 'M12 22s7-3 7-10V5l-7-3-7 3v7c0 7 7 10 7 10Z M9 12l2 2 4-4',
  OAuth: 'M15 3a5 5 0 1 1-3.5 8.6L4 19v2H2v-4l7.4-7.5A5 5 0 0 1 15 3Z M16 8h.01',
  Cupertino: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M10 18h4',
  SSG: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6 M8 13h8 M8 17h8',
  ISR: 'M20 7v5h-5 M4 17v-5h5 M5.5 8a7.5 7.5 0 0 1 12-2L20 9 M4 15l2.5 3a7.5 7.5 0 0 0 12-2',
};

export default function TechnologyBadge({ name }: { name: string }) {
  const logo = logos[name];
  const symbol = symbols[name] ?? 'm9 6-6 6 6 6m6-12 6 6-6 6';

  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-slate-200 bg-slate-100 px-2 py-1 text-xs font-medium text-slate-800">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 shrink-0 text-teal-800">
        {logo ? (
          <path fill="currentColor" d={logo.path} />
        ) : (
          <path fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d={symbol} />
        )}
      </svg>
      {name}
    </span>
  );
}
