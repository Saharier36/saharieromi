"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, type MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";

interface TechIconProps {
  name: string;
  logo?: StaticImageData;
  icon?: LucideIcon;
  monochrome?: boolean;
}

export function TechIcon({
  name,
  logo,
  icon: FallbackIcon,
  monochrome,
}: TechIconProps) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="bg-bg-tertiary/40 relative flex h-7 w-7 items-center justify-center rounded-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
    >
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={16}
          height={16}
          className={`h-4 w-4 object-contain ${monochrome ? "dark:invert" : ""}`}
        />
      ) : FallbackIcon ? (
        <FallbackIcon
          className="h-4 w-4 text-text-secondary"
          strokeWidth={1.75}
        />
      ) : null}

      {hovered && (
        <span
          className="bg-bg-primary border-border text-text-primary pointer-events-none absolute z-20 rounded-md border px-2 py-1 text-xs whitespace-nowrap shadow-lg"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -140%)",
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
}
