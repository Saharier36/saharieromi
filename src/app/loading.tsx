import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <main className="flex flex-1 min-h-[calc(100vh-8rem)] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-muted-foreground">
        <Spinner className="size-8 text-primary" />
        <span className="text-sm font-medium tracking-widest uppercase">
          Loading...
        </span>
      </div>
    </main>
  );
}
