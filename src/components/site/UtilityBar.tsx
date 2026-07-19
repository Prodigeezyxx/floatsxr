"use client";

import { Search, HelpCircle, FileText, LogIn } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="bg-deep-violet h-10 hidden md:flex">
      <div className="grid-container flex items-center justify-between h-full w-full">
        <div className="flex items-center gap-3">
          <span className="text-mist text-[13px]">
            <a href="/get-a-demo" className="underline hover:no-underline">
              See realmspace in action &rarr;
            </a>
          </span>
        </div>
        <div className="flex items-center gap-5 text-mist text-[13px]">
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
            Docs
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
