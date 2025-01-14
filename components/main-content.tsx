"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MainContentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MainContent({
  className = "",
  children,
}: MainContentProps) {
  return (
    <main className={cn("flex-1 relative overflow-auto p-6", className)}>
      {children}
      <div className="absolute top-2 right-2"></div>
    </main>
  );
}
