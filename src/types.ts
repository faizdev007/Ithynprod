/**
 * Shared Type Declarations for Vertex Data & AI
 */

export type PageId = 'home' | 'about' | 'services' | 'app-services' | 'customer-bpo' | 'digital-marketing' | 'hire-experts' | 'case-studies' | 'blog' | 'contact';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  useCase: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  brief: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
  technologies: string[];
  imagePlaceholder: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  compensation: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  phone?: string;
  serviceInterest: string;
  message: string;
  budget?: string;
}

export interface ExpertProfile {
  id: string;
  name: string;
  title: string;
  experience: string;
  avatar: string;
  location: string;
  certifications: string[];
  skills: string[];
  availability: 'Immediate' | '1 Week' | '2 Weeks' | '4 Weeks';
  hourlyRateEst: string;
  techStack: string[];
}
