import type { StaticImageData } from "next/image";

import css3Logo from "@/assets/logos/css-3.svg";
import firebaseLogo from "@/assets/logos/firebase.svg";
import html5Logo from "@/assets/logos/html-5.svg";
import javascriptLogo from "@/assets/logos/javascript.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import reactLogo from "@/assets/logos/react.svg";
import shadcnLogo from "@/assets/logos/shadcn-ui.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";

import betterAuthLogo from "@/assets/logos/better-auth.svg";
import expressjsLogo from "@/assets/logos/expressjs.png";
import nodejsLogo from "@/assets/logos/nodejs.svg";
import vscodeLogo from "@/assets/logos/vscode.png";

import mongodbLogo from "@/assets/logos/mongodb.svg";
import postgresqlLogo from "@/assets/logos/postgresql.svg";
import postmanLogo from "@/assets/logos/postman.svg";
import prismaLogo from "@/assets/logos/prisma.svg";

import figmaLogo from "@/assets/logos/figma.svg";
import gitLogo from "@/assets/logos/git.svg";
import githubLogo from "@/assets/logos/github.svg";
import netlifyLogo from "@/assets/logos/netlify.svg";
import stripeLogo from "@/assets/logos/stripe.svg";
import vercelLogo from "@/assets/logos/vercel.svg";

export interface Skill {
  name: string;
  logo: StaticImageData;
  colors: [string, string];
  monochrome?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        logo: javascriptLogo,
        colors: ["#F7DF1E", "#F0DB4F"],
      },
      {
        name: "TypeScript",
        logo: typescriptLogo,
        colors: ["#3178C6", "#235A97"],
      },
      { name: "React", logo: reactLogo, colors: ["#61DAFB", "#00B4D8"] },
      {
        name: "Next.js",
        logo: nextjsLogo,
        colors: ["#3c3744", "#090c9b"],
        monochrome: true,
      },
      {
        name: "Tailwind CSS",
        logo: tailwindLogo,
        colors: ["#38BDF8", "#0EA5E9"],
      },
      {
        name: "Shadcn UI",
        logo: shadcnLogo,
        colors: ["#3c3744", "#090c9b"],
        monochrome: true,
      },
      { name: "HTML5", logo: html5Logo, colors: ["#E34F26", "#F16529"] },
      { name: "CSS3", logo: css3Logo, colors: ["#1572B6", "#33A9DC"] },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo, colors: ["#339933", "#3C873A"] },
      {
        name: "Express.js",
        logo: expressjsLogo,
        colors: ["#3c3744", "#090c9b"],
        monochrome: true,
      },
      {
        name: "Better Auth",
        logo: betterAuthLogo,
        colors: ["#3c3744", "#090c9b"],
        monochrome: true,
      },
      { name: "Firebase", logo: firebaseLogo, colors: ["#FFCA28", "#FF8F00"] },
      { name: "Postman", logo: postmanLogo, colors: ["#FF6C37", "#EF5B25"] },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: mongodbLogo, colors: ["#47A248", "#4FAA41"] },
      {
        name: "PostgreSQL",
        logo: postgresqlLogo,
        colors: ["#336791", "#4169E1"],
      },
      {
        name: "Prisma",
        logo: prismaLogo,
        colors: ["#2D3748", "#0C344B"],
        monochrome: true,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo, colors: ["#F05032", "#E44D26"] },
      {
        name: "GitHub",
        logo: githubLogo,
        colors: ["#3c3744", "#090c9b"],
        monochrome: true,
      },
      { name: "Stripe", logo: stripeLogo, colors: ["#635BFF", "#5851DB"] },
      {
        name: "Vercel",
        logo: vercelLogo,
        colors: ["#3c3744", "#090c9b"],
        monochrome: true,
      },
      { name: "Netlify", logo: netlifyLogo, colors: ["#00C7B7", "#0E92BF"] },
      { name: "Figma", logo: figmaLogo, colors: ["#A259FF", "#F24E1E"] },
      { name: "VS Code", logo: vscodeLogo, colors: ["#007ACC", "#0098FF"] },
    ],
  },
];
