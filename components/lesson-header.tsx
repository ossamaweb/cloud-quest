"use client";

import { XIcon } from "lucide-react";
import * as React from "react";
import Button from "./ui/button";
import ProgressBar from "./ui/progress-bar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import ButtonGame from "./ui/button-game";
import { useRouter } from "next/router";
import { useNavigationGuard } from "next-navigation-guard";

interface LessonHeaderProps {
  progress: number;
}

export default function LessonHeader({ progress }: LessonHeaderProps) {
  const router = useRouter();
  const navGuard = useNavigationGuard({ enabled: progress > 0 });

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 bg-background">
      <div className="max-w-6xl mx-auto sm:px-8 px-4 sm:py-8 py-4">
        <div className="flex justify-between items-center sm:gap-4 gap-2">
          <div>
            <Button
              onClick={() => router.push("/")}
              className="hover:bg-transparent -ml-3 px-2 py-1 dark:text-zinc-700 text-zinc-500 hover:text-foreground/50"
            >
              <XIcon />
            </Button>
          </div>

          <ProgressBar value={progress} />
        </div>
      </div>

      <AlertDialog open={navGuard.active}>
        <AlertDialogContent className="space-y-8">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-bold text-xl text-foreground">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="sm:text-lg text-base font-medium">
              You&apos;ll lose your progress if you quit now
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:gap-2 gap-4">
            <ButtonGame
              className="px-8 text-sm"
              status="correct"
              onClick={navGuard.reject}
            >
              Keep Learning
            </ButtonGame>
            <ButtonGame
              className="px-8 text-sm text-red-600"
              // status="incorrect"
              onClick={navGuard.accept}
            >
              End Session
            </ButtonGame>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
