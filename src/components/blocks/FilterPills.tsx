"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterPill {
  label: string;
  content: React.ReactNode;
}

interface FilterPillsProps {
  eyebrow?: string;
  pills: FilterPill[];
}

export function FilterPills({ eyebrow = "View use cases", pills }: FilterPillsProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ecru py-20 md:py-28">
      <div className="grid-container">
        <p className="text-center caption text-inkwell/60 mb-8">{eyebrow}</p>
        <div
          className="flex flex-wrap justify-center gap-x-1 gap-y-2 mb-12 border-b border-mist/40 max-w-[900px] mx-auto"
          role="tablist"
        >
          {pills.map((pill, i) => (
            <button
              key={pill.label}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "relative px-4 md:px-5 py-3 text-sm font-medium transition-colors min-h-[44px]",
                i === active
                  ? "text-inkwell"
                  : "text-inkwell/45 hover:text-inkwell/70"
              )}
            >
              {pill.label}
              {i === active && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-cobalt"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid md:grid-cols-2 gap-6"
          >
            {pills[active]?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
