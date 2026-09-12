"use client";

import React from "react";
import { Film, Users, ArrowUpRight } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export function OutsideOfCode() {
  return (
    <section className="py-20 bg-black border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-white/10 bg-[#080808] p-8 sm:p-10 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-montserrat tracking-[0.25em] text-neutral-500 uppercase">
                07 // OUTSIDE OF CODE
              </div>
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white tracking-tight">
                Cricket Content Creation <br></br>(Strategic Timeout)
              </h2>
              <p className="font-open-sans text-sm text-neutral-400 leading-relaxed max-w-2xl">
                Creator, host, and editor of &lsquo;Strategic Timeout&rsquo;. Built an engaged following
                of 2,700+ YouTube subscribers and 2,000+ Instagram followers through compelling
                on-camera communication and narrative storytelling, backed by self-directed
                video editing in Adobe Premiere Pro.
              </p>

              {/* Low-emphasis outbound links */}
              <div className="flex items-center gap-5 pt-2 text-xs font-open-sans text-neutral-400">
                <a
                  href="https://www.youtube.com/@StrategicTimeoutOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-neutral-400" />
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>

                <span className="text-neutral-700">·</span>

                <a
                  href="https://www.instagram.com/strategic_timeout_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </div>
            </div>

            {/* Audience metric cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-2xl font-montserrat font-extrabold text-white">
                    2,700+
                  </div>
                  <div className="text-xs text-neutral-400 font-open-sans mt-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-neutral-500" />
                    <span>YouTube Subscribers</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-2xl font-montserrat font-extrabold text-white">
                    2,000+
                  </div>
                  <div className="text-xs text-neutral-400 font-open-sans mt-1 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Instagram Followers</span>
                  </div>
                </div>
              </div>

              {/* Shared production & workflow tag bar */}
              <div className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>On-Camera Storytelling | Audience Retention | Adobe Premiere Pro</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
