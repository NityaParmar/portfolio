import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { HankoSeal } from '@/components/brand/HankoSeal';
import { PageTransition } from '@/components/layout/PageTransition';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 · Void · Nitya Parmar</title>
      </Helmet>

      <div className="min-h-[75vh] flex items-center justify-center px-6 py-24 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex justify-center">
            <HankoSeal size="lg" />
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block">
            404 // VOID RECORD
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl text-ink font-normal">
            No Monograph Exists
          </h1>

          <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
            The page or artifact coordinate you navigated to does not exist in this archive. It may have
            been refactored or moved to a higher dimensional plane.
          </p>

          <div className="pt-4">
            <Button variant="primary" href="/">
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              <span>Return to Portfolio</span>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
