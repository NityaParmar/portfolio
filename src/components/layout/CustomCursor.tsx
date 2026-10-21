import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device or lack of fine pointer
    if (typeof window !== 'undefined') {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch);
      if (hasTouch) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"]'),
        );
        setIsPointer(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || shouldReduceMotion || !isVisible) {
    return null;
  }

  return (
    <div className="custom-cursor fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer follow ring */}
      <motion.div
        animate={{
          x: position.x - (isPointer ? 16 : 10),
          y: position.y - (isPointer ? 16 : 10),
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.1,
        }}
        className={`w-5 h-5 rounded-full border border-vermilion/50 transition-opacity duration-150 ${
          isPointer ? 'bg-vermilion/10' : 'bg-transparent'
        }`}
      />

      {/* Center ink dot */}
      <div
        style={{
          transform: `translate3d(${position.x - 2.5}px, ${position.y - 2.5}px, 0)`,
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-vermilion"
      />
    </div>
  );
};
