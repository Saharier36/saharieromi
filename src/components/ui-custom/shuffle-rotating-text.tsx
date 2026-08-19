"use client";

import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ShuffleRotatingTextProps {
  words: string[];
  interval?: number;
  scrambleDuration?: number;
  className?: string;
}

export function ShuffleRotatingText({
  words,
  interval = 2200,
  scrambleDuration = 500,
  className,
}: ShuffleRotatingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState(words[0] ?? "");
  const frameRef = useRef<number | null>(null);

  // Advance to the next word on a timer
  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  // Scramble-reveal the new word, left to right, whenever it changes
  useEffect(() => {
    const target = words[wordIndex] ?? "";
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / scrambleDuration, 1);
      const lockedCount = Math.floor(progress * target.length);

      let next = "";
      for (let i = 0; i < target.length; i++) {
        if (i < lockedCount) {
          next += target[i];
        } else {
          next += SCRAMBLE_CHARSET.charAt(
            Math.floor(Math.random() * SCRAMBLE_CHARSET.length),
          );
        }
      }
      setDisplay(next);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [wordIndex, words, scrambleDuration]);

  return (
    <span
      className={className}
      style={{ display: "inline-block", minWidth: "1ch" }}
    >
      {display}
    </span>
  );
}
