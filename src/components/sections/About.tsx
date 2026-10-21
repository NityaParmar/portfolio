import React from 'react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';
import { BookOpen, GraduationCap, MapPin, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      number="01"
      kanji="守護"
      title="Architecture of Mind & Craft"
      subtitle="Full-stack engineer, low-latency C++ developer, and aspiring game maker."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Editorial Bio Narrative */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-ink/90 font-sans">
          <Reveal>
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:text-vermilion first-letter:leading-none">
              {profile.bioParagraphs[0]}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-ink-muted">
              {profile.bioParagraphs[1]}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-ink-muted">
              {profile.bioParagraphs[2]}
            </p>
          </Reveal>

          {/* Core Philosophy Callout */}
          <Reveal delay={0.3}>
            <div className="pt-6 hairline-t">
              <blockquote className="font-serif italic text-xl text-ink border-l-2 border-antique-gold pl-4 py-1">
                &ldquo;Master the machine at the microsecond boundary, then breathe life into virtual worlds
                that move the human spirit.&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Structured Facts & Literary Influences */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal delay={0.2}>
            {/* Academic & Professional Facts Card */}
            <div className="bg-paper-card border border-border-hairline p-6 rounded-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-vermilion" />
                <span>Foundational Facts</span>
              </h3>

              <dl className="space-y-4 text-xs font-mono">
                {profile.quickFacts.map(fact => (
                  <div key={fact.label} className="flex flex-col gap-0.5 hairline-b pb-3 last:border-none last:pb-0">
                    <dt className="text-ink-faint uppercase">{fact.label}</dt>
                    <dd className="text-ink font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            {/* Education Spotlight */}
            <div className="bg-paper-card border border-border-hairline p-6 rounded-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-3 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-antique-gold" />
                <span>Academic Rigor</span>
              </h3>
              <p className="font-serif text-lg text-ink font-medium">
                {profile.education.degree}
              </p>
              <p className="text-xs font-mono text-ink-muted mt-1">
                {profile.education.institution} · {profile.education.location}
              </p>
              <p className="text-xs font-mono text-vermilion font-semibold mt-2">
                Batch {profile.education.batch}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            {/* Literary Foundations */}
            <div className="bg-paper-card border border-border-hairline p-6 rounded-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-ink-muted" />
                <span>Reading Cadence</span>
              </h3>
              <ul className="space-y-2 text-xs font-mono">
                {profile.reads.map(book => (
                  <li key={book.title} className="flex items-center justify-between text-ink-muted">
                    <span className="text-ink font-serif italic text-sm">{book.title}</span>
                    <span className="text-ink-faint">{book.author}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
