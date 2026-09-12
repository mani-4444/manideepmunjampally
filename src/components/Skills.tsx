"use client";

import React from "react";
import { Terminal, Brain, Database, Layout, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: Terminal,
      skills: ["C++", "Python", "TypeScript", "SQL"],
    },
    {
      category: "AI & Generative AI",
      icon: Brain,
      skills: ["LLMs", "Prompt Engineering", "Gemini", "Groq", "Ollama", "Claude AI"],
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
              Technical Stack
            </h2>
          </div>
          <p className="font-open-sans text-sm text-neutral-400 max-w-md leading-relaxed">
            Proficiencies across algorithmic programming, multi-model generative AI integration,
            and production full-stack engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="border border-white/10 bg-[#080808] p-7 rounded-2xl space-y-4 hover:border-white/25 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-montserrat text-sm font-bold text-white uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
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
    </section>
  );
}
