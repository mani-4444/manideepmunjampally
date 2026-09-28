"use client";

import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";

/* His stack, read as one continuous line rather than twenty scattered
   badges. Duplicated once in the markup so the loop is seamless. */
const STACK = [
  "Claude Code", "Python", "TypeScript", "C++", "SQL", "FastAPI", "React",
  "Next.js", "Claude", "Gemini", "Groq", "Ollama", "Supabase", "Pandas",
  "Whisper", "ElevenLabs", "Tailwind", "Vercel",
];

const SPECS = [
  { k: "Institution", v: "CBIT Hyderabad", n: "Computer Science, class of 2028" },
  { k: "CGPA", v: "9.74 / 10.00", n: "Undergraduate" },
  { k: "Algorithms", v: "200+ solved", n: "C++, DP and game theory" },
  // A rank without its denominator reads as ambiguous, and ambiguous reads
  // as weak — 93rd of 3,062 is the top 3%.
  { k: "HackerRank Orchestrate", v: "#93 of 3,062", n: "Top 3.1% · September 2026" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[var(--nav-h)]">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* A single warm wash from the top — the only glow on the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-signal/[0.07] blur-[130px]"
      />

      <div className="shell relative pt-12 sm:pt-16 lg:pt-20">
        {/* Availability sits above the fold on purpose: for intern hiring it
            is the first filter a recruiter applies, and an undated profile is
            the easiest one to pass over. */}
        <div
          className="rise flex flex-wrap items-center gap-x-4 gap-y-2"
          style={{ animationDelay: "60ms" }}
        >
          <p className="font-montserrat text-[13px] font-semibold tracking-tight text-bone-dim">
            Full-stack developer building generative-AI systems
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-rule-signal px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            <span className="field-key !text-signal">
              Graduating 2028 · open to internships
            </span>
          </span>
        </div>

        {/* Display moment 1 of 2. Akira Expanded is an extremely wide face,
            so it gets the full measure — squeezed into a column it can only
            look like a mistake. */}
        <h1 className="display-hero mt-5 text-bone">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="wipe block" style={{ animationDelay: "180ms" }}>
              Manideep
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="wipe block" style={{ animationDelay: "320ms" }}>
              Munjampally
            </span>
          </span>
        </h1>
      </div>

      <div className="shell mt-10 sm:mt-12">
        <div className="tick-rule edge-draw" style={{ animationDelay: "520ms" }} />
      </div>

      <div className="shell relative pt-10 sm:pt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            {/* Who he is, in his own voice. This slot used to hold the
                guardrail principle from Buy or Wait? — a single project's
                architecture standing in as a claim about all the work,
                which isn't true of the two apps with no LLM in them. That
                line belongs to its case study and lives there now. */}
            <div className="rise flex gap-4 sm:gap-5" style={{ animationDelay: "620ms" }}>
              <span className="w-px shrink-0 self-stretch bg-signal/60" aria-hidden="true" />
              <p className="lede max-w-[34ch] text-bone">
                I&rsquo;m a computer science undergrad at CBIT who ships
                production software, and I&rsquo;m going deeper into ML and
                agentic AI.
              </p>
            </div>

            {/* The body carries the specifics so the line above doesn't
                have to repeat them. */}
            <p className="rise body-copy mt-7" style={{ animationDelay: "700ms" }}>
              Five systems so far: tiered LLM routing with an offline
              fallback, a three-agent debate platform with a live voice
              pipeline, a 90-day cash-flow simulator, and two web apps
              running in production. 200+ algorithm problems in C++ alongside
              them.
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-2.5"
              style={{ animationDelay: "780ms" }}
            >
              <a href="#projects" className="btn btn-signal">
                See the work
              </a>
              {/* Serves /public/resume.pdf — the one artefact a recruiter
                  cannot run a hiring process without. */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                Resume
              </a>
              <a
                href="https://github.com/mani-4444"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/manideep-munjampally-771254386/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Identity plate — square, bracketed, register-marked, rather than
              a circular avatar floating in a blurred white halo. Square means
              information in this system; the halo was decoration. */}
          <div
            className="rise relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-none"
            style={{ animationDelay: "420ms" }}
          >
            <div className="flex items-stretch gap-3">
              <div className="tick-rule-y shrink-0 self-stretch" aria-hidden="true" />

              <div className="min-w-0 flex-1">
                <div className="bracket relative aspect-[4/5] w-full border border-rule-strong">
                  <Image
                    src="/images/manideep.png"
                    alt="Manideep Munjampally"
                    fill
                    sizes="(max-width: 1023px) 300px, 340px"
                    className="object-cover object-top grayscale contrast-[1.18] brightness-[1.15]"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                  />
                </div>

                <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-rule pt-2.5">
                  <span className="field-key">Hyderabad, IN</span>
                  <span className="font-data text-[10.5px] text-bone-mute">
                    17°23′N 78°28′E
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials, as a spec strip */}
        <dl
          className="rise mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-rule pt-6 sm:mt-16 sm:grid-cols-4"
          style={{ animationDelay: "860ms" }}
        >
          {SPECS.map((item) => (
            <div key={item.k} className="min-w-0">
              {/* reserves two lines so a wrapping key doesn't drop its
                  value out of line with the rest of the strip */}
              <dt className="field-key min-h-[2.3em] leading-[1.15]">{item.k}</dt>
              <dd className="h-block nums mt-1.5 text-bone">{item.v}</dd>
              <dd className="mt-0.5 text-[11px] leading-snug text-bone-mute">{item.n}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Stack ticker */}
      <div className="relative mt-14 sm:mt-16">
        <div className="shell">
          <div className="tick-rule" />
        </div>

        <div className="ticker-host relative overflow-hidden py-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28"
          />

          <div className="ticker" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {STACK.map((tech) => (
                  <span key={tech} className="flex shrink-0 items-center">
                    <span
                      className={`font-montserrat text-[12.5px] font-semibold tracking-tight ${
                        tech.startsWith("Claude") ? "text-signal" : "text-bone-mute"
                      }`}
                    >
                      {tech}
                    </span>
                    <span className="mx-5 h-[3px] w-[3px] shrink-0 bg-signal/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>

          <span className="sr-only">Stack: {STACK.join(", ")}.</span>
        </div>
      </div>
    </section>
  );
}
