import { RibbonMeshBackground } from "@/components/ui-custom/ribbon-mesh-background";
import { ShuffleRotatingText } from "@/components/ui-custom/shuffle-rotating-text";

const ROLES = ["Full-Stack", "Frontend", "Next.js"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-88px)] w-full overflow-hidden"
    >
      <RibbonMeshBackground />

      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="font-display text-6xl leading-none text-text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          <ShuffleRotatingText words={ROLES} /> Developer
        </h1>

        <p className="font-body max-w-2xl text-base text-text-secondary sm:text-lg">
          I build full-stack web applications for businesses that need more than
          a simple website — from marketplaces and booking platforms to secure,
          scalable products built to solve real-world problems.
        </p>
      </div>
    </section>
  );
}
