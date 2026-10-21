import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  number?: string;
  kanji?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headerRight?: React.ReactNode;
  hideHeader?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  number,
  kanji,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  headerRight,
  hideHeader = false,
}) => {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={hideHeader ? undefined : headingId}
      className={cn('py-20 md:py-28 relative hairline-b', className)}
    >
      <div className={cn('max-w-6xl mx-auto px-6 md:px-12', containerClassName)}>
        {!hideHeader && (
          <header className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 hairline-b">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
                  {number && (
                    <span className="text-vermilion font-bold tracking-normal">{number}</span>
                  )}
                  {number && kanji && <span className="text-ink-faint">/</span>}
                  {kanji && (
                    <span className="font-serif text-sm text-antique-gold">{kanji}</span>
                  )}
                  <span className="text-ink-faint">·</span>
                  <span className="text-ink-muted">CHAPTER</span>
                </div>
                <h2
                  id={headingId}
                  className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink"
                  style={{ textWrap: 'balance' }}
                >
                  {title}
                </h2>
                {subtitle && (
                  <p className="mt-2 text-base text-ink-muted max-w-2xl font-sans leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>

              {headerRight && <div className="shrink-0">{headerRight}</div>}
            </div>
          </header>
        )}

        {children}
      </div>
    </section>
  );
};
