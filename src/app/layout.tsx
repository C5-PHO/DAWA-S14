import type { Metadata } from 'next';
import '@fontsource-variable/roboto';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo, projects } from '@/lib/data';
import './globals.css';

const title = `${personalInfo.name} - ${personalInfo.title}`;
const socialImage = projects[0].image;
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: { default: title, template: `%s | ${personalInfo.name}` },
  description: personalInfo.description,
  keywords: ['desarrollador web', 'full stack', 'next.js', 'react', 'typescript', 'portafolio'],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: personalInfo.siteUrl,
    title,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [{ url: socialImage, alt: `${personalInfo.name} - Portafolio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: personalInfo.description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col text-gray-900">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
