"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ModuleContainerProps {
  className?: string;
}

export default function ModuleContainer({
  className = "",
}: ModuleContainerProps) {
  return (
    <div className={cn("relative space-y-24", className)}>
      {/* <div className="absolute top-0 w-full rounded-lg p-4 bg-primary">
        <div className="text-sm uppercase text-muted/70 font-semibold">
          Module 4
        </div>
        <h2 className="text-2xl font-semibold text-primary-foreground">
          Module name
        </h2>
      </div> */}

      <div className="relative text-center">
        <div className="absolute top-1/2 h-0.5 w-full bg-border rounded-md" />
        <h2 className="relative px-4 inline-block text-lg bg-background font-bold text-muted-foreground/50 text-center">
          Module name
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Example content cards */}
        <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Card Title 1</h2>
          <p className="text-muted-foreground">
            This is a sample card content with placeholder text.
          </p>
        </div>
        <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
          <p className="text-muted-foreground">
            This is a sample card content with placeholder text.
          </p>
        </div>
        <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Card Title 3</h2>
          <p className="text-muted-foreground">
            This is a sample card content with placeholder text.
          </p>
        </div>
      </div>
    </div>
  );
}
