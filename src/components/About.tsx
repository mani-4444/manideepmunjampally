"use client";

import React from "react";
import Image from "next/image";
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

        {/* Big Highlighted Profile Card */}
        <div className="border border-white/15 bg-gradient-to-b from-[#0e0e0e] to-[#060606] p-8 sm:p-12 rounded-2xl mb-12 hover:border-white/25 transition-all shadow-2xl relative overflow-hidden">
          {/* Subtle ambient light splash behind the card */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/[0.04] rounded-full filter blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
            
            {/* Focused Highlighted Portrait */}
            <div className="relative shrink-0 group">
              {/* Soft luminous radial aura glow */}
              <div className="absolute inset-0 rounded-full bg-white/25 blur-2xl scale-110 pointer-events-none group-hover:scale-120 transition-transform duration-500" />

              {/* Luminous Gradient Outline Ring */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-b from-white via-neutral-300 to-neutral-700 shadow-[0_0_45px_rgba(255,255,255,0.35)]">
                {/* Portrait Frame with solid black background */}
                <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-80 lg:h-80 xl:w-[340px] xl:h-[340px] rounded-full overflow-hidden border-2 border-black bg-black">
                  <Image
                    src="/images/manideep.png"
                    alt="Manideep Munjampally portrait"
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 272px, (max-width: 1024px) 320px, 340px"
                    className="object-cover object-top scale-105 grayscale contrast-[1.05] transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Profile Information & Credentials */}
            <div className="flex-1 text-center lg:text-left space-y-5">
              <div>
                <h3 className="font-montserrat text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Manideep Munjampally
                </h3>
                <p className="font-open-sans text-sm sm:text-base text-neutral-400 mt-1.5 flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  <span>Hyderabad, India · Computer Science @ CBIT</span>
                </p>
              </div>

              <p className="font-open-sans text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                Specializing in full-stack architecture and multi-tier generative AI systems.
                Combines high academic rigor (9.74 CGPA) with competitive algorithmic depth
                (200+ DSA problems in C++) and deployed production web applications.
              </p>

              {/* Status & Credential Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <span className="text-xs sm:text-sm font-mono px-4 py-2 rounded-full bg-white text-black font-bold shadow-lg">
                  CGPA: 9.74 / 10.00
                </span>
                <span className="text-xs sm:text-sm font-mono px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium">
                  DSA: 200+ Solved (C++)
                </span>
                <span className="text-xs sm:text-sm font-mono px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  Full-Stack &amp; Local LLMs
                </span>
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
