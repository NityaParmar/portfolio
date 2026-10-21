import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    lead: 'Core computational languages prioritized for memory discipline, systems performance, and expressive scripting.',
    skills: [
      { name: 'C++', context: 'Modern C++20, RAII, low-latency data structures & multi-threading' },
      { name: 'C', context: 'POSIX primitives, manual memory management & pointers' },
      { name: 'TypeScript', context: 'Strict typing, modern generics & utility types' },
      { name: 'JavaScript', context: 'ESNext, async/await, closures & DOM APIs' },
      { name: 'Python', context: 'Algorithmic scripting, data parsing & automation' },
      { name: 'SQL', context: 'Relational querying, indexing & transactional consistency' },
    ],
  },
  {
    id: 'systems-game-dev',
    name: 'Game Development & Real-Time Worlds',
    lead: 'Engines, interactive rendering pipelines, physics, and worldbuilding systems.',
    skills: [
      { name: 'Unreal Engine 5', context: 'C++ gameplay scripting, Blueprints & level staging' },
      { name: 'Unity', context: 'C# architecture, physics integration & component loops' },
      { name: 'PCG & Algorithmic Worlds', context: 'Procedural generation, seed-based noise & level matrices' },
      { name: 'Game Physics & Math', context: 'Linear algebra, vectors, matrices & collision resolution' },
      { name: 'Pixel & Voxel Art', context: '16-bit sprite sheets, palette discipline & isometric tiles' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Architecture & Motion',
    lead: 'Editorial user interfaces, accessible design systems, and micro-interactions.',
    skills: [
      { name: 'React 19', context: 'Hooks, concurrent rendering, state machines & lazy loading' },
      { name: 'Tailwind CSS v4', context: 'Modern CSS tokens, cascade layers & responsive styling' },
      { name: 'Motion / Framer Motion', context: 'Orchestrated transitions, exit animations & springs' },
      { name: 'Vite Ecosystem', context: 'HMR, bundler tuning, tree shaking & alias configuration' },
      { name: 'Web Accessibility (a11y)', context: 'Semantic HTML5, ARIA contracts & WCAG AA contrast' },
    ],
  },
  {
    id: 'backend-databases',
    name: 'Backend Systems & Persistence',
    lead: 'Deterministic APIs, cryptographically safeguarded credentials, and relational/document stores.',
    skills: [
      { name: 'Node.js & Express', context: 'Event-driven runtime, routing, middleware pipelines & streams' },
      { name: 'PostgreSQL', context: 'ACID transactions, relational normalization & foreign keys' },
      { name: 'MongoDB', context: 'Document indexing, schema validation & aggregation pipelines' },
      { name: 'Supabase', context: 'PostgreSQL backend-as-a-service, Row Level Security (RLS)' },
      { name: 'Cryptography & Vaults', context: 'AES-256-CBC envelope encryption, salted hashing & RBAC' },
      { name: 'RESTful API Engineering', context: 'Idempotency, status codes, Joi/Zod validation & pagination' },
    ],
  },
  {
    id: 'tools-workflows',
    name: 'Tooling, DevSecOps & Workflows',
    lead: 'Engineering tooling for version control, reproducible builds, and developer experience.',
    skills: [
      { name: 'Git & GitHub', context: 'Interactive rebasing, trunk-based workflow & branch security' },
      { name: 'CMake & GCC/Clang', context: 'Cross-platform C++ build targets & compile flag tuning' },
      { name: 'Linux / POSIX Shell', context: 'Bash scripting, pipeline automation & terminal operations' },
      { name: 'Postman & Curl', context: 'API stress testing, automated endpoint suites & profiling' },
      { name: 'Continuous Integration', context: 'GitHub Actions automated testing, typecheck & build workflows' },
    ],
  },
];
