import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const sharpie = localFont({
  src: "../fonts/Sharpie-Variable.woff2",
  variable: "--font-sharpie",
});

const quilon = localFont({
  src: "../fonts/Quilon-Variable.woff2",
  variable: "--font-quilon",
});

const rowan = localFont({
  src: "../fonts/Rowan-Variable.woff2",
  variable: "--font-rowan",
});

export const metadata: Metadata = {
  title: "Saharier Omi — Full Stack Developer",
  description:
    "Full-Stack Developer specializing in turning real-world requirements into clean, high-performance web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        sharpie.variable,
        quilon.variable,
        rowan.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
