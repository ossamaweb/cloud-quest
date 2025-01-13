"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface BottomBarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BottomBar({
  className = "",
  children,
}: BottomBarProps) {
  return (
    <div
      className={cn(
        "sticky bottom-0 h-16 sm:hidden bg-background border-t border-input px-4 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
}
