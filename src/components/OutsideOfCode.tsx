import { ArrowUpRight } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/* The audience numbers are the point of this section, so each one is the
   link to its channel rather than sitting beside a separate link row. */
const CHANNELS = [
  {
    value: "3,000+",
    label: "YouTube subscribers",
    href: "https://www.youtube.com/@StrategicTimeoutOfficial",
    Icon: YoutubeIcon,
  },
  {
    value: "2,000+",
    label: "Instagram followers",
    href: "https://www.instagram.com/strategic_timeout_official/",
    Icon: InstagramIcon,
  },
];

export function OutsideOfCode() {
  return (
    <Section
      id="content"
      eyebrow="Content creation"
      title="Strategic Timeout."
      intro="A cricket channel I create, host, and edit myself in Premiere Pro and After Effects."
      split
    >
      <div className="relative">
        {/* Light for the glass to refract */}
        <div aria-hidden="true" className="pool -left-8 top-1/4 h-48 w-1/2" />
        <div aria-hidden="true" className="pool pool-bone -right-8 bottom-0 h-40 w-1/2" />
        <ul className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CHANNELS.map(({ value, label, href, Icon }, i) => (
            <Reveal as="li" key={label} delay={0.08 * i}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover group flex h-full flex-col p-6 sm:p-8"
              >
                <span className="flex items-center justify-between text-bone-mute">
                  <Icon className="h-4 w-4" />
                  <ArrowUpRight
                    className="nudge h-4 w-4 transition-colors duration-300 group-hover:text-bone"
                    aria-hidden="true"
                  />
                </span>
                <span className="figure mt-10 text-[3.4rem] text-bone sm:text-[4rem]">{value}</span>
                <span className="mt-2 text-[14px] text-bone-dim">{label}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
