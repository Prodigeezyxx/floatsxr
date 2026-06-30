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
              <img src="/images/floats transparent.png" alt="Floats" className="h-5 w-auto" />
              <span className="text-[11px] font-medium tracking-[0.1em] text-inkwell/35">
                realmspace
              </span>
            </div>
            <h1 className="display-md text-inkwell max-w-[640px]">
              Turn live brand moments into measured outcomes.
            </h1>
            <p className="body-lg text-inkwell/60 mt-5 max-w-[520px] text-pretty">
              Optimise IRL activations, showrooms, and brand experiences with
              spatial intelligence. Orchestrate smarter decisions across every deployment.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/get-a-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-all hover:shadow-glow min-h-[44px]"
              >
                Book a Pilot
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/products/realmspace/insight-reports"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/90 border border-mist/50 text-inkwell text-sm font-medium hover:bg-white transition-colors min-h-[44px] shadow-card"
              >
                See a sample report
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
              <span className="caption text-inkwell/50">Backed by</span>
              <img src="/images/nvidia-inception-JZ337cT9.png" alt="NVIDIA Inception" className="h-5 w-auto" />
              <img src="/images/aws-activate-logo.jpg" alt="AWS Activate" className="h-5 w-auto" />
              <img src="/images/MS_Startups_Celebration_Badge_Dark.png" alt="Microsoft for Startups" className="h-7 w-auto" />
            </div>
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
                  <source src="/images/realspace demo proooo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
