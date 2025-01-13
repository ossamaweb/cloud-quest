"use client";
import * as React from "react";
import { FlameIcon } from "lucide-react";

interface LessonStreakProps {
  count: number;
}

export default function LessonStreak({ count }: LessonStreakProps) {
  return (
    <div className="w-full h-full flex justify-center items-end sm:pb-12 pb-6">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex items-center justify-center">
          <div className="relative z-10 text-amber-500 motion-safe:animate-bounce">
            <FlameIcon className="w-48 h-48" />
          </div>
        </div>
        <div className="gap-2 flex flex-col items-center justify-center">
          <h3 className="text-9xl text-amber-500 font-bold">{count}</h3>
          <p className="text-2xl text-amber-500 font-bold">day streak</p>
        </div>
      </div>
    </div>
  );
}
