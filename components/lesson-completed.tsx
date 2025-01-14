"use client";
import * as React from "react";
import {
  CircleCheckBigIcon,
  RefreshCcwDotIcon,
  StarIcon,
  TargetIcon,
  TimerIcon,
} from "lucide-react";
import { calcuateLessonFinalPoints, formatTimeWithHours } from "@/lib/utils";

interface LessonCompletedProps {
  points: number;
  accuracy: number;
  duration: number;
  repeated: boolean;
}

export default function LessonCompleted({
  points,
  accuracy,
  duration,
  repeated,
}: LessonCompletedProps) {
  return (
    <div className="w-full h-full flex justify-center items-end sm:pb-12 pb-6">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex items-center justify-center">
          <div className="text-amber-500 motion-safe:animate-spin motion-safe:repeat-1">
            {repeated ? (
              <RefreshCcwDotIcon className="w-32 h-32" />
            ) : (
              <CircleCheckBigIcon className="w-32 h-32" />
            )}
          </div>
        </div>
        <div className="space-y-2 flex flex-col items-center justify-center">
          <h3 className="text-2xl text-amber-500 font-bold">
            {repeated ? "Lesson Reviewed!" : "Lesson Completed!"}
          </h3>
          <p className="text-lg font-medium">
            {repeated ? "Practice makes perfect." : "Good job"}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="motion-safe:delay-500 motion-safe:fill-mode-backwards motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom motion-safe:duration-500">
            <div className="bg-blue-500 border-blue-500 flex flex-col items-stretch justify-center overflow-hidden h-28 w-28 border-2 rounded-md">
              <div className="text-zinc-100 uppercase p-1 text-center font-bold text-xs">
                Total XP
              </div>
              <div className="flex-1 flex items-center justify-center space-x-2 text-blue-500 bg-background rounded-md ">
                <StarIcon fill="currentColor" />
                <span className="text-lg font-bold">
                  {calcuateLessonFinalPoints(points, repeated)}
                </span>
              </div>
            </div>
          </div>

          <div className="motion-safe:delay-1000 motion-safe:fill-mode-backwards motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom motion-safe:duration-500">
            <div className="bg-green-500 border-green-500 flex flex-col items-stretch justify-center overflow-hidden h-28 w-28 border-2 rounded-md">
              <div className="text-zinc-100 uppercase p-1 text-center font-bold text-xs">
                Accuracy
              </div>
              <div className="flex-1 flex items-center justify-center space-x-2 text-green-500 bg-background rounded-md ">
                <TargetIcon />
                <span className="text-lg font-bold">{accuracy}%</span>
              </div>
            </div>
          </div>

          <div className="motion-safe:delay-1500 motion-safe:fill-mode-backwards motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom motion-safe:duration-500">
            <div className="bg-amber-500 border-amber-500 flex flex-col items-stretch justify-center overflow-hidden h-28 w-28 border-2 rounded-md">
              <div className="text-zinc-100 uppercase p-1 text-center font-bold text-xs">
                Duration
              </div>
              <div className="flex-1 flex items-center justify-center space-x-2 text-amber-500 bg-background rounded-md ">
                <TimerIcon />
                <span className="text-lg font-bold">
                  {formatTimeWithHours(duration)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
