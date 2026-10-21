import { ResearchPaper } from '@/types';

export const primaryResearchPaper: ResearchPaper = {
  title: 'Procedural Content Generation & Gamified Learning Systems',
  code: 'PCG-EDU-2026',
  year: '2026',
  doi: '10.5281/zenodo.22026899',
  doiUrl: 'https://doi.org/10.5281/zenodo.22026899',
  pdfPath: '/Nitya_Parmar_PCG_Research_2026.pdf',
  abstract:
    'This paper examines the integration of seed-deterministic Procedural Content Generation (PCG) within gamified pedagogical environments. By modeling student knowledge decay alongside adaptive dungeon generation algorithms, we demonstrate that algorithmic difficulty calibration significantly improves long-term conceptual retention compared to static quiz banks. We present an empirical framework implemented in a real-time web execution runtime, evaluating computational overhead, memory allocations, and student engagement telemetry.',
  methodologyOverview:
    'Our experimental approach couples cellular automata and Perlin noise terrain partitioning with Bayesian Knowledge Tracing (BKT). As students solve questions, the difficulty curve adapts seed parameters dynamically without server roundtrip latency.',
  domains: [
    'Procedural Content Generation (PCG)',
    'Gamified Pedagogy & EdTech',
    'Bayesian Knowledge Tracing',
    'Real-Time Web Architecture',
  ],
  status: 'Published / Open Archive via Zenodo',
};
