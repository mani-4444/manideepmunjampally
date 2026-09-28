"use client";

import { useState } from "react";
import {
  Activity, Calculator, CheckCircle2, Cpu, HardDrive, Mic, ShieldCheck,
  TrendingUp, Volume2, Zap,
} from "lucide-react";
import { Panel, Tabs } from "./CaseStudy";

/* ============================================================
   01 — Affordability decision engine
   ============================================================ */

type Stage = "extraction" | "reconciliation" | "simulation" | "decision";

const STAGES: Record<Stage, { title: string; scope: string; body: string }> = {
  extraction: {
    title: "LLM fact extraction",
    scope: "LLM scope",
    body: "Gemini 3.6 Flash and Groq extract structured financial facts from noisy messages, receipts, and images. Output is strictly treated as untrusted evidence.",
  },
  reconciliation: {
    title: "4-tier evidence reconciliation",
    scope: "Deterministic",
    body: "A deterministic resolution layer applies explicit precedence rules across amendments, cancellations, newer evidence, and settled transactions to construct canonical ground truth.",
  },
  simulation: {
    title: "90-day simulation & safety validation",
    scope: "Deterministic",
    body: "Projects daily cash flow 90 days forward, incorporating recurring expenses, FX normalization, and strict minimum-balance preservation.",
  },
  decision: {
    title: "Explainable decision & payment plan",
    scope: "Deterministic",
    body: "Evaluates candidate strategies — immediate purchase, installments, a safe delay date, or decline — and selects the best valid plan with an audit trail.",
  },
};

/* The pipeline, drawn as a measuring trace. Signal marks the single stage
   where a language model is allowed to touch the data; everything below it
   is deterministic. That is the whole architectural argument, so colour
   carries it rather than decorating it. */
const PIPELINE = [
  { step: "Unstructured evidence", llm: false },
  { step: "LLM fact extraction", llm: true },
  { step: "Evidence reconciliation", llm: false },
  { step: "Canonical financial state", llm: false },
  { step: "90-day simulation", llm: false },
  { step: "Safety validation", llm: false },
  { step: "Payment plan", llm: false },
  { step: "Final decision", llm: false },
];

