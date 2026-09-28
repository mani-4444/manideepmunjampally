import { Section, SectionTitle } from "@/components/ui/section";

/* Three parallel areas of competence — not a sequence, so they get no
   01/02/03 markers. The margin term carries real information instead. */
const PILLARS = [
  {
    term: "CBIT CSE",
    title: "Academic foundation",
    body: "Computer Science undergrad at CBIT Hyderabad, carrying a 9.74/10.00 CGPA through Data Structures, Algorithms, DBMS, and Object-Oriented Design.",
  },
  {
    term: "React · Supabase",
    title: "Full-stack & deployments",
    body: "Builds with React, Next.js, and TypeScript against Supabase and REST APIs, holding state consistency and sub-second interaction as non-negotiable.",
  },
  {
    term: "Claude Code · Gemini · Groq",
    title: "LLMs & agentic AI",
    // Two distinct claims, kept distinct: Claude Code is the tool he builds
    // with; Gemini, Groq and Ollama are what the shipped pipelines call.
    body: "Builds with Claude Code, and runs multi-tier LLM pipelines across Gemini, Groq, and local Ollama models — while deepening into ML fundamentals, evaluation, and autonomous agents.",
  },
];

export function About() {
  return (
    <Section id="about" label="Background">
      <SectionTitle index={0}>Engineering profile</SectionTitle>

      <p className="body-copy mt-6 max-w-[58ch] text-base">
        Specializing in production full-stack systems and multi-tier
        generative-AI pipelines — pairing academic rigor with competitive
        algorithmic depth and applications that stay live after the demo ends.
      </p>

      <dl className="mt-14 border-t border-rule">
        {PILLARS.map((p) => (
          <div
            key={p.term}
            className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-rule py-7 sm:grid-cols-[168px_minmax(0,1fr)]"
          >
            <dt className="field-key sm:pt-1">{p.term}</dt>
            <dd className="min-w-0">
              <h3 className="h-block text-bone">{p.title}</h3>
              <p className="body-copy mt-2">{p.body}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
