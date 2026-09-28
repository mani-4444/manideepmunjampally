/**
 * The liquid-glass displacement filters, defined once for the page and
 * referenced from CSS as `backdrop-filter: url(#liquid-glass)`.
 *
 * Same pipeline as the kokonutui Liquid Glass Card: fractal noise,
 * softened, drives a displacement map over whatever sits behind the
 * glass, then a final blur. Scale 30 for surfaces, 70 for buttons, as in
 * the original.
 *
 * Sized to zero rather than `display: none`, so no engine can decide a
 * filter inside a non-rendered subtree doesn't apply.
 */
function Filter({ id, scale }: { id: string; scale: number }) {
  return (
    <filter
      id={id}
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
      colorInterpolationFilters="sRGB"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05 0.05"
        numOctaves={1}
        seed={1}
        result="turbulence"
      />
      <feGaussianBlur in="turbulence" stdDeviation={2} result="blurredNoise" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurredNoise"
        scale={scale}
        xChannelSelector="R"
        yChannelSelector="B"
        result="displaced"
      />
      <feGaussianBlur in="displaced" stdDeviation={4} result="finalBlur" />
      <feComposite in="finalBlur" in2="finalBlur" operator="over" />
    </filter>
  );
}

export function GlassFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <Filter id="liquid-glass" scale={30} />
        <Filter id="liquid-glass-strong" scale={70} />
      </defs>
    </svg>
  );
}
