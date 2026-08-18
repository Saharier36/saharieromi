"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterSwapProps {
  label: string;
  className?: string;
  staggerDuration?: number;
}

export function LetterSwap({
  label,
  className,
  staggerDuration = 0.03,
}: LetterSwapProps) {
  const [hovered, setHovered] = useState(false);
  const letters = label.split("");

  return (
    <span
      className={cn("relative inline-flex overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="relative inline-block h-[1.1em] overflow-hidden"
        >
          <motion.span
            className="block"
            animate={{ y: hovered ? "-100%" : "0%" }}
            transition={{
              duration: 0.35,
              delay: i * staggerDuration,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute top-0 left-0 block"
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{
              duration: 0.35,
              delay: i * staggerDuration,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
