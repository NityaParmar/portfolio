import React from 'react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Shield, Sparkles, Terminal, Flame } from 'lucide-react';

export const ProjectX: React.FC = () => {
  return (
    <Section
      id="project-x"
      number="03"
      kanji="無限"
      title="Project X · Universe & Myth-Tech"
      subtitle="An evolving continuum of cryptographically secured identity architectures and narrative worlds."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left Column: Architectural System Map */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-paper-card border border-border-hairline p-6 sm:p-8 rounded-xs">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
                Identity & Workspace Continuum
              </span>
              <span className="font-mono text-[11px] text-ink-muted">Active Pipeline</span>
            </div>

            <h3 className="font-serif text-2xl text-ink font-normal mb-3">
              DevID Guardian ➔ Loomy ➔ The Endgame
            </h3>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans mb-6">
              Engineering an interconnected ecosystem where developer identity, credentials, and sprint
              quest telemetry flow through one zero-knowledge cryptographic plane.
            </p>
          </div>

          {/* Inline SVG System Map */}
          <div className="py-4 my-2 hairline-t hairline-b">
            <svg
              viewBox="0 0 680 200"
              className="w-full h-auto text-ink font-mono"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid background markers */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="6"
                  refX="7"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 8 3, 0 6" fill="var(--color-vermilion)" />
                </marker>
              </defs>

              {/* Node 1: DevID Guardian */}
              <g transform="translate(10, 40)">
                <rect
                  width="180"
                  height="120"
                  fill="var(--color-paper)"
                  stroke="var(--color-vermilion)"
                  strokeWidth="1.5"
                  rx="2"
                />
                <text x="16" y="30" fontSize="11" fontWeight="700" fill="var(--color-vermilion)">
                  01 // NODE
                </text>
                <text x="16" y="52" fontSize="14" fontWeight="600" fill="var(--color-ink)">
                  DevID Guardian
                </text>
                <text x="16" y="74" fontSize="10" fill="var(--color-ink-muted)">
                  Node · Express · Supabase
                </text>
                <text x="16" y="92" fontSize="10" fill="var(--color-ink-muted)">
                  PostgreSQL · Auth Vault
                </text>
                <text x="16" y="108" fontSize="9" fontWeight="700" fill="var(--color-antique-gold)">
                  [ACTIVE BACKEND]
                </text>
              </g>

              {/* Connector 1 to 2 */}
              <line
                x1="195"
                y1="100"
                x2="245"
                y2="100"
                stroke="var(--color-vermilion)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />

              {/* Node 2: Loomy */}
              <g transform="translate(250, 40)">
                <rect
                  width="180"
                  height="120"
                  fill="var(--color-paper)"
                  stroke="var(--color-border-hairline)"
                  strokeWidth="1.5"
                  rx="2"
                />
                <text x="16" y="30" fontSize="11" fontWeight="700" fill="var(--color-antique-gold)">
                  02 // PROTOCOL
                </text>
                <text x="16" y="52" fontSize="14" fontWeight="600" fill="var(--color-ink)">
                  Loomy Quest Core
                </text>
                <text x="16" y="74" fontSize="10" fill="var(--color-ink-muted)">
                  MERN · AES-256-CBC
                </text>
                <text x="16" y="92" fontSize="10" fill="var(--color-ink-muted)">
                  RBAC Guild Governance
                </text>
                <text x="16" y="108" fontSize="9" fontWeight="700" fill="var(--color-vermilion)">
                  [PRODUCTION v1.0]
                </text>
              </g>

              {/* Connector 2 to 3 */}
              <line
                x1="435"
                y1="100"
                x2="485"
                y2="100"
                stroke="var(--color-vermilion)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />

              {/* Node 3: The Endgame */}
              <g transform="translate(490, 40)">
                <rect
                  width="180"
                  height="120"
                  fill="var(--color-paper)"
                  stroke="var(--color-ink)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  rx="2"
                />
                <text x="16" y="30" fontSize="11" fontWeight="700" fill="var(--color-ink-faint)">
                  03 // CAPSTONE
                </text>
                <text x="16" y="52" fontSize="14" fontWeight="700" fill="var(--color-ink)">
                  THE ENDGAME
                </text>
                <text x="16" y="74" fontSize="10" fill="var(--color-ink-muted)">
                  Unified Workspace Engine
                </text>
                <text x="16" y="92" fontSize="10" fill="var(--color-ink-muted)">
                  Identity + Quests + Security
                </text>
                <text x="16" y="108" fontSize="9" fontWeight="700" fill="var(--color-ink-faint)">
                  [HORIZON 2027]
                </text>
              </g>
            </svg>
          </div>

          {/* Node Explanatory Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <p className="font-semibold text-ink flex items-center gap-1.5 mb-1">
                <Shield className="w-3.5 h-3.5 text-vermilion" />
                DevID Guardian (Active)
              </p>
              <p className="text-ink-muted leading-relaxed">
                Enterprise secrets manager for DevOps teams, inheriting session handling and RBAC from Loomy
                while introducing cryptographic vault storage and identity verification. Zero-knowledge
                AES-256 and key-expiry alerts planned.
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink flex items-center gap-1.5 mb-1">
                <Terminal className="w-3.5 h-3.5 text-antique-gold" />
                The Endgame (Capstone)
              </p>
              <p className="text-ink-muted leading-relaxed">
                The ultimate fusion of developer credential authority and quest orchestration: one interface
                guaranteeing no developer ever leaks a key or loses momentum on a quest.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Poster-Style Panel for PROJECT Rākshaka */}
        <div className="lg:col-span-5 bg-ink text-paper p-8 rounded-xs flex flex-col justify-between border border-border-hairline shadow-md relative overflow-hidden">
          {/* Subtle Cyber-Dharmic Motif Background */}
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 font-serif text-[180px] font-black text-paper/5 select-none pointer-events-none leading-none"
          >
            誓
          </div>

          <div>
            <div className="flex items-center justify-between mb-6 font-mono text-xs uppercase tracking-widest">
              <span className="text-vermilion font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-current" />
                Narrative Game World
              </span>
              <span className="text-paper/60">Script &amp; Story Phase</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-paper font-normal tracking-tight mb-2">
              PROJECT Rākshaka
            </h3>

            <p className="font-serif italic text-base text-antique-gold mb-6">
              A cyber-dharmic action adventure on the edge of erased memory.
            </p>

            <div className="space-y-4 text-sm font-sans text-paper/80 leading-relaxed">
              <p>
                Set in a dystopian cyber-dharmic future where ancient sacred texts have been methodically
                purged and synthetic neural surveillance controls the citizenry.
              </p>
              <p>
                The protagonist—the last awakened guardian of a forgotten order, fractured by immense personal
                loss—renounced his vows and lived underground for five years in silence.
              </p>
              <p className="text-paper/90">
                Until a rogue archivist breaches the city&apos;s quantum archive, uncovering an encrypted
                fragment of Dharma that reignites his oath. Rebuilt weapon in hand, he returns to restore truth.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-paper/15 flex items-center justify-between text-xs font-mono text-paper/60">
            <span>Themes: Loss · Memory · Dharma</span>
            <span className="text-vermilion font-semibold">Unreal Engine 5 Concept</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
