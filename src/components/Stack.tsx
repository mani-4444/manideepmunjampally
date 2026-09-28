import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/** Marked out wherever they appear: the tools he builds with day to day. */
const FEATURED = new Set(["Claude Code", "Claude"]);

/* Grouped by job, AI first. Nearly all of these appear in a case study
   above, which is what makes a skills list credible. */
const GROUPS = [
  {
    key: "AI & LLMs",
    items: ["Claude", "Gemini", "Groq", "Ollama", "Whisper", "ElevenLabs", "Prompt engineering"],
  },
  { key: "Tooling", items: ["Claude Code", "Git", "GitHub", "Vercel"] },
  { key: "Languages", items: ["Python", "TypeScript", "C++", "SQL"] },
  { key: "Backend & data", items: ["FastAPI", "Supabase", "PostgreSQL", "MySQL", "Pandas", "REST APIs"] },
  { key: "Frontend", items: ["React", "Next.js", "TanStack Query", "Tailwind CSS", "Recharts"] },
];

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tools I reach for."
      intro="Claude Code is where I build. Gemini, Groq and local Ollama models run inside the pipelines I've shipped."
      split
    >
      <dl className="border-t border-rule">
        {GROUPS.map((group, i) => (
          <Reveal
            key={group.key}
            delay={0.05 * i}
            className="grid grid-cols-1 gap-3 border-b border-rule py-6 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8 sm:py-7"
          >
            <dt className="h-block pt-1.5 text-bone">{group.key}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className={FEATURED.has(item) ? "chip chip-featured" : "chip"}>
                  {item}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
