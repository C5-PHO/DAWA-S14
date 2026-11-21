export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageFit?: 'contain';
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}