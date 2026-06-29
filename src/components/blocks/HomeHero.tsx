"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden gradient-mesh pattern-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-ecru pointer-events-none" />
      <div className="grid-container relative pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-medium tracking-[0.12em] text-cobalt bg-cobalt/5 px-3 py-1.5 rounded-full">
                Floats
              </span>
              <span className="text-[11px] font-medium tracking-[0.1em] text-inkwell/35">
                realmspace
              </span>
            </div>
            <h1 className="display-md text-inkwell max-w-[640px]">
              Turn live brand moments into measured outcomes.
            </h1>
            <p className="body-lg text-inkwell/60 mt-5 max-w-[520px] text-pretty">
              Floats turns activations, showrooms, trade shows, and retail
              experiences into reports your CFO will sign off on.
              Measure what happened. Prove what it was worth.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/get-a-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-all hover:shadow-glow min-h-[44px]"
              >
                Request a demo
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/products/realmspace/insight-reports"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/90 border border-mist/50 text-inkwell text-sm font-medium hover:bg-white transition-colors min-h-[44px] shadow-card"
              >
                See a sample report
              </Link>
            </div>
            <p className="caption text-inkwell/45 mt-6">
              Backed by NVIDIA, AWS and Microsoft &middot; Deployed across 16+ environments
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.12} className="relative">
            <div className="absolute -inset-4 bg-cobalt/5 rounded-2xl blur-2xl pointer-events-none" />
            <div className="relative shadow-glow rounded-xl border border-mist/40 bg-white p-1.5 overflow-hidden">
              <div className="rounded-lg overflow-hidden bg-inkwell/5">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/Automation_dashboard_with_consistent_realmspace_br-1782596152361.png"
                  className="w-full h-auto object-contain"
                >
                  <source src="/images/realspace demo video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
