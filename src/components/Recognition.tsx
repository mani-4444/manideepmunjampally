import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Funnel } from "@/components/Funnel";

const RANK = 93;
const FIELD = 3062;
// 93 / 3,062 = 3.04%. Rounded up to one decimal: accurate, and the
// strongest honest phrasing ("top 3%" would overstate it).
const PERCENTILE = Math.ceil((RANK / FIELD) * 1000) / 10;

const OTHERS = [
  {
    title: "Hackathons",
    meta: "24–36 hour builds",
    body: "KrishiCFO: led the multilingual voice pipeline, then the final pitch and live demo. JARVIS: backend implementor for tiered LLM routing with an offline fallback.",
    href: "#krishicfo",
    cta: "See both builds",
    external: false,
  },
  {
    title: "200+ problems solved",
    meta: "LeetCode · C++",
    body: "Most of the depth is in dynamic programming, game theory, and divide and conquer.",
    href: "https://leetcode.com/Yo7vJoRqBP",
    cta: "Profile",
    external: true,
  },
];

export function Recognition() {
  return (
    <Section id="recognition" eyebrow="Recognition" title="Tested in competition.">
      <Reveal className="surface mt-14 p-6 sm:mt-16 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-rule pb-6">
          <div>
            <h3 className="h-block text-bone">HackerRank Orchestrate</h3>
            <p className="mt-1 text-[13px] text-bone-mute">
              September 2026 · solo entry with Buy or Wait?
            </p>
          </div>
          <a
            href="https://github.com/mani-4444/hackerrank-orchestrate-september26"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm group"
          >
            Repository
            <ArrowUpRight className="nudge h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="field-key">Final placing</p>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="figure text-[4.5rem] text-signal sm:text-[5.5rem]">#{RANK}</span>
              <span className="figure text-2xl text-bone-mute">/ {FIELD.toLocaleString("en-US")}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="chip chip-featured">Top {PERCENTILE}%</span>
              <span className="chip">Score 67.7 / 100</span>
            </div>
          </div>

          <Funnel />
        </div>
      </Reveal>

      <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {OTHERS.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={0.08 * (i + 1)}
            className="surface surface-hover flex flex-col p-6 sm:p-8"
          >
            <p className="field-key">{item.meta}</p>
            <h3 className="mt-2 font-serif text-[1.65rem] leading-tight tracking-[-0.02em] text-bone">
              {item.title}
            </h3>
            <p className="body-copy mt-3">{item.body}</p>
            <a
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group mt-6 inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-bone"
            >
              <span className="link-u">{item.cta}</span>
              {item.external ? (
                <ArrowUpRight className="nudge h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ArrowDown className="nudge nudge-down h-3.5 w-3.5" aria-hidden="true" />
              )}
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
