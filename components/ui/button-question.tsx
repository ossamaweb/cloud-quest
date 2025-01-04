"use client";

import { LessonQuestionProps } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonQuestionProps {
  text?: string;
  label?: string;
  selected?: boolean;
  status?: LessonQuestionProps<unknown>["status"];
  className?: string;
  disabled?: boolean;
  passive?: boolean;
  muted?: boolean;
  tabIndex?: number;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ButtonQuestion({
  className,
  text,
  label,
  selected,
  status,
  disabled,
  passive,
  muted,
  tabIndex,
  children,
  onClick,
}: ButtonQuestionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex}
      className={cn(
        "transition-all duration-150 select-none",
        "flex items-center gap-4 w-full border-border border-2 border-b-4 rounded-sm bg-background px-4 py-3 text-foreground font-medium enabled:cursor-pointer",
        "enabled:active:translate-y-0.5 enabled:active:border-b-2 enabled:active:pb-[calc(0.75rem+2px)]",
        "focus:outline-offset-2",
        selected &&
          "bg-blue-500/20 border-blue-300 dark:text-blue-300 text-blue-600",
        !passive &&
          !selected &&
          "enabled:hover:bg-border/40 enabled:focus:bg-border/40",
        status === "incorrect" &&
          "bg-red-500/20 border-red-300 dark:text-red-300 text-red-700",
        status === "correct" &&
          "bg-green-500/20 border-green-300 dark:text-green-300 text-green-700",
        muted && "text-foreground/20",
        className
      )}
    >
      {!!label && (
        <span
          className={cn(
            "transition-all duration-150",
            "sm:inline-block hidden px-3 py-1.5 box-content border-2 rounded-sm leading-2 text-sm font-bold border-border text-foreground/30",
            selected && "border-blue-300 dark:text-blue-400 text-blue-500",
            status === "incorrect" &&
              "border-red-300 dark:text-red-400 text-red-500",
            status === "correct" &&
              "border-green-300 dark:text-green-400 text-green-500",
            muted && "text-foreground/15 border-border/80"
          )}
        >
          {label}
        </span>
      )}
      {!!text && (
        <span className="flex-1 text-center line-clamp-2">{text}</span>
      )}
      {children}
    </button>
  );
}
