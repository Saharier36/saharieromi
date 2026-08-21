import type { StaticImageData } from "next/image";

import daisyuiLogo from "@/assets/logos/daisyui.svg";
import expressjsLogo from "@/assets/logos/expressjs.png";
import framerLogo from "@/assets/logos/framer.svg";
import geminiLogo from "@/assets/logos/gemini.svg";
import heroUILogo from "@/assets/logos/heroui.png";
import javascriptLogo from "@/assets/logos/javascript.svg";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import reactLogo from "@/assets/logos/react.svg";
import shadcnLogo from "@/assets/logos/shadcn-ui.svg";
import stripeLogo from "@/assets/logos/stripe.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";

import legaleaseImage from "@/assets/Images/legalease.png";
import modelnestaiImage from "@/assets/Images/modelnestai.png";
import qurbanihatImage from "@/assets/Images/qurbanihat.png";
import rydoImage from "@/assets/Images/rydo.png";
import studynookImage from "@/assets/Images/studynook.png";
import thedragonnewsImage from "@/assets/Images/thedragonnews.png";

export interface TechItem {
  name: string;
  logo?: StaticImageData;
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
const FRAMER: TechItem = {
  name: "Framer Motion",
  logo: framerLogo,
  monochrome: true,
};
const DAISYUI: TechItem = { name: "DaisyUI", logo: daisyuiLogo };

const HEROUI: TechItem = { name: "HeroUI", logo: heroUILogo, monochrome: true };
const GEMINI: TechItem = { name: "Gemini AI", logo: geminiLogo };

export interface Project {
  slug: string;
  name: string;
  tagline: string;
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
    tagline: "Online Lawyer Hiring & Legal Service Marketplace.",
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
    tagline: "Modern Study Room Booking Platform.",
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
    tagline: "Digital Marketplace for Qurbani Animals.",
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
    tagline: "AI-powered peer-to-peer car & bike rental marketplace.",
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
    tagline:
      "Marketplace to discover, buy, & sell discounted AI model subscriptions.",
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
    tagline: "Modern, responsive news website with categorized articles.",
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
