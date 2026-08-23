export function Footer() {
  return (
    <footer className="bg-accent/10 w-full px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-logo text-xl text-text-primary sm:text-3xl">
          SAHARIER OMI
        </span>

        <p className="font-body max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
          Thanks for taking the time to explore my portfolio. I hope you enjoyed
          the projects — feel free to reach out, I&apos;d love to connect.
        </p>

        <div className="border-border w-full max-w-sm border-t" />

        <p className="font-body text-xs text-text-muted">
          Saharier Omi © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
