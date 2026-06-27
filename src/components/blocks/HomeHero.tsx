"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ScreenshotFrame } from "./ScreenshotFrame";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden gradient-mesh pattern-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-ecru pointer-events-none" />
      <div className="grid-container relative pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <p className="micro text-cobalt mb-5">Spatial intelligence</p>
            <h1 className="display-md text-inkwell max-w-[640px]">
              Spatial intelligence that connects the real world.
            </h1>
            <p className="body-lg text-inkwell/60 mt-5 max-w-[520px] text-pretty">
              Capture engagement signals across every physical touchpoint.
              Prove your activation worked — with data your stakeholders trust.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/get-a-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-all hover:shadow-glow min-h-[44px]"
              >
                Get a live demo
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/try-realmspace"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/90 border border-mist/50 text-inkwell text-sm font-medium hover:bg-white transition-colors min-h-[44px] shadow-card"
              >
                Try realmspace
              </Link>
            </div>
            <p className="caption text-inkwell/45 mt-6">
              No facial recognition · Session-scoped · GDPR-ready
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.12} className="relative">
            <div className="absolute -inset-4 bg-cobalt/5 rounded-2xl blur-2xl pointer-events-none" />
            <div className="relative shadow-glow rounded-xl">
              <ScreenshotFrame
                src="/images/Automation_dashboard_with_consistent_realmspace_br-1782596152361.png"
                alt="realmspace automation dashboard"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
