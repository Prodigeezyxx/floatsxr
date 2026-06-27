"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { ScreenshotFrame } from "./ScreenshotFrame";

interface FeatureCalloutProps {
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}

export function FeatureCallout({
  headline,
  body,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: FeatureCalloutProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="grid-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn direction="left">
            <h2 className="heading-1 text-inkwell">{headline}</h2>
            <p className="body-lg text-inkwell/70 mt-4 max-w-[65ch]">{body}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center px-5 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors min-h-[44px]"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center px-5 py-3 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors min-h-[44px]"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-3 bg-cobalt/5 rounded-2xl blur-xl pointer-events-none" />
              <ScreenshotFrame
                src={imageSrc}
                alt={imageAlt}
                className="relative"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
