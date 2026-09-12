"use client";

import React from "react";
import { Trophy, Code2, ArrowUpRight, CheckCircle } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-black border-t border-white/10 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-400 uppercase mb-2">
              06 // RECOGNITION
            </div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Honors &amp; Milestones
            </h2>
          </div>
          <p className="font-open-sans text-sm text-neutral-400 max-w-md leading-relaxed">
            Verified competitive programming benchmarks and hackathon recognitions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: HackWithAI Finalist */}
          <div className="border border-white/10 bg-[#080808] p-8 rounded-2xl space-y-6 hover:border-white/25 transition-all">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300">
                Hackathon Honor
              </span>
            </div>

            <div>
              <h3 className="font-montserrat text-2xl font-bold text-white tracking-tight">
                HackWithAI Finalist
              </h3>
              <div className="text-xs font-mono text-neutral-400 mt-1">
                National Level AI Hackathon
              </div>
            </div>

            <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
              Selected as a finalist at HackWithAI for architecting innovative, deployable
              generative AI solutions under intense time and operational constraints.
            </p>

            <div className="pt-2 text-xs font-open-sans text-neutral-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Competitive finalist selection</span>
            </div>
          </div>

          {/* Card 2: 200+ Solved DSA Problems */}
          <div className="border border-white/10 bg-[#080808] p-8 rounded-2xl space-y-6 hover:border-white/25 transition-all">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <a
                href="https://leetcode.com/Yo7vJoRqBP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-montserrat uppercase tracking-wider text-neutral-300 hover:text-white border border-white/20 hover:border-white px-3.5 py-1 rounded-full transition-all"
              >
                <span>VERIFY PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <h3 className="font-montserrat text-2xl font-bold text-white tracking-tight">
                200+ Solved DSA Problems
              </h3>
              <div className="text-xs font-mono text-neutral-400 mt-1">
                Language: C++ · LeetCode &amp; Competitive Algorithms
              </div>
            </div>

            <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
              Demonstrated problem-solving rigor across complex algorithmic paradigms,
              with specialized depth in Dynamic Programming, Game Theory, and Divide and Conquer algorithms.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Dynamic Programming", "Game Theory", "Divide and Conquer", "C++"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
