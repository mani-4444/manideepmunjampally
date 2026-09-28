"use client";

/**
 * Liquid glass surfaces.
 *
 * Adapted from the kokonutui Liquid Glass Card (MIT, @dorianbaffier):
 * https://kokonutui.com/docs/cards/liquid-glass-card
 *
 * Three deliberate changes from the original:
 *
 *  1. Self-contained. The original extends shadcn's `Button` and `Card`.
 *     This project has no `button.tsx`, and its `card.tsx` is styled with
 *     `bg-card` / `text-card-foreground` — tokens this theme never defines,
 *     so it would render unstyled. These build on the local tokens instead.
 *
 *  2. Dark only. The original ships a light shadow stack and a `dark:`
 *     counterpart. This site is pure black with no light mode, so only the
 *     dark stack is kept — carrying both would double the shadow string for
 *     a mode that never renders.
 *
 *  3. The displacement filter is opt-in (`glassEffect`), off by default —
 *     but not for the reason you might expect. `backdrop-filter: url(#…)`
 *     *is* honoured (verified in Chrome: it displaces the backdrop hard).
 *     The problem is this page: refraction needs something behind the card
 *     to bend, and these sit on flat black, where displaced black is still
 *     black. It costs a filter pass per card and shows nothing. Turn it on
 *     for a card over the blueprint grid, the amber wash or the 3D scene,
 *     where there is actually a backdrop to distort.
 *
 *     Note the scale is aggressive (30 for cards, 70 for buttons) — over a
 *     fine pattern it reads as noise rather than glass.
 */

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

/* The rim: bright inset highlights top-left and bottom-right read as a
   bevelled edge catching light, which is the bulk of the glass illusion. */
const GLASS_SHADOW =
  "shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]";

const DEFAULT_GLASS_FILTER_SCALE = 30;
const BUTTON_GLASS_FILTER_SCALE = 70;

const GlassFilter = React.memo(
  ({ id, scale = DEFAULT_GLASS_FILTER_SCALE }: { id: string; scale?: number }) => (
    <svg aria-hidden="true" className="hidden" focusable={false}>
      <title>Glass effect filter</title>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          height="200%"
          id={id}
          width="200%"
          x="-50%"
          y="-50%"
        >
          <feTurbulence
            baseFrequency="0.05 0.05"
            numOctaves="1"
            result="turbulence"
            seed="1"
            type="fractalNoise"
          />
          <feGaussianBlur in="turbulence" result="blurredNoise" stdDeviation="2" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            result="displaced"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="B"
          />
          <feGaussianBlur in="displaced" result="finalBlur" stdDeviation="4" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
);
GlassFilter.displayName = "GlassFilter";

/* ── Card ──────────────────────────────────────────────────────────── */

const liquidGlassCardVariants = cva(
  "group relative overflow-hidden border border-rule bg-bone/[0.035] backdrop-blur-[2px]",
  {
    variants: {
      glassSize: { sm: "p-4", default: "p-6", lg: "p-8" },
      radius: { machined: "rounded-panel", soft: "rounded-2xl" },
    },
    defaultVariants: { glassSize: "default", radius: "soft" },
  }
);

export type LiquidGlassCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof liquidGlassCardVariants> & {
    /** Adds the SVG displacement layer. Inert in Chrome and Safari. */
    glassEffect?: boolean;
  };

export function LiquidGlassCard({
  className,
  glassSize,
  radius,
  glassEffect = false,
  children,
  ...props
}: LiquidGlassCardProps) {
  const filterId = React.useId();

  return (
    <div
      className={cn(liquidGlassCardVariants({ glassSize, radius }), className)}
      {...props}
    >
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", GLASS_SHADOW)}
      />

      {glassEffect && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
            style={{ backdropFilter: `url("#${filterId}")` }}
          />
          <GlassFilter id={filterId} scale={DEFAULT_GLASS_FILTER_SCALE} />
        </>
      )}

      <div className="relative z-10">{children}</div>

      {/* Sheen sweep on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] bg-gradient-to-r from-transparent via-bone/[0.05] to-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none"
      />
    </div>
  );
}

/* ── Button ────────────────────────────────────────────────────────── */

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-montserrat text-[13px] font-bold tracking-[-0.005em] transition-transform duration-200 motion-reduce:transition-none",
  {
    variants: {
      tone: {
        signal: "bg-signal text-ink hover:bg-[#FFDB4D]",
        ghost: "border border-rule-strong bg-bone/[0.04] text-bone hover:bg-bone/[0.08]",
      },
      liquidVariant: {
        default:
          "active:scale-[0.97] motion-reduce:active:scale-100 motion-reduce:hover:scale-100 [@media(hover:hover)]:hover:scale-105",
        none: "",
      },
      size: { default: "px-[1.35rem] py-[0.72rem]", icon: "h-10 w-10 p-0" },
    },
    defaultVariants: { tone: "ghost", liquidVariant: "default", size: "default" },
  }
);

export type LiquidButtonProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof liquidButtonVariants> & {
    href: string;
    glassEffect?: boolean;
  };

export function LiquidButton({
  className,
  tone,
  liquidVariant,
  size,
  glassEffect = false,
  children,
  ...props
}: LiquidButtonProps) {
  const filterId = React.useId();

  return (
    <>
      <a
        className={cn(liquidButtonVariants({ tone, liquidVariant, size }), className)}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", GLASS_SHADOW)}
        />
        {glassEffect && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 isolate -z-10 overflow-hidden rounded-[inherit]"
            style={{ backdropFilter: `url("#${filterId}")` }}
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
      {glassEffect && <GlassFilter id={filterId} scale={BUTTON_GLASS_FILTER_SCALE} />}
    </>
  );
}
