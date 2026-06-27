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
          "rounded-[24px] p-8",
          variant === "ecru" ? "bg-ecru" : "bg-mist",
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
