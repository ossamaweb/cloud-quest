"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import IconCloud from "./ui/icon-cloud";

interface LessonLoadingProps {
  className?: string;
  tip?: string;
}

export default function LessonLoading({
  tip,
  className = "",
}: LessonLoadingProps) {
  return (
    <div
      className={cn(
        "h-screen w-screen flex flex-col items-center justify-center gap-2 bg-background",
        className
      )}
    >
      <div className="w-24 h-24 text-primary animate-pulse">
        <IconCloud />
      </div>
      <div className="uppercase font-bold text-foreground/30 text-center">
        Loading...
      </div>
      <div className="text-foreground/70 max-w-64 text-center">{tip}</div>
    </div>
  );
}
