"use client";

import * as React from "react";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";
import ModuleContainer from "./module-container";

interface MainContentProps {
  className?: string;
}

export default function MainContent({ className = "" }: MainContentProps) {
  return (
    <main className={cn("flex-1 relative overflow-auto p-6", className)}>
      <div className="space-y-16 mb-16">
        {[...Array(6)].map((_, index) => (
          <ModuleContainer key={index} index={index} />
        ))}
      </div>
      <div className="absolute top-2 right-2">
        <ThemeToggle />
      </div>
    </main>
  );
}
