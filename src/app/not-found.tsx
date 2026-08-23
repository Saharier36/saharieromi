import FuzzyText from "@/components/ui-custom/fuzzy-text";

export default function NotFound() {
  return (
    <main className="flex flex-col flex-1 min-h-[calc(100vh-8rem)] w-full items-center justify-center overflow-x-clip px-6 sm:px-12">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize="clamp(4rem, 18vw, 15rem)"
        fontWeight={900}
        color="#3d52d5"
        className="max-w-full"
      >
        404
      </FuzzyText>

      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize="clamp(2rem, 8vw, 6rem)"
        fontWeight={900}
        color="#3d52d5"
        className="mt-2 max-w-full"
      >
        not found
      </FuzzyText>
    </main>
  );
}
