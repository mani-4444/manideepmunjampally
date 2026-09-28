import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Reveal } from "@/components/ui/scroll-text";
import { LiquidGlassCard, LiquidButton } from "@/components/ui/liquid-glass";

export type CaseStudyData = {
  id: string;
  index: string;
  name: string;
  kind: string;
  /** Who built it, scannable from the header rather than buried in prose. */
  role: string;
  /** The pull quote. One per case study — the only Poppins italic on the page. */
  lede: string;
  context?: string;
  href: string;
  linkKind: "repo" | "live";
  hrefDisplay: string;
  tech: string[];
  blocks: { h: string; p: string }[];
  highlights?: string[];
};

/**
 * Shared chrome for a case study.
 *
 * Each one previously repeated ~200 lines of near-identical markup with a
 * dot-joined meta row, a rounded-2xl shell, and a right column of boxes
 * nested three deep. Here the chrome is one component and the panel is the
 * only part that varies.
 */
export function CaseStudy({
  data,
  children,
}: {
  data: CaseStudyData;
  children: React.ReactNode;
}) {
  const LinkIcon = data.linkKind === "repo" ? GithubIcon : ExternalLink;

  return (
    <article id={data.id} className="scroll-mt-28">
      <div className="tick-rule" />

      <div className="pt-8 sm:pt-10">
        <div className="lg:grid lg:grid-cols-[132px_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          {/* Index numeral hangs in the rail, aligned with the section labels */}
          <div className="hidden lg:block lg:pt-1">
            <div className="lg:sticky lg:top-28">
              <span className="font-data text-[13px] text-signal">{data.index}</span>
            </div>
          </div>

          <div className="min-w-0">
            {/* ── Header ─────────────────────────────────────────── */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-data text-[13px] text-signal lg:hidden">
                    {data.index}
                  </span>
                  <Reveal as="h3" index={Number(data.index)} className="h-case text-bone">
                    {data.name}
                  </Reveal>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="cell cell-signal">{data.role}</span>
                  <span className="cell">{data.kind}</span>
                  {data.context ? <span className="cell">{data.context}</span> : null}
                </div>
              </div>

              <LiquidButton
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 self-start"
              >
                <LinkIcon className="h-4 w-4" aria-hidden="true" />
                {data.linkKind === "repo" ? "View repo" : "Open live app"}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </LiquidButton>
            </div>

            {/* ── Pull quote ─────────────────────────────────────── */}
            <div className="mt-7 flex gap-4">
              <span className="w-px shrink-0 self-stretch bg-signal/50" aria-hidden="true" />
              <p className="lede-sm max-w-[54ch] text-bone">{data.lede}</p>
            </div>

            {/* ── Narrative + instrument panel ───────────────────── */}
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="min-w-0">
                {data.blocks.map((block) => (
                  <div key={block.h} className="mb-7 last:mb-0">
                    <h4 className="h-block !text-[13.5px] text-bone">{block.h}</h4>
                    <p className="body-copy mt-2">{block.p}</p>
                  </div>
                ))}

                {data.highlights?.length ? (
                  <div className="mt-8 border-t border-rule pt-5">
                    <span className="field-key">Engineering highlights</span>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {data.highlights.map((h) => (
                        <span key={h} className="cell cell-signal">{h}</span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-6 border-t border-rule pt-5">
                  <span className="field-key">Built with</span>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {data.tech.map((t) => (
                      <span key={t} className="cell">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="min-w-0">{children}</div>
            </div>

            <a
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep font-data mt-10 inline-block text-[11.5px] text-bone-mute hover:text-bone"
            >
              {data.hrefDisplay}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/** The instrument panel shell: one surface, not boxes nested three deep. */
export function Panel({
  title,
  badge,
  badgeSignal,
  children,
}: {
  title: string;
  badge?: string;
  badgeSignal?: boolean;
  children: React.ReactNode;
}) {
  return (
    <LiquidGlassCard glassSize="sm" className="sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-3">
        <span className="h-block !text-[13px] text-bone">{title}</span>
        {badge ? (
          <span
            className={`font-data text-[10.5px] ${badgeSignal ? "text-signal" : "text-bone-mute"}`}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-5 space-y-5">{children}</div>
    </LiquidGlassCard>
  );
}

/** Segmented control for the interactive panels. */
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
  return (
    <div>
      <span className="field-key">{label}</span>
      <div
        role="tablist"
        aria-label={label}
        className="mt-2.5 grid gap-1.5"
        style={{
          /* four options read better as 2x2 than as three across with an
             orphan on the second row */
          gridTemplateColumns: `repeat(${options.length === 4 ? 2 : options.length}, minmax(0, 1fr))`,
        }}
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
              className={`rounded-machined border px-2.5 py-2 font-montserrat text-[12px] font-semibold tracking-tight transition-colors ${
                active
                  ? "border-signal bg-signal text-ink"
                  : "border-rule text-bone-mute hover:border-rule-strong hover:text-bone"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
