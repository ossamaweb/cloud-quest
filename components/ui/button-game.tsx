"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Button, { ButtonProps } from "./button";
import { LessonQuestionProps } from "@/lib/interfaces";

interface ButtonGameProps extends ButtonProps {
  status?: LessonQuestionProps<unknown>["status"];
}
export default function ButtonGame({
  children,
  className,
  status,
  onClick,
  ...rest
}: ButtonGameProps) {
  return (
    <Button
      {...rest}
      onClick={onClick}
      className={cn(
        "border-transparent border-b-4 text-background w-40 py-2 inline-flex items-center justify-center select-none",
        "active:translate-y-0.5 active:border-b-2 active:pb-[calc(0.5rem+2px)]",
        "enabled:transition-all enabled:duration-100 disabled:bg-muted disabled:border-b-muted disabled:text-muted-foreground",
        "bg-green-600 border-b-green-700 enabled:hover:bg-green-500",
        status === "incorrect" &&
          "bg-red-500 border-b-red-600 enabled:hover:bg-red-400",

        className
      )}
    >
      {children}
    </Button>
  );
}
