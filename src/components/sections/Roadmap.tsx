import React from 'react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { roadmapMilestones } from '@/data/roadmap';

export const Roadmap: React.FC = () => {
  return (
    <Section
      id="roadmap"
      number="07"
      kanji="志"
      title="Roadmap & North Stars"
      subtitle="The milestones, disciplines, and promises that shape every commit."
    >
      <div className="relative border-l border-border-hairline ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-12">
        {roadmapMilestones.map((milestone, idx) => (
          <Reveal key={milestone.step} delay={idx * 0.1}>
            <div className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full border-2 border-paper transition-transform group-hover:scale-125 ${
                  milestone.state === 'active'
                    ? 'bg-vermilion ring-2 ring-vermilion/30'
                    : milestone.state === 'horizon'
                    ? 'bg-antique-gold'
                    : 'bg-ink'
                }`}
              />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
                  <span className="text-vermilion font-bold">Step {milestone.step}</span>
                  <span aria-hidden="true" className="text-ink-faint">·</span>
                  <span className="text-ink-muted">{milestone.target}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  {milestone.title}
                </h3>

                <p className="font-serif italic text-base text-antique-gold">
                  &ldquo;{milestone.vow}&rdquo;
                </p>

                <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl pt-1">
                  {milestone.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
