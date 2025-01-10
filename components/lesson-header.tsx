"use client";

import { XIcon } from "lucide-react";
import * as React from "react";
import Button from "./ui/button";
import ProgressBar from "./ui/progress-bar";

interface LessonHeaderProps {
  progress: number;
}

export default function LessonHeader({ progress }: LessonHeaderProps) {
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 bg-background">
      <div className="max-w-6xl mx-auto sm:px-8 px-4 sm:py-8 py-4">
        <div className="flex justify-between items-center sm:gap-4 gap-2">
          <div>
            <Button className="hover:bg-transparent -ml-3 px-2 py-1 dark:text-zinc-700 text-zinc-500 hover:text-foreground/50">
              <XIcon />
            </Button>
          </div>

          <ProgressBar value={progress} />
        </div>
      </div>
    </div>
  );
}
