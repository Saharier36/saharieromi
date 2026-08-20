"use client";

import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import styles from "./skill-chip.module.css";

interface SkillChipProps {
  name: string;
  logo: StaticImageData;
  colors: [string, string];
  monochrome?: boolean;
}

export function SkillChip({ name, logo, colors, monochrome }: SkillChipProps) {
  const style = {
    "--c1": colors[0],
    "--c2": colors[1],
  } as CSSProperties;

  return (
    <div
      className={`${styles.chip} inline-flex w-fit items-center gap-2 px-4 py-1.5`}
      style={style}
    >
      <Image
        src={logo}
        alt={name}
        width={16}
        height={16}
        className={`h-4 w-4 shrink-0 object-contain ${
          monochrome ? "dark:invert" : ""
        }`}
      />

      <span className="font-body whitespace-nowrap text-sm font-medium text-text-secondary">
        {name}
      </span>
    </div>
  );
}
