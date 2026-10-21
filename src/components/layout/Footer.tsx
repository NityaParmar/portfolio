import React from 'react';
import { HankoSeal } from '@/components/brand/HankoSeal';
import { PixelOwl } from '@/components/brand/PixelOwl';
import { useLocalTime } from '@/hooks/useLocalTime';
import { socialLinks } from '@/data/links';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const time = useLocalTime();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="hairline-t bg-paper-subtle/40 pt-16 pb-12 text-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Top Tier: Stamp, Mission, and Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 hairline-b">
          {/* Brand & Hanko Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HankoSeal size="md" />
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-ink">
                    Nitya Parmar
                  </h3>
                  <p className="font-mono text-xs text-ink-muted">
                    Systems · Products · Worlds
                  </p>
                </div>
              </div>
              <p className="text-sm text-ink-muted max-w-sm font-sans leading-relaxed">
                Full-Stack (MERN) developer, low-latency C++ systems builder, and aspiring game developer
                studying at ITM (SLS) Baroda University (2024–2028).
              </p>
            </div>

            {/* Mascot and Back to Top */}
            <div className="mt-8 flex items-center gap-4">
              <PixelOwl />
              <button
                type="button"
                onClick={scrollToTop}
                className="font-mono text-xs text-ink-muted hover:text-vermilion transition-colors inline-flex items-center gap-1 group cursor-pointer"
              >
                <span>Return to Zenith</span>
                <span className="transform -rotate-45 group-hover:-translate-y-0.5 transition-transform">
                  ↑
                </span>
              </button>
            </div>
          </div>

          {/* Social & External Links Column */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-3">
                Code & Systems
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <a
                    href="https://github.com/NityaParmar"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://loomy-devspace.ai.studio/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>Loomy Live</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://doi.org/10.5281/zenodo.22026899"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>PCG Research</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-3">
                Presence
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <a
                    href="https://www.linkedin.com/in/nityaparmar-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/NityaParmar007"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>X (Twitter)</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@NITYA_was_HERE"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-3">
                Writings & Audio
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <a
                    href="https://nityawashere.blogspot.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>Blog (Words)</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/user/31o2npvntb6pjo356ztnls5l4c4i"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>Spotify Playlist</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:nityaparmar1707@gmail.com"
                    className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                  >
                    <span>Direct Dispatch</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-faint" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Timestamp, Colophon, Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Designed &amp; built by Nitya Parmar</span>
            <span aria-hidden="true" className="text-ink-faint">·</span>
            <span className="text-antique-gold font-serif">守護 · 創</span>
            <span aria-hidden="true" className="text-ink-faint">·</span>
            <span>© {currentYear}</span>
          </div>

          {/* Live Vadodara Time */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
            <span>Vadodara, IN {time.time} {time.period} IST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
