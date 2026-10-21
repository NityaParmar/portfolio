import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { primaryResearchPaper } from '@/data/research';
import { Button } from '@/components/ui/Button';
import { TagList } from '@/components/ui/Tag';
import { Toast } from '@/components/ui/Toast';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { PageTransition } from '@/components/layout/PageTransition';
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Copy,
  Check,
  BookOpen,
  FileText,
  BookmarkCheck,
} from 'lucide-react';

export const Research: React.FC = () => {
  const { copy, isCopied } = useCopyToClipboard();
  const [activeTab, setActiveTab] = useState<'preview' | 'bibtex'>('preview');

  const bibtexCitation = `@article{parmar2026pcg,
  title   = {Procedural Content Generation & Gamified Learning Systems},
  author  = {Parmar, Nitya},
  journal = {Zenodo Open Research Archive},
  year    = {2026},
  doi     = {10.5281/zenodo.22026899},
  url     = {https://doi.org/10.5281/zenodo.22026899}
}`;

  return (
    <PageTransition>
      <Helmet>
        <title>Research: Procedural Content Generation (PCG) · Nitya Parmar</title>
        <meta
          name="description"
          content="Academic paper on Procedural Content Generation & Gamified Learning Systems by Nitya Parmar. DOI: 10.5281/zenodo.22026899"
        />
      </Helmet>

      <div className="pt-28 md:pt-36 pb-24 max-w-5xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            to="/#research"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-vermilion transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Paper Header Block */}
        <header className="hairline-b pb-10 mb-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted mb-4">
            <span className="text-vermilion font-bold">{primaryResearchPaper.code}</span>
            <span>·</span>
            <span>PEER ARCHIVE</span>
            <span>·</span>
            <span>{primaryResearchPaper.year}</span>
            <span>·</span>
            <span className="text-antique-gold">{primaryResearchPaper.status}</span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {primaryResearchPaper.title}
          </h1>

          <p className="font-mono text-xs text-ink-muted">
            Authored by <span className="text-ink font-semibold">Nitya Parmar</span> · ITM (SLS)
            Baroda University
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 hairline-t">
            <Button
              variant="primary"
              size="md"
              href={primaryResearchPaper.pdfPath}
              download="Nitya_Parmar_PCG_Research_2026.pdf"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download Full Manuscript (PDF)
            </Button>

            <Button
              variant="outline"
              size="md"
              href={primaryResearchPaper.doiUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Zenodo Permanent DOI
            </Button>

            <button
              type="button"
              onClick={() => copy(bibtexCitation)}
              className="font-mono text-xs uppercase tracking-wider px-3.5 py-2 border border-border-hairline bg-paper-card text-ink hover:border-ink transition-colors rounded-xs inline-flex items-center gap-1.5 cursor-pointer"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-vermilion" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Citation Copied' : 'Copy BibTeX'}</span>
            </button>
          </div>
        </header>

        {/* Embedded Viewer & Manuscript Section */}
        <div className="space-y-10">
          {/* Metadata & Abstract Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-paper-card border border-border-hairline p-6 sm:p-8 rounded-xs">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
                Manuscript Abstract
              </h2>
              <p className="font-sans text-base text-ink leading-relaxed">
                {primaryResearchPaper.abstract}
              </p>
              <div className="pt-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">
                  Investigated Taxonomies
                </h3>
                <TagList items={primaryResearchPaper.domains} />
              </div>
            </div>

            <div className="lg:col-span-4 border-l border-border-hairline pl-0 lg:pl-6 space-y-4 text-xs font-mono">
              <div>
                <span className="text-ink-faint block uppercase text-[10px] mb-0.5">DOI Identifier</span>
                <a
                  href={primaryResearchPaper.doiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink font-semibold hover:text-vermilion"
                >
                  {primaryResearchPaper.doi}
                </a>
              </div>

              <div>
                <span className="text-ink-faint block uppercase text-[10px] mb-0.5">Publication Year</span>
                <span className="text-ink">{primaryResearchPaper.year}</span>
              </div>

              <div>
                <span className="text-ink-faint block uppercase text-[10px] mb-0.5">Archive Index</span>
                <span className="text-ink">Zenodo / CERN Open Science</span>
              </div>
            </div>
          </div>

          {/* Interactive Document Viewport (Clean Monograph Reader) */}
          <div className="border border-border-hairline rounded-xs bg-paper-card overflow-hidden">
            {/* Viewport Toolbar */}
            <div className="flex items-center justify-between px-6 py-3.5 hairline-b bg-paper-subtle/50 font-mono text-xs">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-vermilion" />
                <span className="text-ink font-medium">Nitya_Parmar_PCG_Research_2026.pdf</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-2.5 py-1 text-xs rounded-xs transition-colors cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-paper text-ink font-semibold shadow-xs'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  Manuscript View
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('bibtex')}
                  className={`px-2.5 py-1 text-xs rounded-xs transition-colors cursor-pointer ${
                    activeTab === 'bibtex'
                      ? 'bg-paper text-ink font-semibold shadow-xs'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  BibTeX
                </button>
              </div>
            </div>

            {/* Document Content */}
            {activeTab === 'preview' ? (
              <div className="p-8 sm:p-12 space-y-8 font-serif max-w-3xl mx-auto">
                <div className="text-center hairline-b pb-8">
                  <h2 className="text-2xl sm:text-3xl font-medium text-ink mb-2">
                    {primaryResearchPaper.title}
                  </h2>
                  <p className="font-mono text-xs text-ink-muted">
                    Nitya Parmar · Department of Computer Science &amp; Engineering
                  </p>
                  <p className="font-mono text-xs text-ink-faint mt-1">
                    ITM (SLS) Baroda University, Vadodara, Gujarat, India
                  </p>
                </div>

                <div className="space-y-6 text-ink/90 font-sans text-sm sm:text-base leading-relaxed">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold mb-2">
                      1. Introduction &amp; Theoretical Problem
                    </h3>
                    <p className="text-ink-muted">
                      Conventional pedagogical assessment platforms rely on fixed question inventories
                      presented uniformly across student cohorts. When students encounter repeated assessments,
                      recall of prior static sequences often decouples measured performance from genuine
                      conceptual mastery. Procedural Content Generation (PCG) offers an algorithmic pathway to
                      generate seed-deterministic assessment states dynamically.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold mb-2">
                      2. Methodology &amp; Mathematical Formalization
                    </h3>
                    <p className="text-ink-muted">
                      {primaryResearchPaper.methodologyOverview}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold mb-2">
                      3. Empirical Results &amp; Web Execution
                    </h3>
                    <p className="text-ink-muted">
                      Implementation in high-throughput single-page client engines shows that dynamic difficulty
                      adjustment maintains a stable 60fps interaction loop while reducing memory footprint to
                      under 14MB in the critical path.
                    </p>
                  </div>
                </div>

                <div className="hairline-t pt-8 text-center">
                  <Button
                    variant="primary"
                    size="sm"
                    href={primaryResearchPaper.pdfPath}
                    download="Nitya_Parmar_PCG_Research_2026.pdf"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Download Complete 8-Page Preprint
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 bg-paper">
                <pre className="font-mono text-xs text-ink overflow-x-auto p-4 bg-paper-card border border-border-hairline rounded-xs">
                  {bibtexCitation}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast isVisible={isCopied} message="BibTeX citation copied to clipboard" />
    </PageTransition>
  );
};
