"use client";

import { RibbonMeshBackground } from "@/components/ui-custom/ribbon-mesh-background";
import { ShinyText } from "@/components/ui-custom/shiny-text";
import { ShuffleRotatingText } from "@/components/ui-custom/shuffle-rotating-text";
import { SpecularButton } from "@/components/ui-custom/specular-button";
import { ChevronDown, LayoutGrid, Mouse, Send } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SocialLinks } from "../ui-custom/social-links";

const ROLES = ["Full-Stack", "Frontend", "Next.js"];

const BUTTON_COLORS = {
  light: {
    projectsBase: "#3c3744",
    touchLine: "#111111",
    touchBase: "#3c3744",
  },
  dark: {
    projectsBase: "#b4c5e4",
    touchLine: "#ffffff",
    touchBase: "#b4c5e4",
  },
};

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Default to dark-mode colors until mounted, matching defaultTheme="dark"
  const isLight = mounted && resolvedTheme === "light";
  const colors = isLight ? BUTTON_COLORS.light : BUTTON_COLORS.dark;

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-88px)] w-full overflow-hidden"
    >
      <RibbonMeshBackground />

      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center gap-6 px-6 pb-20 pt-6 text-center">
        <ShinyText
          text="Hi, I'm Golam Saharier Omi"
          className="font-display text-xl font-bold tracking-[0.1em] uppercase sm:text-2xl md:text-3xl"
          color="var(--text-secondary)"
          shineColor="var(--shine-color)"
          speed={2.5}
          spread={100}
        />

        <h1 className="font-display text-6xl leading-none text-text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          <ShuffleRotatingText words={ROLES} />{" "}
          <span className="text-accent">Developer</span>
        </h1>

        <p className="font-body max-w-2xl text-base font-medium text-text-secondary sm:text-lg">
          I build modern, scalable web applications tailored to your needs —
          turning ideas and real-world requirements into secure,
          high-performance digital solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <SpecularButton
            href="#projects"
            size="sm"
            radius={999}
            tint="#3d52d5"
            tintOpacity={0.15}
            blur={8}
            textColor="var(--accent)"
            lineColor="#3d52d5"
            baseColor={colors.projectsBase}
            shineSize={14}
            shineFade={35}
            proximity={220}
          >
            <LayoutGrid className="h-4 w-4" strokeWidth={1.75} />
            View Projects
          </SpecularButton>

          <SpecularButton
            href="#contact"
            size="sm"
            radius={999}
            tint="var(--bg-secondary)"
            tintOpacity={0.4}
            blur={8}
            textColor="var(--text-primary)"
            lineColor={colors.touchLine}
            baseColor={colors.touchBase}
            shineSize={14}
            shineFade={35}
            proximity={220}
          >
            <Send className="h-4 w-4" strokeWidth={1.75} />
            Get in Touch
          </SpecularButton>
        </div>

        <SocialLinks />
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer text-muted-foreground/50 hover:text-primary transition-colors animate-bounce"
      >
        <Mouse className="h-5 w-5" strokeWidth={1.5} />
        <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
      </a>
    </section>
  );
}
