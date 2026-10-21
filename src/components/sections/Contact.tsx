import React from 'react';
import { Section } from '@/components/ui/Section';
import { Toast } from '@/components/ui/Toast';
import { Reveal } from '@/components/ui/Reveal';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { publicContact } from '@/data/links';
import { Copy, Check, Mail, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { copy, isCopied } = useCopyToClipboard();

  const handleCopyEmail = () => {
    copy(publicContact.email);
  };

  return (
    <Section
      id="contact"
      number="08"
      kanji="結び"
      title="Initiate Dialogue"
      subtitle="Seeking 2026 software engineering internships, game studio apprenticeships, and high-stakes systems collaborations."
      className="hairline-b-0 pb-28"
    >
      <div className="bg-paper-card border border-border-hairline p-8 sm:p-12 md:p-16 rounded-xs relative overflow-hidden">
        {/* Subtle Watermark Kanji */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 font-serif text-[240px] text-ink/[0.025] select-none pointer-events-none"
        >
          信
        </div>

        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-4">
              Direct Contact &amp; Dispatch
            </span>

            <h3
              className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight leading-[1.05] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Let&apos;s build something worth remembering.
            </h3>

            <p className="font-sans text-base sm:text-lg text-ink-muted leading-relaxed mb-8">
              Whether you are an engineering director looking for an audacious 2026 intern who can write
              both low-latency C++ and responsive modern React, or a game studio founder crafting immersive
              worlds—my inbox is open.
            </p>
          </Reveal>

          {/* Interactive Email Copier */}
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center justify-between gap-3 bg-paper border border-border-hairline px-4 py-3 rounded-xs font-mono text-xs sm:text-sm text-ink selection:bg-vermilion selection:text-paper flex-1">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-vermilion shrink-0" />
                  <span className="truncate">{publicContact.email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-vermilion flex items-center gap-1.5 shrink-0 pl-2 cursor-pointer focus:outline-none"
                  title="Copy email to clipboard"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-vermilion" />
                      <span className="text-vermilion font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${publicContact.email}`}
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold px-6 py-3.5 bg-vermilion text-paper hover:bg-vermilion-hover transition-colors rounded-xs shadow-sm whitespace-nowrap cursor-pointer"
              >
                Send Direct Email
              </a>
            </div>
          </Reveal>

          {/* Social Profiles Grid */}
          <Reveal delay={0.25}>
            <div className="mt-12 pt-8 hairline-t grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div>
                <span className="text-ink-faint block uppercase text-[10px] mb-1">Source Code</span>
                <a
                  href="https://github.com/NityaParmar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-vermilion inline-flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                </a>
              </div>

              <div>
                <span className="text-ink-faint block uppercase text-[10px] mb-1">Career</span>
                <a
                  href="https://www.linkedin.com/in/nityaparmar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-vermilion inline-flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                </a>
              </div>

              <div>
                <span className="text-ink-faint block uppercase text-[10px] mb-1">Dispatches</span>
                <a
                  href="https://x.com/NityaParmar007"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-vermilion inline-flex items-center gap-1"
                >
                  X (Twitter) <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                </a>
              </div>

              <div>
                <span className="text-ink-faint block uppercase text-[10px] mb-1">Location</span>
                <span className="text-ink">{publicContact.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Toast
        isVisible={isCopied}
        message="Email copied to clipboard · nityaparmar1707@gmail.com"
      />
    </Section>
  );
};
