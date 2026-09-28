"use client";

/**
 * Scroll reveal: fade, a short rise and a blur that resolves. One motion
 * language for everything below the fold, on the same curve as the hero's
 * CSS load animation so the two read as one system.
 *
 * The reveal is an enhancement, never a precondition for content existing.
 * `useRevealed` checks the element's own rect on mount, so anything already
 * on screen shows even if the observer callback is missed (restored scroll
 * position, fast or programmatic scroll). A `<noscript>` rule in the root
 * layout covers the no-JS case.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

/* Must name every property the hidden state sets. The server renders the
   hidden state before the client knows about reduced motion; if these only
   set opacity, the SSR blur and offset are never cleared. */
const still: Variants = {
  hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0 } },
};

/** True once the element has touched the viewport. Every failure path reveals. */
export function useRevealed(ref: React.RefObject<HTMLElement | null>) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setRevealed(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setRevealed(true);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    // Observer callbacks can be missed under fast scrolling; a passive rect
    // check costs nothing and unregisters itself on reveal.
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) reveal();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) reveal();
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return revealed;
}

type RevealTag = "div" | "section" | "article" | "li" | "p" | "h2" | "h3" | "span" | "dl";

export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
  id,
}: {
  children: React.ReactNode;
  as?: RevealTag;
  /** Seconds. Use small steps (0.06–0.1) to stagger siblings. */
  delay?: number;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const revealed = useRevealed(ref);
  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      ref={(el: HTMLElement | null) => {
        ref.current = el;
      }}
      className={cn("reveal-guard", className)}
      custom={delay}
      initial="hidden"
      animate={revealed ? "visible" : "hidden"}
      variants={reduceMotion ? still : variants}
    >
      {children}
    </MotionTag>
  );
}
