"use client";

import { useKeyboard } from "@/hooks/use-keyboard";
import { LessonQuestionProps } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonQuestionProps {
  text?: string;
  keyboardShortcut?: string;
  selected?: boolean;
  status?: LessonQuestionProps<unknown>["status"];
  className?: string;
  disabled?: boolean;
  passive?: boolean;
  muted?: boolean;
  tabIndex?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function ButtonQuestion({
  className,
  tabIndex,
  text,
  keyboardShortcut,
  selected,
  status,
  disabled,
  passive,
  muted,
  children,
  onClick,
}: ButtonQuestionProps) {
  const { registerShortcut, unregisterShortcut } = useKeyboard();

  React.useEffect(() => {
    if (keyboardShortcut && onClick) {
      registerShortcut(keyboardShortcut, onClick);
      return () => unregisterShortcut(keyboardShortcut);
    }
  }, [keyboardShortcut, onClick, registerShortcut, unregisterShortcut]);

  return (
    <div
      className={cn(
        "relative bg-background",
        selected && "motion-safe:animate-answer-scale-in",
        status === "incorrect" && "motion-safe:animate-answer-scale-in-2",
        status === "correct" && "motion-safe:animate-answer-scale-in-2"
      )}
    >
      {/* Bottom layer for 3D effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-sm bg-border translate-y-0.5",
          "transition-colors duration-150 ease-in-out",
          selected && "bg-blue-400 dark:bg-blue-500",
          status === "incorrect" && "bg-red-500 dark:bg-red-600",
          status === "correct" && "bg-green-500 dark:bg-green-700"
        )}
      />
      {/* Main button */}
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        tabIndex={keyboardShortcut ? -1 : tabIndex}
        className={cn(
          "relative transition-colors duration-150 ease-in-out select-none",
          "flex items-center gap-4 w-full bg-background text-foreground border-border border-2 rounded-sm px-4 py-3",
          "enabled:cursor-pointer enabled:active:translate-y-0.5",
          !selected &&
            "enabled:active:bg-zinc-50 dark:enabled:active:bg-zinc-900",
          !passive &&
            !selected &&
            "enabled:hover:bg-zinc-50 dark:enabled:hover:bg-zinc-900 enabled:focus:bg-zinc-50 dark:enabled:focus:bg-zinc-900",
          keyboardShortcut ? "focus:outline-none" : "focus:outline-offset-2",
          selected &&
            "bg-zinc-50 dark:bg-zinc-900 border-blue-400 dark:border-blue-500 dark:text-blue-500 text-blue-600",
          status === "incorrect" &&
            "bg-zinc-50 dark:bg-zinc-900 border-red-500 dark:border-red-600 dark:text-red-500 text-red-700",
          status === "correct" &&
            "bg-zinc-50 dark:bg-zinc-900 border-green-500 dark:border-green-700 dark:text-green-500 text-green-700",
          selected && !status && "[&>svg]:text-blue-600",
          !selected && !status && "[&>svg]:text-blue-400 ",
          muted && "text-foreground/20",
          className
        )}
      >
        {!!keyboardShortcut && (
          <span
            className={cn(
              "transition-all duration-150 ease-in-out",
              "sm:inline-block hidden px-3 py-1.5 box-content border-2 rounded-sm leading-2 text-sm font-bold border-border text-foreground/30",
              selected &&
                "border-blue-400 dark:border-blue-500 dark:text-blue-500 text-blue-600",
              status === "incorrect" &&
                "border-red-500 dark:border-red-600 dark:text-red-500 text-red-600",
              status === "correct" &&
                "border-green-500 dark:border-green-700 dark:text-green-500 text-green-600",
              muted && "text-foreground/15 border-border/80"
            )}
          >
            {keyboardShortcut}
          </span>
        )}
        {!!text && (
          <span className="flex-1 text-center line-clamp-2">{text}</span>
        )}
        {children}
      </button>
    </div>
  );
}
