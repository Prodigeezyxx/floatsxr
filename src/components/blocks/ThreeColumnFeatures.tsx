"use client";

import Link from "next/link";
import { StaggerContainer, StaggerItem } from "./FadeIn";

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
        <StaggerContainer className="grid gap-5 md:grid-cols-3 md:gap-6">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <Link
                href={f.linkHref ?? "#"}
                className="surface-card group block h-full p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-elevated md:p-8"
              >

                <h3 className="heading-3 text-inkwell mb-3 group-hover:text-cobalt transition-colors duration-300">{f.title}</h3>
                <p className="caption text-inkwell/65 mb-5 leading-relaxed">
                  {f.body}
                </p>
                {f.linkLabel && (
                  <span className="link-arrow translate-y-0.5 opacity-70 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span>{f.linkLabel}</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                )}
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
