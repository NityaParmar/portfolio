import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface HankoSealProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  title?: string;
}

export const HankoSeal: React.FC<HankoSealProps> = ({
  className,
  size = 'md',
  animated = false,
  interactive = true,
  onClick,
  title = 'Nitya Parmar Hanko Seal · 守 (Mamoru)',
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const dimensionMap = {
    sm: { px: 32, label: '32px' },
    md: { px: 42, label: '42px' },
    lg: { px: 60, label: '60px' },
    xl: { px: 84, label: '84px' },
  };

  const { px } = dimensionMap[size];

  const handleClick = () => {
    if (interactive) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 240);
    }
    if (onClick) onClick();
  };

  const svgSeal = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={px}
      height={px}
      role="img"
      aria-label={title}
      className={cn(
        'select-none transition-transform duration-150',
        interactive && 'cursor-pointer hover:scale-105 active:scale-95',
        isPressed && 'scale-90',
        className,
      )}
      onClick={handleClick}
      style={{ filter: 'drop-shadow(0 1px 2px rgba(179, 50, 31, 0.25))' }}
    >
      <title>{title}</title>

      <defs>
        {/* Subtle radial shading for organic cinnabar/vermilion seal ink */}
        <radialGradient id="hankoInkGradient" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#C93822" />
          <stop offset="60%" stopColor="#B3321F" />
          <stop offset="100%" stopColor="#962817" />
        </radialGradient>

        {/* Micro-textured ink imperfection for authentic stamped aesthetic */}
        <filter id="hankoInkRoughness" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Main Red Cartouche */}
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="8"
        fill="url(#hankoInkGradient)"
        stroke="#842213"
        strokeWidth="2.5"
      />

      {/* Traditional Double Inner Border Ring with subtle stamp breaks */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="5"
        fill="none"
        stroke="#F6F1E7"
        strokeWidth="2"
        strokeOpacity="0.85"
      />
      <rect
        x="13.5"
        y="13.5"
        width="73"
        height="73"
        rx="3.5"
        fill="none"
        stroke="#F6F1E7"
        strokeWidth="0.8"
        strokeOpacity="0.45"
      />

      {/* Small corner decorative notches */}
      <line x1="10" y1="18" x2="18" y2="10" stroke="#F6F1E7" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="82" y1="10" x2="90" y2="18" stroke="#F6F1E7" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="10" y1="82" x2="18" y2="90" stroke="#F6F1E7" strokeWidth="1" strokeOpacity="0.5" />

      {/* Carved Kanji: 守 (Mamoru - Protector / Guardian / Dharma) */}
      {/* Precision carved vector paths replicating classical tensho/kaisho brushwork */}
      <g fill="#F6F1E7" filter="url(#hankoInkRoughness)">
        {/* Roof Radical: 宀 (Top dot & canopy) */}
        {/* Top central dot */}
        <path d="M48.5 22 C48.5 20, 51.5 20, 51.5 22 L52 27.5 C52 28.5, 48 28.5, 48 27.5 Z" />

        {/* Left roof hook */}
        <path d="M25 31.5 C24 33, 23 37, 24 39 C25 39.5, 27 38.5, 28 35 L28.5 32 Z" />

        {/* Main roof bar across with right down-hook */}
        <path d="M26 31 L73 31 C74.5 31, 75.5 32, 75 33.5 L73 40 C72 41, 70 41, 70.5 38.5 L71.5 34.5 L27 34.5 C25.5 34.5, 25 32.5, 26 31 Z" />

        {/* Lower Radical: 寸 (Sun / Hand & Rule) */}
        {/* Horizontal crossbar */}
        <path d="M22 47.5 L78 47.5 C79.5 47.5, 79.5 51, 78 51 L22 51 C20.5 51, 20.5 47.5, 22 47.5 Z" />

        {/* Vertical stroke with left upward hook */}
        <path d="M57 41 L57 73.5 C57 76.5, 55 79, 50 79 C46 79, 44.5 77.5, 45 75.5 C45.5 73.5, 48 75, 51 75 C53 75, 53.5 73.5, 53.5 71.5 L53.5 41 C53.5 39.5, 57 39.5, 57 41 Z" />

        {/* Right punctuation dot/stroke of 寸 */}
        <path d="M37 57 C36 55.5, 39 54, 41 55.5 L43 59 C44 61, 41 62.5, 39.5 61 Z" />
      </g>

      {/* Subtle NP Monogram Carved in Bottom Right Seal Corner */}
      <g fill="#F6F1E7" opacity="0.9">
        <text
          x="73"
          y="79"
          fontFamily="'JetBrains Mono', ui-monospace, monospace"
          fontSize="9"
          fontWeight="800"
          textAnchor="middle"
          letterSpacing="-0.5"
        >
          NP
        </text>
      </g>
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 1.45, opacity: 0, rotate: -7 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 420,
          damping: 24,
          delay: 0.1,
        }}
        className="inline-block"
      >
        {svgSeal}
      </motion.div>
    );
  }

  return svgSeal;
};
