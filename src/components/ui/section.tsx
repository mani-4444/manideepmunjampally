import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/scroll-text";

/**
 * The page's structural unit.
 *
 * Every section opens on a ruler tick rule with its name hanging in the
 * left margin — a marginal note, not a badge. The old pattern here was a
 * tracked-out ALL-CAPS eyebrow ("02 // BACKGROUND") over an identically
 * sized heading in every section, which gave the page no hierarchy and
 * numbered content that isn't a sequence.
 */

type SectionProps = {
  id?: string;
  /** Marginal note in the left rail. Sentence case. */
  label: string;
  children: React.ReactNode;
  className?: string;
  /** Content spans the full shell instead of sitting in the rail grid. */
  bleed?: boolean;
};

export function Section({ id, label, children, className, bleed }: SectionProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      <div className="shell">
        <div className="tick-rule" />
      </div>

      <div className="shell py-16 sm:py-20 lg:py-28">
        {bleed ? (
          <>
            <RailLabel>{label}</RailLabel>
            {children}
          </>
        ) : (
          <div className="lg:grid lg:grid-cols-[132px_minmax(0,1fr)] lg:gap-12 xl:gap-16">
            <div className="lg:pt-2">
              <div className="lg:sticky lg:top-28">
                <RailLabel>{label}</RailLabel>
              </div>
            </div>
            <div className="min-w-0">{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}

function RailLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rail-label mb-7 flex items-center gap-3 lg:mb-0 lg:flex-col lg:items-start lg:gap-2">
      <span className="h-px w-6 bg-signal lg:w-8" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

/**
 * Section heading. Scale and tracking do the shouting; the words don't.
 * `index` picks which side it swings in from, so consecutive sections
 * alternate rather than all sliding the same way.
 */
export function SectionTitle({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <Reveal as="h2" index={index} className={cn("h-section text-bone", className)}>
      {children}
    </Reveal>
  );
}

/**
 * Spec list — replaces `A · B · C` middle-dot meta strings with real
 * structure: key above value, hairline separated, tabular figures.
 */
export function SpecList({
  items,
  className,
  columns = 3,
}: {
  items: { key: string; value: React.ReactNode; note?: string }[];
  className?: string;
  columns?: 2 | 3 | 4;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-5 border-t border-rule pt-5",
        cols,
        className
      )}
    >
      {items.map((item) => (
        <div key={item.key} className="min-w-0">
          <dt className="field-key">{item.key}</dt>
          <dd className="h-block nums mt-1.5 text-bone">{item.value}</dd>
          {item.note ? (
            <dd className="mt-0.5 text-[11px] leading-snug text-bone-mute">{item.note}</dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
