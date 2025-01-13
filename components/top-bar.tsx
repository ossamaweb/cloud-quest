"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface TopBarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TopBar({ children, className = "" }: TopBarProps) {
  return (
    <div
      className={cn(
        "h-16 md:hidden bg-background border-b border-input px-4 flex items-center justify-stretch",
        className
      )}
    >
      {children}
    </div>
  );
}
