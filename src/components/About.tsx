"use client";

import React from "react";
import { GraduationCap, Code2, Sparkles, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-black border-t border-white/10 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-400 uppercase mb-2">
              02 // BACKGROUND
            </div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Engineering Profile
            </h2>
          </div>
          <p className="font-open-sans text-sm text-neutral-400 max-w-md leading-relaxed">
            Computer Science undergraduate at CBIT focusing on production full-stack systems,
            LLM runtime pipelines, and agentic workflows.
          </p>
        </div>

        {/* Highlights & Engineering Summary Ribbon */}
        <div className="border border-white/15 bg-gradient-to-b from-[#0e0e0e] to-[#060606] p-8 sm:p-10 rounded-2xl mb-12 hover:border-white/25 transition-all shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/[0.04] rounded-full filter blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Hyderabad, India · Computer Science @ CBIT</span>
              </div>
              <h3 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Architectural Depth &amp; Deployed Products
              </h3>
              <p className="font-open-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                Specializing in production full-stack systems and multi-tier generative AI pipelines.
                Combines high academic rigor (9.74 CGPA) with competitive algorithmic mastery
                (200+ DSA problems in C++) and reliable, deployed applications.
              </p>
            </div>

            {/* Credential Badges Column */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <div className="px-5 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold shadow-lg flex items-center justify-between gap-4">
                <span className="uppercase tracking-wider">ACADEMIC CGPA</span>
                <span className="text-sm">9.74 / 10.00</span>
              </div>
              <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xs font-medium flex items-center justify-between gap-4">
                <span className="uppercase tracking-wider">ALGORITHMS (C++)</span>
                <span className="text-sm font-bold">200+ Solved</span>
              </div>
              <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs flex items-center justify-between gap-4">
                <span className="uppercase tracking-wider">CORE FOCUS</span>
                <span className="text-white font-medium">Full-Stack &amp; LLMs</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Academic Foundation */}
          <div className="border border-white/10 bg-[#080808] p-7 rounded-2xl space-y-3 hover:border-white/25 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-0.5 rounded-full">
                  CGPA 9.74
                </span>
              </div>
              <h4 className="font-montserrat text-base font-bold text-white tracking-tight">
                Academic Foundation
              </h4>
              <p className="font-open-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Computer Science undergrad at CBIT Hyderabad. Maintained a top academic record across
                Data Structures, Algorithms, DBMS, and Object-Oriented Design.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-neutral-500">
              CBIT CSE · Hyderabad
            </div>
          </div>

          {/* Pillar 2: Full-Stack Systems */}
          <div className="border border-white/10 bg-[#080808] p-7 rounded-2xl space-y-3 hover:border-white/25 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-0.5 rounded-full">
                  Production
                </span>
              </div>
              <h4 className="font-montserrat text-base font-bold text-white tracking-tight">
                Full-Stack &amp; Deployments
              </h4>
              <p className="font-open-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Builds full-stack applications with React, Next.js, and TypeScript, integrating Supabase,
                PostgreSQL, and REST APIs. Prioritizes state consistency and sub-second interaction latency.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-neutral-500">
              React · Next.js · Supabase
            </div>
          </div>

          {/* Pillar 3: AI & Agentic Workflows */}
          <div className="border border-white/10 bg-[#080808] p-7 rounded-2xl space-y-3 hover:border-white/25 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-0.5 rounded-full">
                  ML &amp; Agents
                </span>
              </div>
              <h4 className="font-montserrat text-base font-bold text-white tracking-tight">
                LLMs &amp; Agentic AI
              </h4>
              <p className="font-open-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Integrates multi-tier LLM pipelines leveraging Gemini, Groq LPUs, and local offline
                models via Ollama. Deepening into ML fundamentals, model evaluation, and autonomous agents.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-neutral-500">
              Gemini · Groq · Ollama
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
