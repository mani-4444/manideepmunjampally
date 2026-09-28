"use client";

import { useRef } from "react";
import { useRevealed } from "@/components/ui/reveal";

/**
 * The HackerRank Orchestrate field, stage by stage.
 *
 * The three counts share a unit and are ordered, so they take a one-hue
 * ordinal ramp (validated: monotone lightness, one hue), brightening toward
 * the field the rank was earned in. The rank itself is a position, not a
 * count, so it sits beside the bars as a figure rather than as a fourth bar.
 */
const STAGES = [
  { label: "Registered", value: 35712, fill: "bg-[#6B5020]" },
  { label: "Shipped a build", value: 3721, fill: "bg-[#A77C2B]" },
  { label: "Took the AI interview", value: 3062, fill: "bg-signal" },
];

const TOTAL = STAGES[0].value;

export function Funnel() {
  const ref = useRef<HTMLDListElement>(null);
  const shown = useRevealed(ref);

  return (
    <dl ref={ref} className="min-w-0 space-y-5">
      {STAGES.map((stage, i) => {
        const share = Math.max((stage.value / TOTAL) * 100, 1.5);
        return (
          <div key={stage.label}>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-[13.5px] font-medium text-bone-dim">{stage.label}</dt>
              <dd className="font-data text-[13px] text-bone">{stage.value.toLocaleString("en-US")}</dd>
            </div>
            <div aria-hidden="true" className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bone/[0.07]">
              <div
                className={`h-full origin-left rounded-full ${stage.fill} transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none`}
                style={{
                  width: `${share}%`,
                  transform: shown ? "scaleX(1)" : "scaleX(0)",
                  transitionDelay: `${0.15 + i * 0.12}s`,
                }}
              />
            </div>
          </div>
        );
      })}
    </dl>
  );
}
