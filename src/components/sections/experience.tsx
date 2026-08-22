"use client";

import { SpotlightCard } from "@/components/ui-custom/spotlight-card";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section
      id="experience"
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
            Work <span className="text-accent">Experience</span>
          </h2>
          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {experience.map((entry, i) => (
            <motion.div
              key={`${entry.company}-${entry.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <SpotlightCard className="group relative flex flex-col gap-2 p-5 sm:p-6">
                <span className="bg-accent absolute top-0 left-0 h-full w-0.5 scale-y-50 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100" />

                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="font-display text-lg font-bold text-text-primary sm:text-xl">
                      {entry.role}
                    </h3>
                    <p className="font-body text-sm text-text-muted">
                      {entry.company}
                    </p>
                  </div>
                  <span className="font-body shrink-0 text-xs text-text-muted sm:text-sm">
                    {entry.period}
                  </span>
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
