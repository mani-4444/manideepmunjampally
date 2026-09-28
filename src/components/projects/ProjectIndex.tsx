"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollTextList } from "@/components/ui/scroll-text";
import { PROJECTS } from "./data";

/**
 * Contents table for the case studies.
 *
 * Lives in its own client component so `Projects` can stay a server
 * component — the render-prop `ScrollTextList` takes can't cross the
 * server/client boundary.
 *
 * Each row alternates in from left or right and the row nearest the
 * viewport centre is lit, so the list reads itself as you scroll past.
 */
export function ProjectIndex() {
  return (
    <nav aria-label="Project index" className="mt-12">
      <ScrollTextList items={PROJECTS} className="border-t border-rule">
        {(project, { isActive }) => (
          <a
            href={`#${project.id}`}
            className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-4 border-b border-rule py-5 sm:gap-x-6 sm:py-7"
          >
            <span
              className={`font-data text-[12px] transition-colors duration-300 ${
                isActive ? "text-signal" : "text-bone-faint"
              }`}
            >
              {project.index}
            </span>

            <span className="min-w-0">
              <span
                className={`block font-montserrat text-2xl font-bold tracking-[-0.025em] transition-colors duration-300 sm:text-3xl lg:text-4xl ${
                  isActive ? "text-bone" : "text-bone-dim"
                }`}
              >
                {project.name}
              </span>
              <span
                className={`mt-1 block truncate text-[11.5px] transition-colors duration-300 ${
                  isActive ? "text-bone-dim" : "text-bone-mute"
                }`}
              >
                {project.kind}
              </span>
            </span>

            <span className="flex items-center gap-4 sm:gap-6">
              {/* Tells the reader whether there is something to try before
                  they commit to scrolling into the case study */}
              <span className="field-key hidden sm:block">
                {project.linkKind === "live" ? "Live app" : "Source"}
              </span>
              <ArrowUpRight
                className={`h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-signal ${
                  isActive ? "text-bone-dim" : "text-bone-mute"
                }`}
                aria-hidden="true"
              />
            </span>
          </a>
        )}
      </ScrollTextList>
    </nav>
  );
}
