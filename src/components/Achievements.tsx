import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui/section";

export function Achievements() {
  return (
    <Section id="achievements" label="Honors">
      <SectionTitle index={4}>Honors &amp; milestones</SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Card 1 — headline result, gets the signal treatment */}
        <div className="panel bracket flex flex-col gap-6 border-signal/30 p-7">
          <div className="flex items-start justify-between gap-3">
            <Trophy className="h-5 w-5 text-signal" aria-hidden="true" />
            <a
              href="https://github.com/mani-4444/hackerrank-orchestrate-september26"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-bone-dim"
            >
              Repo <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>

          <div>
            <div className="font-data text-[11px] text-signal">Rank #93 · 67.7 / 100</div>
            <h3 className="h-block mt-2 text-bone">HackerRank Orchestrate</h3>
            <div className="field-key mt-1.5">Buy or Wait? · September 2026</div>
          </div>

          <p className="body-copy">
            An AI-powered affordability agent combining LLM-based evidence
            extraction with deterministic financial reasoning.
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 border-t border-rule pt-5">
            {["Affordability AI", "LLM extraction", "Deterministic simulation"].map((t) => (
              <span key={t} className="cell">{t}</span>
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className="panel flex flex-col gap-6 p-7">
          <div className="flex items-start justify-between gap-3">
            <Trophy className="h-5 w-5 text-bone-mute" aria-hidden="true" />
            <span className="field-key">Multi-hackathon</span>
          </div>

          <div>
            <h3 className="h-block text-bone">Rapid hackathon delivery</h3>
            <div className="field-key mt-1.5">24–36h sprints</div>
          </div>

          <p className="body-copy">
            Turned open-ended problem statements into functional systems under
            strict time pressure — backend architecture, real-time multi-agent
            and voice pipelines (KrishiCFO, JARVIS), and live jury demos.
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 border-t border-rule pt-5">
            {["Rapid prototyping", "Zero-to-one delivery", "Live pitch lead"].map((t) => (
              <span key={t} className="cell">{t}</span>
            ))}
          </div>
        </div>

        {/* Card 3 */}
        <div className="panel flex flex-col gap-6 p-7">
          <div className="flex items-start justify-between gap-3">
            <Code2 className="h-5 w-5 text-bone-mute" aria-hidden="true" />
            <a
              href="https://leetcode.com/Yo7vJoRqBP"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-bone-dim"
            >
              Profile <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h3 className="h-block text-bone">200+ solved DSA problems</h3>
            <div className="field-key mt-1.5">C++ · LeetCode</div>
          </div>

          <p className="body-copy">
            Depth across algorithmic paradigms, with concentration in Dynamic
            Programming, Game Theory, and Divide and Conquer.
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 border-t border-rule pt-5">
            {["Dynamic programming", "Game theory", "Divide & conquer"].map((t) => (
              <span key={t} className="cell">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
