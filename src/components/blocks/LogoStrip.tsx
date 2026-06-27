"use client";

import { motion } from "framer-motion";

interface LogoStripProps {
  logos?: { name: string; src?: string }[];
}

const defaultLogos = [
  "Brand A", "Brand B", "Brand C", "Brand D",
  "Brand E", "Brand F", "Brand G", "Brand H",
];

export function LogoStrip({ logos }: LogoStripProps) {
  const items = logos || defaultLogos;
  const doubled = [...items, ...items];

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="grid-container">
        <p className="text-center caption text-inkwell/50 mb-8">
          Trusted by leading brands and venues
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-10 md:gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubled.map((logo, i) => (
              <div
                key={i}
                className="shrink-0 h-8 flex items-center text-inkwell/30 font-medium text-sm tracking-wider"
              >
                {typeof logo === "string" ? logo : logo.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
