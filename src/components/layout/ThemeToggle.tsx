import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Current: ${isDark ? 'Dark (Warm Charcoal)' : 'Light (Warm Ivory)'}`}
      className={cn(
        'group relative inline-flex items-center justify-center w-8 h-8 rounded-sm border border-border-hairline bg-paper-card text-ink-muted hover:text-ink hover:border-ink transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-vermilion cursor-pointer select-none',
        className,
      )}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform group-hover:rotate-45 text-antique-gold" />
      ) : (
        <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12 text-ink" />
      )}
    </button>
  );
};
