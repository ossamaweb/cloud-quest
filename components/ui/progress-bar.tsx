"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export default function ProgressBar({ value, className }: ProgressBarProps) {
  // Ensure value is between 0-100 and convert to negative percentage for transform
  const negativePercentage = -1 * (100 - Math.max(0, Math.min(100, value)));
  return (
    <div
      className={cn(
        "w-full h-4 bg-muted rounded-lg overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full bg-green-500 rounded-lg",
          "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-elastic-2"
        )}
        style={{ transform: `translateX(${negativePercentage}%)` }}
      >
        <div className="absolute left-1 top-1 right-1 h-1 bg-white/20" />
      </div>
    </div>
  );
}
