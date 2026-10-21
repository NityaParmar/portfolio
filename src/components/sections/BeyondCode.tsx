import React from 'react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { PenTool, Tv, Activity, Music, ArrowUpRight } from 'lucide-react';

export const BeyondCode: React.FC = () => {
  const facets = [
    {
      icon: PenTool,
      label: 'Writings & Thoughts',
      title: 'Nitya Was Here (Blog)',
      description:
        'Reflections on software architecture, college life, building games in India, and the psychology of continuous improvement.',
      linkText: 'Read Blog Essays',
      url: 'https://nityawashere.blogspot.com/',
      category: 'WRITING',
    },
    {
      icon: Tv,
      label: 'Gaming & Media',
      title: 'YouTube Channel (@NITYA_was_HERE)',
      description:
        'Gaming walkthroughs, gameplay commentary, tech experiments, and creative video editing projects.',
      linkText: 'Watch Channel',
      url: 'https://www.youtube.com/@NITYA_was_HERE',
      category: 'STREAMING',
    },
    {
      icon: Activity,
      label: 'Kinetic Motion',
      title: 'Athletics & Discipline',
      description:
        'Road running for clarity, cross-city endurance cycling, weekend football in midfield/defense, and cricket. The body sharpens the mind.',
      linkText: 'Athletic Cadence',
      url: '#contact',
      category: 'MOTION',
    },
    {
      icon: Music,
      label: 'Acoustic Focus',
      title: 'Curated Soundtrack (Spotify)',
      description:
        'Makoto Shinkai film scores (Radwimps), One Piece orchestral suites, Hospital Playlist OSTs, and atmospheric lo-fi beats that fuel late-night terminal sessions.',
      linkText: 'Listen on Spotify',
      url: 'https://open.spotify.com/user/31o2npvntb6pjo356ztnls5l4c4i',
      category: 'AUDIO',
    },
  ];

  return (
    <Section
      id="beyond"
      number="06"
      kanji="余白"
      title="Beyond the Compiler"
      subtitle="Writing, competitive athletics, storytelling media, and the soundscape that fuels development."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facets.map((facet, idx) => {
          const Icon = facet.icon;
          const isExternal = facet.url.startsWith('http');

          return (
            <Reveal key={facet.title} delay={idx * 0.08}>
              <div className="bg-paper-card border border-border-hairline p-6 sm:p-8 rounded-xs h-full flex flex-col justify-between hover:border-ink transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-vermilion font-bold">
                      {facet.category}
                    </span>
                    <Icon className="w-4 h-4 text-ink-muted group-hover:text-vermilion transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal mb-2">
                    {facet.title}
                  </h3>

                  <p className="font-sans text-sm text-ink-muted leading-relaxed">
                    {facet.description}
                  </p>
                </div>

                <div className="pt-6 hairline-t mt-6">
                  <a
                    href={facet.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="font-mono text-xs uppercase tracking-wider text-ink hover:text-vermilion inline-flex items-center gap-1.5 font-medium transition-colors"
                  >
                    <span>{facet.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
