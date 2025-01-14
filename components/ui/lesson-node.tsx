"use client";

import {
  cn,
  getLessonNodeTranslation,
  getRepeatedLessonPoints,
} from "@/lib/utils";
import * as React from "react";
import { CheckIcon, Star } from "lucide-react";
import IconCloud from "./icon-cloud";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import ButtonGame from "./button-game";

import clsx from "clsx";

interface LessonNodeProps {
  index: number;
  id: string | null;
  slug: string;
  title: string;
  description: string;
  points: number;
  total: number;
  inverse: boolean;
  current?: boolean;
  completed?: boolean;
  className?: string;
  onClick: (slug: string) => void;
}

export default function LessonNode({
  className,
  index,
  slug,
  title,
  description,
  points,
  total,
  inverse = false,
  current = false,
  completed = false,
  onClick,
}: LessonNodeProps) {
  const { translationStyle, adjustedPoints } = React.useMemo(() => {
    return {
      adjustedPoints: completed ? getRepeatedLessonPoints(points) : points,
      translationStyle: getLessonNodeTranslation(index, total, inverse),
    };
  }, [completed, index, inverse, points, total]);

  const handleOnClick = React.useCallback(() => {
    if (current || completed) {
      onClick(slug);
    }
  }, [completed, current, onClick, slug]);

  return (
    <Popover>
      <PopoverTrigger
        id={current ? "currentLessonNode" : undefined}
        style={translationStyle}
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
              "absolute text-primary group-active:translate-y-1.5 group-active:-translate-x-1 transition-transform duration-100",
              completed || current
                ? "text-primary group-hover:translate-y-0.5 group-hover:-translate-x-0.5"
                : "text-zinc-300 dark:text-zinc-700"
            )}
          />
        </div>
        <div
          className={cn(
            "relative mt-2 group-active:translate-y-1.5 group-active:-translate-x-1 transition-transform duration-100",
            (completed || current) &&
              "group-hover:translate-y-0.5 group-hover:-translate-x-0.5 text-primary-foreground",
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
      </PopoverTrigger>
      <PopoverContent
        className={clsx(
          "border-transparent cursor-default",
          completed || current
            ? "bg-primary text-background"
            : "bg-zinc-200 dark:bg-zinc-600 text-zinc-500/60 dark:text-zinc-900/60"
        )}
        sticky={undefined}
        sideOffset={-5}
      >
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm mt-1">
            {completed || current
              ? description
              : "Complete all levels above to unlock this!"}
          </p>
          <div className="mt-4">
            <ButtonGame
              className="w-full text-sm enabled:text-primary disabled:text-zinc-500/60"
              onClick={handleOnClick}
              disabled={!completed && !current}
            >
              {completed
                ? `Practice +${adjustedPoints} XP`
                : current
                ? `Start +${adjustedPoints} XP`
                : "Locked"}
            </ButtonGame>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
