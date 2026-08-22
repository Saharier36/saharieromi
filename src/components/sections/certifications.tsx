"use client";

import { SpotlightCard } from "@/components/ui-custom/spotlight-card";
import { TechIcon } from "@/components/ui-custom/tech-icon";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            <span className="text-accent">Certifications</span>
          </h2>

          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.08,
              }}
            >
              <SpotlightCard className="group relative flex flex-col gap-3 p-5 sm:p-6">
                <span className="bg-accent absolute top-0 left-0 h-full w-0.5 scale-y-50 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={cert.organizationLogo}
                      alt={cert.organization}
                      width={28}
                      height={28}
                      className={`h-7 w-7 object-contain ${
                        cert.organizationLogoMonochrome ? "dark:invert" : ""
                      }`}
                    />

                    <h3 className="font-display text-lg font-bold  sm:text-xl">
                      {cert.organization}
                    </h3>
                  </div>

                  <span className="font-body shrink-0 text-xs text-text-muted sm:text-sm">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <p className="font-body text-sm font-medium text-text-primary sm:text-base">
                    {cert.courseTitle}
                  </p>

                  <p className="font-body text-xs text-text-muted">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <TechIcon key={skill.name} {...skill} />
                  ))}
                </div>

                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-1 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-all duration-300 hover:text-accent-hover hover:underline hover:underline-offset-4"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
