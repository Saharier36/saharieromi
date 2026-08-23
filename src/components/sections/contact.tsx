"use client";

import { BorderGlow } from "@/components/ui-custom/border-glow";
import { SpecularButton } from "@/components/ui-custom/specular-button";
import { SpinnerCustom } from "@/components/ui-custom/spinner";

import { motion } from "framer-motion";

import { Mail, MapPin, Phone, Send } from "lucide-react";

import { useTheme } from "next-themes";

import { useEffect, useState, type FormEvent } from "react";

import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Keraniganj, Dhaka, Bangladesh" },
  { icon: Mail, label: "Email", value: "gsaharier761@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1615647730" },
];

// Literal hex per theme — ogl's Color parser can't read CSS var()
const BTN_BASE = { light: "#3c3744", dark: "#b4c5e4" };

export function Contact() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  useEffect(() => setMounted(true), []);

  const baseColor =
    mounted && resolvedTheme === "light" ? BTN_BASE.light : BTN_BASE.dark;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent!", {
          description:
            "Thanks for reaching out. I'll get back to you as soon as possible!",
        });

        form.reset();
      } else {
        toast.error("Something went wrong", {
          description: "Please try again or email me directly.",
        });
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BorderGlow className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-6 p-6 sm:p-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                    Let’s Talk <span className="text-accent">Solutions</span>
                  </h3>

                  <p className="font-body mt-2 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
                    Have a new project in mind or an open Full-Stack role on
                    your team? Send a message below, and I&apos;ll get back to
                    you within one business day to discuss how we can
                    collaborate.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="bg-bg-tertiary/40 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                        <item.icon
                          className="h-4.5 w-4.5 text-accent"
                          strokeWidth={1.75}
                        />
                      </div>

                      <div>
                        <p className="font-body text-xs text-text-muted">
                          {item.label}
                        </p>

                        <p className="font-display text-sm font-medium text-text-primary">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-tertiary/25 border-border flex items-center border-t p-6 sm:p-8 lg:border-t-0 lg:border-l">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-3"
                >
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className="font-body text-xs font-medium text-text-primary"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-bg-secondary/60 border-border focus:ring-accent font-body rounded-lg border px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted focus:ring-2"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="font-body text-xs font-medium text-text-primary"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="bg-bg-secondary/60 border-border focus:ring-accent font-body rounded-lg border px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted focus:ring-2"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="message"
                      className="font-body text-xs font-medium text-text-primary"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Tell me about your project..."
                      className="bg-bg-secondary/60 border-border focus:ring-accent font-body resize-none rounded-lg border px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted focus:ring-2"
                    />
                  </div>

                  <SpecularButton
                    type="submit"
                    disabled={status === "loading"}
                    size="sm"
                    radius={999}
                    tint="#3d52d5"
                    tintHover="#090c9b"
                    tintOpacity={1}
                    textColor="var(--on-accent)"
                    lineColor="#fbfff1"
                    baseColor={baseColor}
                    shineSize={14}
                    shineFade={35}
                    proximity={200}
                    className="mt-1 w-full"
                  >
                    {status === "loading" ? (
                      <>
                        <SpinnerCustom />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" strokeWidth={1.75} />
                        Send Message
                      </>
                    )}
                  </SpecularButton>
                </form>
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
