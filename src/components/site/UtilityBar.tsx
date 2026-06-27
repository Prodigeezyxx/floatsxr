"use client";

import { Search, Phone, HelpCircle, FileText, LogIn } from "lucide-react";

interface UtilityBarProps {
  eventName?: string;
}

export function UtilityBar({
  eventName = "SXSW 2026",
}: UtilityBarProps) {
  return (
    <div className="bg-deep-violet h-10 hidden md:flex">
      <div className="grid-container flex items-center justify-between h-full w-full">
        <div className="flex items-center gap-3">
          <span className="bg-cobalt text-white text-[11px] font-medium px-2 py-0.5 rounded-sm leading-none">
            NEW
          </span>
          <span className="text-mist text-[13px]">
            Live now at {eventName} —{" "}
            <a href="/get-a-demo" className="underline hover:no-underline">
              see the live dashboard
            </a>
          </span>
        </div>
        <div className="flex items-center gap-5 text-mist text-[13px]">
          <a href="tel:+18005551234" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="size-3" />
            Sales: +1 (800) 555-1234
          </a>
          <a href="/search" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Search className="size-3" />
            Search
          </a>
          <a href="/support" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <HelpCircle className="size-3" />
            Support
          </a>
          <a href="/support/knowledge-base" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <FileText className="size-3" />
            Access Documents
          </a>
          <a href="/contact-sales" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <LogIn className="size-3" />
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
