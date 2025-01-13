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
          <span>{currentUser.stats?.streak}</span>
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
