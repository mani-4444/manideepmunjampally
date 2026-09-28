import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const EMAIL = "manideepmunjampally4@gmail.com";

const CHANNELS = [
  { label: "GitHub", href: "https://github.com/mani-4444" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manideep-munjampally-771254386/" },
  { label: "LeetCode", href: "https://leetcode.com/Yo7vJoRqBP" },
  { label: "Resume", href: "/resume.pdf" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px] bg-[radial-gradient(50%_60%_at_20%_100%,rgba(240,180,60,0.07),transparent_72%)]"
      />

      <div className="shell relative">
        <div className="border-t border-rule pb-10 pt-20 sm:pt-28 lg:pt-36">
          <Reveal as="p" className="eyebrow">
            Contact
          </Reveal>
          <Reveal as="h2" delay={0.06} className="h-section mt-4 max-w-[16ch] !text-[clamp(2.6rem,6.4vw,5.5rem)] text-bone">
            Let&rsquo;s build something worth shipping.
          </Reveal>
          <Reveal as="p" delay={0.12} className="lede mt-6 max-w-[46ch]">
            Looking for internships in software engineering and applied AI.
            The fastest way to reach me is email.
          </Reveal>

          <Reveal delay={0.18} className="mt-10">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 font-serif text-[clamp(1.35rem,3.4vw,2.4rem)] tracking-[-0.02em] text-bone"
            >
              <span className="link-u break-all">{EMAIL}</span>
              <ArrowUpRight
                className="nudge h-6 w-6 shrink-0 text-signal sm:h-7 sm:w-7"
                aria-hidden="true"
              />
            </a>
          </Reveal>

          <Reveal delay={0.24} className="mt-20 sm:mt-28">
            <ul className="grid grid-cols-2 border-t border-rule sm:grid-cols-4">
              {CHANNELS.map(({ label, href }) => (
                <li key={label} className="border-b border-rule sm:border-b-0">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 pr-4 text-[14px] font-medium text-bone-dim transition-colors duration-300 hover:text-bone"
                  >
                    {label}
                    <ArrowUpRight className="nudge h-3.5 w-3.5 text-bone-mute" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 flex flex-col justify-between gap-3 text-[12.5px] text-bone-faint sm:flex-row sm:items-center">
            <span>&copy; {new Date().getFullYear()} Manideep Munjampally</span>
            <a href="#top" className="link-u self-start text-bone-mute hover:text-bone sm:self-auto">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
