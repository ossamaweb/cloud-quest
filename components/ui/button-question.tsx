"use client";

import { LessonQuestionProps } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonQuestionProps {
  text: string;
  label?: string;
  selected?: boolean;
  checked?: boolean;
  status?: LessonQuestionProps<unknown>["status"];
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ButtonQuestion({
  className,
  text,
  label,
  selected,
  checked,
  status,
  disabled,
  children,
  onClick,
}: ButtonQuestionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center gap-4 w-full border-border border-2 border-b-4 rounded-md bg-background px-4 py-3 enabled:cursor-pointer transition-all duration-150",
        "enabled:active:translate-y-0.5 enabled:active:border-b-2 enabled:active:pb-[calc(0.75rem+2px)] transition-all duration-100",
        "focus:outline-offset-2",
        selected
          ? "bg-blue-500/10 border-blue-500 dark:text-blue-500 text-blue-600"
          : "enabled:hover:bg-border/40 enabled:focus:bg-border/40",
        status === "incorrect" &&
          "bg-red-500/10 border-red-500 dark:text-red-600 text-red-700",
        status === "correct" &&
          "bg-green-600/10 border-green-600 dark:text-green-500 text-green-700",
        className
      )}
    >
      {!!label && (
        <span
          className={cn(
            "sm:inline-block hidden px-3 py-1.5 box-content border-2 border-border text-foreground/30 rounded-sm leading-2 text-sm font-bold",
            selected && "border-blue-500 dark:text-blue-500 text-blue-600",
            status === "incorrect" &&
              "border-red-500 dark:text-red-600 text-red-700",
            status === "correct" &&
              "border-green-600 dark:text-green-500 text-green-700"
          )}
        >
          {label}
        </span>
      )}

      <span className="flex-1 text-center">{text}</span>
    </button>
  );
}
