"use client";

/**
 * Scroll-reveal text motion.
 *
 * Adapted from the kokonutui ScrollText pattern (MIT, @dorianbaffier):
 * items alternate in from left and right with a rotation, on a spring, and
 * whichever one sits nearest the centre of the viewport is lit while the
 * rest stay dim.
 *
 * Three deliberate changes from the original:
 *
 *  1. The original tracks position inside its own `overflow-y-auto` box.
 *     Nested mid-page that traps the wheel, and this site runs Lenis smooth
 *     scroll, which would fight it. Here the observer uses the page as its
 *     root, so the behaviour is identical without the trap.
 *
 *  2. It imports from `motion/react`; this project has `framer-motion`,
 *     which exposes the same API, so no extra dependency.
 *
 *  3. The reveal fires once and stays. The original passes `once: false`,
 *     but there it is inert: every row lives inside a 300px box that is
 *     itself fully on screen, so it reveals on mount and never
 *     re-evaluates. Ported to page scroll it *does* re-evaluate, which
 *     drops text back to opacity 0 whenever it leaves the band — headings
 *     vanishing mid-read. The travelling highlight is the part that keeps
 *     tracking scroll, and that is preserved exactly.
 *
 * The reveal is an enhancement, never a precondition for content existing:
 * `useRevealed` also checks the element's own rect on mount, so anything
 * already on screen shows even if the observer callback is missed (restored
 * scroll position, hydration hiccup, fast scroll). A `<noscript>` rule in
 * the root layout covers the no-JS case.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const itemVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
    rotate: index % 2 === 0 ? -10 : 10,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const staticVariants: Variants = {
  hidden: { opacity: 1, x: 0, rotate: 0 },
  visible: { opacity: 1, x: 0, rotate: 0 },
};

/**
 * True once the element should be shown.
 *
 * Uses a plain IntersectionObserver rather than framer's `useInView`:
 * the hidden state rotates the element 10deg, which inflates its bounding
 * box (a 55px heading measures 220px), and a ratio-based threshold against
 * that skewed box proved unreliable — headings stayed at opacity 0 while
 * sitting in the middle of the viewport. `threshold: 0` asks only "does
 * this touch the viewport at all", which is all the reveal needs.
 *
 * Every failure path reveals rather than hides: no ref, no observer
 * support, or already on screen at mount.
 */
function useRevealed(ref: React.RefObject<HTMLElement | null>) {
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
    // Belt and braces: observer callbacks are delivered on their own task
    // queue and can be missed under fast or programmatic scrolling. A
    // passive rect check on scroll costs nothing and unregisters itself
    // the moment the element reveals, so text can never strand at
    // opacity 0 while sitting on screen.
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return revealed;
}

/**
 * Tracks which registered item is nearest the centre of the viewport.
 * This is the part that keeps responding to scroll after the reveal.
 */
export function useActiveIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = itemsRef.current.findIndex((el) => el === entry.target);
          if (index !== -1) setActiveIndex(index);
        });
      },
      // A narrow band across the middle of the viewport — only one item
      // qualifies at a time, which is what makes the highlight travel.
      { threshold: 0.7, rootMargin: "-45% 0px -45% 0px" }
    );

    const observer = observerRef.current;
    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const register = useCallback((el: HTMLElement | null, index: number) => {
    const previous = itemsRef.current[index];
    if (previous === el) return;
    if (previous && observerRef.current) observerRef.current.unobserve(previous);
    itemsRef.current[index] = el;
    if (el && observerRef.current) observerRef.current.observe(el);
  }, []);

  return { activeIndex, register };
}

/**
 * One text element that alternates in from the left or right depending on
 * its index. Use for headings and other single text moments.
 */
export function Reveal({
  children,
  index = 0,
  as = "div",
  className,
}: {
  children: React.ReactNode;
  index?: number;
  as?: "div" | "span" | "h2" | "h3";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const revealed = useRevealed(ref);
  const MotionTag = motion[as];

  return (
    <MotionTag
      animate={revealed ? "visible" : "hidden"}
      className={cn("reveal-guard", className)}
      custom={index}
      initial="hidden"
      ref={(el: HTMLElement | null) => {
        ref.current = el;
      }}
      variants={reduceMotion ? staticVariants : itemVariants}
    >
      {children}
    </MotionTag>
  );
}

function RevealRow({
  index,
  register,
  children,
}: {
  index: number;
  register: (el: HTMLElement | null, index: number) => void;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRevealed(ref);

  return (
    <motion.div
      animate={revealed ? "visible" : "hidden"}
      className="reveal-guard"
      custom={index}
      initial="hidden"
      ref={(el) => {
        ref.current = el;
        register(el, index);
      }}
      variants={reduceMotion ? staticVariants : itemVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * A vertical list where each row alternates in and the row nearest the
 * viewport centre is lit. `children` receives the active state per row so
 * the caller decides what "lit" looks like.
 */
export function ScrollTextList<T>({
  items,
  children,
  className,
}: {
  items: T[];
  children: (item: T, state: { index: number; isActive: boolean }) => React.ReactNode;
  className?: string;
}) {
  const { activeIndex, register } = useActiveIndex();

  return (
    // rows translate up to 100px sideways before settling
    <div className={cn("overflow-x-clip", className)}>
      {items.map((item, index) => (
        <RevealRow index={index} key={index} register={register}>
          {children(item, { index, isActive: activeIndex === index })}
        </RevealRow>
      ))}
    </div>
  );
}
