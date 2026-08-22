import type { StaticImageData } from "next/image";

import anthropicLogo from "@/assets/logos/anthropic.svg";
import claudeLogo from "@/assets/logos/claude.svg";
import freecodecampLogo from "@/assets/logos/freecodecamp.svg";
import javascriptLogo from "@/assets/logos/javascript.svg";
import reactLogo from "@/assets/logos/react.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";

export interface CertSkill {
  name: string;
  logo: StaticImageData;
  monochrome?: boolean;
}

export interface Certification {
  organization: string;
  organizationLogo: StaticImageData;
  organizationLogoMonochrome?: boolean;
  courseTitle: string;
  date: string;
  credentialId: string;
  certificateUrl: string;
  skills: CertSkill[];
}

export const certifications: Certification[] = [
  {
    organization: "freeCodeCamp",
    organizationLogo: freecodecampLogo,
    organizationLogoMonochrome: true,
    courseTitle: "Frontend Development Libraries",
    date: "Aug 2026",
    credentialId: "saharier-omi-felv9",
    certificateUrl:
      "https://freecodecamp.org/certification/saharier-omi/front-end-development-libraries-v9",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "React", logo: reactLogo },
    ],
  },
  {
    organization: "Anthropic",
    organizationLogo: anthropicLogo,
    organizationLogoMonochrome: true,
    courseTitle: "Al Fluency Framework & Foundations",
    date: "July 2026",
    credentialId: "jah4frx86d82",
    certificateUrl: "https://verify.skilljar.com/c/jah4frx86d82",
    skills: [{ name: "claude", logo: claudeLogo }],
  },
];