export function AffordabilityPanel() {
  const [stage, setStage] = useState<Stage>("reconciliation");
  const active = STAGES[stage];

  return (
    <Panel title="Affordability decision engine" badge="#87 · 67.7 / 100" badgeSignal>
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
        <p className="body-copy !max-w-none !text-[13px] !leading-relaxed text-bone">
          The LLM interprets the financial evidence. Deterministic systems
          establish financial reality and make the decision.
        </p>
      </div>

      <Tabs
        label="Inspect pipeline stage"
        value={stage}
        onChange={setStage}
        options={[
          { value: "extraction", label: "1 · Extraction" },
          { value: "reconciliation", label: "2 · Reconcile" },
          { value: "simulation", label: "3 · Simulate" },
          { value: "decision", label: "4 · Decide" },
        ]}
      />

      <div className="border-t border-rule pt-4">
        <div className="flex items-start justify-between gap-3">
          <span className="h-block !text-[13px] flex items-center gap-2 text-bone">
            <Activity className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
            {active.title}
          </span>
          <span
            className={`font-data shrink-0 text-[10px] ${
              stage === "extraction" ? "text-signal" : "text-bone-mute"
            }`}
          >
            {active.scope}
          </span>
        </div>
        <p className="body-copy !max-w-none mt-2 !text-[13px]">{active.body}</p>
      </div>

      {/* Pipeline trace */}
      <div className="border-t border-rule pt-4">
        <span className="field-key">Conceptual pipeline · strict separation</span>
        <ol className="relative mt-3">
          {/* one continuous trace, inset to the first and last marker centres */}
          <span
            aria-hidden="true"
            className="absolute left-[3px] top-[13px] bottom-[13px] w-px bg-rule-strong"
          />
          {PIPELINE.map((item) => (
            <li key={item.step} className="relative flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`relative z-10 h-[7px] w-[7px] shrink-0 ${
                  item.llm ? "bg-signal" : "border border-bone-faint bg-ink"
                }`}
              />
              <span
                className={`font-data py-[5px] text-[11px] ${
                  item.llm ? "text-signal" : "text-bone-dim"
                }`}
              >
                {item.step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Measured results */}
      <div className="border-t border-rule pt-4">
        <span className="field-key">Development results</span>
        <dl className="mt-3 grid grid-cols-3 gap-4">
          {[
            { k: "Status accuracy", v: "68 → 88%" },
            { k: "Payment method", v: "72 → 92%" },
            { k: "Earliest date", v: "21 / 25" },
          ].map((m) => (
            <div key={m.k}>
              <dt className="field-key !text-[9.5px]">{m.k}</dt>
              <dd className="font-data mt-1 text-[13px] text-bone">{m.v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[10.5px] leading-snug text-bone-faint">
          Measured on the project&rsquo;s evaluation sample during development.
        </p>
      </div>
    </Panel>
  );
}

/* ============================================================
   02 — 3-agent debate engine
   ============================================================ */

type Agent = "bullish" | "bearish" | "neutral";

const AGENTS: Record<Agent, { title: string; body: string }> = {
  bullish: {
    title: "Bullish · price surge",
    body: "Local mandi arrivals are down 18% with festival procurement surging. Suggests holding inventory 2–3 weeks to capture anticipated 12–15% upside.",
  },
  bearish: {
    title: "Bearish · downside risk",
    body: "A neighbouring region's bumper harvest reaches local markets within 7 days. Recommends staggered liquidation of 50% inventory to avoid price collapse.",
  },
  neutral: {
    title: "Neutral · risk-weighted consensus",
    body: "Liquidate 40% immediately at the current mandi spot rate to cover working capital; retain 60% in warehouse storage to capture upside.",
  },
};

const VOICE = [
  { Icon: Mic, name: "Whisper STT", note: "Regional dialect audio in" },
  { Icon: Zap, name: "Groq LPU", note: "Llama 3.1 adversarial debate" },
  { Icon: Volume2, name: "ElevenLabs TTS", note: "Natural speech out" },
];

export function DebatePanel() {
  const [agent, setAgent] = useState<Agent>("bullish");
  const active = AGENTS[agent];

  return (
    <Panel title="3-agent debate engine" badge="Llama 3.1 via Groq">
      <Tabs
        label="Inspect market agent"
        value={agent}
        onChange={setAgent}
        options={[
          { value: "bullish", label: "Bullish" },
          { value: "bearish", label: "Bearish" },
          { value: "neutral", label: "Consensus" },
        ]}
      />

      <div className="border-t border-rule pt-4">
        <span className="h-block !text-[13px] flex items-center gap-2 text-bone">
          <TrendingUp className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
          {active.title}
        </span>
        <p className="body-copy !max-w-none mt-2 !text-[13px]">{active.body}</p>
      </div>

      <div className="border-t border-rule pt-4">
        <span className="field-key">Multilingual voice pipeline</span>
        <div className="mt-3 space-y-2.5">
          {VOICE.map(({ Icon, name, note }) => (
            <div key={name} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2.5">
                <Icon className="h-3.5 w-3.5 shrink-0 text-signal" aria-hidden="true" />
                <span className="font-data text-[11.5px] text-bone">{name}</span>
              </span>
              <span className="text-right text-[10.5px] text-bone-mute">{note}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ============================================================
   03 — Inference fallback simulator
   ============================================================ */

type Mode = "primary" | "low_latency" | "offline";

const TIERS: { mode: Mode; Icon: typeof Cpu; name: string; note: string; active: string; idle: string }[] = [
  {
    mode: "primary",
    Icon: Cpu,
    name: "Tier 1 · Gemini",
    note: "Cloud reasoning, high context",
    active: "310ms",
    idle: "Standby",
  },
  {
    mode: "low_latency",
    Icon: Zap,
    name: "Tier 2 · Groq LPU",
    note: "Low-latency fallback under load",
    active: "84ms",
    idle: "Standby",
  },
  {
    mode: "offline",
    Icon: HardDrive,
    name: "Tier 3 · Ollama + Qwen",
    note: "Local node, no network dependency",
    active: "220ms",
    idle: "Offline ready",
  },
];

const TRACE: Record<Mode, string> = {
  primary: "Route: Gemini | latency 310ms | cloud",
  low_latency: "Latency threshold exceeded → Groq LPU | 84ms",
  offline: "Cloud unreachable → local Ollama / Qwen | 220ms",
};

export function FallbackPanel() {
  const [mode, setMode] = useState<Mode>("primary");
  const [log, setLog] = useState<string[]>([
    "Endpoint monitor online. Cloud endpoints active.",
  ]);

  const switchMode = (next: Mode) => {
    setMode(next);
    const t = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setLog((prev) => [`${t}  ${TRACE[next]}`, ...prev].slice(0, 4));
  };

  return (
    <Panel title="Inference fallback simulator" badge="Interactive" badgeSignal>
      <Tabs
        label="Test runtime routing"
        value={mode}
        onChange={switchMode}
        options={[
          { value: "primary", label: "Cloud normal" },
          { value: "low_latency", label: "Latency spike" },
          { value: "offline", label: "Offline" },
        ]}
      />

      <div className="space-y-2 border-t border-rule pt-4">
        {TIERS.map((tier) => {
          const on = tier.mode === mode;
          return (
            <div
              key={tier.mode}
              className={`rounded-machined flex items-center justify-between gap-3 border p-3 transition-colors ${
                on ? "border-signal/50 bg-signal/[0.06]" : "border-rule"
              }`}
            >
              <span className="flex min-w-0 items-center gap-3">
                <tier.Icon
                  className={`h-4 w-4 shrink-0 ${on ? "text-signal" : "text-bone-faint"}`}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span
                    className={`block font-montserrat text-[12.5px] font-semibold ${
                      on ? "text-bone" : "text-bone-mute"
                    }`}
                  >
                    {tier.name}
                  </span>
                  <span className="block text-[10.5px] leading-snug text-bone-faint">
                    {tier.note}
                  </span>
                </span>
              </span>
              <span
                className={`font-data shrink-0 text-[10px] ${on ? "text-signal" : "text-bone-faint"}`}
              >
                {on ? tier.active : tier.idle}
              </span>
            </div>
          );
        })}
      </div>

      {/* Real machine output — one of the few places mono is earned */}
      <div className="border-t border-rule pt-4">
        <span className="field-key">Telemetry</span>
        <div className="mt-3 space-y-1" aria-live="polite">
          {log.map((line, i) => (
            <div
              key={`${line}-${i}`}
              className={`font-data truncate text-[10.5px] ${
                i === 0 ? "text-bone" : "text-bone-faint"
              }`}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ============================================================
   04 — System capabilities
   ============================================================ */

const CAPABILITIES = [
  {
    Icon: CheckCircle2,
    name: "Real-time sync",
    note: "PostgreSQL row-level security with Supabase Realtime pub/sub.",
  },
  {
    Icon: TrendingUp,
    name: "Streak engine",
    note: "Deterministic streak tracking with SVG analytical charts.",
  },
  {
    Icon: Zap,
    name: "Adaptive recommendations",
    note: "Behaviour analysis suggesting habit pacing adjustments.",
  },
];

export function CapabilitiesPanel() {
  return (
    <Panel title="System capabilities" badge="Production live" badgeSignal>
      <div className="space-y-4">
        {CAPABILITIES.map(({ Icon, name, note }) => (
          <div key={name} className="flex gap-3 border-b border-rule pb-4 last:border-0 last:pb-0">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
            <div>
              <div className="font-montserrat text-[12.5px] font-semibold text-bone">{name}</div>
              <div className="mt-0.5 text-[11.5px] leading-relaxed text-bone-mute">{note}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ============================================================
   05 — Calculation logic
   ============================================================ */

export function CalculationPanel() {
  return (
    <Panel title="Calculation logic" badge="Zero round-trip">
      <div>
        <span className="field-key">Target equation</span>
        <pre className="font-data rounded-machined mt-2.5 overflow-x-auto border border-rule bg-ink p-3.5 text-[11.5px] leading-relaxed text-signal">
          <code>classes_needed = ceil((T × total − attended) / (1 − T))</code>
        </pre>
        <p className="mt-2 text-[11px] text-bone-mute">
          Where T is the required threshold — 0.75 or 0.85 in most institutions.
        </p>
      </div>

      <div className="border-t border-rule pt-4">
        <span className="h-block !text-[13px] flex items-center gap-2 text-bone">
          <Calculator className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
          Margin of safety
        </span>
        <p className="body-copy !max-w-none mt-2 !text-[13px]">
          Computes how many classes can still be missed while keeping attendance
          strictly above the institutional cutoff.
        </p>
      </div>
    </Panel>
  );
}
