import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/Tag';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Work: React.FC = () => {
  return (
    <Section
      id="work"
      number="02"
      kanji="作品"
      title="Selected Engineering Work"
      subtitle="Production systems, low-latency execution engines, and developer quest environments."
    >
      <div className="space-y-0 hairline-t">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <article className="group hairline-b py-8 md:py-10 transition-colors duration-200 hover:bg-paper-subtle/30 px-2 sm:px-4 -mx-2 sm:-mx-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number & Status */}
                <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start justify-between gap-2 font-mono text-xs">
                  <span className="text-vermilion font-bold text-sm tracking-wider">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-ink-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-vermilion/80" />
                    <span className="uppercase text-[11px] font-medium tracking-wider">
                      {project.statusLabel}
                    </span>
                  </div>
                  <span className="text-ink-faint text-[11px]">{project.year}</span>
                </div>

                {/* Title & One-Liner */}
                <div className="lg:col-span-6 space-y-2">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal group-hover:text-vermilion transition-colors">
                      <Link to={`/work/${project.slug}`} className="focus:outline-none">
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-ink-muted font-sans leading-relaxed">
                    {project.oneLiner}
                  </p>

                  {/* Stack tags with zero-pill discipline */}
                  <div className="pt-2">
                    <TagList items={project.stack.slice(0, 5)} />
                  </div>
                </div>

                {/* Actions & Routing */}
                <div className="lg:col-span-4 flex items-center lg:justify-end gap-4 pt-2 lg:pt-0 font-mono text-xs uppercase tracking-wider">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-muted hover:text-vermilion transition-colors inline-flex items-center gap-1 py-1"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-ink hover:text-vermilion font-medium transition-colors py-1 pl-2"
                  >
                    <span>Read Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
