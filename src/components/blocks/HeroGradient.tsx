"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";

interface HeroGradientProps {
  headline: string;
  subhead: string;
  ctaLabel: string;
  ctaHref?: string;
}

export function HeroGradient({
  headline,
  subhead,
  ctaLabel,
  ctaHref = "/get-a-demo",
}: HeroGradientProps) {
  return (
    <section className="gradient-haze py-24 md:py-32 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cobalt/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="grid-container text-center relative">
        <FadeIn>
          <h1 className="display-lg text-white max-w-[900px] mx-auto">
            {headline}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-lg text-mist mt-6 max-w-[600px] mx-auto">
            {subhead}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[480px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 w-full px-4 rounded-lg bg-white text-inkwell placeholder:text-inkwell/50 border-0 outline-none ring-0 focus:ring-2 focus:ring-cobalt text-base"
            />
            <Link
              href={ctaHref}
              className="inline-flex h-12 items-center px-6 rounded-lg bg-inkwell text-white text-sm font-medium hover:bg-inkwell/90 transition-colors shrink-0"
            >
              {ctaLabel}
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.45}>
          <p className="text-mist/60 text-[13px] mt-4">
            Available in the US, UK, Canada, and across the EU.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
