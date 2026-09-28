import { Code2, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/SocialIcons";

const CHANNELS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manideep-munjampally-771254386/", Icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/mani-4444", Icon: GithubIcon },
  { label: "LeetCode", href: "https://leetcode.com/Yo7vJoRqBP", Icon: Code2 },
];

export function Footer() {
  return (
    <footer id="contact" className="relative">
      <div className="shell">
        <div className="tick-rule tick-rule-signal" />
      </div>

      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <span className="rail-label">Contact</span>
            {/* Display moment 2 of 2 — a closing signature, not a repeat
                headline. No apostrophes: Akira Expanded has no glyph for one,
                so "Let's" silently renders as "Lets". */}
            <h2 className="display-sign mt-4 text-bone">Available for internships</h2>
            <p className="body-copy mt-5 max-w-[52ch] text-base">
              Software Engineering, Full-Stack, or Generative AI. Open to
              discussing system architecture, latency, and code.
            </p>

            <a
              href="mailto:manideepmunjampally4@gmail.com"
              className="btn btn-signal mt-8"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Manideep
            </a>
          </div>

          <div className="flex gap-3 lg:flex-col lg:items-end">
            {CHANNELS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between gap-6 border-b border-rule py-2.5 text-bone-dim transition-colors hover:text-bone lg:w-44"
              >
                <span className="font-montserrat text-[13px] font-semibold">{label}</span>
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-rule pt-7 text-[11px] text-bone-faint sm:flex-row">
          <div>&copy; {new Date().getFullYear()} Manideep Munjampally</div>
          <div className="font-data flex items-center gap-3">
            <span>CBIT CSE</span>
            <span aria-hidden="true">/</span>
            <span>9.74 CGPA</span>
            <span aria-hidden="true">/</span>
            <span>Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
