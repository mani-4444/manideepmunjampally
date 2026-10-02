import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

/**
 * The page's structural unit: a hairline, a small label, a serif title.
 *
 * `split` puts the header in a narrow left column that stays pinned while
 * the content scrolls past it — used for the shorter, list-shaped sections
 * so they don't each spend a full screen on a heading.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  split = false,
  children,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  split?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const header = (
    <>
      <Reveal as="p" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={0.06} className="h-section mt-3 text-bone">
        {title}
      </Reveal>
      {intro ? (
        <Reveal as="p" delay={0.12} className="body-copy mt-5 max-w-[52ch]">
          {intro}
        </Reveal>
      ) : null}
    </>
  );

  return (
    // overflow-x: clip keeps the light pools from widening the page, and
    // unlike overflow: hidden it does not break the sticky headers inside.
    <section id={id} className={cn("relative overflow-x-clip", className)}>
      <div className="shell">
        <div className="border-t border-rule py-20 sm:py-24 lg:py-32">
          {split ? (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-[calc(var(--nav-h)+2.5rem)]">{header}</div>
              </div>
              <div className="min-w-0 lg:col-span-8">{children}</div>
            </div>
          ) : (
            <>
              <div className="max-w-3xl">{header}</div>
              {children}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
