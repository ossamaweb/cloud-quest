"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import IconCloud from "./ui/icon-cloud";
import ModuleNode from "./ui/module-node";
import { useRouter } from "next/router";

interface ModuleContainerProps {
  index: number;
  className?: string;
}

export default function ModuleContainer({
  index,
  className = "",
}: ModuleContainerProps) {
  const router = useRouter();
  const handleOnModuleNodeClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
      // Handle module node click
      console.log("Module node clicked:", id);
      router.push(`/lessons/${id}`);
    },
    [router]
  );
  return (
    <div className={cn("relative space-y-16", className)}>
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

      <div className="flex items-center flex-col gap-6">
        {Array(6)
          .fill(0)
          .map((_, nodeIndex) => (
            <ModuleNode
              key={nodeIndex}
              index={nodeIndex}
              total={6}
              inverse={index % 2 !== 0}
              current={nodeIndex === 5}
              inactive={index > 0}
              onClick={handleOnModuleNodeClick}
            />
          ))}
      </div>
    </div>
  );
}
