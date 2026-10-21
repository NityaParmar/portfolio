import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { HankoSeal } from '@/components/brand/HankoSeal';
import { useLocalTime } from '@/hooks/useLocalTime';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const Hero: React.FC = () => {
  const time = useLocalTime();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 md:pt-36 pb-12 hairline-b"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Top Status & Timestamp Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-ink-muted mb-8 md:mb-12">
          {/* Status Flag */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vermilion" />
            <span className="text-ink font-medium">{profile.statusNote}</span>
          </div>

          {/* Time & Coordinates */}
          <div className="flex items-center gap-3 text-ink-faint">
            <span>Vadodara, India</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums text-ink">
              {time.time} {time.period} IST
            </span>
          </div>
        </div>

        {/* Main Headline & Identity Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          <div className="lg:col-span-9">
            {/* Japanese Accent Subtitle */}
            <div className="flex items-center gap-2 font-serif text-antique-gold text-lg mb-3">
              <span>守護 · 創</span>
              <span className="text-ink-faint font-mono text-xs">/ SHUGO · SŌ</span>
            </div>

            {/* Giant Serif Name */}
            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-ink leading-[0.95]"
              style={{ textWrap: 'balance' }}
            >
              {profile.name}
            </h1>

            {/* Positioning Statement */}
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ink-muted mt-5 font-normal tracking-tight">
              &ldquo;{profile.positioning}&rdquo;
            </p>
          </div>

          {/* Hanko Seal Stamp Column */}
          <div className="lg:col-span-3 flex lg:justify-end items-start pt-2">
            <div className="flex flex-col items-start lg:items-end gap-2">
              <HankoSeal size="lg" animated />
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint text-right">
                Authentic Seal · 守護
              </span>
            </div>
          </div>
        </div>

        {/* Roles & Disciplines Deck */}
        <div className="mt-12 md:mt-16 pt-8 hairline-t grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {profile.roles.map((role, idx) => (
            <div key={role} className="flex flex-col gap-1">
              <span className="text-[11px] text-vermilion font-bold tracking-widest">
                0{idx + 1}
              </span>
              <span className="text-sm font-medium text-ink uppercase tracking-wide">
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-8 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink-muted">
        <span>Monograph Index 2024–2028</span>

        <a
          href="#about"
          className="flex items-center gap-2 hover:text-vermilion transition-colors group cursor-pointer"
        >
          <span>Descend</span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 group-hover:text-vermilion" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};
