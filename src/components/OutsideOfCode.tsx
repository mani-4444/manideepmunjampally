import { ArrowUpRight } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { Section, SectionTitle } from "@/components/ui/section";

/* The audience numbers are the whole point of this section, so they get the
   hero-figure treatment directly under the title rather than sitting in a
   side column at body-text size. */
const AUDIENCE = [
  { value: "3,000+", label: "YouTube subscribers" },
  { value: "2,000+", label: "Instagram followers" },
];

export function OutsideOfCode() {
  return (
    <Section label="Content creation">
      <SectionTitle index={5}>Strategic Timeout</SectionTitle>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="cell cell-signal">Cricket content</span>
        <span className="cell">Creator, host &amp; editor</span>
      </div>

      <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-8 border-t border-rule pt-8 sm:gap-x-20">
        {AUDIENCE.map((item) => (
          <div key={item.label}>
            <dd className="nums font-montserrat text-4xl font-extrabold leading-none tracking-[-0.04em] text-signal sm:text-5xl">
              {item.value}
            </dd>
            <dt className="field-key mt-2.5">{item.label}</dt>
          </div>
        ))}
      </dl>

      <p className="body-copy mt-10 text-base">
        Creator, host, and editor of &lsquo;Strategic Timeout&rsquo;. Built an
        engaged following through on-camera storytelling, backed by
        self-directed video editing in Adobe Premiere Pro.
      </p>

      <div className="mt-6 flex items-center gap-6">
        <a
          href="https://www.youtube.com/@StrategicTimeoutOfficial"
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep inline-flex items-center gap-1.5 text-[13px] text-bone-dim"
        >
          <YoutubeIcon className="h-3.5 w-3.5" />
          YouTube
          <ArrowUpRight className="h-3 w-3 text-bone-mute" />
        </a>
        <a
          href="https://www.instagram.com/strategic_timeout_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep inline-flex items-center gap-1.5 text-[13px] text-bone-dim"
        >
          <InstagramIcon className="h-3.5 w-3.5" />
          Instagram
          <ArrowUpRight className="h-3 w-3 text-bone-mute" />
        </a>
      </div>
    </Section>
  );
}
