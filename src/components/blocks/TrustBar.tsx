"use client";

import { FadeIn } from "./FadeIn";

interface StatItem {
  number: string;
  label: string;
}

interface Badge {
  name: string;
}

interface TrustBarProps {
  stats: StatItem[];
  badges: Badge[];
}

export function TrustBar({ stats, badges }: TrustBarProps) {
  return (
    <section className="bg-ecru py-20 md:py-28">
      <div className="grid-container">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="display-sm text-cobalt">{stat.number}</p>
                <p className="caption text-inkwell/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="border-t border-mist/30 pt-8">
            <p className="text-center caption text-inkwell/50 mb-6">
              Compliance and certifications
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {badges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-2 text-sm text-inkwell/60"
                >
                  <svg className="size-4 text-cobalt shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {badge.name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
