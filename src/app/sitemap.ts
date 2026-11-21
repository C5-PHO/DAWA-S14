import type { MetadataRoute } from 'next';
import { personalInfo, projects } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = personalInfo.siteUrl;
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const projectPages = projects.map(({ slug }): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
