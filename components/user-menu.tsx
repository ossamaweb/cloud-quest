"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { FlameIcon, StarIcon } from "lucide-react";
import Button from "./ui/button";
import { UserWithStats } from "@/lib/types";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import clsx from "clsx";
import { title } from "process";
import ButtonGame from "./ui/button-game";

interface UserMenuProps {
  currentUser: UserWithStats;
  className?: string;
}

export default function UserMenu({
  className = "",
  currentUser,
}: UserMenuProps) {
  const streakCount = React.useMemo(() => {
    if (!currentUser.stats.lastStreakAt) {
      return currentUser.stats?.streak;
    }
    const lastStreak = new Date(currentUser.stats.lastStreakAt);
    const now = new Date();
    const diff = now.getTime() - lastStreak.getTime();

    const isWithin24Hours = diff < 24 * 60 * 60 * 1000;
    return isWithin24Hours ? currentUser.stats?.streak : 0; // reset streak if more than 24 hours has passed
  }, [currentUser.stats?.lastStreakAt, currentUser.stats?.streak]);

  return (
    <ul className={cn("space-x-2 w-full flex justify-between", className)}>
      <li>
        <Popover>
          <PopoverTrigger>
            <Button className="text-primary font-bold">
              {currentUser.courses[0]?.course?.title.slice(0, 3)}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="cursor-default">
              <h4 className="font-bold uppercase text-muted-foreground">
                My Courses
              </h4>
              <p className="text-sm mt-2 font-bold">
                {currentUser.courses[0]?.course?.title}
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </li>
      <li>
        <Popover>
          <PopoverTrigger>
            <Button className="text-amber-500 font-bold">
              <FlameIcon fill="currentColor" />
              <span>{streakCount}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="cursor-default">
              <h4 className="font-bold uppercase text-muted-foreground">
                Streak
              </h4>
              <p className="text-sm mt-2 font-bold">{streakCount} Day streak</p>
            </div>
          </PopoverContent>
        </Popover>
      </li>
      <li>
        <Popover>
          <PopoverTrigger>
            <Button className="text-blue-500 font-bold">
              <StarIcon fill="currentColor" />
              <span>{currentUser.stats?.points ?? 0}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="cursor-default">
              <h4 className="font-bold uppercase text-muted-foreground">
                Score
              </h4>
              <p className="text-sm mt-2 font-bold">
                {currentUser.stats?.points ?? 0} Total XP
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </li>
    </ul>
  );
}
