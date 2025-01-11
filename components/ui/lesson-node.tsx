"use client";

import { cn, getLessonNodeTranslation } from "@/lib/utils";
import * as React from "react";
import { CheckIcon, Star } from "lucide-react";
import IconCloud from "./icon-cloud";
import { UserLessonCompletionCreateType } from "@/lib/types";

interface LessonNodeProps {
  index: number;
  id: string | null;
  slug: string;
  title: string;
  content: string;
  total: number;
  inverse: boolean;
  current?: boolean;
  completed?: boolean;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, slug: string) => void;
}

export default function LessonNode({
  className,
  index,
  slug,
  title,
  content,
  total,
  inverse = false,
  current = false,
  completed = false,
  onClick,
}: LessonNodeProps) {
  const translationStyle = React.useMemo(() => {
    return getLessonNodeTranslation(index, total, inverse);
  }, [index, inverse, total]);

  return (
    <button
      id={current ? "currentLessonNode" : undefined}
      type="button"
      title={title}
      style={translationStyle}
      onClick={(e) => (current || completed ? onClick(e, slug) : null)}
      className={cn(
        "relative text-left group flex items-center justify-center w-24 h-24",
        className
      )}
    >
      <div className="absolute inset-0">
        <IconCloud
          className={cn(
            "absolute -bottom-1.5 -left-1",
            completed || current
              ? "text-primary-darker"
              : "text-zinc-400 dark:text-zinc-800"
          )}
        />
        <IconCloud
          className={cn(
            "absolute text-primary transition-all duration-100",
            completed || current
              ? "text-primary group-hover:translate-y-0.5 group-hover:-translate-x-0.5"
              : "text-zinc-300 dark:text-zinc-700"
          )}
        />
      </div>

      <div
        className={cn(
          "relative mt-2",
          completed &&
            "text-primary-foreground group-hover:translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-100",
          !completed && "text-zinc-400 dark:text-zinc-800",
          current && "text-zinc-200 dark:text-zinc-900"
        )}
      >
        {completed && !current ? (
          <CheckIcon strokeWidth={4} size="2rem" />
        ) : (
          <Star fill="currentColor" strokeWidth={3} size="2rem" />
        )}
      </div>

      {current && (
        <div className="absolute -top-4 motion-safe:animate-bounce  motion-safe:duration-1000 p-2 rounded-sm uppercase font-bold text-primary bg-background border-border border-2">
          Start
        </div>
      )}
    </button>
  );
}
