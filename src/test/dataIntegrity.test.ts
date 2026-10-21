import { describe, it, expect } from 'vitest';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { profile } from '@/data/profile';
import { roadmapMilestones } from '@/data/roadmap';
import { primaryResearchPaper } from '@/data/research';

describe('Portfolio Data Integrity', () => {
  it('contains all 4 featured projects with valid slugs and required fields', () => {
    expect(projects).toHaveLength(4);

    const slugs = projects.map(p => p.slug);
    expect(slugs).toContain('loomy');
    expect(slugs).toContain('vajratrade-engine');
    expect(slugs).toContain('neetroyal');
    expect(slugs).toContain('jobsphere');

    projects.forEach(project => {
      expect(project.title).toBeTruthy();
      expect(project.oneLiner).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.problem).toBeTruthy();
      expect(project.approach).toBeTruthy();
      expect(project.architecture).toBeTruthy();
      expect(project.keyFeatures.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);

      // Verify nextSlug points to an existing project if provided
      if (project.nextSlug) {
        expect(slugs).toContain(project.nextSlug);
      }
    });
  });

  it('contains properly formatted skill categories with non-empty skills', () => {
    expect(skillCategories.length).toBeGreaterThanOrEqual(4);
    skillCategories.forEach(cat => {
      expect(cat.id).toBeTruthy();
      expect(cat.name).toBeTruthy();
      expect(cat.lead).toBeTruthy();
      expect(cat.skills.length).toBeGreaterThan(0);
    });
  });

  it('verifies profile single source of truth holds required Nitya Parmar info', () => {
    expect(profile.name).toBe('Nitya Parmar');
    expect(profile.email).toBe('nityaparmar1707@gmail.com');
    expect(profile.education.institution).toContain('Baroda University');
    expect(profile.bioParagraphs.length).toBeGreaterThanOrEqual(3);
    expect(profile.reads.length).toBeGreaterThanOrEqual(3);
  });

  it('verifies roadmap has milestones progressing toward studio and Japan', () => {
    expect(roadmapMilestones).toHaveLength(4);
    expect(roadmapMilestones.some(m => m.title.toLowerCase().includes('studio'))).toBe(true);
    expect(roadmapMilestones.some(m => m.title.toLowerCase().includes('japan'))).toBe(true);
  });

  it('verifies research paper has valid DOI and Zenodo links', () => {
    expect(primaryResearchPaper.doi).toBe('10.5281/zenodo.22026899');
    expect(primaryResearchPaper.doiUrl).toContain('doi.org/10.5281/zenodo.22026899');
  });
});
