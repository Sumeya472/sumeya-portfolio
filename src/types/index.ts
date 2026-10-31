export type ProjectCategory = 'all' | 'frontend' | 'react-ts' | 'ui-ux';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ('frontend' | 'react-ts' | 'ui-ux')[];
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string; // Only present if real live deployment exists
  featured?: boolean;
  highlights?: string[];
  architecture?: string;
  metrics?: string;
}

export type DesignCategory = 'all' | 'ui-ux' | 'mobile' | 'posters';

export interface DesignItem {
  id: string;
  title: string;
  category: 'ui-ux' | 'mobile' | 'posters';
  categoryLabel: string;
  image: string;
  description: string;
  tools: string[];
  dimensions?: string;
  year?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    description?: string;
    isLearning?: boolean;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  roleOrAward: string;
  periodOrDate: string;
  description: string;
  type: 'award' | 'certification' | 'experience' | 'community';
  badge: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
  highlight?: boolean;
}
