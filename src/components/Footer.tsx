"use client";

import React from "react";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer id="contact" className="py-20 bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-white/10 pb-16">
          <div className="max-w-xl">
            <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-400 uppercase mb-2">
              CONTACT &amp; CHANNELS
            </div>
            <h3 className="font-montserrat text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Ready to ship together?
            </h3>
            <p className="font-open-sans text-sm text-neutral-400 leading-relaxed">
              Seeking Software Engineering, Full-Stack, or Generative AI internship opportunities.
              Always open to discussing system architecture, latency, and code.
            </p>
          </div>

          {/* Direct channels & social icons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            {/* Primary Email CTA */}
            <a
              href="mailto:manideepmunjampally@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-montserrat font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>EMAIL MANIDEEP</span>
            </a>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/manideep-munjampally-771254386/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110 shadow-md"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/mani-4444"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110 shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/Yo7vJoRqBP"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile"
                aria-label="LeetCode Profile"
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-all hover:scale-110 shadow-md"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-open-sans text-neutral-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Manideep Munjampally. Built with Next.js, Tailwind, Framer Motion &amp; GSAP.
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] text-neutral-400">
            <span>CBIT CSE</span>
            <span>·</span>
            <span>9.74 CGPA</span>
            <span>·</span>
            <span>HYDERABAD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
