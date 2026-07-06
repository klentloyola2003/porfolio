export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'iot' | 'tools';
  percentage: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export type ExperienceType = 'OJT' | 'Internship' | 'Freelance' | 'Organization' | 'Seminar';

export interface Experience {
  id: string;
  title: string;
  organization: string;
  type: ExperienceType;
  date: string;
  description: string;
  location?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}
