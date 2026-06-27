"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { PoppyFrame } from "./PoppyFrame";
import { FadeIn } from "./FadeIn";

interface HeroSplitProps {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  floatingCard?: ReactNode;
}

export function HeroSplit({
  eyebrow,
  headline,
  body,
  primaryCta,
  secondaryCta,
  imageSrc = "/placeholder.svg",
  imageAlt = "",
  floatingCard,
}: HeroSplitProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="grid-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn direction="left">
            <p className="micro text-cobalt mb-4">{eyebrow}</p>
            <h1 className="heading-1 text-inkwell">{headline}</h1>
            <p className="body-lg text-inkwell/70 mt-5 max-w-[65ch]">
              {body}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center px-6 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center px-6 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <div className="relative rounded-md overflow-hidden">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto object-cover rounded-md"
                />
                <PoppyFrame />
              </div>
              {floatingCard && (
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6">
                  {floatingCard}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
