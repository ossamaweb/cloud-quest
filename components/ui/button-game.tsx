import { cn } from "@/lib/utils";
import * as React from "react";
import Button, { ButtonProps } from "./button";

interface ButtonGameProps extends ButtonProps {
  incorrect?: boolean;
}
export default function ButtonGame({
  children,
  className,
  incorrect,
  ...rest
}: ButtonGameProps) {
  return (
    <Button
      {...rest}
      className={cn(
        "border-transparent border-b-4 text-background w-40 inline-flex items-center justify-center disabled:bg-muted disabled:border-b-muted disabled:text-muted-foreground/30",
        "active:translate-y-0.5 active:border-b transition-all duration-100",
        incorrect
          ? "bg-red-500 border-b-red-600 enabled:hover:bg-red-400"
          : "bg-green-500 border-b-green-600 enabled:hover:bg-green-400",
        className
      )}
    >
      {children}
    </Button>
  );
}
