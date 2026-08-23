"use client";

import FuzzyText from "@/components/ui-custom/fuzzy-text";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col flex-1 min-h-[calc(100vh-8rem)] w-full items-center justify-center overflow-x-clip px-6 sm:px-12">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize="clamp(4rem, 18vw, 15rem)"
        fontWeight={900}
        color="#ff0000"
        className="max-w-full"
      >
        500
      </FuzzyText>

      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize="clamp(2rem, 8vw, 6rem)"
        fontWeight={900}
        color="#ff0000"
        className="mt-2 max-w-full"
      >
        error
      </FuzzyText>
    </main>
  );
}
