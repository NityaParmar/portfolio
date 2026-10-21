import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Work } from '@/components/sections/Work';
import { ProjectX } from '@/components/sections/ProjectX';
import { Craft } from '@/components/sections/Craft';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { BeyondCode } from '@/components/sections/BeyondCode';
import { Roadmap } from '@/components/sections/Roadmap';
import { Contact } from '@/components/sections/Contact';
import { Marquee } from '@/components/ui/Marquee';
import { getPersonJsonLd } from '@/lib/seo';
import { PageTransition } from '@/components/layout/PageTransition';

export const Home: React.FC = () => {
  const marqueeItems = [
    'Systems Engineering',
    'Low-Latency C++',
    'MERN Full-Stack',
    'Unreal Engine 5',
    'Zero-Knowledge Secrets',
    'Open to 2026 Internships',
    'ITM Baroda University',
    'Tokyo Horizon',
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Nitya Parmar — Systems, Products &amp; Worlds</title>
        <meta
          name="description"
          content="Portfolio of Nitya Parmar: Full-Stack Developer, Low-Latency C++ Systems Builder, and Aspiring Game Developer. Open to 2026 internships."
        />
        <link rel="canonical" href="https://nityaparmar.dev" />
        <script type="application/ld+json">{getPersonJsonLd()}</script>
      </Helmet>

      <div className="flex flex-col">
        {/* Hero Entry */}
        <Hero />

        {/* Subtle Marquee Divider Ribbon */}
        <Marquee items={marqueeItems} speedSeconds={36} />

        {/* 01 About */}
        <About />

        {/* 02 Selected Work */}
        <Work />

        {/* 03 Project X: System Map & Myth-Tech World */}
        <ProjectX />

        {/* 04 Craft: Typographic Skill Index */}
        <Craft />

        {/* 05 Research */}
        <ResearchSection />

        {/* 06 Beyond the Code */}
        <BeyondCode />

        {/* 07 Roadmap */}
        <Roadmap />

        {/* 08 Contact */}
        <Contact />
      </div>
    </PageTransition>
  );
};
