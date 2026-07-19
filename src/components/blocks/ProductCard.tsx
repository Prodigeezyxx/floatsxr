"use client";

import { cn } from "@/lib/utils";

interface ProductCardProps {
  lines: string[];
  className?: string;
}

/**
 * Floating product UI card — white card with subtle shadow,
 * tiny realmspace wordmark, and telemetry-style text lines.
 * Used as floating overlay on hero photos.
 */
export function ProductCard({ lines, className }: ProductCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-md shadow-card p-4 max-w-[220px]",
        className
      )}
    >
      <p className="text-[11px] font-medium text-cobalt/60 mb-2 tracking-wide">
        realmspace
      </p>
      <div className="space-y-1">
        {lines.map((line, i) => (
          <p key={i} className="text-[13px] leading-snug text-inkwell/80">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
