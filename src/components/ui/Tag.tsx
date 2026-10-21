import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  prefix?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className, prefix }) => {
  return (
    <span
      className={cn(
        'font-mono text-[11px] uppercase tracking-wider text-ink-muted inline-flex items-center gap-1 select-none whitespace-nowrap',
        className,
      )}
    >
      {prefix && <span className="text-ink-faint">{prefix}</span>}
      <span>{children}</span>
    </span>
  );
};

interface TagListProps {
  items: string[];
  className?: string;
  separator?: string;
}

export const TagList: React.FC<TagListProps> = ({ items, className, separator = '·' }) => {
  return (
    <div className={cn('flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted font-mono', className)}>
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <span className="hover:text-ink transition-colors">{item}</span>
          {index < items.length - 1 && (
            <span aria-hidden="true" className="text-ink-faint select-none">
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
