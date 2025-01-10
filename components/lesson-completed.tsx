"use client";
import * as React from "react";
import { StarIcon, TargetIcon, ThumbsUpIcon, TimerIcon } from "lucide-react";

interface LessonCompletedProps {
  points: number;
  accuracy: number;
  duration: number;
}

export default function LessonCompleted({
  points,
  accuracy,
  duration,
}: LessonCompletedProps) {
  return (
    <div className="w-full h-full flex justify-center items-end">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex items-center justify-center">
          <div className="text-amber-500 motion-safe:animate-pulse">
            <ThumbsUpIcon className="w-32 h-32" />
          </div>
        </div>
        <h3 className="text-2xl text-amber-500 font-bold">Lesson Completed!</h3>

        <div className={"grid grid-cols-3 gap-4"}>
          <div className="motion-safe:delay-500 motion-safe:fill-mode-backwards motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom motion-safe:duration-500">
            <div className="bg-blue-500 border-blue-500 flex flex-col items-stretch justify-center overflow-hidden h-28 w-28 border-2 rounded-md">
              <div className="text-zinc-100 uppercase p-1 text-center font-bold text-xs">
                Total XP
              </div>
              <div className="flex-1 flex items-center justify-center space-x-2 text-blue-500 bg-background rounded-md ">
                <StarIcon fill="currentColor" />
                <span className="text-lg font-bold">{points}</span>
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
                <span className="text-lg font-bold">{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
