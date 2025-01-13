"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { FlameIcon, StarIcon } from "lucide-react";
import Button from "./ui/button";
import { UserWithStats } from "@/lib/types";

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
        <Button className="text-primary font-bold">
          {currentUser.courses[0]?.course?.title.slice(0, 3)}
        </Button>
      </li>
      <li>
        <Button className="text-amber-500 font-bold">
          <FlameIcon fill="currentColor" />
          <span>{streakCount}</span>
        </Button>
      </li>
      <li>
        <Button className="text-blue-500 font-bold">
          <StarIcon fill="currentColor" />
          <span>{currentUser.stats?.points}</span>
        </Button>
      </li>
    </ul>
  );
}
