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
    <section className="gradient-haze relative overflow-hidden py-24 md:py-36">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="grid-container relative text-center">
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
          <div className="mt-10 flex items-center justify-center">
            <Link
              href={ctaHref}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-inkwell px-7 text-sm font-medium text-white shadow-elevated transition-all hover:-translate-y-0.5 hover:bg-inkwell/90"
            >
              {ctaLabel}
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.45}>
          <p className="text-mist/60 text-[13px] mt-4">
            Built for temporary activations and permanent experiences.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
