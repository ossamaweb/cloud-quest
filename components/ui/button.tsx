import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  className,
  active,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "uppercase tracking-wide font-medium rounded-md border-2 border-transparent px-4 py-2 cursor-pointer transition-colors duration-150",
        className,
        active
          ? "border-primary/30 bg-primary/10 text-primary"
          : "hover:bg-accent"
      )}
    >
      {children}
    </button>
  );
}
