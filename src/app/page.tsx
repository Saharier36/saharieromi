import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Skills/>
      </main>
    </div>
  );
}
