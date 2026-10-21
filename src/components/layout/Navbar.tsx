import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { HankoSeal } from '@/components/brand/HankoSeal';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scrolled state
      setIsScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 120 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        isScrolled
          ? 'bg-paper/90 backdrop-blur-md hairline-b py-3 shadow-xs'
          : 'bg-transparent py-5',
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark + Hanko Seal */}
        <Link
          to="/"
          className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-vermilion"
        >
          <HankoSeal size="sm" />
          <span className="font-serif text-lg tracking-tight font-medium text-ink group-hover:text-vermilion transition-colors">
            Nitya Parmar
          </span>
        </Link>

        {/* Zone 2: Primary Nav Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-ink-muted"
        >
          {NAV_LINKS.map(link => {
            const isExternalHash = link.href.startsWith('/#');
            const isHomePage = location.pathname === '/';

            return (
              <a
                key={link.label}
                href={isHomePage && isExternalHash ? link.href.replace('/', '') : link.href}
                className="hover:text-ink relative py-1 transition-colors group whitespace-nowrap shrink-0"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermilion transition-all duration-200 group-hover:w-full" />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium px-3.5 py-1.5 bg-vermilion text-paper hover:bg-vermilion-hover transition-colors rounded-sm whitespace-nowrap shrink-0"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden p-1.5 text-ink hover:text-vermilion focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper/98 backdrop-blur-lg hairline-b px-6 py-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-ink-muted hover:text-vermilion transition-colors hairline-b last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 bg-vermilion text-paper font-medium rounded-sm"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
