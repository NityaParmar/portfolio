import React from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MarqueeProps {
  items: string[];
  className?: string;
  speedSeconds?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  className,
  speedSeconds = 30,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const phrase = items.join('  ✦  ');

  return (
    <div
      aria-hidden="true"
      className={cn(
        'marquee-strip overflow-hidden select-none py-3 hairline-t hairline-b bg-paper-subtle/50 text-xs font-mono uppercase tracking-widest text-ink-muted/80 whitespace-nowrap',
        className,
      )}
    >
      <div
        className={cn(
          'inline-flex gap-8',
          !shouldReduceMotion && 'animate-marquee',
        )}
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        <span>{phrase}</span>
        <span>✦</span>
        <span>{phrase}</span>
        <span>✦</span>
        <span>{phrase}</span>
        <span>✦</span>
        <span>{phrase}</span>
      </div>
    </div>
  );
};
