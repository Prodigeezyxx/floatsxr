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
        <p className="text-center caption text-inkwell/60 mb-6">{eyebrow}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {pills.map((pill, i) => (
            <button
              key={pill.label}
              onClick={() => setActive(i)}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors min-h-[44px] flex items-center",
                i === active
                  ? "text-white"
                  : "bg-mist text-inkwell hover:bg-mist/70"
              )}
            >
              {i === active && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-cobalt rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{pill.label}</span>
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
