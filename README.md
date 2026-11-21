# Portafolio de Piero HO

Portafolio académico de desarrollo web e integración de sistemas, creado en Tecsup para el laboratorio 14 de Desarrollo de Aplicaciones Web Avanzado (DAWA). Presenta proyectos web y móviles, con **NexoMark IA** y **Nexora** como destacados.

[Ver portafolio en Vercel](https://dawa-s14.vercel.app/)

## Tecnologías

- **Next.js 16**, **React 19** y **TypeScript** para las páginas y fichas de proyectos.
- **Tailwind CSS 4** y **PostCSS** para el diseño adaptable.
- **Roboto Variable** con Fontsource e iconos de tecnologías con Simple Icons.
- **Vercel** para el despliegue desde la rama `main`.

## Ejecución local

Requisitos: Node.js 22 LTS y npm.

```powershell
git clone https://github.com/C5-PHO/DAWA-S14.git
cd DAWA-S14
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) o la dirección que indique la terminal.

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Revisa el código con ESLint. |
| `npm run build` | Compila la aplicación y genera las rutas estáticas. |
| `npm run start` | Sirve la compilación de producción en local. |

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación y proyectos destacados. |
| `/projects` | Catálogo de proyectos y sus tecnologías. |
| `/projects/[slug]` | Ficha de cada proyecto, con enlaces al código cuando están disponibles. |
| `/about` | Perfil académico y tecnologías. |
| `/contact` | Enlace al perfil de GitHub. |
| `/sitemap.xml` | Mapa del sitio con las páginas y fichas de proyectos. |
| `/robots.txt` | Reglas de rastreo y referencia al sitemap. |

## SEO y rendimiento

Las fichas de proyectos se prerenderizan con `generateStaticParams` y generan su título, descripción e imagen para Open Graph y Twitter con `generateMetadata`. El sitemap toma las fichas del mismo catálogo que usa la interfaz. Las tarjetas usan `next/image` con carga diferida y tamaños adaptables. La animación de portada respeta la preferencia de movimiento reducido.

Para auditar el rendimiento con Lighthouse, ejecuta `npm run build` y luego `npm run start`. Abre el sitio en Chrome y genera informes en Desktop y Mobile.

## Configuración del dominio

La aplicación usa `SITE_URL` si está definida y, en Vercel, recurre a `VERCEL_PROJECT_PRODUCTION_URL`. La URL resultante se usa en los metadatos, el sitemap y `robots.txt`.

| Variable | Uso |
| --- | --- |
| `SITE_URL` | Opcional. URL absoluta del dominio público. Configúrala si el sitio se publica bajo un dominio personalizado. |
| `VERCEL_PROJECT_PRODUCTION_URL` | Variable de sistema de Vercel con el dominio de producción. |
| `GOOGLE_SITE_VERIFICATION` | Opcional. Código de verificación de Google Search Console. |

## Estructura

| Ruta del repositorio | Responsabilidad |
| --- | --- |
| [`src/app/`](src/app) | Páginas, metadatos y rutas SEO. |
| [`src/components/`](src/components) | Navegación, tarjetas e iconos de tecnologías. |
| [`src/lib/data.ts`](src/lib/data.ts) | Datos del perfil, catálogo y selección de destacados. |
| [`public/projects/`](public/projects) | Imágenes y logotipos del catálogo. |
