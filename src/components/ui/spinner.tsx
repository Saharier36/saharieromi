import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export type SpinnerProps = React.ComponentProps<typeof Loader2>;

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={cn("animate-spin", className)}
      {...props}
    />
  );
}
