"use client";

import Link from "next/link";
import { PoppyFrame } from "./PoppyFrame";
import { FadeIn } from "./FadeIn";

interface ConversionPanelProps {
  headline: string;
  ctaLabel: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function ConversionPanel({
  headline,
  ctaLabel,
  ctaHref = "/get-a-demo",
  imageSrc = "/placeholder.svg",
  imageAlt = "",
}: ConversionPanelProps) {
  return (
    <section className="bg-ecru py-16 md:py-24">
      <div className="grid-container">
        <div className="relative bg-cobalt rounded-2xl overflow-hidden shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-poppy/10 pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            <FadeIn direction="left">
              <h2 className="heading-1 text-white max-w-[500px]">
                {headline}
              </h2>
              <Link
                href={ctaHref}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-inkwell text-sm font-medium hover:bg-white/90 hover:shadow-elevated transition-all mt-8 min-h-[44px]"
              >
                {ctaLabel}
              </Link>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="relative mt-6 md:mt-0">
                <div className="relative rounded-md overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <PoppyFrame />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
