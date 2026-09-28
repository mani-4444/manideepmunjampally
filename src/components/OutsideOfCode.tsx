import { ArrowUpRight, Film, Users } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { Section } from "@/components/ui/section";

export function OutsideOfCode() {
  return (
    <Section label="Outside of code">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
        <div className="min-w-0">
          <h2 className="h-case text-bone">Cricket content creation</h2>
          <span className="cell mt-3 inline-block">Strategic Timeout</span>
          <p className="body-copy mt-4">
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
        </div>

        <div className="flex gap-8 border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <div>
            <div className="h-block nums text-2xl text-bone">3,000+</div>
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-bone-mute">
              <Users className="h-3 w-3" /> YouTube subscribers
            </div>
          </div>
          <div>
            <div className="h-block nums text-2xl text-bone">2,000+</div>
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-bone-mute">
              <Film className="h-3 w-3" /> Instagram followers
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
