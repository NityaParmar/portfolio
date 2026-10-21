import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'loomy',
    number: '01',
    title: 'Loomy',
    subtitle: 'Formerly DevSpace — Gamified Developer Quest & Secret Management Platform',
    oneLiner:
      'Gamified developer project management platform with RPG quest progression, AES-256-CBC encrypted vault, and real-time sprint telemetry.',
    category: 'Full-Stack Application / Security Tool',
    year: '2025',
    status: 'LIVE',
    statusLabel: 'LIVE v1.0',
    stack: [
      'MongoDB',
      'Express.js',
      'React 19',
      'Node.js',
      'Tailwind CSS v4',
      'Framer Motion',
      'NES.css',
      'Recharts',
      'AES-256-CBC',
    ],
    liveUrl: 'https://loomy-devspace.ai.studio/',
    githubUrl: 'https://github.com/NityaParmar',
    problem:
      'Modern developer workspaces often swing between sterile corporate issue trackers and disparate secrets management utilities. Junior and indie engineering teams frequently struggle with ticket apathy and lack secure, unified methods for managing API keys and environment variables across fast-moving sprints.',
    approach:
      'Designed an expressive 16-bit RPG-themed operational system where sprint tickets transform into guild quests. Built a role-based hierarchy that rewards completion with XP and guild reputation, while reinforcing strict military-grade cryptographic separation for developer credentials.',
    architecture:
      'Architected as a resilient MERN service with stateful optimistic client-side updates. The authentication pipeline enforces multi-tier Role-Based Access Control (RBAC) across three distinct tiers: Grand Overseer (Admin), Guild Tactician (Lead), and Code Champion (Developer). Secret keys stored in the team vault undergo client-side salted hashing and server-side AES-256-CBC envelope encryption, shielded by Helmet HTTP headers and Joi schema validation.',
    keyFeatures: [
      {
        title: 'Optimistic Drag-and-Drop Quest Board',
        description:
          'Interactive Kanban board with fluid drag physics, instant state synchronization, and optimistic rollback on connection anomalies.',
      },
      {
        title: 'Cryptographic Team Secret Vault',
        description:
          'Zero-leakage credential containment utilizing AES-256-CBC cipher blocks with per-team initialization vectors for environment variables.',
      },
      {
        title: 'Three-Tier Guild RBAC',
        description:
          'Granular privilege boundaries governing ticket mutations, vault decryption, and sprint retrospectives across Overseer, Tactician, and Champion roles.',
      },
      {
        title: 'Sprint Telemetry & Velocity Engine',
        description:
          'Data visualization layer powered by Recharts plotting sprint burndown, quest completion rates, and individual contributor momentum.',
      },
      {
        title: 'Hardened Production Security',
        description:
          'Defense-in-depth security perimeter combining Helmet HTTP headers, rate limiting, bcryptjs password derivation, and Joi payload sanitization.',
      },
    ],
    highlights: [
      'Full production release running at loomy-devspace.ai.studio',
      'Zero plaintext credential storage with AES-256-CBC encryption',
      'Modular 16-bit aesthetic without compromising responsive touch targets',
    ],
    nextSlug: 'vajratrade-engine',
  },
  {
    slug: 'vajratrade-engine',
    number: '02',
    title: 'VajraTrade Engine',
    subtitle: 'Deterministic Sub-Millisecond Order Matching & Limit Book Simulation',
    oneLiner:
      'Ultra-low-latency order matching engine in modern C++ simulating exchange matching logic with asynchronous execution and cache-friendly data structures.',
    category: 'High-Performance Systems / C++',
    year: '2025',
    status: 'COMPLETED',
    statusLabel: 'COMPLETED',
    stack: [
      'Modern C++20',
      'Multithreading (std::jthread)',
      'Lock-Free Ring Buffers',
      'POSIX Threads',
      'CMake',
      'Google Benchmark',
    ],
    githubUrl: 'https://github.com/NityaParmar',
    problem:
      'Financial exchanges and simulated algorithmic trading environments require sub-millisecond deterministic matching without queue stalls, contention spikes, or memory allocation overhead in the critical execution path.',
    approach:
      'Engineered an event-driven order book simulator in modern C++20 utilizing continuous contiguous memory chunks, price-time priority matching algorithms, and decoupled ingestion from persistence and visual reporting.',
    architecture:
      'Constructed around double-sided red-black price ladders paired with intrusive doubly-linked order lists at each price tick. Orders stream into the system through lock-free single-producer single-consumer (SPSC) ring buffers, completely eliminating mutex contention in the critical path. Processing threads execute matched fills deterministically before fanning out events to analytics listeners.',
    keyFeatures: [
      {
        title: 'Price-Time Priority (FIFO) Matching Ladder',
        description:
          'Dual-sided limit order book executing resting bids and asks with strict microsecond chronological and price precedence.',
      },
      {
        title: 'Lock-Free SPSC Order Ingestion',
        description:
          'Zero-copy memory ring buffers guaranteeing atomic pointer handoffs without kernel context switching or thread locking.',
      },
      {
        title: 'Decoupled Analytics Pipeline',
        description:
          'Asynchronous dispatch mechanism separating the microsecond matching kernel from downstream visualization and trade capture logs.',
      },
      {
        title: 'Zero Dynamic Allocation on Match Path',
        description:
          'Pre-allocated memory pools ensuring zero heap allocations (`malloc`/`new`) during active trading surges to eradicate latency jitter.',
      },
    ],
    highlights: [
      'Sub-millisecond average execution per order burst',
      'Cache-conscious contiguous node allocations minimizing L1/L2 misses',
      'Rigorous unit testing covering partial fills, cancellations, and market sweeps',
    ],
    nextSlug: 'neetroyal',
  },
  {
    slug: 'neetroyal',
    number: '03',
    title: 'NEETROYAL',
    subtitle: 'Competitive Exam Analytics & Gamified Academic Evaluation Platform',
    oneLiner:
      'Academic performance and competitive examination analytics platform featuring gamified timed quizzes, percentile rankings, and structured REST question banks.',
    category: 'Educational Technology & Analytics',
    year: '2025',
    status: 'COMPLETED',
    statusLabel: 'COMPLETED',
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'REST APIs',
      'Chart.js',
      'Render Hosting',
    ],
    liveUrl: 'https://neetroyal-web.onrender.com/',
    githubUrl: 'https://github.com/NityaParmar',
    problem:
      'Medical and competitive exam aspirants face psychological fatigue and disjointed feedback loops when preparing with conventional static mock test papers.',
    approach:
      'Developed an engaging examination suite combining gamified XP milestones, timed sectional challenges, and instantaneous topic-wise accuracy breakdowns.',
    architecture:
      'Scalable full-stack application backed by MongoDB indexing over tens of thousands of categorized question records. The client provides responsive test-taking timers, anti-cheat visibility tracking, and an interactive post-mortem analytics dashboard displaying performance percentiles.',
    keyFeatures: [
      {
        title: 'Timed Examination Simulator',
        description:
          'Real-time sectional examination environment mirroring National Eligibility cum Entrance Test (NEET) grading rubrics and negative marking rules.',
      },
      {
        title: 'Granular Weakness Attribution',
        description:
          'Deep performance indexing showing accuracy breakdowns across physics, chemistry, and biology subject domains.',
      },
      {
        title: 'XP Milestones & Global Ranks',
        description:
          'Gamified streak incentives and percentile rankings driving consistent daily revision habits.',
      },
      {
        title: 'High-Volume Question Bank API',
        description:
          'RESTful endpoints supporting paginated queries, subject filtering, and difficulty weighting across mock papers.',
      },
    ],
    highlights: [
      'Deployed on Render with responsive mobile and tablet layouts',
      'Comprehensive topic-level diagnosis replacing generic test scores',
      'Persistent question tagging for bookmarking and spaced repetition',
    ],
    nextSlug: 'jobsphere',
  },
  {
    slug: 'jobsphere',
    number: '04',
    title: 'JobSphere',
    subtitle: 'Modern Job Discovery & Career Portal Platform',
    oneLiner:
      'Interactive employment board and application portal connecting talent with verified technological opportunities.',
    category: 'Web Application / Career Services',
    year: '2025',
    status: 'LIVE',
    statusLabel: 'LIVE',
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://nityaparmar-jobsphere.vercel.app/',
    githubUrl: 'https://github.com/NityaParmar',
    problem:
      'Navigating fragmented job listings with cluttered interfaces often obscures essential role requirements, salary transparency, and application deadlines.',
    approach:
      'Architected a sleek, distraction-free discovery platform focused on structured role filtering, responsive job viewing, and clear recruitment workflows.',
    architecture:
      'Modern single-page application deployed on Vercel with optimized client-side filtering, role bookmarking, and modular application submission structures. (Note: Specific architectural parameters are editable to match ongoing codebase revisions).',
    keyFeatures: [
      {
        title: 'Role Discovery & Categorical Filtering',
        description:
          'Rapid faceted search allowing filtering by seniority, employment type, location, and technological stack.',
      },
      {
        title: 'Streamlined Application Workflow',
        description:
          'Clear presentation of role specifications, qualification criteria, and candidate intake pathways.',
      },
      {
        title: 'Responsive Cross-Device Layout',
        description:
          'Tailored mobile and desktop layouts ensuring legibility and fast browsing on all display formats.',
      },
    ],
    highlights: [
      'Live deployment accessible at nityaparmar-jobsphere.vercel.app',
      'Clean interface prioritizing legible typography and information hierarchy',
      'Configured with easily extensible modular component schemas',
    ],
    nextSlug: 'loomy',
  },
];
