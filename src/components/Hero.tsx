import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/SocialIcons";

/* The four facts a recruiter screens on, stated once. Each has its detail
   further down the page; none of them are repeated in body copy. */
const PROOF = [
  {
    key: "HackerRank Orchestrate",
    value: "#93",
    unit: "/ 3,062",
    note: "Top 3.1% · September 2026",
    accent: true,
  },
  { key: "CGPA", value: "9.74", unit: "/ 10", note: "Computer Science, CBIT" },
  { key: "In production", value: "2", unit: "apps", note: "Deployed and public on Vercel" },
  { key: "Algorithms", value: "200+", unit: "", note: "Problems solved in C++" },
];

const d = (s: number) => ({ animationDelay: `${s}s` });

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[var(--nav-h)]">
      {/* One warm light from above-left; the only atmosphere on the page. */}
      <div
        aria-hidden="true"
        className="fade-in pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(55%_60%_at_22%_0%,rgba(240,180,60,0.085),transparent_72%)]"
      />

      <div className="shell relative pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_290px]">
          <div className="min-w-0">
            <div className="rise flex items-center gap-3" style={d(0.05)}>
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full lg:hidden">
                <Image
                  src="/images/manideep.png"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover object-top grayscale"
                />
                <span aria-hidden="true" className="absolute inset-0 rounded-full shadow-[var(--glass-rim)]" />
              </span>
              <span className="glass inline-flex items-center gap-2.5 !rounded-full py-1.5 pl-3 pr-3.5 text-[13px] font-medium text-bone-dim">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="ping absolute inset-0 rounded-full bg-signal" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                Open to internships · Class of 2028
              </span>
            </div>

            <h1 className="h-display mt-8 text-bone sm:mt-10">
              <span className="line-mask">
                <span className="line-rise" style={d(0.15)}>
                  Manideep
                </span>
              </span>
              <span className="line-mask">
                <span className="line-rise" style={d(0.27)}>
                  Munjampally
                </span>
              </span>
            </h1>

            <p className="rise lede mt-8 max-w-[38ch] sm:mt-10" style={d(0.5)}>
              I&rsquo;m a computer science undergrad at CBIT who{" "}
              <span className="text-bone">ships production software</span>, and
              I&rsquo;m going deeper into{" "}
              <span className="text-bone">ML and agentic AI</span>.
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-2.5" style={d(0.62)}>
              <a href="#work" className="btn btn-primary group">
                See the work
                <ArrowDown className="nudge nudge-down h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                Resume
                <ArrowUpRight className="nudge h-4 w-4" aria-hidden="true" />
              </a>
                            <span className="mx-1 hidden h-5 w-px bg-rule-strong sm:block" aria-hidden="true" />
              <a
                href="https://github.com/mani-4444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="btn btn-secondary w-11 !px-0"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/manideep-munjampally-771254386/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="btn btn-secondary w-11 !px-0"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <figure className="rise hidden lg:block" style={d(0.35)}>
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/manideep.png"
                alt="Manideep Munjampally"
                fill
                priority
                sizes="290px"
                className="object-cover object-top grayscale transition-[filter,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
              />
              {/* The glass rim laid over the photo, as a bevelled frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[var(--glass-rim)]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[12.5px] text-bone-mute">
              <span>Hyderabad, India</span>
              <span className="font-data text-[11.5px]">IST · UTC+5:30</span>
            </figcaption>
          </figure>
        </div>

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Light for the glass to refract */}
          <div aria-hidden="true" className="pool -left-10 top-1/2 h-40 w-[45%] -translate-y-1/2" />
          <div aria-hidden="true" className="pool pool-bone -right-10 top-0 h-40 w-[40%]" />

          <dl
            className="rise glass relative grid grid-cols-2 overflow-hidden lg:grid-cols-4"
            style={d(0.75)}
          >
            {PROOF.map((item, i) => (
              <div
                key={item.key}
                className={`flex flex-col border-rule p-5 sm:p-7 ${i % 2 === 0 ? "border-r" : ""} ${
                  i < 2 ? "border-b lg:border-b-0" : ""
                } ${i < 3 ? "lg:border-r" : ""}`}
              >
                <dt className="field-key">{item.key}</dt>
                <dd className="mt-4 flex items-baseline gap-1.5">
                  <span
                    className={`figure text-[2.6rem] sm:text-[3.1rem] ${
                      item.accent ? "text-signal" : "text-bone"
                    }`}
                  >
                    {item.value}
                  </span>
                  {item.unit ? (
                    <span className="figure text-lg text-bone-mute sm:text-xl">{item.unit}</span>
                  ) : null}
                </dd>
                <dd className="mt-2 text-[13px] leading-snug text-bone-mute">{item.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
