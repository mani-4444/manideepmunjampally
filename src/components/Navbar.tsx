"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

const NAV = [
  { id: "background", label: "Education" },
  { id: "work", label: "Work" },
  { id: "recognition", label: "Recognition" },
  { id: "certifications", label: "Certifications" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [lifted, setLifted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  /* Tucks away while reading downward, returns the moment the reader
     scrolls up — the usual intent to navigate. */
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setLifted(y > 16);
    if (open) return;
    setHidden(y > 480 && y > prev + 4);
    if (y < prev - 4) setHidden(false);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onTop = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener("scroll", onTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden && !reduceMotion ? "-130%" : "0%" }}
      transition={{ duration: 0.45, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 pt-3"
    >
      {/* A floating liquid-glass bar. The one place the refraction is
          always visible: the page scrolls underneath it. Nothing on this
          header may carry filter or opacity, or the glass loses its
          backdrop (see globals.css). */}
      <div className="shell">
        <div
          className={`glass overflow-hidden rounded-[26px] transition-[background-color] duration-500 ${
            lifted || open ? "bg-ink/40" : ""
          }`}
        >
          <div className="flex h-[52px] items-center justify-between gap-6 pl-5 pr-2 lg:pr-3">
            <a
              href="#top"
              aria-label="Manideep Munjampally, back to top"
              className="font-serif text-[18px] tracking-[-0.02em] text-bone"
            >
              Manideep Munjampally
            </a>
    
            <nav aria-label="Sections" className="hidden items-center lg:flex">
              {NAV.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative isolate rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-colors duration-300 ${
                      isActive ? "text-bone" : "text-bone-mute hover:text-bone"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-full bg-bone/[0.08]"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>
    
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="glass-inset flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
              >
                <span
                  className={`absolute h-px w-4 bg-bone transition-transform duration-300 ${
                    open ? "rotate-45" : "-translate-y-[3px]"
                  }`}
                />
                <span
                  className={`absolute h-px w-4 bg-bone transition-transform duration-300 ${
                    open ? "-rotate-45" : "translate-y-[3px]"
                  }`}
                />
              </button>
            </div>
          </div>
    
          <AnimatePresence>
            {open && (
              <motion.nav
                id="mobile-nav"
                aria-label="Sections"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="overflow-hidden lg:hidden"
              >
                <ul className="px-5 pb-4 pt-1">
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.04 * i }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between border-t border-rule py-3.5 font-serif text-2xl tracking-[-0.02em] text-bone"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
