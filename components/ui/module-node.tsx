"use client";

import { cn, getModuleNodeTranslation } from "@/lib/utils";
import * as React from "react";
import { CheckIcon, Star } from "lucide-react";
import IconCloud from "./icon-cloud";

interface ModuleNodeProps {
  index: number;
  total: number;
  inverse: boolean;
  current?: boolean;
  inactive?: boolean;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export default function ModuleNode({
  className = "",
  index,
  total,
  inverse = false,
  current = false,
  inactive = true,
  onClick,
}: ModuleNodeProps) {
  return (
    <button
      id={current && !inactive ? "currentNode" : undefined}
      type="button"
      style={getModuleNodeTranslation(index, total, inverse)}
      className="relative text-left group flex items-center justify-center w-24 h-24"
      onClick={(e) => (inactive ? null : onClick(e, `lesson-${index}`))}
    >
      <div className="absolute inset-0">
        <IconCloud
          className={cn(
            "absolute -bottom-1.5 -left-1",
            !inactive && !current
              ? "text-primary-darker"
              : "text-gray-400 dark:text-gray-800"
          )}
        />
        <IconCloud
          className={cn(
            "absolute text-primary transition-all duration-100",
            !inactive && !current
              ? "text-primary"
              : "text-gray-300 dark:text-gray-700",
            !inactive &&
              "group-hover:translate-y-1 group-hover:-translate-x-0.5"
          )}
        />
      </div>

      <div
        className={cn(
          "relative mt-2",
          !inactive &&
            "group-hover:translate-y-1 group-hover:-translate-x-0.5 transition-all duration-100",
          !inactive && !current
            ? "text-primary-foreground"
            : "text-gray-400 dark:text-gray-800"
        )}
      >
        {!inactive && !current ? (
          <CheckIcon strokeWidth={4} size="2rem" />
        ) : (
          <Star fill="currentColor" strokeWidth={3} size="2rem" />
        )}
      </div>

      {current && !inactive && (
        <div className="absolute -top-4 motion-safe:animate-bounce  motion-safe:duration-1000 p-2 rounded-sm uppercase font-bold text-primary bg-background border-border border-2">
          Start
        </div>
      )}
    </button>
  );
}
