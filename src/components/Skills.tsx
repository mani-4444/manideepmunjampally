"use client";

import React from "react";
import { Terminal, Brain, Database, Layout, Wrench, Sparkles } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

export function Skills() {
  const skillCategories = [
    {
      category: "AI & Generative AI",
      icon: Brain,
      highlight: true,
      skills: ["LLMs", "Prompt Engineering", "Gemini", "Groq", "Ollama", "Claude AI"],
    },
    {
      category: "Languages",
      icon: Terminal,
      skills: ["C++", "Python", "TypeScript", "SQL"],
    },
    {
      category: "Backend & Data",
      icon: Database,
      skills: ["FastAPI", "REST APIs", "Supabase", "MySQL"],
    },
    {
      category: "Web Frontend",
      icon: Layout,
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Tools & Workflow",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black border-t border-white/10 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-400 uppercase mb-2">
              04 // CAPABILITIES
            </div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Technical Stack &amp; Systems
            </h2>
          </div>
          <p className="font-open-sans text-sm text-neutral-400 max-w-md leading-relaxed">
            Proficiencies across algorithmic programming, multi-model generative AI integration,
            and production full-stack engineering.
          </p>
        </div>

        {/* 12-Column Layout: Interactive 3D Robot + Skill Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive 3D Spline Robot */}
          <div className="lg:col-span-5 border border-white/10 bg-[#080808] p-6 rounded-2xl flex flex-col justify-between hover:border-white/25 transition-all shadow-2xl relative overflow-hidden min-h-[440px] lg:min-h-[520px]">
            {/* Ambient Lighting */}
            <div className="absolute inset-0 bg-white/[0.02] rounded-full filter blur-3xl pointer-events-none" />

            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                  Agentic AI Visualizer
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                Spline 3D Scene
              </span>
            </div>

            {/* Spline 3D Scene Canvas */}
            <div className="relative flex-grow flex items-center justify-center my-4 min-h-[300px] sm:min-h-[340px] z-10">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full min-h-[300px] sm:min-h-[340px]"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] font-mono text-neutral-400 flex items-center justify-between relative z-10">
              <span>Interactive Model</span>
              <span className="text-white font-medium">Autonomous Systems</span>
            </div>
          </div>

          {/* Right Column: Categorized Technical Skills */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {skillCategories.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className={`border border-white/10 bg-[#080808] p-5 sm:p-6 rounded-2xl hover:border-white/25 transition-all space-y-3 ${
                    group.highlight ? "border-white/20 bg-gradient-to-r from-white/[0.03] to-transparent" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-montserrat text-sm font-bold text-white uppercase tracking-wider">
                        {group.category}
                      </h3>
                    </div>
                    {group.highlight && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                        Primary Focus
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
