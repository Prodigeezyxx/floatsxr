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
        <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <Link
                href={f.linkHref ?? "#"}
                className="group block h-full rounded-xl border border-mist/20 bg-white p-6 md:p-8 hover:border-cobalt/20 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
              >

                <h3 className="heading-3 text-inkwell mb-3 group-hover:text-cobalt transition-colors duration-300">{f.title}</h3>
                <p className="caption text-inkwell/65 mb-5 leading-relaxed">
                  {f.body}
                </p>
                {f.linkLabel && (
                  <span className="link-arrow opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
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
