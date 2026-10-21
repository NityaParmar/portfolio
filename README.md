# Nitya Parmar — Personal Monograph & Portfolio

> **"I build systems, products and worlds."**  
> Modern Classic portfolio and technical monograph for Nitya Parmar: Full-Stack (MERN) Developer, Low-Latency C++ Systems Engineer, and Aspiring Game Developer.

---

## ✦ Design Direction: "Modern Classic"

A typeset monograph crossed with a Japanese design studio's publication:
- **Palette**: Warm ivory (`#F6F1E7`), deep ink (`#14110F`), hanko vermilion accent (`#B3321F`), and muted antique stone/gold (`#A8935E`). Refined warm-charcoal dark mode (`#121110`).
- **Typography**: High-contrast editorial serif (**Fraunces**), clean grotesk (**Inter**), and monospaced tabular numerals (**JetBrains Mono**).
- **Aesthetic**: Hairline rules, numbered sections (`01`, `02`…), paper-grain texture, traditional red hanko seal (`守`), and restrained motion.

---

## 🛠 Tech Stack

- **Runtime & Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS variable design tokens
- **Animation & Transitions**: [Motion (Framer Motion)](https://motion.dev/) + [Lenis](https://lenis.darkroom.engineering/) smooth scrolling
- **Routing**: [React Router](https://reactrouter.com/) (`/`, `/work/:slug`, `/research`, `404`)
- **Metadata & SEO**: `react-helmet-async`, Open Graph, Twitter Cards, Schema.org Person JSON-LD
- **Icons & Utilities**: `lucide-react`, `clsx`, `tailwind-merge`
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- **Code Quality**: ESLint + Prettier

---

## 📂 Directory Structure

```text
├── .github/
│   └── workflows/ci.yml       # GitHub Actions CI (lint, test, build)
├── public/
│   ├── favicon.svg             # Hanko seal SVG icon (守)
│   ├── robots.txt              # Crawler permissions
│   ├── sitemap.xml             # Search engine sitemap
│   └── Nitya_Parmar_PCG_Research_2026.pdf # Research publication placeholder
├── src/
│   ├── components/
│   │   ├── brand/              # HankoSeal, PixelOwl
│   │   ├── layout/             # Navbar, Footer, ThemeToggle, CustomCursor, PageTransition
│   │   ├── sections/           # Hero, About, Work, ProjectX, Craft, Research, BeyondCode, Roadmap, Contact
│   │   └── ui/                 # Button, Tag, Section, Reveal, Marquee, Toast
│   ├── data/                   # Single source of truth (typed)
│   │   ├── profile.ts          # Bio, education, positioning, quick facts
│   │   ├── projects.ts         # Case studies (Loomy, VajraTrade, NEETROYAL, JobSphere)
│   │   ├── skills.ts           # Typographic craft index grouped by domain
│   │   ├── links.ts            # External links, social networks, contact
│   │   ├── roadmap.ts          # Studio, Japan, NextIn, Family ambition milestones
│   │   └── research.ts         # PCG 2026 Zenodo publication data
│   ├── hooks/                  # useTheme, useLocalTime, useReducedMotion, useCopyToClipboard
│   ├── lib/                    # utils (cn, time formatters), constants, seo helpers
│   ├── pages/                  # Home, ProjectDetail, Research, NotFound
│   ├── styles/                 # globals.css (tokens, washi paper grain, print stylesheet)
│   ├── test/                   # Test configuration and unit suites
│   ├── types/                  # TypeScript interface definitions
│   ├── App.tsx                 # Root router and layout provider
│   └── main.tsx                # Client entry point
├── .env.example
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (recommended 22 LTS)
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/NityaParmar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Available Scripts

| Script | Purpose |
| :--- | :--- |
| `npm run dev` | Runs the Vite development server on `http://localhost:3000` |
| `npm run build` | Compiles TypeScript and builds production bundle into `dist/` |
| `npm run preview` | Previews the compiled production build locally |
| `npm run lint` | Type checks codebase via `tsc --noEmit` |
| `npm test` | Runs unit and integrity tests via Vitest |
| `npm run format` | Formats all code files with Prettier |

---

## ✏️ How to Edit Content

All portfolio content is decoupled from layout components and centralized inside `src/data/`:

1. **Profile & Bio**: Edit `src/data/profile.ts` to modify your positioning line, academic details, bio paragraphs, or books.
2. **Projects**: Edit `src/data/projects.ts` to add or update case studies, metrics, live URLs, or architectural diagrams.
3. **Skills & Craft**: Update `src/data/skills.ts` to adjust your technical proficiency matrix without touching UI components.
4. **Roadmap**: Update `src/data/roadmap.ts` to refine long-term horizons and studio vision.
5. **Research**: Update `src/data/research.ts` with new DOIs, abstracts, or PDF document references.

---

## 📄 Print Résumé Mode

The Home page includes an integrated print stylesheet. Press `Ctrl + P` (or `Cmd + P`) in any modern browser to generate a clean, black-and-white 1–2 page monograph résumé ready for recruiters and studio leads.

---

## 🚢 Deployment

### Deploy to Vercel

This repository includes a preconfigured `vercel.json` with SPA route rewrites and immutable asset caching. Connect your GitHub repository to Vercel; build settings are automatically detected:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 📜 License & Rights

Designed & built by **Nitya Parmar** © 2026. All rights reserved.
