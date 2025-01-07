"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface BottomBarProps {
  className?: string;
}

export default function BottomBar({ className = "" }: BottomBarProps) {
  return (
    <div
      className={cn(
        "h-16 sm:hidden bg-background border-t border-input px-4 flex items-center justify-between",
        className
      )}
    >
      <div className="text-sm text-muted-foreground">
        © 2024 Your Company. All rights reserved.
      </div>
      <nav className="flex space-x-4 text-sm">
        <a href="#" className="hover:text-primary">
          Privacy
        </a>
        <a href="#" className="hover:text-primary">
          Terms
        </a>
        <a href="#" className="hover:text-primary">
          Help
        </a>
      </nav>
    </div>
  );
}
