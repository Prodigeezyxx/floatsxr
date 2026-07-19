"use client";

import Image from "next/image";
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
        <div className="relative overflow-hidden rounded-[1.5rem] bg-cobalt shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-poppy/10 pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            <FadeIn direction="left">
              <h2 className="heading-1 text-white max-w-[500px]">
                {headline}
              </h2>
              <Link
                href={ctaHref}
                className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-white px-6 text-sm font-medium text-inkwell transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-elevated"
              >
                {ctaLabel}
              </Link>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="relative mt-6 md:mt-0">
                <div className="relative overflow-hidden rounded-xl border border-white/15 shadow-elevated">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
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
