export interface EducationEntry {
  degree: string;
  institution: string;
  college?: string;
  period: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Arts in Islamic History and Culture",
    institution: "Dhaka Central University",
    college: "Kabi Nazrul Govt College",
    period: "2024 — Present",
    description:
      "A self-taught full-stack developer from an Arts background. This intensive self-study journey reflects my strong adaptability, continuous learning mindset, and true passion for software engineering.",
  },
];
