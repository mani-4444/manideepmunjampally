"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-wireframe-grid text-white overflow-hidden pt-32 pb-12 px-6">
      {/* Dynamic Cursor Spotlight for the Hero */}
      <Spotlight
        className="-top-32 left-1/4 md:left-1/2 md:-top-20"
        size={450}
      />

      <div className="max-w-7xl mx-auto w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Typography & Positioning */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-6 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Eyebrow - Highlighted Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.15)] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
              <span className="text-[11px] sm:text-xs font-montserrat font-bold tracking-[0.22em] text-white uppercase">
                FULL-STACK DEVELOPER &amp; AI SYSTEMS ARCHITECT
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-akira text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase">
                MANIDEEP <br />
                <span className="text-white">MUNJAMPALLY</span>
              </h1>
              <div className="font-poppins-italic text-xl sm:text-2xl md:text-3xl text-neutral-300 font-light pt-2">
                Shipping Real Products.
              </div>
            </div>

            {/* Description Body Copy in Open Sans */}
            <p className="font-open-sans text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              Full-stack developer who builds and ships real, deployed products and
              engineers multi-tier LLM pipelines. Computer Science undergrad at CBIT
              with a 9.74/10.00 CGPA, currently deepening into machine learning and
              agentic workflows.
            </p>

            {/* Institutional Credentials row */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-open-sans text-neutral-400 border-t border-white/10 max-w-lg">
              <div>
                <span className="text-white font-medium block">CBIT Hyderabad</span>
                <span className="text-neutral-500 text-[11px]">Computer Science</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-white font-medium block">9.74 / 10.00</span>
                <span className="text-neutral-500 text-[11px]">CGPA</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-white font-medium block">200+ Solved</span>
                <span className="text-neutral-500 text-[11px]">DSA (C++)</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="bg-white hover:bg-neutral-200 text-black font-montserrat text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                EXPLORE PROJECTS
              </a>
              <a
                href="https://github.com/mani-4444"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/25 hover:border-white text-white font-montserrat text-xs font-medium uppercase tracking-wider px-5 py-3 rounded-full transition-all hover:bg-white/5"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/manideep-munjampally-771254386/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/25 hover:border-white text-white font-montserrat text-xs font-medium uppercase tracking-wider px-5 py-3 rounded-full transition-all hover:bg-white/5"
              >
                LINKEDIN
              </a>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive 3D Spline Scene */}
          <motion.div 
            className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] lg:min-h-[580px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px]">
              {/* Subtle ambient light gradient behind 3D model */}
              <div className="absolute inset-0 bg-white/[0.02] rounded-full filter blur-3xl pointer-events-none" />
              
              {/* Spline 3D Scene */}
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Row: Scroll to commence indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-white/5 relative z-10">
        <div className="text-[11px] font-montserrat tracking-[0.2em] text-neutral-500 uppercase">
          01 // INITIALIZATION
        </div>

        <a
          href="#about"
          className="group flex items-center gap-3 text-[11px] font-montserrat tracking-[0.2em] text-neutral-400 hover:text-white uppercase transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white flex items-center justify-center transition-all">
            <ArrowDown className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" />
          </div>
          <span>SCROLL TO COMMENCE</span>
        </a>
      </div>
    </section>
  );
}
