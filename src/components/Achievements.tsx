import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui/section";
import { OrchestrateFunnel } from "@/components/ui/OrchestrateFunnel";

export function Achievements() {
  return (
    <Section id="achievements" label="Honors">
      <SectionTitle index={4}>Honors &amp; milestones</SectionTitle>

      {/* The Orchestrate result is the strongest single credential here, so it
          gets its own band rather than being one of three equal cards. */}
      <div className="panel bracket mt-12 border-signal/30 p-7 sm:p-9">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-signal" aria-hidden="true" />
            <div>
              <h3 className="h-block text-bone">HackerRank Orchestrate</h3>
              <div className="field-key mt-1.5">Buy or Wait? · September 2026</div>
            </div>
          </div>
          <a
            href="https://github.com/mani-4444/hackerrank-orchestrate-september26"
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-bone-dim"
          >
            Repo <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>

        <OrchestrateFunnel />

        <p className="body-copy mt-8 max-w-[62ch] border-t border-rule pt-6">
          An AI-powered affordability agent combining LLM-based evidence
          extraction with deterministic financial reasoning.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
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
