import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects } from '@/data/projects';
import { TagList } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { PageTransition } from '@/components/layout/PageTransition';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Terminal } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.slug === slug);
  const nextProject = project?.nextSlug
    ? projects.find(p => p.slug === project.nextSlug)
    : projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-3xl mb-4 text-ink">Monograph Not Found</h1>
        <p className="text-ink-muted mb-8 font-sans">
          The project record you requested does not exist or has been archived.
        </p>
        <Button variant="primary" onClick={() => navigate('/#work')}>
          Return to Selected Work
        </Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} · Engineering Monograph · Nitya Parmar</title>
        <meta name="description" content={project.oneLiner} />
      </Helmet>

      <article className="pt-28 md:pt-36 pb-24 max-w-5xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/#work"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-vermilion transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Works Index</span>
          </Link>
        </div>

        {/* Monograph Header */}
        <header className="hairline-b pb-12 mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted mb-4">
            <span className="text-vermilion font-bold">{project.number} // MONOGRAPH</span>
            <span>·</span>
            <span>{project.category}</span>
            <span>·</span>
            <span className="text-ink">{project.statusLabel}</span>
            <span>·</span>
            <span className="text-ink-faint">{project.year}</span>
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="font-serif italic text-xl sm:text-2xl text-antique-gold max-w-3xl leading-snug">
              {project.subtitle}
            </p>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 hairline-t">
            {project.liveUrl && (
              <Button variant="primary" size="md" href={project.liveUrl} target="_blank" rel="noreferrer">
                <span>View Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            )}

            {project.githubUrl && (
              <Button variant="outline" size="md" href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="w-3.5 h-3.5 mr-1.5" />
                <span>Source Repository</span>
              </Button>
            )}
          </div>
        </header>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Architectural Narrative */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Problem */}
            <Reveal>
              <section>
                <h2 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold mb-3">
                  01 // The Problem &amp; Context
                </h2>
                <div className="font-sans text-base sm:text-lg text-ink/90 leading-relaxed">
                  <p>{project.problem}</p>
                </div>
              </section>
            </Reveal>

            {/* The Technical Approach */}
            <Reveal delay={0.1}>
              <section className="hairline-t pt-8">
                <h2 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold mb-3">
                  02 // Engineering Strategy &amp; Approach
                </h2>
                <div className="font-sans text-base sm:text-lg text-ink/90 leading-relaxed">
                  <p>{project.approach}</p>
                </div>
              </section>
            </Reveal>

            {/* Architecture In-Depth */}
            <Reveal delay={0.15}>
              <section className="hairline-t pt-8">
                <h2 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-antique-gold" />
                  <span>03 // System Architecture &amp; Data Pipeline</span>
                </h2>
                <div className="bg-paper-card border border-border-hairline p-6 rounded-xs font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
                  <p>{project.architecture}</p>
                </div>
              </section>
            </Reveal>

            {/* Key Features Breakdown */}
            <Reveal delay={0.2}>
              <section className="hairline-t pt-8">
                <h2 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold mb-6">
                  04 // Architectural Modules &amp; Invariants
                </h2>
                <div className="space-y-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={feature.title}
                      className="border border-border-hairline bg-paper-card p-5 rounded-xs"
                    >
                      <h3 className="font-mono text-sm font-semibold text-ink mb-1.5 flex items-baseline gap-2">
                        <span className="text-vermilion text-xs">§{idx + 1}</span>
                        <span>{feature.title}</span>
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          {/* Sidebar: Stack & Highlights */}
          <div className="lg:col-span-4 space-y-8">
            {/* Technology Stack Card */}
            <div className="bg-paper-card border border-border-hairline p-6 rounded-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
                Full Technology Matrix
              </h3>
              <div className="space-y-2">
                {project.stack.map(tech => (
                  <div
                    key={tech}
                    className="font-mono text-xs text-ink hairline-b pb-2 last:border-none last:pb-0 flex items-center justify-between"
                  >
                    <span>{tech}</span>
                    <span className="text-ink-faint text-[10px]">VERIFIED</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Highlights Card */}
            <div className="bg-paper-card border border-border-hairline p-6 rounded-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
                Engineering Invariants
              </h3>
              <ul className="space-y-3 text-xs font-sans text-ink-muted">
                {project.highlights.map(hl => (
                  <li key={hl} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        {nextProject && (
          <footer className="mt-16 pt-12 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              to="/#work"
              className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-vermilion transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Index</span>
            </Link>

            <Link
              to={`/work/${nextProject.slug}`}
              className="group font-mono text-right flex flex-col items-end"
            >
              <span className="text-[11px] uppercase tracking-widest text-ink-faint">
                Next Monograph ({nextProject.number})
              </span>
              <span className="font-serif text-xl sm:text-2xl text-ink group-hover:text-vermilion transition-colors inline-flex items-center gap-2">
                <span>{nextProject.title}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </footer>
        )}
      </article>
    </PageTransition>
  );
};
