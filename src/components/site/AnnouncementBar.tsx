"use client";

import { useState, useSyncExternalStore } from "react";
import { Globe, X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "floats-announcement-dismissed";
const subscribe = () => () => {};

interface AnnouncementBarProps {
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function AnnouncementBar({
  message = "New: realmspace v2 is live — see your first activation in plain English.",
  ctaLabel = "See how it works",
  ctaHref = "/products/realmspace",
}: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);
  const isHydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const wasPreviouslyDismissed =
    isHydrated && localStorage.getItem(STORAGE_KEY) === "true";

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (!isHydrated || dismissed || wasPreviouslyDismissed) return null;

  return (
    <div className="bg-cobalt text-white h-12 md:h-14">
      <div className="grid-container flex items-center justify-between h-full">
        <div className="flex items-center gap-3 text-sm md:text-[15px]">
          <Globe className="size-4 shrink-0" />
          <span className="truncate">{message}</span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={ctaHref}
            className={cn(
              "inline-flex items-center px-4 py-1.5 rounded-full",
              "bg-white text-inkwell text-sm font-medium",
              "hover:bg-white/90 transition-colors"
            )}
          >
            {ctaLabel}
          </a>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Dismiss announcement"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
