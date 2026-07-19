"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface StatCardProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "ecru" | "mist";
  delay?: number;
}

export function StatCard({
  icon,
  children,
  className,
  variant = "ecru",
  delay = 0,
}: StatCardProps) {
  return (
    <FadeIn delay={delay}>
      <div
        className={cn(
          "rounded-2xl p-6 md:p-8 border border-transparent transition-all duration-300",
          variant === "ecru"
            ? "bg-ecru hover:border-mist/40"
            : "bg-mist/60 hover:border-cobalt/10",
          className
        )}
      >
        {icon && <div className="mb-4">{icon}</div>}
        <div className="body-default text-inkwell leading-relaxed">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}
