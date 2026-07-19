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
          <div className="border-t border-mist/30 pt-8 text-center">
            <p className="caption text-inkwell/50 mb-4">
              Compliance and certifications
            </p>
            <p className="text-sm text-inkwell/60 leading-relaxed max-w-[720px] mx-auto">
              {badges.map((badge, i) => (
                <span key={badge.name}>
                  {i > 0 && <span className="text-mist mx-2 md:mx-3">·</span>}
                  {badge.name}
                </span>
              ))}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
