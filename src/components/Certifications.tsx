"use client";

import React from "react";
import { Award, CheckCircle2, Clock } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Programming with Generative AI",
      issuer: "NPTEL",
      status: "Completed",
      description: "Rigorous curriculum covering prompt engineering, foundational LLM models, API integration, and generative programming workflows.",
      isCompleted: true,
    },
    {
      title: "AI & Machine Learning",
      issuer: "Apna College",
      status: "Ongoing",
      description: "In-depth study of classical machine learning algorithms, deep learning fundamentals, statistical evaluation, and computer vision / NLP concepts.",
      isCompleted: false,
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-black border-t border-white/10 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-400 uppercase mb-2">
              05 // CREDENTIALS
            </div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Certifications
            </h2>
          </div>
          <p className="font-open-sans text-sm text-neutral-400 max-w-md leading-relaxed">
            Structured coursework validating expertise across generative programming and applied machine learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="border border-white/10 bg-[#080808] p-8 rounded-2xl space-y-5 hover:border-white/25 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                    cert.isCompleted
                      ? "bg-emerald-950/40 border-emerald-800/50 text-emerald-400"
                      : "bg-white/5 border-white/15 text-neutral-300"
                  }`}
                >
                  {cert.isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                  <span>{cert.status}</span>
                </span>
              </div>

              <div>
                <h3 className="font-montserrat text-xl font-bold text-white tracking-tight">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mt-1">
                  Provider: {cert.issuer}
                </div>
              </div>

              <p className="font-open-sans text-sm text-neutral-300 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
