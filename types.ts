
import { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  website?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface VisualWork {
  id: string;
  title: string;
  category: 'Photography' | 'Videography' | 'Branding' | 'Graphic Design' | 'Reels';
  imageUrl: string;
  videoUrl?: string;
  aspectRatio?: '9:16' | '16:9';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}
