"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { LiquidButton } from "@/components/ui/liquid-glass";

const NAV = [
  { id: "about", label: "Background" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "achievements", label: "Honors" },
] as const;

export function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [lifted, setLifted] = useState(false);
  const { scrollYProgress } = useScroll();

  /* Active section via IntersectionObserver rather than an offsetTop
     loop on every scroll event — accurate at section boundaries and it
     doesn't run layout maths 60 times a second. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        lifted ? "border-b border-rule bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="shell flex h-full items-center justify-between gap-4">
        {/* Register mark. The name is deliberately not repeated here —
            the hero says it once, at full size. */}
        <a
          href="#top"
          aria-label="Back to top"
          className="group hidden shrink-0 items-center gap-2.5 sm:flex"
        >
          <span className="h-2.5 w-2.5 bg-signal transition-transform duration-300 group-hover:rotate-45" />
          {/* Explicit styling rather than `field-key`, whose #46433E is a
              margin-label tone (~2.4:1 on black) and far too faint for a
              mark that has to read as the site's logo. */}
          <span className="font-montserrat text-[11px] font-bold tracking-[0.18em] text-bone-dim transition-colors group-hover:text-bone">
            MM
          </span>
        </a>

        {/* Sections. The active one is marked with a tick, matching the
            ruler rules that open each section. */}
        <nav className="-mx-1 flex min-w-0 items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative shrink-0 px-3 py-2 font-montserrat text-[12.5px] font-semibold tracking-tight transition-colors sm:px-3.5 ${
                  isActive ? "text-bone" : "text-bone-mute hover:text-bone-dim"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-0 h-[5px] w-px -translate-x-1/2 bg-signal transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Below sm there isn't room for four sections plus an action, and
            the nav matters more — the hero and footer both carry this CTA. */}
        <LiquidButton
          href="#contact"
          className="hidden shrink-0 px-5 py-2.5 text-[12.5px] sm:inline-flex"
        >
          Get in touch
        </LiquidButton>
      </div>

      {/* Read position. A measuring edge for the whole document. */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-signal"
      />
    </header>
  );
}
