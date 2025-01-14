"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface SidebarLeftProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SidebarLeft({
  className = "",
  children,
}: SidebarLeftProps) {
  return (
    <div
      className={cn(
        "sticky top-0 lg:w-64 hidden sm:block bg-background border-r border-muted h-screen p-4",
        className
      )}
    >
      <div className="space-y-6">
        <div className="text-2xl font-bold px-4 py-2 dark:text-primary text-blue-950 select-none">
          <span className="hidden lg:inline-block">CloudQuest</span>
          <span className="lg:hidden inline-block">CQ</span>
        </div>

        {children}
      </div>
    </div>
  );
}
