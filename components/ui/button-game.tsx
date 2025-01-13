"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Button, { ButtonProps } from "./button";
import { LessonQuestionProps } from "@/lib/interfaces";
import { useKeyboard } from "@/hooks/use-keyboard";

interface ButtonGameProps extends ButtonProps {
  keyboardShortcut?: string;
  status?: LessonQuestionProps<unknown>["status"];
  onClick?: () => void;
}
export default function ButtonGame({
  children,
  className,
  status,
  keyboardShortcut,
  onClick,
  ...rest
}: ButtonGameProps) {
  const { registerShortcut, unregisterShortcut } = useKeyboard();

  React.useEffect(() => {
    if (keyboardShortcut && !rest.disabled && onClick) {
      registerShortcut(keyboardShortcut, onClick);
      return () => unregisterShortcut(keyboardShortcut);
    }
  }, [
    keyboardShortcut,
    rest.disabled,
    onClick,
    registerShortcut,
    unregisterShortcut,
  ]);

  return (
    <div className="relative rounded-md">
      {/* Bottom layer for 3D effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-md translate-y-1",
          !rest.disabled && "bg-gray-300",
          status === "correct" && "bg-green-700",
          status === "incorrect" && "bg-red-600"
        )}
      />
      <Button
        {...rest}
        tabIndex={keyboardShortcut ? -1 : rest.tabIndex}
        onClick={onClick}
        className={cn(
          "relative border-0 text-background inline-flex items-center justify-center select-none",
          "enabled:cursor-pointer enabled:active:translate-y-1",
          "enabled:transition-all enabled:duration-100 disabled:bg-muted disabled:text-muted-foreground",
          "bg-gray-50 enabled:hover:bg-gray-100",
          status === "correct" && "bg-green-600 enabled:hover:bg-green-500",
          status === "incorrect" && "bg-red-500 enabled:hover:bg-red-400",
          keyboardShortcut && "focus:outline-none",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
