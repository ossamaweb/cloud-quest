import { cn } from "@/lib/utils";
import * as React from "react";
import { CheckIcon, Star } from "lucide-react";
import IconCloud from "./icon-cloud";

const getModuleNodeTranslation = (index = 0, numNodes = 6, inverse = false) => {
  // Calculate rotation for arc formation
  // Spread nodes across 180 degrees (-90 to +90)
  const angleSpread = 180;
  const angleStep = angleSpread / (numNodes - 1);
  const rotation = -90 + index * angleStep;
  // Calculate radius for positioning
  const radius = 100; // Adjust this value to control arc size
  const x = radius * Math.cos((rotation * Math.PI) / 180) * (inverse ? -1 : 1);

  return {
    transform: `translateX(${x}px)`,
  } as React.CSSProperties;
};

interface ModuleNodeProps {
  index: number;
  total: number;
  inverse: boolean;
  current?: boolean;
  inactive?: boolean;
  className?: string;
}

export default function ModuleNode({
  className = "",
  index,
  total,
  inverse = false,
  current = false,
  inactive = true,
}: ModuleNodeProps) {
  return (
    <button
      type="button"
      style={getModuleNodeTranslation(index, total, inverse)}
      className="relative text-left group flex items-center justify-center w-24 h-24"
    >
      <div className="absolute inset-0">
        <IconCloud
          className={cn(
            "absolute -bottom-1.5 -left-1",
            !inactive
              ? "text-primary-darker"
              : "text-gray-400 dark:text-gray-800"
          )}
        />
        <IconCloud
          className={cn(
            "absolute text-primary transition-all",
            !inactive
              ? "text-primary group-hover:top-0.5"
              : "text-gray-300 dark:text-gray-700"
          )}
        />
      </div>
      <div
        className={cn(
          "relative mt-2",
          !inactive
            ? "text-primary-foreground"
            : "text-gray-400 dark:text-gray-800"
        )}
      >
        {!inactive ? (
          <CheckIcon strokeWidth={4} size="2rem" />
        ) : (
          <Star fill="currentColor" strokeWidth={3} size="2rem" />
        )}
      </div>
    </button>
  );
}
