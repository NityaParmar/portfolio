import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  isVisible: boolean;
  message: string;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({ isVisible, message, className }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-live="polite"
          className={cn(
            'fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-ink text-paper px-4 py-2.5 font-mono text-xs shadow-xl border border-border-hairline rounded-sm select-none',
            className,
          )}
        >
          <span className="w-4 h-4 rounded-full bg-vermilion flex items-center justify-center text-paper">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
