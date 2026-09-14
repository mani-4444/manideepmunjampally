"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
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
            className="lg:col-span-7 flex flex-col space-y-6 z-10 lg:pr-6 xl:pr-10"
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

          {/* Right Column: Focused Highlighted Portrait */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-6 lg:py-0 lg:pr-2 xl:pr-6"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              {/* Soft luminous radial aura glow */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl scale-110 pointer-events-none group-hover:scale-120 transition-transform duration-700" />

              {/* Luminous Gradient Outline Ring */}
              <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-b from-white via-neutral-300 to-neutral-700 shadow-[0_0_45px_rgba(255,255,255,0.2)]">
                {/* Portrait Frame with solid black background - reduced by ~10% */}
                <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-[315px] lg:h-[315px] xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden border-2 border-black bg-black">
                  <Image
                    src="/images/manideep.png"
                    alt="Manideep Munjampally portrait"
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 272px, (max-width: 1024px) 315px, 350px"
                    className="object-cover object-top scale-105 grayscale contrast-[1.05] transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Floating Identity & Location Pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full border border-white/20 bg-black/80 backdrop-blur-md text-xs font-mono text-neutral-300 shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hyderabad, IN · CBIT CSE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
