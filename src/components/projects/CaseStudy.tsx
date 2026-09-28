"use client";

import React, { useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Reveal } from "@/components/ui/reveal";

export type CaseStudyData = {
  id: string;
  index: string;
  name: string;
  kind: string;
  /** Who built it — scannable, because solo vs team changes how a
   *  reviewer reads everything below it. */
  role: string;
  lede: string;
  context?: string;
  href: string;
  linkKind: "repo" | "live";
  tech: string[];
  blocks: { h: string; p: string }[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function CaseStudy({
  data,
  children,
}: {
  data: CaseStudyData;
  children: React.ReactNode;
}) {
  const live = data.linkKind === "live";

  return (
    <article
      id={data.id}
      data-case={data.id}
      className="scroll-mt-28 border-t border-rule pt-12 first:border-t-0 first:pt-0 sm:pt-16 first:sm:pt-0"
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-data text-[12.5px] text-signal">{data.index}</span>
          <span className="chip">{data.role}</span>
          <span className="text-[13px] text-bone-mute">
            {data.kind}
            {data.context ? ` · ${data.context}` : ""}
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="h-case text-bone">{data.name}</h3>
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-sm group shrink-0 self-start sm:self-auto ${
              live ? "btn-primary" : "btn-secondary"
            }`}
          >
            {live ? (
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="ping absolute inset-0 rounded-full bg-emerald-500" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-600" />
              </span>
            ) : (
              <GithubIcon className="h-3.5 w-3.5" />
            )}
            {live ? "Open live app" : "Source"}
            <ArrowUpRight className="nudge h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <p className="lede mt-5 max-w-[56ch]">{data.lede}</p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:gap-12">
        <Reveal delay={0.06} className="min-w-0">
          <div className="space-y-7">
            {data.blocks.map((block) => (
              <div key={block.h}>
                <h4 className="h-block text-bone">{block.h}</h4>
                <p className="body-copy mt-2">{block.p}</p>
              </div>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Built with">
            {data.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative min-w-0">
          {/* Light for the panel glass to refract */}
          <div aria-hidden="true" className="pool -right-6 -top-6 h-48 w-2/3 opacity-70" />
          <div aria-hidden="true" className="pool pool-bone -left-6 bottom-10 h-40 w-1/2" />
          <Reveal delay={0.14} className="relative">
            {children}
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/** The interactive panel beside each case study. */
export function Panel({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface surface-hover p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-4">
        <span className="h-block text-bone">{title}</span>
        {badge ? (
          <span className="font-data rounded-full border border-rule px-2.5 py-1 text-[10.5px] text-bone-mute">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-5 space-y-5">{children}</div>
    </div>
  );
}

/** Segmented control; the active marker glides between options. */
export function Tabs<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  const id = useId();
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <span className="field-key">{label}</span>
      <div
        role="tablist"
        aria-label={label}
        className="glass-inset mt-2.5 grid gap-1 rounded-xl p-1"
        style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
      >
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(opt.value)}
              className={`relative rounded-lg px-1.5 py-2 text-[12.5px] font-semibold tracking-tight transition-colors duration-300 ${
                active ? "text-ink" : "text-bone-mute hover:text-bone"
              }`}
            >
              {active && (
                <motion.span
                  layoutId={`tab-${id}`}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg bg-bone shadow-[var(--glass-rim)]"
                  transition={
                    reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }
                  }
                />
              )}
              <span className="relative">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Cross-fades panel content when a tab changes. */
export function Swap({ k, children }: { k: string; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={k}
        initial={reduceMotion ? false : { opacity: 0, y: 6, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -4, filter: "blur(4px)" }}
        transition={{ duration: 0.28, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
