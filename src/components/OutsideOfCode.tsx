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
                Cricket Content Creation (&lsquo;Strategic Timeout&rsquo;)
              </h2>
              <p className="font-open-sans text-sm text-neutral-400 leading-relaxed max-w-2xl">
                Founded, manages, and edits the channel. Built an engaged audience of 2,000+
                Instagram followers and 2,700+ YouTube subscribers using Adobe Premiere Pro and
                After Effects. Framed as audience-building and production discipline, not a fan feature.
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
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-2xl font-montserrat font-extrabold text-white">
                  2,700+
                </div>
                <div className="text-xs text-neutral-400 font-open-sans mt-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-neutral-500" />
                  <span>YouTube Subscribers</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-mono mt-2">
                  Adobe Premiere Pro
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
                <div className="text-[11px] text-neutral-500 font-mono mt-2">
                  After Effects Motion
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
