"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SkillChip } from "@/components/ui-custom/skill-chip";

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Skills & <span className="text-accent">Technologies</span>
          </h2>

          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {skillCategories.map((category, ci) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: ci * 0.05,
                }}
                className="font-display mb-3 text-lg font-semibold text-text-primary sm:text-xl"
              >
                {category.title}
              </motion.h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: si * 0.05,
                    }}
                    className="w-fit"
                  >
                    <SkillChip
                      name={skill.name}
                      logo={skill.logo}
                      colors={skill.colors}
                      monochrome={skill.monochrome}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
