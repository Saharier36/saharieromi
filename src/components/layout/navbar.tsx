"use client";

import { LetterSwap } from "@/components/ui-custom/letter-swap";
import { ThemeToggle } from "@/components/ui-custom/theme-toggle";
import { SpecularButton } from "@/components/ui-custom/specular-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const RESUME_URL =
  "https://drive.google.com/file/d/1N7QZ5iwzXwKfAKW4Fl9uKWeHEm4B54NM/view?usp=sharing";

const mainLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const moreLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

const allLinksForMobile = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMore = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMoreOpen(true);
  };

  const scheduleCloseMore = () => {
    closeTimer.current = setTimeout(() => setMoreOpen(false), 150);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-bg-primary/80 px-6 py-5 backdrop-blur-md sm:px-10">
      <Link href="/" className="font-logo text-xl text-text-primary">
        SAHARIER OMI
      </Link>

      <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
        <div className="hidden items-center gap-6 lg:flex">
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <LetterSwap
                label={link.label}
                className="font-body text-sm text-text-secondary hover:text-accent"
              />
            </a>
          ))}

          <DropdownMenu open={moreOpen} onOpenChange={setMoreOpen}>
            <DropdownMenuTrigger
              onMouseEnter={openMore}
              onMouseLeave={scheduleCloseMore}
              className="flex cursor-pointer items-center gap-1 font-body text-sm text-text-secondary outline-none transition-colors hover:text-accent"
            >
              More
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.75} />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              onMouseEnter={openMore}
              onMouseLeave={scheduleCloseMore}
              className="bg-bg-secondary border-border"
            >
              {moreLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  render={
                    <a
                      href={link.href}
                      className="font-body cursor-pointer text-text-secondary hover:text-accent"
                    />
                  }
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />

        <div className="hidden sm:inline-block">
          <SpecularButton
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            radius={999}
            tint="#3d52d5"
            tintHover="#090c9b"
            tintOpacity={1}
            textColor="var(--on-accent)"
            lineColor="#fbfff1"
            baseColor="#b4c5e4"
            shineSize={14}
            shineFade={35}
            proximity={200}
          >
            View Resume
          </SpecularButton>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent lg:hidden"
              />
            }
          >
            <Menu className="h-4 w-4" strokeWidth={1.75} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-bg-primary border-border flex flex-col px-6 py-8"
          >
            <div className="flex flex-col gap-1">
              {allLinksForMobile.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="font-body rounded-lg px-3 py-3 text-lg text-text-secondary transition-colors hover:bg-bg-secondary hover:text-accent"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </div>

            <div className="border-border mt-8 flex justify-center border-t pt-6">
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border/60 bg-accent px-8 py-3 text-center font-body text-sm text-on-accent shadow-[0_0_20px_var(--accent-subtle)] transition-colors hover:bg-accent-hover"
                  />
                }
              >
                Resume View
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
