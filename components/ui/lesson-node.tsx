"use client";

import { cn, getLessonNodeTranslation } from "@/lib/utils";
import * as React from "react";
import { CheckIcon, Star } from "lucide-react";
import IconCloud from "./icon-cloud";
import { UserLessonCompletionCreateType } from "@/lib/types";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import ButtonGame from "./button-game";
import { PopoverArrow } from "@radix-ui/react-popover";
import clsx from "clsx";
import { KeyboardProvider } from "@/hooks/use-keyboard";

interface LessonNodeProps {
  index: number;
  id: string | null;
  slug: string;
  title: string;
  description: string;
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
  total,
  inverse = false,
  current = false,
  completed = false,
  onClick,
}: LessonNodeProps) {
  const translationStyle = React.useMemo(() => {
    return getLessonNodeTranslation(index, total, inverse);
  }, [index, inverse, total]);

  const handleOnClick = React.useCallback(() => {
    if (current || completed) {
      onClick(slug);
    }
  }, [completed, current, onClick, slug]);

  return (
    <Popover>
      <PopoverTrigger
        id={current ? "currentLessonNode" : undefined}
        title={title}
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
              "absolute text-primary group-hover:translate-y-1 group-hover:-translate-x-0.5 transition-transform duration-100",
              completed || current
                ? "text-primary"
                : "text-zinc-300 dark:text-zinc-700"
            )}
          />
        </div>
        <div
          className={cn(
            "relative mt-2  group-hover:translate-y-1 group-hover:-translate-x-0.5 transition-transform duration-100",
            (completed || current) && "text-primary-foreground",
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
        <KeyboardProvider>
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
                {completed ? "Practice" : current ? "Start" : "Locked"}
              </ButtonGame>
            </div>
          </div>
        </KeyboardProvider>
      </PopoverContent>
    </Popover>
  );
}
