import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { primaryResearchPaper } from '@/data/research';
import { FileText, ExternalLink, ArrowRight, Download } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <Section
      id="research"
      number="05"
      kanji="探究"
      title="Peer Research & Publications"
      subtitle="Theoretical inquiries into procedural generation and adaptive cognitive learning."
    >
      <div className="bg-paper-card border border-border-hairline p-8 md:p-10 rounded-xs">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 hairline-b pb-6 mb-6">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">
              <span className="text-vermilion font-bold">{primaryResearchPaper.code}</span>
              <span>·</span>
              <span>Year {primaryResearchPaper.year}</span>
              <span>·</span>
              <span className="text-antique-gold">{primaryResearchPaper.status}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              {primaryResearchPaper.title}
            </h3>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={primaryResearchPaper.doiUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-ink hover:text-vermilion inline-flex items-center gap-1.5 underline decoration-vermilion/50"
            >
              <span>DOI: {primaryResearchPaper.doi}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Abstract and Methodology */}
        <div className="space-y-4 mb-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-1">
              Abstract
            </h4>
            <p className="font-sans text-base text-ink-muted leading-relaxed">
              {primaryResearchPaper.abstract}
            </p>
          </div>

          <div className="pt-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">
              Key Investigated Domains
            </h4>
            <TagList items={primaryResearchPaper.domains} />
          </div>
        </div>

        {/* Actions Deck */}
        <div className="pt-6 hairline-t flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href={primaryResearchPaper.pdfPath}
              download="Nitya_Parmar_PCG_Research_2026.pdf"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download Preprint PDF
            </Button>

            <Button
              variant="outline"
              size="sm"
              href={primaryResearchPaper.doiUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Zenodo Archive
            </Button>
          </div>

          <Link
            to="/research"
            className="font-mono text-xs uppercase tracking-wider text-ink hover:text-vermilion inline-flex items-center gap-1.5 font-medium group"
          >
            <span>Open Dedicated Research Portal</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Section>
  );
};
