import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export interface PixelOwlProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showDialogueOnClick?: boolean;
}

export const PixelOwl: React.FC<PixelOwlProps> = ({
  className,
  size = 'md',
  showDialogueOnClick = true,
}) => {
  const [isWinking, setIsWinking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const dimensionMap = {
    sm: { px: 24, svgSize: 24 },
    md: { px: 32, svgSize: 32 },
    lg: { px: 44, svgSize: 44 },
  };

  const { px } = dimensionMap[size];

  // Soft 8-bit retro chirp synthesizer via Web Audio API
  const playRetroChirp = () => {
    try {
      if (typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      // Retro ascending double note (E6 -> B6)
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(1318.5, now); // E6
      osc.frequency.setValueAtTime(1975.5, now + 0.05); // B6

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // Audio autoplay restrictions or headless runner - safe no-op
    }
  };

  const handleClick = () => {
    setIsWinking(true);
    setClickCount(prev => prev + 1);
    playRetroChirp();
    setTimeout(() => setIsWinking(false), 900);
  };

  const dialogues = [
    'Hoo! I am Loomy, guardian of the quest vault.',
    'Quest status: 100% production ready!',
    'Level up your developer quests with optimism.',
    'AES-256 vault active. Zero unencrypted secrets.',
    'Tokyo horizon unlocked. Ganbatte, Nitya!',
    'VajraTrade sub-millisecond ladder holding steady.',
  ];

  const currentDialogue =
    clickCount > 0 ? dialogues[(clickCount - 1) % dialogues.length] : dialogues[0];

  return (
    <div className={cn('relative inline-flex items-center group select-none', className)}>
      <button
        onClick={handleClick}
        type="button"
        title="Loomy mascot — Click for a message"
        aria-label="Loomy Easter Egg Mascot"
        className="relative cursor-pointer p-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-vermilion transition-transform active:scale-90 hover:scale-110"
      >
        {/* Crisp Pixel Art Owl SVG (20x20 authentic grid layout) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width={px}
          height={px}
          className="fill-current text-ink transition-colors"
          style={{ shapeRendering: 'crispEdges' }}
          role="img"
          aria-label="16-Bit Loomy Owl Mascot"
        >
          {/* Outline / Shading Layer (Deep Charcoal Ink) */}
          <g fill="var(--color-ink)">
            {/* Ear Tuft Feathers */}
            <rect x="3" y="1" width="2" height="3" />
            <rect x="2" y="2" width="1" height="2" />
            <rect x="15" y="1" width="2" height="3" />
            <rect x="17" y="2" width="1" height="2" />

            {/* Forehead & Crown */}
            <rect x="5" y="2" width="10" height="2" />
            <rect x="3" y="4" width="14" height="2" />

            {/* Outer Head & Cheek Contours */}
            <rect x="2" y="5" width="2" height="6" />
            <rect x="16" y="5" width="2" height="6" />

            {/* Body Contours */}
            <rect x="2" y="11" width="2" height="5" />
            <rect x="16" y="11" width="2" height="5" />
            <rect x="4" y="16" width="12" height="1" />
          </g>

          {/* Body Plumage / Secondary Tone (Mid Stone / Antique Gold Accent) */}
          <g fill="var(--color-antique-gold)">
            {/* Brow Highlight */}
            <rect x="7" y="3" width="6" height="1" />
            <rect x="4" y="4" width="2" height="1" />
            <rect x="14" y="4" width="2" height="1" />

            {/* Wing Feather Accents */}
            <rect x="3" y="11" width="2" height="4" />
            <rect x="15" y="11" width="2" height="4" />
          </g>

          {/* Chest & Belly (Warm Paper / Cream Plumage) */}
          <g fill="var(--color-paper)">
            {/* Eye Sockets */}
            <rect x="4" y="6" width="4" height="4" />
            <rect x="12" y="6" width="4" height="4" />

            {/* Chest Shield */}
            <rect x="5" y="11" width="10" height="4" />
            <rect x="6" y="15" width="8" height="1" />
          </g>

          {/* Chest Feather Stitches (Ink Detail) */}
          <g fill="var(--color-ink-muted)">
            <rect x="7" y="12" width="2" height="1" />
            <rect x="11" y="12" width="2" height="1" />
            <rect x="9" y="13" width="2" height="1" />
            <rect x="7" y="14" width="2" height="1" />
            <rect x="11" y="14" width="2" height="1" />
          </g>

          {/* Eyes (Golden Amber Iris with Highlights) */}
          <g>
            {/* Left Eye */}
            <rect x="5" y="7" width="2" height="2" fill="var(--color-ink)" />
            <rect x="5" y="7" width="1" height="1" fill="#FFFFFF" />

            {/* Right Eye (Normal vs Winking state) */}
            {isWinking ? (
              // Winking eye: playful horizontal wink bar
              <rect x="12" y="8" width="4" height="1" fill="var(--color-ink)" />
            ) : (
              // Open Eye
              <>
                <rect x="13" y="7" width="2" height="2" fill="var(--color-ink)" />
                <rect x="13" y="7" width="1" height="1" fill="#FFFFFF" />
              </>
            )}
          </g>

          {/* Golden Beak */}
          <g fill="var(--color-antique-gold)">
            <rect x="9" y="8" width="2" height="2" />
            <rect x="9.5" y="10" width="1" height="1" />
          </g>

          {/* Vermilion Talons Perched on Branch */}
          <g fill="var(--color-vermilion)">
            <rect x="5" y="16" width="3" height="1" />
            <rect x="6" y="17" width="1" height="1" />
            <rect x="12" y="16" width="3" height="1" />
            <rect x="13" y="17" width="1" height="1" />
          </g>

          {/* Branch / Scroll Perch (Antique Stone) */}
          <g fill="var(--color-ink-faint)">
            <rect x="2" y="18" width="16" height="1" />
          </g>
        </svg>
      </button>

      {/* Floating Dialogue Speech Bubble */}
      {showDialogueOnClick && (
        <AnimatePresence>
          {clickCount > 0 && (
            <motion.div
              key={clickCount}
              initial={{ opacity: 0, y: 6, scale: 0.94 }}
              animate={{ opacity: 1, y: -4, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.94 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-paper-card border border-border-hairline px-3 py-1.5 text-[11px] font-mono text-ink shadow-md rounded-xs pointer-events-none z-50"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion shrink-0" />
                <span>{currentDialogue}</span>
              </div>
              {/* Pointer Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-paper-card" />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
