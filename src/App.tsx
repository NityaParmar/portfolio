/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Route-level code splitting
const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const Research = lazy(() => import('@/pages/Research').then(m => ({ default: m.Research })));
const NotFound = lazy(() => import('@/pages/NotFound').then(m => ({ default: m.NotFound })));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted">
        <span className="w-2 h-2 rounded-full bg-vermilion" />
        <span>Loading Monograph...</span>
      </div>
    </div>
  );
}

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  // Smooth inertial scrolling with Lenis
  useEffect(() => {
    if (shouldReduceMotion) return;

    let rafId: number;
    const lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Subtle Washi Paper Texture Overlay */}
        <div aria-hidden="true" className="paper-grain" />

        {/* Desktop-only subtle custom ink cursor */}
        <CustomCursor />

        <div className="min-h-screen flex flex-col bg-paper text-ink transition-colors duration-200">
          {/* Skip link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-vermilion focus:text-paper font-mono text-xs uppercase rounded-xs"
          >
            Skip to primary content
          </a>

          {/* Top Bar Contract Navigation */}
          <Navbar />

          {/* Main Routing Views */}
          <main id="main-content" className="flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/:slug" element={<ProjectDetail />} />
                <Route path="/research" element={<Research />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          {/* Monograph Colophon & Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
