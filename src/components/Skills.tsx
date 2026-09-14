"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Terminal, Brain, Database, Layout, Wrench, Palette } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-based reactive orientation across the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle natural orientation in the direction of scroll movement
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-7, 0, 7]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [65, 50, 35]);

  // Smooth interpolated spring physics
  const smoothRotateY = useSpring(rotateY, { stiffness: 60, damping: 20 });
  const smoothRotateX = useSpring(rotateX, { stiffness: 60, damping: 20 });
  const smoothTranslateY = useSpring(translateY, { stiffness: 60, damping: 20 });

  const aiSkills = [
    "LLMs",
    "Prompt Engineering",
    "Gemini",
    "Groq",
    "Ollama",
    "Claude AI",
  ];

  const creativeSkills = [
    "Adobe Premiere Pro",
    "Adobe After Effects",
  ];

  const languageSkills = [
    "C++",
    "Python",
    "TypeScript",
    "SQL",
  ];

  const backendSkills = [
    "FastAPI",
    "REST APIs",
    "Supabase",
    "MySQL",
  ];

  const webSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  const toolSkills = [
    "Git",
    "GitHub",
    "Vercel",
  ];

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="py-24 md:py-28 bg-black bg-wireframe-grid border-t border-white/10 text-white scroll-mt-16 overflow-hidden relative"
    >
      {/* 1. Subtle radial ambient glow centered on the robot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.025] rounded-full filter blur-[140px] pointer-events-none z-0" />

      {/* 2. Full-Section Seamless Spline 3D Scene Layer (Spans full section without cards/boxes) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
        <motion.div
          style={{
            rotateY: shouldReduceMotion ? 0 : smoothRotateY,
            rotateX: shouldReduceMotion ? 0 : smoothRotateX,
            y: shouldReduceMotion ? 50 : smoothTranslateY,
            transformPerspective: 1200,
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* 3. Foreground Content Layer: Section Heading & Floating Skill Clusters */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pointer-events-none">
        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-auto">
          <div>
            <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-400 uppercase mb-2">
              04 // CAPABILITIES
            </div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Technical Stack &amp; Systems
            </h2>
          </div>
          <p className="font-open-sans text-sm text-neutral-400 max-w-md leading-relaxed">
            Proficiencies across multi-model generative AI architectures, algorithmic programming,
            and production full-stack systems.
          </p>
        </div>

        {/* Balanced 3-Column Composition: Left (AI + Creative) / Center (Clearance + Visualizer Labels) / Right (Engineering + Tools) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT SIDE — AI & INTELLIGENCE + CREATIVE (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-5 order-2 lg:order-1">
            {/* Group: AI & GENERATIVE AI */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto border border-white/10 bg-[#080808]/80 backdrop-blur-md p-5 rounded-2xl space-y-3.5 hover:border-white/25 transition-all shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <Brain className="w-3.5 h-3.5 text-white" />
                  <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                    AI &amp; Generative AI
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {aiSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Group: CREATIVE TOOLS (Positioned lower-left) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto border border-white/10 bg-[#080808]/80 backdrop-blur-md p-5 rounded-2xl space-y-3 hover:border-white/20 transition-all shadow-lg"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                <Palette className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-montserrat text-xs font-bold tracking-wider text-neutral-400 uppercase">
                  Creative Tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {creativeSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CENTER — OPEN CLEARANCE FOR THE SPLINE 3D ROBOT (~45% width, lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-between min-h-[440px] sm:min-h-[500px] lg:min-h-[580px] py-2 order-1 lg:order-2">
            {/* Top Label */}
            <div className="pointer-events-auto mb-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-montserrat font-bold tracking-[0.22em] text-white uppercase">
                  AGENTIC AI VISUALIZER
                </span>
              </div>
            </div>

            {/* Expansive open clearance area where the 3D robot shines through completely unobstructed */}
            <div className="w-full flex-1" />

            {/* Tagline below the robot */}
            <div className="pointer-events-auto mt-3 text-center">
              <h3 className="font-montserrat text-xs sm:text-sm font-extrabold tracking-[0.28em] text-white uppercase">
                ENGINEERING SYSTEMS THAT THINK.
              </h3>
            </div>
          </div>

          {/* RIGHT SIDE — SOFTWARE ENGINEERING + TOOLS & WORKFLOW (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4 order-3">
            {/* Group: LANGUAGES */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto border border-white/10 bg-[#080808]/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl space-y-2.5 hover:border-white/20 transition-all shadow-md"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <Terminal className="w-3.5 h-3.5 text-white" />
                <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                  Languages
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {languageSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Group: BACKEND & DATA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto border border-white/10 bg-[#080808]/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl space-y-2.5 hover:border-white/20 transition-all shadow-md"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <Database className="w-3.5 h-3.5 text-white" />
                <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                  Backend &amp; Data
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Group: WEB FRONTEND */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto border border-white/10 bg-[#080808]/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl space-y-2.5 hover:border-white/20 transition-all shadow-md"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <Layout className="w-3.5 h-3.5 text-white" />
                <span className="font-montserrat text-xs font-bold tracking-wider text-white uppercase">
                  Web Frontend
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {webSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Group: TOOLS & WORKFLOW (Positioned lower-right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto border border-white/10 bg-[#080808]/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl space-y-2.5 hover:border-white/20 transition-all shadow-md"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <Wrench className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-montserrat text-xs font-bold tracking-wider text-neutral-400 uppercase">
                  Tools &amp; Workflow
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {toolSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
