import type { CaseStudyData } from "./CaseStudy";

export const PROJECTS: CaseStudyData[] = [
  {
    id: "buy-or-wait",
    role: "Solo build",
    index: "01",
    name: "Buy or Wait?",
    kind: "Financial affordability AI",
    context: "HackerRank Orchestrate 2026",
    lede: "A hybrid AI financial agent that decides whether a user can safely afford a purchase.",
    href: "https://github.com/mani-4444/hackerrank-orchestrate-september26",
    linkKind: "repo",
    tech: ["Python", "Gemini 3.6 Flash", "Groq", "Pandas", "LLM extraction", "Deterministic simulation"],
    blocks: [
      {
        h: "Hybrid AI architecture",
        p: "A strict separation between language understanding and financial reasoning: LLMs extract facts from unstructured evidence, while deterministic systems handle reconciliation, cash-flow simulation, safety validation, and final decision ranking.",
      },
      {
        h: "Evidence reconciliation",
        p: "A deterministic reconciliation layer resolves conflicting financial evidence across transactions, messages, and images. LLM output is treated as untrusted evidence and reconciled under explicit rules for amendments, cancellations, newer evidence, and settled transactions.",
      },
      {
        h: "90-day simulation & decision planning",
        p: "A cash-flow simulator projects recurring income and expenses while holding the user's minimum required balance, computing the maximum safe payment and the earliest safe purchase date. Candidate strategies — full payment, installments, waiting, spending adjustments — are generated, validated, and ranked deterministically.",
      },
    ],
  },
  {
    id: "krishicfo",
    role: "Team project · voice pipeline and pitch lead",
    index: "02",
    name: "KrishiCFO",
    kind: "Agricultural advisory AI",
    lede: "A 3-agent adversarial AI debate platform giving Indian farmers data-driven crop price advice.",
    href: "https://github.com/ERROR404-26/A4IMPACT",
    linkKind: "repo",
    tech: ["Python", "FastAPI", "React", "Llama 3.1 via Groq", "Whisper STT", "ElevenLabs TTS"],
    blocks: [
      {
        h: "Team project & architecture",
        p: "Built with team Aurexis-Error-404: a commodity price advisory platform powered by a 3-agent adversarial debate system.",
      },
      {
        h: "Adversarial market debate",
        p: "Llama 3.1 generates real-time market analysis debates between bullish, bearish, and neutral agents, so the advice a farmer receives has been argued against before it is given.",
      },
      {
        h: "Voice pipeline & demo leadership",
        p: "Led the real-time voice pipeline — Whisper STT for regional dialect audio input, ElevenLabs TTS for natural speech output — and led the final pitch and live demo.",
      },
    ],
  },
  {
    id: "jarvis",
    role: "Team of 5 · backend implementor",
    index: "03",
    name: "JARVIS",
    kind: "Tiered AI inference system",
    lede: "Re-architected from a single cloud endpoint to a tiered Gemini + Groq pipeline, with local Qwen via Ollama for offline resilience.",
    href: "https://github.com/Aurexis-Error-404/Project_Jarvis",
    linkKind: "repo",
    tech: ["Python", "Gemini", "Groq", "Ollama", "Qwen"],
    blocks: [
      {
        h: "Team project & role",
        p: "Built with a 5-member team for a hackathon submission, with Manideep as backend implementor — responsible for multi-tier LLM orchestration, inference routing, and local model fallback.",
      },
      {
        h: "The engineering challenge",
        p: "The initial setup could not meet real-world latency and cost requirements. A single cloud model meant frequent rate delays, high per-query cost, and total dependency on connectivity.",
      },
      {
        h: "Architectural resolution",
        p: "Re-engineered the backend into a tiered pipeline: standard queries through Gemini for high context, high-speed bursts offloaded to Groq, and Qwen embedded via Ollama as a deterministic local fallback when the cloud is unreachable.",
      },
    ],
  },
  {
    id: "habittracker",
    role: "Solo build",
    index: "04",
    name: "HabitTracker",
    kind: "Full-stack web app",
    lede: "Real-time state synchronization and streak analytics on Supabase, with an activity-driven recommendation engine.",
    href: "https://habit-tracker-indol-two.vercel.app/",
    linkKind: "live",
    tech: ["React", "TypeScript", "Supabase", "TanStack Query", "Recharts", "Vercel"],
    blocks: [
      {
        h: "Application architecture",
        p: "A full-stack habit tracker in React and TypeScript, deployed on Vercel, using Supabase for relational persistence and real-time state replication across client sessions.",
      },
      {
        h: "State synchronization & streaks",
        p: "TanStack Query handles optimistic mutations and cache invalidation for zero-flicker streak updates. Completion consistency, historical trends, and daily momentum are visualized with Recharts.",
      },
      {
        h: "Recommendation engine",
        p: "Analyzes longitudinal activity history to identify drop-off patterns and surface tailored schedule changes, reinforcing streaks before fatigue sets in.",
      },
    ],
  },
  {
    id: "attendance-analyzer",
    role: "Solo build",
    index: "05",
    name: "Attendance Analyzer",
    kind: "Productivity tool",
    lede: "Automates attendance shortage analysis and calculates exactly how many classes are needed to clear the threshold.",
    href: "https://attendance-tracker-nine-xi.vercel.app/",
    linkKind: "live",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    blocks: [
      {
        h: "The problem",
        p: "Students face attendance quotas with real penalties for dropping below the minimum. Doing the arithmetic by hand across several courses is error-prone and says nothing about where the trajectory ends up.",
      },
      {
        h: "Mathematical modeling",
        p: "A deterministic model takes attended lectures, total conducted sessions, and the target percentage, and returns the exact number of consecutive classes required to exit shortage.",
      },
      {
        h: "Implementation & deployment",
        p: "React, TypeScript, and Tailwind CSS for instant reactivity with no calculation round-trip. Deployed to production on Vercel.",
      },
    ],
  },
];
