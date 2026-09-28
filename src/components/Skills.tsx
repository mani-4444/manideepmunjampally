"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { SectionTitle } from "@/components/ui/section";

/** Rendered as a solid signal chip wherever they appear, so the tools he
 *  actually builds with lead rather than trailing the model names. */
const FEATURED = new Set(["Claude Code", "Claude"]);

const GROUPS = [
  { key: "Languages", items: ["C++", "Python", "TypeScript", "SQL"], signal: false },
  {
    key: "AI & generative AI",
    items: ["Claude", "LLMs", "Prompt engineering", "Gemini", "Groq", "Ollama"],
    signal: true,
  },
  { key: "Backend & data", items: ["FastAPI", "REST APIs", "Supabase", "MySQL"], signal: false },
  { key: "Web frontend", items: ["React", "Next.js", "Tailwind CSS"], signal: false },
  // Claude Code is a development tool, so it belongs beside Git and Vercel
  // rather than in the list of models his pipelines call.
  { key: "Tools & workflow", items: ["Claude Code", "Git", "GitHub", "Vercel"], signal: false },
  { key: "Creative tools", items: ["Premiere Pro", "After Effects"], signal: false },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 6]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [2.5, 0, -2.5]);

  const smoothRotateY = useSpring(rotateY, { stiffness: 60, damping: 20 });
  const smoothRotateX = useSpring(rotateX, { stiffness: 60, damping: 20 });

  return (
    <section ref={sectionRef} id="skills" className="relative overflow-hidden">
      <div className="shell">
        <div className="tick-rule" />
      </div>

      <div className="shell py-16 sm:py-20 lg:py-28">
        <div className="lg:grid lg:grid-cols-[132px_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div className="lg:pt-2">
            <div className="rail-label mb-7 flex items-center gap-3 lg:mb-0 lg:flex-col lg:items-start lg:gap-2 lg:sticky lg:top-28">
              <span className="h-px w-6 bg-signal lg:w-8" aria-hidden="true" />
              <span>Stack</span>
            </div>
          </div>

          <div className="min-w-0">
            <SectionTitle index={2}>Technical stack &amp; systems</SectionTitle>

            {/* The robot occupies its own registered viewport rather than
                floating full-bleed behind the content — a specimen in a
                case, not wallpaper competing with the text on top of it. */}
            <div className="relative mt-10 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-6">
              <div className="order-2 grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:order-1 lg:content-start">
                {GROUPS.map((group) => (
                  <div
                    key={group.key}
                    className={`panel p-5 ${group.signal ? "border-signal/30" : ""}`}
                  >
                    <div className="flex items-center justify-between border-b border-rule pb-2.5">
                      <span
                        className={`h-block !text-[13px] ${group.signal ? "text-signal" : "text-bone"}`}
                      >
                        {group.key}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className={
                            FEATURED.has(skill)
                              ? "cell cell-featured"
                              : group.signal
                                ? "cell cell-signal"
                                : "cell"
                          }
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bracket relative order-1 min-h-[360px] overflow-hidden border border-rule bg-ink sm:min-h-[440px] lg:order-2 lg:min-h-[470px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,200,0,0.06),transparent_65%)]"
                />
                <motion.div
                  style={{
                    rotateY: shouldReduceMotion ? 0 : smoothRotateY,
                    rotateX: shouldReduceMotion ? 0 : smoothRotateX,
                    transformPerspective: 1200,
                  }}
                  className="relative z-10 h-full w-full origin-center"
                >
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="h-full w-full"
                  />
                </motion.div>

                <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                  <span className="field-key bg-ink/80 px-1.5 py-0.5">Live render</span>
                  <span className="flex items-center gap-1.5 bg-ink/80 px-1.5 py-0.5">
                    <span className="h-1.5 w-1.5 bg-signal" />
                    <span className="field-key">Drag to rotate</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
