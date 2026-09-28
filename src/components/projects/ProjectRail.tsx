"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "./data";

/**
 * Desktop contents rail for the case studies. Tracks whichever case study
 * holds the reading line (just above the viewport's middle), and the marker
 * glides to it.
 */
export function ProjectRail() {
  const [active, setActive] = useState(PROJECTS[0].id);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const els = PROJECTS.map((p) => document.getElementById(p.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -58% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Projects" className="sticky top-[calc(var(--nav-h)+2.5rem)]">
      <p className="field-key mb-4">Contents</p>
      <ol className="relative border-l border-rule">
        {PROJECTS.map((p) => {
          const isActive = p.id === active;
          return (
            <li key={p.id} className="relative">
              {isActive && (
                <motion.span
                  layoutId="rail-marker"
                  aria-hidden="true"
                  className="absolute -left-px top-0 h-full w-px bg-signal"
                  transition={
                    reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 34 }
                  }
                />
              )}
              <a
                href={`#${p.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-baseline gap-3 py-2.5 pl-4"
              >
                <span
                  className={`font-data text-[11px] transition-colors duration-300 ${
                    isActive ? "text-signal" : "text-bone-faint"
                  }`}
                >
                  {p.index}
                </span>
                <span
                  className={`text-[14px] font-medium leading-snug transition-colors duration-300 ${
                    isActive ? "text-bone" : "text-bone-mute group-hover:text-bone-dim"
                  }`}
                >
                  {p.name}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
