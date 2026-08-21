import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import { Component, Sparkles } from "lucide-react";

import javascriptLogo from "@/assets/logos/javascript.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import reactLogo from "@/assets/logos/react.svg";
import expressjsLogo from "@/assets/logos/expressjs.png";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import stripeLogo from "@/assets/logos/stripe.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import shadcnLogo from "@/assets/logos/shadcn-ui.svg";
import framerLogo from "@/assets/logos/framer.svg";
import daisyuiLogo from "@/assets/logos/daisyui.svg";

import legaleaseImage from "@/assets/Images/legalease.png";
import studynookImage from "@/assets/Images/studynook.png";
import qurbanihatImage from "@/assets/Images/qurbanihat.png";
import rydoImage from "@/assets/Images/rydo.png";
import modelnestaiImage from "@/assets/Images/modelnestai.png";
import thedragonnewsImage from "@/assets/Images/thedragonnews.png";

export interface TechItem {
  name: string;
  logo?: StaticImageData;
  icon?: LucideIcon;
  monochrome?: boolean;
}

const JS: TechItem = { name: "JavaScript", logo: javascriptLogo };
const TS: TechItem = { name: "TypeScript", logo: typescriptLogo };
const NEXT: TechItem = { name: "Next.js", logo: nextjsLogo, monochrome: true };
const REACT: TechItem = { name: "React", logo: reactLogo };
const EXPRESS: TechItem = {
  name: "Express.js",
  logo: expressjsLogo,
  monochrome: true,
};
const MONGO: TechItem = { name: "MongoDB", logo: mongodbLogo };
const STRIPE: TechItem = { name: "Stripe", logo: stripeLogo };
const TAILWIND: TechItem = { name: "Tailwind CSS", logo: tailwindLogo };
const SHADCN: TechItem = {
  name: "Shadcn UI",
  logo: shadcnLogo,
  monochrome: true,
};
const FRAMER: TechItem = { name: "Framer Motion", logo: framerLogo };
const DAISYUI: TechItem = { name: "DaisyUI", logo: daisyuiLogo };

const HEROUI: TechItem = { name: "HeroUI", icon: Component };
const GEMINI: TechItem = { name: "Gemini AI", icon: Sparkles };

export interface Project {
  slug: string;
  name: string;
  image: StaticImageData;
  benefits: [string, string];
  tech: TechItem[];
  liveUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    slug: "legalease",
    name: "LegalEase",
    image: legaleaseImage,
    benefits: [
      "Multi-role platform (Client/Lawyer/Admin) with secure authentication",
      "Stripe-integrated hiring workflow with real-time payment tracking",
    ],
    tech: [JS, NEXT, REACT, EXPRESS, MONGO, STRIPE],
    liveUrl: "https://legalease-lovat.vercel.app/",
    repoUrl: "https://github.com/Saharier36/legalease-client",
  },
  {
    slug: "studynook",
    name: "StudyNook",
    image: studynookImage,
    benefits: [
      "Advanced booking system with automatic conflict detection",
      "Owner-only room CRUD operations with protected routes",
    ],
    tech: [JS, NEXT, REACT, EXPRESS, MONGO, TAILWIND],
    liveUrl: "https://studynook-zeta.vercel.app/",
    repoUrl: "https://github.com/Saharier36/studynook-client",
  },
  {
    slug: "qurbanihat",
    name: "QurbaniHat",
    image: qurbanihatImage,
    benefits: [
      "Detailed animal listings with breed discovery features",
      "Responsive UI with smooth React Spring animations",
    ],
    tech: [JS, NEXT, REACT, MONGO, HEROUI, TAILWIND],
    liveUrl: "https://qurbani-hat-pied.vercel.app/",
    repoUrl: "https://github.com/Saharier36/Qurbani-Hat",
  },
  {
    slug: "rydo",
    name: "Rydo",
    image: rydoImage,
    benefits: [
      "AI smart recommendations and interactive chat assistant (RydoBot)",
      "Conflict-aware booking calendar with instant confirmation",
    ],
    tech: [TS, NEXT, MONGO, GEMINI, TAILWIND],
    liveUrl: "https://rydo-rho.vercel.app/",
    repoUrl: "https://github.com/Saharier36/Rydo",
  },
  {
    slug: "modelnestai",
    name: "ModelNestAI",
    image: modelnestaiImage,
    benefits: [
      "Advanced search, filter, and pagination system for listings",
      "Secure dashboards for users to add and manage their AI tools",
    ],
    tech: [TS, NEXT, MONGO, SHADCN, FRAMER],
    liveUrl: "https://modelnest-ai.vercel.app/",
    repoUrl: "https://github.com/Saharier36/ModelNestAI",
  },
  {
    slug: "thedragonnews",
    name: "The Dragon News",
    image: thedragonnewsImage,
    benefits: [
      "Real-time marquee for breaking news updates",
      "Personalized user dashboard with robust form validation",
    ],
    tech: [JS, NEXT, REACT, TAILWIND, DAISYUI, MONGO],
    liveUrl: "https://the-dragon-news-kappa.vercel.app/",
    repoUrl: "https://github.com/Saharier36/The-Dragon-News",
  },
];
