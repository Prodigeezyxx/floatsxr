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
                <div className="size-10 rounded-lg bg-cobalt/5 flex items-center justify-center mb-5 group-hover:bg-cobalt/10 transition-colors duration-300">
                  <svg className="size-5 text-cobalt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {f.title === "Measure" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    )}
                    {f.title === "Prove" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    )}
                    {f.title === "Orchestrate" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    )}
                  </svg>
                </div>
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
