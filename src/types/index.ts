export type ProjectStatus = 'LIVE' | 'COMPLETED' | 'IN_DEVELOPMENT' | 'STORY_PHASE';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  oneLiner: string;
  category: string;
  year: string;
  status: ProjectStatus;
  statusLabel: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  approach: string;
  architecture: string;
  keyFeatures: ProjectFeature[];
  highlights: string[];
  nextSlug?: string;
}

export interface SkillItem {
  name: string;
  context?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  lead: string;
  skills: SkillItem[];
}

export interface LinkItem {
  label: string;
  url: string;
  category: 'social' | 'code' | 'writing' | 'media' | 'audio';
  annotation?: string;
}

export interface RoadmapMilestone {
  step: string;
  title: string;
  target: string;
  vow: string;
  description: string;
  state: 'active' | 'horizon' | 'beacon';
}

export interface ProfileInfo {
  name: string;
  kanji: string;
  kanjiSub: string;
  positioning: string;
  roles: string[];
  statusNote: string;
  education: {
    degree: string;
    major: string;
    institution: string;
    location: string;
    batch: string;
  };
  bioParagraphs: string[];
  quickFacts: { label: string; value: string }[];
  email: string;
  interests: {
    category: string;
    items: string[];
  }[];
  reads: { title: string; author: string }[];
}

export interface ResearchPaper {
  title: string;
  code: string;
  year: string;
  doi: string;
  doiUrl: string;
  pdfPath: string;
  abstract: string;
  methodologyOverview: string;
  domains: string[];
  status: string;
}
