"use client";
import profileImage from "@/assets/Images/profile.png";
import { BorderGlow } from "@/components/ui-custom/border-glow";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Months Experience", value: "7+" },
  { label: "Certifications", value: "3+" },
  { label: "Technologies", value: "8+" },
];

export function About() {
  return (
    <section
      id="about"
      className="w-full overflow-x-clip px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto shrink-0"
          >
            <div className="border-accent h-48 w-48 overflow-hidden rounded-full border-4 sm:h-56 sm:w-56 md:h-64 md:w-64">
              <Image
                src={profileImage}
                alt="Golam Saharier Omi"
                width={256}
                height={256}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <span className="bg-bg-secondary border-border absolute right-2 bottom-2 flex items-center gap-1.5 rounded-full border px-3 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="font-body text-xs font-medium text-text-primary">
                Available for Work
              </span>
            </span>
          </motion.div>

          {/* About text + stats */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="font-body text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              I&apos;m Golam Shaharier Omi, a{" "}
              <span className="font-semibold text-text-primary">
                Full-Stack Developer
              </span>{" "}
              from Dhaka, Bangladesh, focused on building{" "}
              <span className="font-semibold text-text-primary">
                secure, high-performance web applications
              </span>
              . With hands-on experience across modern frontend and backend
              development, I turn real-world requirements into clean, scalable
              solutions. My work on{" "}
              <span className="font-semibold text-text-primary">LegalEase</span>{" "}
              reflects my focus on secure architecture, seamless user
              experiences, and{" "}
              <span className="font-semibold text-text-primary">
                production-ready development
              </span>
              .
            </motion.p>

            {/* Bento stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2 + i * 0.08,
                  }}
                >
                  <BorderGlow className="h-full">
                    <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 text-center">
                      <span className="font-display text-2xl font-bold text-accent sm:text-3xl">
                        {stat.value}
                      </span>

                      <span className="font-body text-xs text-text-muted sm:text-sm">
                        {stat.label}
                      </span>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
