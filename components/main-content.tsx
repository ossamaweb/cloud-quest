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
      <div className="space-y-24 my-24">
        <ModuleContainer />
        <ModuleContainer />
        <ModuleContainer />
        <ModuleContainer />
      </div>
      <div className="absolute top-2 right-2">
        <ThemeToggle />
      </div>
    </main>
  );
}
