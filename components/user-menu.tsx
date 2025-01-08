"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { ZapIcon, StarIcon } from "lucide-react";
import Button from "./ui/button";
import { Course, User } from "@/lib/graphql/API";

interface UserMenuProps {
  course: Omit<Course, "__typename"> | null;
  streak: number | null;
  points: number | null;
  className?: string;
}

export default function UserMenu({
  className = "",
  course,
  points = 0,
  streak = 0,
}: UserMenuProps) {
  return (
    <ul className={cn("space-x-2 w-full flex justify-between", className)}>
      <li>
        <Button className="text-primary font-bold">
          {course?.title?.slice(0, 3)}
        </Button>
      </li>
      <li>
        <Button className="text-amber-300 font-bold">
          <ZapIcon fill="currentColor" />
          <span>{streak}</span>
        </Button>
      </li>
      <li>
        <Button className="text-blue-500 font-bold">
          <StarIcon fill="currentColor" />
          <span>{points}</span>
        </Button>
      </li>
    </ul>
  );
}
