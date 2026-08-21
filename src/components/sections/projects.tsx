"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { SpotlightCard } from "@/components/ui-custom/spotlight-card";
import { TechIcon } from "@/components/ui-custom/tech-icon";

export function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            My <span className="text-accent">Projects</span>
          </h2>

          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.06,
              }}
            >
              <SpotlightCard className="flex h-full flex-col">
                <div className="relative h-32 w-full overflow-hidden rounded-t-2xl sm:h-36">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-4">
                  <h3 className="font-display text-base font-bold text-text-primary">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <TechIcon key={tech.name} {...tech} />
                    ))}
                  </div>

                  <ul className="flex flex-col gap-1">
                    {project.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="font-body flex items-start gap-1.5 text-xs leading-snug text-text-secondary"
                      >
                        <span className="bg-accent mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="border-border mt-auto flex items-center gap-3 border-t pt-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                      className="text-text-secondary transition-colors hover:text-accent"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live site`}
                      className="text-text-secondary transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
