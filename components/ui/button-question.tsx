"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonQuestionProps {
  text: string;
  label?: string;
  answered?: boolean;
  checked?: boolean;
  status?: "correct" | "incorrect";
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ButtonQuestion({
  className,
  text,
  label,
  answered,
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
        "flex items-center gap-4 w-full border-border border-2 border-b-4 rounded-md bg-transparent enabled:hover:bg-border/40 px-4 py-3 enabled:cursor-pointer transition-colors duration-150",
        "enabled:active:translate-y-0.5 enabled:active:border-b-2 transition-all duration-100",
        answered && "border-primary text-primary bg-border/40",
        checked && status === "incorrect" && "border-red-500 text-red-500",
        checked && status === "correct" && "border-green-500 text-green-500",
        className
      )}
    >
      {!!label && (
        <span
          className={cn(
            "px-3 py-1.5 box-content border-2 border-border rounded-sm leading-2 text-sm text-border font-bold",
            answered && "border-primary text-primary",
            checked && status === "incorrect" && "border-red-500 text-red-500",
            checked && status === "correct" && "border-green-500 text-green-500"
          )}
        >
          {label}
        </span>
      )}

      <span className="flex-1 text-center">{text}</span>
    </button>
  );
}
