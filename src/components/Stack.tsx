import type { ComponentType, CSSProperties } from "react";
import Image from "next/image";
import { Mic } from "lucide-react";
import {
  siClaude,
  siCplusplus,
  siElevenlabs,
  siFastapi,
  siGit,
  siGooglegemini,
  siNextdotjs,
  siOllama,
  siPython,
  siReact,
  siSupabase,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/* Official marks come from simple-icons; Antigravity, ChatGPT and Groq use
   supplied logo files. Whisper is not in that set, and drawing imitations of brand marks
   is worse than a clean neutral glyph — so those use one until official
   SVGs are added. */
type Tool = {
  name: string;
  icon?: SimpleIcon;
  Glyph?: ComponentType<{ className?: string }>;
  /** A supplied logo file in /public, for marks simple-icons lacks. */
  src?: string;
};

const t = (name: string, icon: SimpleIcon): Tool => ({ name, icon });
const g = (name: string, Glyph: Tool["Glyph"]): Tool => ({ name, Glyph });
const img = (name: string, src: string): Tool => ({ name, src });

/** The AI-native tools he builds with, marked out wherever they appear. */
const FEATURED = new Set(["Claude Code", "Antigravity"]);

/* Trimmed to what signals in the AI era: the agentic tools first, then
   the models his pipelines call, then the core he ships on. */
const GROUPS: { key: string; items: Tool[] }[] = [
  {
    key: "AI dev tools",
    items: [t("Claude Code", siClaude), img("Antigravity", "/images/antigravity.png"), img("ChatGPT", "/images/chatgpt.png")],
  },
  {
    key: "Models & inference",
    items: [
      t("Gemini", siGooglegemini),
      img("Groq", "/images/groq.png"),
      t("Ollama", siOllama),
      g("Whisper", Mic),
      t("ElevenLabs", siElevenlabs),
    ],
  },
  {
    key: "Languages",
    items: [t("Python", siPython), t("TypeScript", siTypescript), t("C++", siCplusplus)],
  },
  {
    key: "Build & ship",
    items: [
      t("Next.js", siNextdotjs),
      t("React", siReact),
      t("FastAPI", siFastapi),
      t("Supabase", siSupabase),
      t("Vercel", siVercel),
      t("Git", siGit),
    ],
  },
];

/* Logos show in full brand colour. Near-black marks (Next.js, Vercel,
   Ollama) would vanish on the page, so those render in bone instead. */
function brandColour(hex: string) {
  const n = parseInt(hex, 16);
  const lum = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum < 70 ? "#EDEAE3" : `#${hex}`;
}

function ToolTile({ tool }: { tool: Tool }) {
  const featured = FEATURED.has(tool.name);
  const colour: CSSProperties = { color: tool.icon ? brandColour(tool.icon.hex) : "#EDEAE3" };

  return (
    <li
      className={`glass group/tile relative flex aspect-[1.15] flex-col items-center justify-center gap-3 !rounded-2xl p-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
        featured ? "!bg-signal/[0.07]" : ""
      }`}
    >
      {featured ? (
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-signal"
          title="Daily driver"
        />
      ) : null}
      <span
        aria-hidden="true"
        style={colour}
        className="flex h-9 w-9 items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tile:scale-110"
      >
        {tool.src ? (
          <Image src={tool.src} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
        ) : tool.icon ? (
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d={tool.icon.path} />
          </svg>
        ) : tool.Glyph ? (
          <tool.Glyph className="h-8 w-8" />
        ) : null}
      </span>
      <span className="text-center text-[13px] font-medium leading-tight text-bone-dim">
        {tool.name}
      </span>
    </li>
  );
}

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tools I reach for."
      intro="Agentic IDEs are where I build: Claude Code and Antigravity. Gemini, Groq and local Ollama models run inside the pipelines I have shipped."
      split
    >
      <dl>
        {GROUPS.map((group, i) => (
          <Reveal
            key={group.key}
            delay={0.05 * i}
            className="py-6 first:pt-0 sm:py-7"
          >
            <dt className="field-key mb-3.5">{group.key}</dt>
            <dd>
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-6">
                {group.items.map((tool) => (
                  <ToolTile key={tool.name} tool={tool} />
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
