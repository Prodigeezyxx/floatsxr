"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

interface Feature {
  title: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
}

interface ThreeColumnFeaturesProps {
  features: Feature[];
}

export function ThreeColumnFeatures({ features }: ThreeColumnFeaturesProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="grid-container">
        <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <StaggerItem key={f.title}>
              <div className="group h-full border-l-2 border-cobalt/20 pl-6 md:pl-8 py-2 hover:border-cobalt/60 transition-colors duration-300">
                <span className="block text-[11px] font-medium tracking-[0.12em] text-cobalt/50 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-3 text-inkwell mb-3">{f.title}</h3>
                <p className="caption text-inkwell/65 mb-5 max-w-[45ch] leading-relaxed">
                  {f.body}
                </p>
                {f.linkLabel && f.linkHref && (
                  <Link
                    href={f.linkHref}
                    className="link-arrow group-hover:underline"
                  >
                    <span>{f.linkLabel}</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
