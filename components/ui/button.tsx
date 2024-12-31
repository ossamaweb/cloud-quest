import { cn } from "@/lib/utils";
import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  className,
  active,
  disabled,
  children,

  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-start space-x-1 uppercase tracking-wide font-bold rounded-md border-2 border-transparent px-4 py-2 cursor-pointer transition-colors duration-150",
        active
          ? "border-primary/30 bg-primary/10 text-primary"
          : "enabled:hover:bg-accent",
        "disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
