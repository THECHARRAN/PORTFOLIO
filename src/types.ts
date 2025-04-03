export type Theme = 'light' | 'dark';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  category: 'Web Development' | 'UI/UX' | 'Machine Learning' | 'Tools';
}

export interface TechStack {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface TechCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    proficiency: number;
    description: string;
  }[];
}