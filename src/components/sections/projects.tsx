"use client";

import { GlassButton } from "@/components/ui-custom/glass-button";
import { SpotlightCard } from "@/components/ui-custom/spotlight-card";
import { TechIcon } from "@/components/ui-custom/tech-icon";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import { RxExternalLink } from "react-icons/rx";

const GITHUB_PROJECTS_URL = "https://github.com/Saharier36?tab=repositories";

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
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
            >
              <SpotlightCard className="flex h-full flex-col">
                <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-44">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-text-primary">
                      {project.name}
                    </h3>
                    <p className="font-display mt-0.5 text-xs leading-snug text-text-secondary">
                      {project.tagline}
                    </p>
                  </div>

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

                  <div className="border-border mt-auto grid grid-cols-2 gap-2 border-t pt-3">
                    <GlassButton href={project.repoUrl} variant="neutral">
                      <FaGithub className="h-3.5 w-3.5" />
                      Code
                    </GlassButton>
                    <GlassButton href={project.liveUrl} variant="accent">
                      <PiLinkSimpleBold
                        className="h-3.5 w-3.5"
                        strokeWidth={1.75}
                      />
                      Live
                    </GlassButton>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6 flex justify-center sm:mt-8"
        >
          <Link
            href={GITHUB_PROJECTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-300 hover:underline hover:underline-offset-4"
          >
            View All Projects on GitHub
            <RxExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
