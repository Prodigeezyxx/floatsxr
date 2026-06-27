"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

interface Feature {
  icon: ReactNode;
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
    <section className="bg-white py-20 md:py-28">
      <div className="grid-container">
        <StaggerContainer className="grid md:grid-cols-3 gap-10 md:gap-8">
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <div className="mb-4 text-inkwell">{f.icon}</div>
              <h3 className="heading-3 text-inkwell mb-3">{f.title}</h3>
              <p className="caption text-inkwell/70 mb-4 max-w-[45ch]">
                {f.body}
              </p>
              {f.linkLabel && f.linkHref && (
                <Link
                  href={f.linkHref}
                  className="text-cobalt text-sm font-medium inline-flex items-center gap-1 group"
                >
                  <span>{f.linkLabel}</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </Link>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
