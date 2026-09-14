"use client";

import React, { useState } from "react";
import { Cpu, Zap, HardDrive, ShieldCheck, ArrowUpRight, ExternalLink, Activity, Calculator, CheckCircle2, TrendingUp, Mic, Volume2, Users, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

type PipelineMode = "primary" | "low_latency" | "offline";
type DebateAgent = "bullish" | "bearish" | "neutral";
type AffordabilityStage = "extraction" | "reconciliation" | "simulation" | "decision";

export function Projects() {
  const [pipelineMode, setPipelineMode] = useState<PipelineMode>("primary");
  const [debateAgent, setDebateAgent] = useState<DebateAgent>("bullish");
  const [affordabilityStage, setAffordabilityStage] = useState<AffordabilityStage>("reconciliation");
  const [logs, setLogs] = useState<string[]>([
    "Endpoint monitor online. Cloud endpoints active.",
    "Gemini 1.5 Flash (Primary) · Groq LPU (Sub-100ms) · Ollama Local Node",
  ]);

  const handleSwitchMode = (mode: PipelineMode) => {
    setPipelineMode(mode);
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (mode === "primary") {
      setLogs((prev) => [
        `[${timestamp}] Route: Gemini 1.5 Flash | Latency: 310ms (Cloud)`,
        ...prev.slice(0, 2),
      ]);
    } else if (mode === "low_latency") {
      setLogs((prev) => [
        `[${timestamp}] Latency spike threshold exceeded → Routed to Groq LPU | 84ms`,
        ...prev.slice(0, 2),
      ]);
    } else {
      setLogs((prev) => [
        `[${timestamp}] Cloud unreachable → Engaged local Ollama / Qwen node | 220ms [Offline]`,
        ...prev.slice(0, 2),
      ]);
    }
  };

  return (
    <section id="projects" className="pt-32 pb-24 bg-black border-t border-white/10 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-400 uppercase mb-2">
              03 // CASE STUDIES
            </div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems
            </h2>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">

          {/* Project Case Study 1: Buy or Wait? */}
          <article className="border border-white/10 bg-[#080808] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-white/25 transition-all shadow-2xl">
            {/* Top Bar: Title, Accent Pull-quote, and Repo Action */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8 mb-8">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-montserrat text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    Buy or Wait?
                  </h3>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300">
                    Financial Affordability AI
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-400">
                    HackerRank Orchestrate · September 2026
                  </span>
                </div>
                {/* Poppins Italic Accent Line */}
                <p className="font-poppins-italic text-sm sm:text-base text-neutral-300 mt-3 max-w-3xl leading-relaxed">
                  &ldquo;A hybrid AI financial agent that determines whether a user can safely afford a purchase.&rdquo;
                </p>
              </div>

              {/* GitHub Link Button */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/mani-4444/hackerrank-orchestrate-september26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-montserrat font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  <GithubIcon className="w-4 h-4 text-black" />
                  <span>VIEW ON GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>

            {/* Grid Layout: Narrative & Interactive Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Context, Problem, & Solution */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Project &amp; Architecture
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Built for HackerRank Orchestrate, this project is an AI-powered financial affordability agent
                    that combines structured financial data with unstructured evidence from messages and images
                    to make safe and explainable purchase recommendations.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Hybrid AI Architecture
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Designed a strict separation between language understanding and financial reasoning:
                    LLMs extract factual information from unstructured evidence, while deterministic systems
                    handle evidence reconciliation, cash-flow simulation, safety validation, and final decision ranking.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Evidence Reconciliation
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Built a deterministic reconciliation layer to resolve conflicting financial evidence across
                    transactions, messages, and images. LLM outputs are treated as untrusted evidence and
                    reconciled using explicit rules for amendments, cancellations, newer evidence, and settled transactions.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    90-Day Financial Simulation &amp; Decision Planning
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Implemented a 90-day cash-flow simulator that projects recurring income and expenses while
                    maintaining the user&apos;s minimum required balance. The system calculates the maximum safe payment amount and evaluates when a purchase can be completed safely. Generated and validated payment strategies including full payment, partial payment, installments, waiting, and spending adjustments, then selected the best valid option using deterministic ranking rules.
                  </p>
                </div>

                {/* Core Engineering Highlights */}
                <div>
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Core Engineering Highlights
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Hybrid LLM + Deterministic Architecture",
                      "4-Tier Evidence Reconciliation",
                      "90-Day Cash-Flow Simulation",
                      "Explainable Payment Planning",
                      "HackerRank Orchestrate · Rank #87"
                    ].map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Implementation Details (Bullets) */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5">
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-1">
                    Key Implementation Details
                  </div>
                  <ul className="space-y-2 text-xs font-open-sans text-neutral-300 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-0.5 shrink-0">·</span>
                      <span>Designed a hybrid LLM + deterministic architecture where LLMs extract unstructured financial facts while deterministic systems perform reconciliation and financial reasoning.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-0.5 shrink-0">·</span>
                      <span>Built a 4-tier evidence reconciliation pipeline and canonical financial state to handle conflicting transactions, amendments, cancellations, settlements, messages, and images.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-0.5 shrink-0">·</span>
                      <span>Implemented a 90-day cash-flow simulator with recurring-expense detection, strict FX normalization, minimum-balance safety constraints, and multiple payment strategies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-0.5 shrink-0">·</span>
                      <span>Built deterministic candidate generation, safety validation, and ranking to produce reproducible and explainable affordability recommendations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-0.5 shrink-0">·</span>
                      <span>Improved status accuracy from 68% to 88% and payment-method accuracy from 72% to 92% on the evaluation sample through iterative experiments.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-1">
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Gemini 3.6 Flash", "Groq", "Pandas", "LLM Extraction", "Deterministic Simulation"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Decision Engine Panel */}
              <div className="lg:col-span-6 bg-black border border-white/15 p-6 rounded-xl space-y-5">
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-white" />
                    <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                      AFFORDABILITY DECISION ENGINE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">HACKERRANK ORCHESTRATE</span>
                    <span className="text-[10px] font-mono text-white bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 font-bold">
                      #87 · 67.7 / 100
                    </span>
                  </div>
                </div>

                {/* Architectural Principle Box */}
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      Core Guardrail Principle
                    </div>
                    <p className="text-xs font-open-sans text-neutral-200 leading-snug">
                      &ldquo;LLM interprets the financial evidence. Deterministic systems establish financial reality and make the decision.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Interactive Stage Trigger Buttons */}
                <div>
                  <div className="text-xs font-open-sans text-neutral-400 mb-2">
                    Inspect architectural pipeline stage:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setAffordabilityStage("extraction")}
                      className={`text-[11px] py-2 px-1.5 rounded-lg border font-montserrat font-semibold transition-all text-center ${
                        affordabilityStage === "extraction"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      1. Extraction
                    </button>
                    <button
                      type="button"
                      onClick={() => setAffordabilityStage("reconciliation")}
                      className={`text-[11px] py-2 px-1.5 rounded-lg border font-montserrat font-semibold transition-all text-center ${
                        affordabilityStage === "reconciliation"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      2. Reconciliation
                    </button>
                    <button
                      type="button"
                      onClick={() => setAffordabilityStage("simulation")}
                      className={`text-[11px] py-2 px-1.5 rounded-lg border font-montserrat font-semibold transition-all text-center ${
                        affordabilityStage === "simulation"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      3. Simulation
                    </button>
                    <button
                      type="button"
                      onClick={() => setAffordabilityStage("decision")}
                      className={`text-[11px] py-2 px-1.5 rounded-lg border font-montserrat font-semibold transition-all text-center ${
                        affordabilityStage === "decision"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      4. Decision
                    </button>
                  </div>
                </div>

                {/* Stage Detail Card */}
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-white" />
                      <span className="text-xs font-montserrat font-semibold text-white">
                        {affordabilityStage === "extraction" && "LLM Fact Extraction (Untrusted Input)"}
                        {affordabilityStage === "reconciliation" && "4-Tier Evidence Reconciliation & Canonical State"}
                        {affordabilityStage === "simulation" && "90-Day Simulation & Safety Validation"}
                        {affordabilityStage === "decision" && "Explainable Decision & Payment Plan"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-neutral-300">
                      {affordabilityStage === "extraction" ? "LLM Scope" : "Deterministic Scope"}
                    </span>
                  </div>
                  <p className="font-open-sans text-xs text-neutral-300 leading-relaxed">
                    {affordabilityStage === "extraction" &&
                      "Gemini 3.6 Flash and Groq extract structured financial facts from noisy messages, receipts, and images. Outputs are strictly treated as untrusted evidence."}
                    {affordabilityStage === "reconciliation" &&
                      "Deterministic resolution layer applies explicit precedence rules across amendments, cancellations, newer evidence, and settled transactions to construct verified canonical ground truth."}
                    {affordabilityStage === "simulation" &&
                      "Projects daily cash-flow 90 days forward incorporating recurring expenses, FX normalization, and strict minimum-balance preservation buffers."}
                    {affordabilityStage === "decision" &&
                      "Evaluates candidate strategies (immediate purchase, installments, safe delay date, or decline) and selects the optimal verified plan with explainable audit trails."}
                  </p>
                </div>

                {/* Conceptual Pipeline Flow Diagram */}
                <div className="p-4 rounded-lg bg-black border border-white/10 space-y-2 font-mono text-xs">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider border-b border-white/10 pb-1.5 flex items-center justify-between">
                    <span>Conceptual Pipeline</span>
                    <span className="text-neutral-400">Strict Separation</span>
                  </div>

                  <div className="space-y-1 pt-1 text-[11px]">
                    {[
                      { step: "UNSTRUCTURED EVIDENCE", type: "Input Data", isLLM: false },
                      { step: "LLM FACT EXTRACTION", type: "LLM Scope", isLLM: true },
                      { step: "EVIDENCE RECONCILIATION", type: "Deterministic", isLLM: false },
                      { step: "CANONICAL FINANCIAL STATE", type: "Deterministic", isLLM: false },
                      { step: "90-DAY SIMULATION", type: "Deterministic", isLLM: false },
                      { step: "SAFETY VALIDATION", type: "Deterministic", isLLM: false },
                      { step: "PAYMENT PLAN", type: "Deterministic", isLLM: false },
                      { step: "FINAL DECISION", type: "Deterministic", isLLM: false },
                    ].map((item, idx, arr) => (
                      <React.Fragment key={item.step}>
                        <div className="flex items-center justify-between py-0.5 px-2 rounded bg-white/[0.02]">
                          <span className="text-neutral-200 font-medium">{item.step}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded ${
                            item.isLLM 
                              ? "bg-amber-950/40 text-amber-300 border border-amber-800/40" 
                              : "bg-white/5 text-neutral-400 border border-white/10"
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        {idx < arr.length - 1 && (
                          <div className="flex justify-center text-neutral-600 text-[10px] leading-none py-0.5">
                            ↓
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Development Results */}
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 space-y-2.5">
                  <div className="text-[11px] font-montserrat font-bold tracking-wider text-neutral-300 uppercase">
                    Development Results
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-lg bg-black border border-white/10 text-center">
                      <div className="text-[9px] font-mono text-neutral-400 uppercase">Status Accuracy</div>
                      <div className="text-xs sm:text-sm font-montserrat font-extrabold text-white mt-1">68% → 88%</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black border border-white/10 text-center">
                      <div className="text-[9px] font-mono text-neutral-400 uppercase">Payment Method</div>
                      <div className="text-xs sm:text-sm font-montserrat font-extrabold text-white mt-1">72% → 92%</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black border border-white/10 text-center">
                      <div className="text-[9px] font-mono text-neutral-400 uppercase">Earliest Date</div>
                      <div className="text-xs sm:text-sm font-montserrat font-extrabold text-white mt-1">21 / 25</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-open-sans text-neutral-500 italic">
                    *Measured on the project&apos;s evaluation sample during development.
                  </div>
                </div>

                {/* Direct Repository Link */}
                <div className="pt-1">
                  <a
                    href="https://github.com/mani-4444/hackerrank-orchestrate-september26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-mono text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 py-2.5 rounded-lg transition-all"
                  >
                    github.com/mani-4444/hackerrank-orchestrate-september26 ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Project Case Study 2: KrishiCFO */}
          <article className="border border-white/10 bg-[#080808] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-white/25 transition-all shadow-2xl">
            {/* Top Bar: Title, Accent Pull-quote, and Repo Action */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-montserrat text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    KrishiCFO
                  </h3>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300">
                    Agricultural Advisory AI
                  </span>
                </div>
                {/* Poppins Italic Accent Line */}
                <p className="font-poppins-italic text-sm sm:text-base text-neutral-300 mt-3 max-w-3xl leading-relaxed">
                  &ldquo;A 3-agent adversarial AI debate platform giving Indian farmers data-driven crop price advice.&rdquo;
                </p>
              </div>

              {/* GitHub Link Button */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/ERROR404-26/A4IMPACT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-montserrat font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  <GithubIcon className="w-4 h-4 text-black" />
                  <span>VIEW ON GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>

            {/* Grid Layout: Narrative & Live Interactive Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Context, Problem, & Solution */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Team Project &amp; Architecture
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Built with team Aurexis-Error-404: an agricultural commodity price advisory platform
                    powered by a 3-agent adversarial AI debate system.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Adversarial Market Debate
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Harnessed Llama 3.1 to generate real-time market analysis debates between
                    bullish, bearish, and neutral market agents.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Voice Pipeline &amp; Demo Leadership
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Spearheaded the real-time voice pipeline integrating Whisper STT for regional dialect
                    audio input and ElevenLabs TTS for natural speech outputs, leading the final pitch and live demo.
                  </p>
                </div>

                {/* Core Engineering Highlights */}
                <div>
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Core Engineering Highlights
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "3-Agent Adversarial Debate",
                      "Multilingual Voice Pipeline",
                      "Live Hackathon Pitch Leader"
                    ].map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-1">
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "FastAPI", "React", "Llama 3.1 (via Groq)", "Whisper STT", "ElevenLabs TTS"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive 3-Agent Debate & Voice Simulator */}
              <div className="lg:col-span-6 bg-black border border-white/15 p-6 rounded-xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-white" />
                    <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                      3-Agent Debate Engine
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Llama 3.1 via Groq
                  </span>
                </div>

                {/* Trigger Buttons */}
                <div>
                  <div className="text-xs font-open-sans text-neutral-400 mb-2">
                    Inspect adversarial market agent:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setDebateAgent("bullish")}
                      className={`text-xs py-2 px-2 rounded-full border font-montserrat font-semibold transition-all ${
                        debateAgent === "bullish"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      Bullish Agent
                    </button>
                    <button
                      type="button"
                      onClick={() => setDebateAgent("bearish")}
                      className={`text-xs py-2 px-2 rounded-full border font-montserrat font-semibold transition-all ${
                        debateAgent === "bearish"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      Bearish Agent
                    </button>
                    <button
                      type="button"
                      onClick={() => setDebateAgent("neutral")}
                      className={`text-xs py-2 px-2 rounded-full border font-montserrat font-semibold transition-all ${
                        debateAgent === "neutral"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      Neutral Consensus
                    </button>
                  </div>
                </div>

                {/* Agent Analysis Card */}
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-xs font-montserrat font-semibold text-white">
                        {debateAgent === "bullish" && "Bullish Perspective · Price Surge"}
                        {debateAgent === "bearish" && "Bearish Perspective · Downside Risk"}
                        {debateAgent === "neutral" && "Neutral Consensus · Risk-Weighted Advisory"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-neutral-300">
                      Llama 3.1
                    </span>
                  </div>
                  <p className="font-open-sans text-xs text-neutral-300 leading-relaxed">
                    {debateAgent === "bullish" &&
                      "Local mandi arrivals are down 18% with festival procurement surging. Suggests holding inventory for 2-3 weeks to capture anticipated 12-15% price upside."}
                    {debateAgent === "bearish" &&
                      "Neighboring region bumper harvest is expected to reach local markets within 7 days. Recommends staggered liquidation of 50% inventory to avoid price collapse."}
                    {debateAgent === "neutral" &&
                      "Synthesized Strategy: Liquidate 40% immediately at current mandi spot rate to cover working capital; retain remaining 60% in warehouse storage to capture upside."}
                  </p>
                </div>

                {/* Real-Time Voice Pipeline Architecture */}
                <div className="p-4 rounded-lg bg-black border border-white/10 space-y-2.5 font-mono text-xs">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider border-b border-white/10 pb-1.5 flex items-center justify-between">
                    <span>Multilingual Voice Pipeline</span>
                    <span className="text-white font-bold">End-to-End</span>
                  </div>
                  
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[11px] text-neutral-300">
                      <div className="flex items-center gap-2">
                        <Mic className="w-3.5 h-3.5 text-white" />
                        <span>Whisper STT</span>
                      </div>
                      <span className="text-neutral-400 text-[10px]">Regional dialect audio input</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-neutral-300">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-white" />
                        <span>Groq LPU Accelerator</span>
                      </div>
                      <span className="text-neutral-400 text-[10px]">Llama 3.1 adversarial debate</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-neutral-300">
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-white" />
                        <span>ElevenLabs TTS</span>
                      </div>
                      <span className="text-neutral-400 text-[10px]">Natural spoken speech output</span>
                    </div>
                  </div>
                </div>

                {/* Direct Repository Link */}
                <div className="pt-1">
                  <a
                    href="https://github.com/ERROR404-26/A4IMPACT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-mono text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 py-2.5 rounded-lg transition-all"
                  >
                    github.com/ERROR404-26/A4IMPACT ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Project Case Study 2: JARVIS */}
          <article className="border border-white/10 bg-[#080808] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-white/25 transition-all shadow-2xl">
            {/* Top Bar: Title, Accent Pull-quote, and Repo Action */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-montserrat text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    JARVIS
                  </h3>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300">
                    AI Inference System
                  </span>
                </div>
                {/* Poppins Italic Accent Line */}
                <p className="font-poppins-italic text-sm sm:text-base text-neutral-300 mt-3 max-w-3xl leading-relaxed">
                  &ldquo;Re-architected from single-endpoint cloud LLMs to a tiered Gemini + Groq pipeline, with local Qwen via Ollama for resilient offline execution.&rdquo;
                </p>
              </div>

              {/* GitHub Link Button */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/Aurexis-Error-404/Project_Jarvis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-montserrat font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  <GithubIcon className="w-4 h-4 text-black" />
                  <span>VIEW ON GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>

            {/* Grid Layout: Narrative & Live Interactive Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Context, Problem, & Solution */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Team Project &amp; Role
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Built with a 5-member team for a hackathon submission with
                    Manideep serving as the backend implementor responsible for multi-tier
                    LLM orchestration, inference routing, and local model fallback.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    The Engineering Challenge
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    The initial LLM setup failed to meet real-world latency and cost requirements
                    for responsive interaction. A single cloud model incurred frequent rate delays,
                    high query costs, and total dependency on continuous internet connectivity.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Architectural Resolution
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Re-engineered the backend into a multi-tiered pipeline: routed standard queries
                    through Gemini for high context, offloaded high-speed bursts to Groq for
                    sub-100ms latency, and embedded Qwen via Ollama to provide a deterministic,
                    local offline fallback when disconnected from the cloud.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Gemini", "Groq", "Ollama", "Qwen"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Fallback Simulator */}
              <div className="lg:col-span-6 bg-black border border-white/15 p-6 rounded-xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-white" />
                    <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                      Inference Fallback Simulator
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Interactive
                  </span>
                </div>

                {/* Trigger Buttons */}
                <div>
                  <div className="text-xs font-open-sans text-neutral-400 mb-2">
                    Test live runtime routing:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleSwitchMode("primary")}
                      className={`text-xs py-2 px-2 rounded-full border font-montserrat font-semibold transition-all ${
                        pipelineMode === "primary"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      Cloud Normal
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSwitchMode("low_latency")}
                      className={`text-xs py-2 px-2 rounded-full border font-montserrat font-semibold transition-all ${
                        pipelineMode === "low_latency"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      Latency Spike
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSwitchMode("offline")}
                      className={`text-xs py-2 px-2 rounded-full border font-montserrat font-semibold transition-all ${
                        pipelineMode === "offline"
                          ? "bg-white text-black border-white shadow-md"
                          : "bg-black border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
                      }`}
                    >
                      Offline Mode
                    </button>
                  </div>
                </div>

                {/* Simulated Nodes */}
                <div className="space-y-2.5">
                  {/* Tier 1 */}
                  <div
                    className={`p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                      pipelineMode === "primary"
                        ? "border-white bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-neutral-500"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Cpu className={`w-4 h-4 ${pipelineMode === "primary" ? "text-white" : "text-neutral-500"}`} />
                      <div>
                        <div className="text-xs font-montserrat font-semibold">Tier 1: Gemini 1.5 Flash</div>
                        <div className="text-[11px] text-neutral-400">Cloud reasoning · high-context primary</div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      pipelineMode === "primary"
                        ? "bg-white text-black font-bold border-white"
                        : "border-white/10 text-neutral-500"
                    }`}>
                      {pipelineMode === "primary" ? "310ms · ACTIVE" : "STANDBY"}
                    </span>
                  </div>

                  {/* Tier 2 */}
                  <div
                    className={`p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                      pipelineMode === "low_latency"
                        ? "border-white bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-neutral-500"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Zap className={`w-4 h-4 ${pipelineMode === "low_latency" ? "text-white" : "text-neutral-500"}`} />
                      <div>
                        <div className="text-xs font-montserrat font-semibold">Tier 2: Groq LPU Accelerator</div>
                        <div className="text-[11px] text-neutral-400">Ultra-low latency fallback on API load</div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      pipelineMode === "low_latency"
                        ? "bg-white text-black font-bold border-white"
                        : "border-white/10 text-neutral-500"
                    }`}>
                      {pipelineMode === "low_latency" ? "84ms · ACTIVE" : "STANDBY"}
                    </span>
                  </div>

                  {/* Tier 3 */}
                  <div
                    className={`p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                      pipelineMode === "offline"
                        ? "border-white bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-neutral-500"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <HardDrive className={`w-4 h-4 ${pipelineMode === "offline" ? "text-white" : "text-neutral-500"}`} />
                      <div>
                        <div className="text-xs font-montserrat font-semibold">Tier 3: Ollama + Qwen 2.5</div>
                        <div className="text-[11px] text-neutral-400">Local air-gapped node · zero network dependency</div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      pipelineMode === "offline"
                        ? "bg-white text-black font-bold border-white"
                        : "border-white/10 text-neutral-500"
                    }`}>
                      {pipelineMode === "offline" ? "OFFLINE ACTIVE" : "OFFLINE READY"}
                    </span>
                  </div>
                </div>

                {/* Audit Trace Log */}
                <div className="p-3 rounded-lg bg-black border border-white/10 font-mono text-[11px] space-y-1">
                  <div className="text-[10px] text-neutral-500 flex items-center gap-1.5 pb-1 border-b border-white/10 uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3 text-white" />
                    <span>Telemetry stream</span>
                  </div>
                  {logs.map((log, idx) => (
                    <div key={idx} className="truncate text-neutral-300">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Project Case Study 3: HabitTracker */}
          <article className="border border-white/10 bg-[#080808] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-white/25 transition-all shadow-2xl">
            {/* Top Bar: Title, Accent Pull-quote, and Live Action */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-montserrat text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    HabitTracker
                  </h3>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300">
                    Full-Stack Web App
                  </span>
                </div>
                {/* Poppins Italic Accent Line */}
                <p className="font-poppins-italic text-sm sm:text-base text-neutral-300 mt-3 max-w-3xl leading-relaxed">
                  &ldquo;Real-time state synchronization and streak analytics backed by Supabase with an activity-driven AI recommendation engine.&rdquo;
                </p>
              </div>

              {/* Live Link Button */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://habit-tracker-indol-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-montserrat font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="w-4 h-4 text-black" />
                  <span>OPEN LIVE APPLICATION</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>

            {/* Grid Layout: Narrative & Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Context, Problem, & Solution */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Application Architecture
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    A full-stack habit tracking system engineered with React and TypeScript, deployed
                    on Vercel. Utilizes Supabase for relational data persistence and real-time
                    WebSocket state replication across client sessions.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    State Synchronization &amp; Streaks
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Implemented TanStack Query for optimistic UI mutations, intelligent cache
                    invalidation, and zero-flicker streak updates. Visualizes completion consistency,
                    historical trends, and daily momentum using responsive Recharts components.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    AI Recommendation Engine
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Analyzes longitudinal user activity history to identify drop-off patterns and
                    surface tailored schedule modifications, reinforcing user streaks before fatigue sets in.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Supabase", "TanStack Query", "Recharts", "Vercel"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metrics & Technical Breakdown */}
              <div className="lg:col-span-6 bg-black border border-white/15 p-6 rounded-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-white" />
                    <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                      System Capabilities
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                    Production Live
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-montserrat font-semibold text-white">Real-Time Sync</div>
                      <div className="text-xs text-neutral-400 font-open-sans mt-0.5">
                        PostgreSQL Row-Level Security &amp; Supabase Realtime pub/sub synchronization.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-montserrat font-semibold text-white">Streak Engine &amp; Recharts</div>
                      <div className="text-xs text-neutral-400 font-open-sans mt-0.5">
                        Deterministic streak tracking algorithms with SVG analytical charts.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 flex items-start gap-3">
                    <Zap className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-montserrat font-semibold text-white">Adaptive Recommendation</div>
                      <div className="text-xs text-neutral-400 font-open-sans mt-0.5">
                        User behavior analysis model suggesting habit pacing adjustments.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://habit-tracker-indol-two.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-mono text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 py-2.5 rounded-lg transition-all"
                  >
                    habit-tracker-indol-two.vercel.app ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Project Case Study 4: Attendance Analyzer */}
          <article className="border border-white/10 bg-[#080808] rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-white/25 transition-all shadow-2xl">
            {/* Top Bar: Title, Accent Pull-quote, and Live Action */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-montserrat text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    Attendance Analyzer
                  </h3>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300">
                    Productivity Tool
                  </span>
                </div>
                {/* Poppins Italic Accent Line */}
                <p className="font-poppins-italic text-sm sm:text-base text-neutral-300 mt-3 max-w-3xl leading-relaxed">
                  &ldquo;Automates collegiate attendance shortage analysis and calculates required classes to reach mandatory minimum thresholds.&rdquo;
                </p>
              </div>

              {/* Live Link Button */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://attendance-tracker-nine-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-montserrat font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="w-4 h-4 text-black" />
                  <span>OPEN LIVE APPLICATION</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </div>

            {/* Grid Layout: Narrative & Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Context, Problem, & Solution */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    The Concrete Problem
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    College students regularly face complex attendance quotas with penalty risks for
                    dropping below mandatory thresholds. Manual calculations across multiple courses
                    are error-prone and fail to project future attendance trajectory accurately.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Mathematical Modeling
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Designed a deterministic calculation model that inputs attended lectures,
                    total conducted sessions, and target minimum percentages to calculate the exact
                    number of consecutive classes required to exit shortage status.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Implementation &amp; Deployment
                  </h4>
                  <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                    Engineered with React, TypeScript, and Tailwind CSS for instant reactivity and
                    zero-dependency calculation execution. Deployed to production on Vercel.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="text-xs font-montserrat font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Logic Summary */}
              <div className="lg:col-span-6 bg-black border border-white/15 p-6 rounded-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-white" />
                    <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                      Calculation Logic
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                    Zero Latency Math
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-neutral-300">
                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
                    <div className="text-[11px] text-neutral-500 mb-1">Target Equation:</div>
                    <code className="text-white block">classes_needed = ceil((T * total - attended) / (1 - T))</code>
                    <div className="text-[11px] text-neutral-400 mt-1">Where T is the target threshold (e.g. 75% or 85%).</div>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
                    <div className="text-[11px] text-neutral-500 mb-1">Margin of Safety:</div>
                    <div className="text-neutral-300 font-open-sans">
                      Computes allowable absences while keeping attendance strictly above the required institution cutoff.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://attendance-tracker-nine-xi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-mono text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 py-2.5 rounded-lg transition-all"
                  >
                    attendance-tracker-nine-xi.vercel.app ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
