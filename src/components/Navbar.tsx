"use client";

import React, { useState, useEffect } from "react";

export function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("about");

  useEffect(() => {
    const sections = ["about", "projects", "skills", "achievements"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-6 py-6 flex items-center justify-between">
      {/* Spacer for symmetrical center alignment */}
      <div className="hidden lg:block w-32" />

      {/* Floating Centered Pill Capsule */}
      <nav className="pointer-events-auto mx-auto border border-white/15 bg-black/80 backdrop-blur-xl rounded-full p-1.5 flex items-center shadow-2xl">
        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-1">
          <a
            href="#about"
            onClick={() => setActiveTab("about")}
            className={`text-xs font-montserrat px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === "about"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-neutral-400 hover:text-white font-medium"
            }`}
          >
            ABOUT
          </a>
          <a
            href="#projects"
            onClick={() => setActiveTab("projects")}
            className={`text-xs font-montserrat px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === "projects"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-neutral-400 hover:text-white font-medium"
            }`}
          >
            PROJECTS
          </a>
          <a
            href="#skills"
            onClick={() => setActiveTab("skills")}
            className={`text-xs font-montserrat px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === "skills"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-neutral-400 hover:text-white font-medium"
            }`}
          >
            SKILLS
          </a>
          <a
            href="#achievements"
            onClick={() => setActiveTab("achievements")}
            className={`text-xs font-montserrat px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === "achievements"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-neutral-400 hover:text-white font-medium"
            }`}
          >
            HONORS
          </a>
        </div>
      </nav>

      {/* Top Right "LET'S TALK" Pill Button */}
      <div className="pointer-events-auto">
        <a
          href="#contact"
          className="inline-flex items-center justify-center border border-white/25 hover:border-white/80 bg-black/60 backdrop-blur-md text-white font-montserrat text-xs font-medium tracking-widest uppercase px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          LET&apos;S TALK
        </a>
      </div>
    </header>
  );
}
