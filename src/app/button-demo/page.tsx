"use client";

import React from "react";
import Link from "next/link";
import { LiquidButton, MetalButton, Button } from "@/components/ui/liquid-glass-button";
import { ArrowLeft, Sparkles, Send, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export default function ButtonDemoPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <h1 className="font-montserrat text-3xl font-extrabold tracking-tight">
              Liquid Glass &amp; Metal Buttons
            </h1>
            <p className="font-open-sans text-sm text-neutral-400 mt-1">
              Interactive preview of the newly integrated button components in /components/ui
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-montserrat border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all text-neutral-300 hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Section 1: Liquid Glass Buttons */}
        <div className="border border-white/10 bg-[#080808] rounded-2xl p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Component: &lt;LiquidButton /&gt;</span>
            </div>
            <h2 className="font-montserrat text-xl font-bold">Liquid Glass Refraction</h2>
            <p className="font-open-sans text-xs text-neutral-400 mt-1">
              SVG feTurbulence + feDisplacementMap filter effect with inner specular highlights and backdrop distortion.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 p-8 rounded-xl bg-gradient-to-br from-neutral-900/60 via-black to-neutral-950 border border-white/10 justify-center">
            <LiquidButton size="sm">
              Liquid Glass (SM)
            </LiquidButton>

            <LiquidButton size="default">
              Liquid Glass (Default)
            </LiquidButton>

            <LiquidButton size="lg">
              Explore Projects
            </LiquidButton>

            <LiquidButton size="xxl">
              Liquid Glass (XXL)
            </LiquidButton>
          </div>
        </div>

        {/* Section 2: Metal Buttons */}
        <div className="border border-white/10 bg-[#080808] rounded-2xl p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Component: &lt;MetalButton /&gt;</span>
            </div>
            <h2 className="font-montserrat text-xl font-bold">Tactile Metallic Buttons</h2>
            <p className="font-open-sans text-xs text-neutral-400 mt-1">
              Multi-layer gradients with 3D press physics, GPU transforms, and dynamic specular shine effects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-8 rounded-xl bg-black border border-white/10 justify-items-center">
            <div className="space-y-2 text-center">
              <div className="text-[11px] font-mono text-neutral-500">variant="default"</div>
              <MetalButton variant="default">Silver Chrome</MetalButton>
            </div>

            <div className="space-y-2 text-center">
              <div className="text-[11px] font-mono text-neutral-500">variant="primary"</div>
              <MetalButton variant="primary">Deep Titanium</MetalButton>
            </div>

            <div className="space-y-2 text-center">
              <div className="text-[11px] font-mono text-neutral-500">variant="gold"</div>
              <MetalButton variant="gold">Champagne Gold</MetalButton>
            </div>

            <div className="space-y-2 text-center">
              <div className="text-[11px] font-mono text-neutral-500">variant="bronze"</div>
              <MetalButton variant="bronze">Burnished Bronze</MetalButton>
            </div>

            <div className="space-y-2 text-center">
              <div className="text-[11px] font-mono text-neutral-500">variant="success"</div>
              <MetalButton variant="success">Emerald Steel</MetalButton>
            </div>

            <div className="space-y-2 text-center">
              <div className="text-[11px] font-mono text-neutral-500">variant="error"</div>
              <MetalButton variant="error">Crimson Metal</MetalButton>
            </div>
          </div>
        </div>

        {/* Section 3: CVA Shaded Variant Buttons */}
        <div className="border border-white/10 bg-[#080808] rounded-2xl p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Component: &lt;Button variant="cool" /&gt;</span>
            </div>
            <h2 className="font-montserrat text-xl font-bold">Inset Shadow &amp; Linear Highlights</h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-center p-8 rounded-xl bg-black border border-white/10">
            <Button variant="cool" size="lg">
              Cool Inset Ring
            </Button>
            <Button variant="outline" size="lg">
              Subtle Outline
            </Button>
            <Button variant="secondary" size="lg">
              Secondary Surface
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
