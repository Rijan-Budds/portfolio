export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  content?: string;
  tags?: string[];
  slug: string;
};

export type Posts = Post[];

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  tech?: string[];
};

export type Projects = Project[];
