import React from 'react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { skillCategories } from '@/data/skills';

export const Craft: React.FC = () => {
  return (
    <Section
      id="craft"
      number="04"
      kanji="技術"
      title="Index of Craft & Tools"
      subtitle="A typographic directory of systems, runtime environments, and creative media tools."
    >
      <div className="space-y-12">
        {skillCategories.map((category, catIdx) => (
          <Reveal key={category.id} delay={catIdx * 0.07}>
            <div className="hairline-b pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-6">
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-vermilion font-bold tracking-widest uppercase block mb-1">
                    Index 0{catIdx + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-ink font-normal">
                    {category.name}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm font-sans text-ink-muted leading-relaxed">
                    {category.lead}
                  </p>
                </div>
              </div>

              {/* Typographic Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 pt-2">
                {category.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="flex flex-col border-l border-border-hairline pl-3 py-0.5 hover:border-vermilion transition-colors group"
                  >
                    <span className="font-mono text-xs font-semibold text-ink group-hover:text-vermilion transition-colors">
                      {skill.name}
                    </span>
                    {skill.context && (
                      <span className="font-sans text-[11px] text-ink-muted leading-tight mt-0.5">
                        {skill.context}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
