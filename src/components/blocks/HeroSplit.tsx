"use client";

import { ReactNode } from "react";
import Image from "next/image";
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
    <section className="gradient-mesh border-b border-mist/20 py-20 md:py-28">
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
                className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-6 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-cobalt/90 hover:shadow-glow"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex min-h-11 items-center rounded-lg border border-cobalt/35 bg-white/55 px-6 text-sm font-medium text-cobalt backdrop-blur-sm transition-all hover:border-cobalt/60 hover:bg-white"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/60 shadow-elevated">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
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
