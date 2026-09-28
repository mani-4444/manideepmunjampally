import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/** The AI-native tools he builds with, marked out wherever they appear. */
const FEATURED = new Set(["Claude Code", "Antigravity", "Claude"]);

/* Trimmed to what signals in the AI era: the agentic tools first, then
   the models his pipelines call, then the core he ships on. Filler
   (GitHub beside Git, REST APIs beside FastAPI, charting libraries) is
   left to the case studies. */
const GROUPS = [
  { key: "AI dev tools", items: ["Claude Code", "Antigravity", "Claude"] },
  { key: "Models & inference", items: ["Gemini", "Groq", "Ollama", "Whisper", "ElevenLabs"] },
  { key: "Languages", items: ["Python", "TypeScript", "C++"] },
  { key: "Build & ship", items: ["Next.js", "React", "FastAPI", "Supabase", "Vercel", "Git"] },
];

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tools I reach for."
      intro="Agentic IDEs are where I build: Claude Code and Antigravity. Gemini, Groq and local Ollama models run inside the pipelines I have shipped."
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
