"use client";

import { SpotlightCard } from "@/components/ui-custom/spotlight-card";
import { education } from "@/data/education";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section
      id="education"
      className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            <span className="text-accent">Education</span>
          </h2>
          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {education.map((entry, i) => (
            <motion.div
              key={entry.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <SpotlightCard className="group relative flex flex-col gap-2 p-5 sm:p-6">
                <span className="bg-accent absolute top-0 left-0 h-full w-0.5 scale-y-50 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100" />

                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    {entry.institution}
                  </h3>
                  <p className="font-body text-sm font-medium text-text-secondary sm:text-base">
                    {entry.degree}
                  </p>
                  <p className="font-body text-xs text-text-muted sm:text-sm">
                    {entry.college}
                    {entry.college ? " | " : ""}
                    {entry.period}
                  </p>
                </div>

                <p className="font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                  {entry.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
