import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Saharier36",
    icon: FaGithub,
    colorClassName: "text-text-primary",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saharier-omi/",
    icon: FaLinkedin,
    colorClassName: "text-[#0A66C2]",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/SaharierX36",
    icon: FaXTwitter,
    colorClassName: "text-text-primary",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/saharier.omi/",
    icon: FaInstagram,
    colorClassName: "text-[#E1306C]",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=gsaharier761@gmail.com",
    icon: Mail,
    colorClassName: "text-[#EA4335]",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`${link.colorClassName} transition-transform hover:scale-110`}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
