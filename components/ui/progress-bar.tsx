"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export default function ProgressBar({ value, className }: ProgressBarProps) {
  // Ensure value is between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cn(
        "w-full h-4 bg-muted rounded-lg overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full bg-green-500 rounded-lg",
          "motion-safe:transition-all motion-safe:duration-500"
        )}
        style={{ width: `${clampedValue}%` }}
      >
        <div className="absolute left-1 top-1 right-1 h-1 bg-white/20" />
      </div>
    </div>
  );
}
